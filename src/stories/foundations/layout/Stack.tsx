// src/foundations/layout/Stack.tsx
import * as React from "react";
import "./layout.css";

// --- polymorphic helper types (copy-paste same pattern as typography) ---
type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicProps<E extends React.ElementType, P> = React.PropsWithChildren<
  P & AsProp<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
// -----------------------------------------------------------------------

type StackGap = 1 | 2 | 3 | 4;

type StackOwnProps = {
  /**
   * Gap between children, mapped to spacing tokens.
   * 1 → --space-1, 2 → --space-2, etc.
   */
  gap?: StackGap;
};

export type StackProps<E extends React.ElementType = "div"> = PolymorphicProps<
  E,
  StackOwnProps
>;

export function Stack<E extends React.ElementType = "div">({
  as,
  gap = 3,
  style,
  ...props
}: StackProps<E>) {
  const Comp = (as || "div") as React.ElementType;

  return <Comp className="bmd-Stack" data-gap={gap} style={style} {...props} />;
}
