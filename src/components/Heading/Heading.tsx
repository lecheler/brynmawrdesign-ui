import * as React from "react";
import "./Heading.css";

// 1. Lock down exactly what levels and tags your system officially supports
export type HeadingLevel = 1 | 2 | 3;
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// 2. Standard HTML inheritance. No generic omissions or omissions formulas needed!
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel; // Controls the visual size token matching your CSS
  as?: HeadingTag; // Controls the literal HTML tag printed to the browser DOM
  children: React.ReactNode;
}

export function Heading({
  level = 2,
  as,
  children,
  className = "",
  ...props
}: HeadingProps) {
  // 3. Fall back to your native layout mapping logic
  const Comp = as || (`h${level}` as HeadingTag);

  return (
    <Comp className={`bmd-heading ${className}`} data-level={level} {...props}>
      {children}
    </Comp>
  );
}
