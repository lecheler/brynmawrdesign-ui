import React from "react";
import { type JSX } from "react";

import { cx } from "../../utils/classNames";
import "./Card.css";

type CardVariant = "elevated" | "outlined" | "subtle";
type CardTone = "neutral" | "danger" | "success";
type CardPadding = "sm" | "md" | "lg";

type AsProp = keyof JSX.IntrinsicElements;

export type CardProps<T extends AsProp = "div"> = {
  as?: T;
  variant?: CardVariant;
  tone?: CardTone;
  padding?: CardPadding;
  interactive?: boolean;
} & Omit<React.ComponentPropsWithoutRef<T>, "as">;

export function CardRoot<T extends AsProp = "div">({
  as,
  variant = "elevated",
  tone = "neutral",
  padding = "md",
  interactive,
  className,
  ...props
}: CardProps<T>) {
  const Component = (as || "div") as React.ElementType;

  return (
    <Component
      className={cx("bmd-card", className)}
      data-variant={variant}
      data-tone={tone}
      data-padding={padding}
      data-interactive={interactive ? "true" : undefined}
      {...props}
    />
  );
}

/* Slots */

export type CardSectionProps = React.HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardSectionProps) {
  return <div className={cx("bmd-card__header", className)} {...props} />;
}

export function CardBody({ className, ...props }: CardSectionProps) {
  return <div className={cx("bmd-card__body", className)} {...props} />;
}

export function CardFooter({ className, ...props }: CardSectionProps) {
  return <div className={cx("bmd-card__footer", className)} {...props} />;
}

/**
 * Compound component export:
 * Card.Header / Card.Body / Card.Footer
 */
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
