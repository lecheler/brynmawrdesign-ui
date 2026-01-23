import React from "react";

import { cx } from "../../utils/classNames.ts";
import "./Button.css";

export type ButtonVariant = "solid" | "outlined" | "soft" | "subtle" | "ghost";
export type ButtonTone =
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "neutral";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  label,
  variant = "solid",
  tone = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      data-variant={variant}
      data-tone={tone}
      type="button"
      className={cx("bmd-button", `bmd-button--${size}`)}
      {...props}
    >
      {label}
    </button>
  );
};
