// src/foundations/typography/Heading.tsx
import * as React from "react";
import { type JSX } from "react";
import "./Typography.css";

// --- reuse the same helper types (or import them) ---
type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicProps<E extends React.ElementType, P> = React.PropsWithChildren<
  P & AsProp<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
// -----------------------------------------------------

type HeadingLevel = 1 | 2 | 3;

type HeadingOwnProps = {
  /**
   * Visual + semantic heading level (controls default tag + size).
   */
  level?: HeadingLevel;
};

export type HeadingProps<E extends React.ElementType = "h2"> = PolymorphicProps<
  E,
  HeadingOwnProps
>;

export function Heading<E extends React.ElementType = "h2">({
  level = 2,
  as,
  ...props
}: HeadingProps<E>) {
  const defaultTag = `h${level}` as keyof JSX.IntrinsicElements;
  const Comp = (as || defaultTag) as React.ElementType;

  return <Comp className="bmd-heading" data-level={level} {...props} />;
}
