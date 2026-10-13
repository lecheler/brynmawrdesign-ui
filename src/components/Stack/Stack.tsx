import * as React from "react";
import "./Stack.css";

export type StackGap = 0 | 1 | 2 | 3 | 4 | 6 | 8;
export type StackAlign = "start" | "center" | "end" | "stretch";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: StackGap; // Multiplying layout space gap
  align?: StackAlign; // Horizontal item alignment
  children: React.ReactNode;
}

export function Stack({
  gap = 2,
  align = "stretch",
  children,
  className = "",
  ...props
}: StackProps) {
  return (
    <div
      className={`bmd-stack ${className}`}
      data-gap={gap}
      data-align={align}
      {...props}
    >
      {children}
    </div>
  );
}
