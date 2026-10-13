import * as React from "react";
import "./Text.css";

// 1. Enforce the exact text styling categories your design tokens support
export type TextVariant = "body" | "lead" | "caption" | "code";

// 2. Enforce standard, logical HTML block/inline wrapper tag choices
export type TextTag = "p" | "span" | "div" | "span" | "code" | "small";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant; // Binds directly to your Layer 2 semantic font rules
  as?: TextTag; // Controls the underlying HTML layout tag node
  bold?: boolean; // Quick boolean flag for custom font emphasis
  children: React.ReactNode;
}

export function Text({
  variant = "body",
  as,
  bold = false,
  children,
  className = "",
  ...props
}: TextProps) {
  // 3. Fallback logic: standard paragraphs for body/lead, small tags for captions, etc.
  const defaultTag: TextTag =
    variant === "caption" ? "small" : variant === "code" ? "code" : "p";
  const Comp = as || defaultTag;

  return (
    <Comp
      className={`bmd-text ${className}`}
      data-variant={variant}
      data-bold={bold || undefined} // Avoids cluttering the DOM unless true
      {...props}
    >
      {children}
    </Comp>
  );
}
