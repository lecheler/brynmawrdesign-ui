import React from "react";
import { Icon, type IconProps } from "../../foundations/icons/Icon";

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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string; // Optional text label
  children?: React.ReactNode; // Optional children for more complex content
  icon?: IconProps; // Optional React node for the icon
  iconPosition?: "left" | "right"; // Determines icon placement
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
  children,
  icon,
  iconPosition = "left",
  variant = "solid",
  tone = "primary",
  size = "md",
  shape = "default",
  disabled = false,
  ...props
}: ButtonProps) => {
  // Basic validation: ensure at least an icon or label is provided
  if (!label && !icon && !children) {
    console.error(
      "Warning: Button must contain either a label, icon, or children.",
    );
    // Render nothing, or a default accessible element
    return null;
  }
  return (
    <button
      type="button"
      className="bmd-button"
      disabled={disabled}
      data-variant={variant}
      data-tone={tone}
      data-size={size}
      data-shape={shape}
      {...props}
    >
      {icon ? (
        <>
          {iconPosition === "left" && (
            <>
              <Icon {...icon} />
            </>
          )}

          {(children || label) && <span>{children || label}</span>}

          {iconPosition === "right" && (
            <span>
              <Icon {...icon} />
            </span>
          )}
        </>
      ) : (
        <>{children || label}</>
      )}
    </button>
  );
};
