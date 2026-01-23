// src/foundations/layout/Inline.tsx
import * as React from "react";
import "./Layout.css";

// --- polymorphic helper types (same pattern as Stack) ---
type AsProp<E extends React.ElementType> = {
  as?: E;
};

type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

type PolymorphicProps<E extends React.ElementType, P> = React.PropsWithChildren<
  P & AsProp<E>
> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
// ----------------------------------------------------------------

type InlineGap = 1 | 2 | 3 | 4;
type InlineAlign = "flex-start" | "center" | "flex-end" | "baseline";

type InlineOwnProps = {
  /**
   * Gap between children, mapped to spacing tokens.
   */
  gap?: InlineGap;

  /**
   * Vertical alignment of children.
   */
  align?: InlineAlign;

  /**
   * Allow children to wrap onto multiple lines.
   */
  wrap?: boolean;
};

export type InlineProps<E extends React.ElementType = "div"> = PolymorphicProps<
  E,
  InlineOwnProps
>;

export function Inline<E extends React.ElementType = "div">({
  as,
  gap = 2,
  align = "center",
  wrap = false,
  style,
  ...props
}: InlineProps<E>) {
  const Comp = (as || "div") as React.ElementType;

  return (
    <Comp
      className="bmd-Inline"
      data-gap={gap}
      style={{
        alignItems: align,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
      {...props}
    />
  );
}
