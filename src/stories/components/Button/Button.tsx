import React from "react";

import "./Button.css";

export type ButtonVariant = "solid" | "outlined" | "soft" | "ghost";
export type ButtonTone =
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "neutral";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonShape = "default" | "rounded" | "pill";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  disabled?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  label,
  variant = "solid",
  tone = "primary",
  size = "md",
  shape = "default",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"bmd-button"}
      disabled={disabled}
      data-variant={variant}
      data-tone={tone}
      data-size={size}
      data-shape={shape}
      {...props}
    >
      {label}
    </button>
  );
};
