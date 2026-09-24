import * as React from 'react';
import React__default, { SVGProps, JSX } from 'react';

type IconName = "check" | "download" | "search" | "star" | "warning" | "x";
interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    className?: string;
}
declare const Icon: React__default.FC<IconProps>;

type AsProp$4<E extends React.ElementType> = {
    as?: E;
};
type PropsToOmit$3<E extends React.ElementType, P> = keyof (AsProp$4<E> & P);
type PolymorphicProps$3<E extends React.ElementType, P> = React.PropsWithChildren<P & AsProp$4<E>> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit$3<E, P>>;
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
type InlineProps<E extends React.ElementType = "div"> = PolymorphicProps$3<E, InlineOwnProps>;
declare function Inline<E extends React.ElementType = "div">({ as, gap, align, wrap, style, ...props }: InlineProps<E>): React.JSX.Element;

type AsProp$3<E extends React.ElementType> = {
    as?: E;
};
type PropsToOmit$2<E extends React.ElementType, P> = keyof (AsProp$3<E> & P);
type PolymorphicProps$2<E extends React.ElementType, P> = React.PropsWithChildren<P & AsProp$3<E>> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit$2<E, P>>;
type StackGap = 1 | 2 | 3 | 4;
type StackOwnProps = {
    /**
     * Gap between children, mapped to spacing tokens.
     * 1 → --space-1, 2 → --space-2, etc.
     */
    gap?: StackGap;
};
type StackProps<E extends React.ElementType = "div"> = PolymorphicProps$2<E, StackOwnProps>;
declare function Stack<E extends React.ElementType = "div">({ as, gap, style, ...props }: StackProps<E>): React.JSX.Element;

type AsProp$2<E extends React.ElementType> = {
    as?: E;
};
type PropsToOmit$1<E extends React.ElementType, P> = keyof (AsProp$2<E> & P);
type PolymorphicProps$1<E extends React.ElementType, P> = React.PropsWithChildren<P & AsProp$2<E>> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit$1<E, P>>;
type HeadingLevel = 1 | 2 | 3;
type HeadingOwnProps = {
    /**
     * Visual + semantic heading level (controls default tag + size).
     */
    level?: HeadingLevel;
};
type HeadingProps<E extends React.ElementType = "h2"> = PolymorphicProps$1<E, HeadingOwnProps>;
declare function Heading<E extends React.ElementType = "h2">({ level, as, ...props }: HeadingProps<E>): JSX.Element;

type AsProp$1<E extends React.ElementType> = {
    as?: E;
};
type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp$1<E> & P);
type PolymorphicProps<E extends React.ElementType, P> = React.PropsWithChildren<P & AsProp$1<E>> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type TextOwnProps = {
    /**
     * Visual size of the text.
     */
    size?: TextSize;
};
type TextProps<E extends React.ElementType = "p"> = PolymorphicProps<E, TextOwnProps>;
declare function Text<E extends React.ElementType = "p">({ as, size, ...props }: TextProps<E>): React.JSX.Element;

type ButtonVariant = "solid" | "outlined" | "soft" | "ghost";
type ButtonTone = "primary" | "danger" | "success" | "warning" | "neutral";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonShape = "square" | "rounded" | "pill";
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

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    state?: "default" | "error" | "success";
}
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;

type CardVariant = "elevated" | "outlined" | "subtle";
type CardTone = "neutral" | "danger" | "success";
type CardPadding = "sm" | "md" | "lg";
type AsProp = keyof JSX.IntrinsicElements;
type CardProps<T extends AsProp = "div"> = {
    as?: T;
    variant?: CardVariant;
    tone?: CardTone;
    padding?: CardPadding;
    interactive?: boolean;
} & Omit<React__default.ComponentPropsWithoutRef<T>, "as">;
declare function CardRoot<T extends AsProp = "div">({ as, variant, tone, padding, interactive, className, ...props }: CardProps<T>): JSX.Element;
type CardSectionProps = React__default.HTMLAttributes<HTMLDivElement>;
declare function CardHeader({ className, ...props }: CardSectionProps): JSX.Element;
declare function CardBody({ className, ...props }: CardSectionProps): JSX.Element;
declare function CardFooter({ className, ...props }: CardSectionProps): JSX.Element;
/**
 * Compound component export:
 * Card.Header / Card.Body / Card.Footer
 */
declare const Card: typeof CardRoot & {
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
};

interface PieData {
    value: number;
    category: string;
    color: string;
}
interface PieProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    data: PieData[];
    title?: string;
    size?: number;
}
/** Primary UI component for user interaction */
declare const Pie: ({ title, size, ...props }: PieProps) => React__default.JSX.Element;

export { Button, type ButtonShape, type ButtonSize, type ButtonTone, type ButtonVariant, Card, CardBody, CardFooter, CardHeader, type CardProps, CardRoot, type CardSectionProps, Heading, type HeadingProps, Icon, type IconName, type IconProps, Inline, type InlineProps, Pie, type PieData, Stack, type StackProps, Text, TextInput, type TextInputProps, type TextProps };
