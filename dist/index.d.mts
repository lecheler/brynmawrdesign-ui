import * as React from 'react';
import React__default, { SVGProps } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    state?: "default" | "error" | "success";
}
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;

type IconName = "check" | "download" | "search" | "star" | "warning" | "x";
interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    className?: string;
}

type ButtonVariant = "solid" | "outlined" | "soft" | "ghost";
type ButtonTone = "primary" | "danger" | "success" | "warning" | "neutral";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonShape = "default" | "rounded" | "pill";
interface ButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children?: React__default.ReactNode;
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
declare const Button: ({ label, children, icon, iconPosition, variant, tone, size, shape, disabled, ...props }: ButtonProps) => React__default.JSX.Element;

export { Button, type ButtonShape, type ButtonSize, type ButtonTone, type ButtonVariant, TextInput, type TextInputProps };
