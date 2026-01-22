// src/foundations/typography/Text.tsx
import * as React from "react";
import "./Typography.css";

// --- polymorphic helper (or import from a shared file) ---
type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicProps<E extends React.ElementType, P> = React.PropsWithChildren<
  P & AsProp<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
// ---------------------------------------------------------

type TextSize = "sm" | "md" | "lg";

type TextOwnProps = {
  /**
   * Visual size of the text.
   */
  size?: TextSize;
};

export type TextProps<E extends React.ElementType = "p"> = PolymorphicProps<
  E,
  TextOwnProps
>;

export function Text<E extends React.ElementType = "p">({
  as,
  size = "md",
  ...props
}: TextProps<E>) {
  const Comp = (as || "p") as React.ElementType;

  return <Comp className="bmd-Text" data-size={size} {...props} />;
}
