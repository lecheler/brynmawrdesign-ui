import * as React from "react";
import "./Inline.css";

export type InlineGap = 0 | 1 | 2 | 3 | 4 | 6 | 8;
export type InlineJustify = "start" | "center" | "end" | "space-between";
export type InlineAlign = "start" | "center" | "end" | "baseline";

export interface InlineProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: InlineGap;
  justify?: InlineJustify;
  align?: InlineAlign;
  noWrap?: boolean; // Toggle true to force items to clip instead of wrap
  children: React.ReactNode;
}

export function Inline({
  gap = 2,
  justify = "start",
  align = "center",
  noWrap = false,
  children,
  className = "",
  ...props
}: InlineProps) {
  return (
    <div
      className={`bmd-inline ${className}`}
      data-gap={gap}
      data-justify={justify}
      data-align={align}
      data-nowrap={noWrap || undefined}
      {...props}
    >
      {children}
    </div>
  );
}
