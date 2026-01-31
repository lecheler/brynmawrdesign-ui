import React, { SVGProps } from 'react';

type IconName = "check" | "download" | "search" | "star" | "warning" | "x";
interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    className?: string;
}

type ButtonVariant = "solid" | "outlined" | "soft" | "ghost";
type ButtonTone = "primary" | "danger" | "success" | "warning" | "neutral";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonShape = "default" | "rounded" | "pill";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children?: React.ReactNode;
    icon?: IconProps;
    iconPosition?: "left" | "right";
    variant?: ButtonVariant;
    tone?: ButtonTone;
    size?: ButtonSize;
    shape?: ButtonShape;
    onClick?: () => void;
    disabled?: boolean;
}
/** Primary UI component for user interaction */
declare const Button: ({ label, children, icon, iconPosition, variant, tone, size, shape, disabled, ...props }: ButtonProps) => React.JSX.Element;

export { Button, type ButtonShape, type ButtonSize, type ButtonTone, type ButtonVariant };
