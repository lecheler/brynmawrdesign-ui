import * as React from 'react';
import React__default, { JSX } from 'react';
import * as _tanstack_react_table from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';

type IconName = "arrowUp" | "arrowDown" | "calendar" | "check" | "chevronRight" | "chevronLeft" | "chevronsRight" | "chevronsLeft" | "download" | "pen" | "plus" | "search" | "star" | "warning" | "x" | "trash";
interface IconProps extends React__default.HTMLAttributes<HTMLSpanElement> {
    name: IconName;
    className?: string;
}
declare const Icon: React__default.FC<IconProps>;

type AsProp$4<E extends React.ElementType> = {
    as?: E;
};
type PropsToOmit$3<E extends React.ElementType, P> = keyof (AsProp$4<E> & P);
type PolymorphicProps$3<E extends React.ElementType, P> = React.PropsWithChildren<P & AsProp$4<E>> & Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit$3<E, P>>;
type InlineGap = 0 | 1 | 2 | 3 | 4;
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
type StackGap = 0 | 1 | 2 | 3 | 4;
type StackOwnProps = {
    /**
     * Gap between children, mapped to spacing tokens.
     * 1 → --space-1, 2 → --space-2, etc.
     */
    gap?: StackGap;
};
type StackProps<E extends React.ElementType = "div"> = PolymorphicProps$2<E, StackOwnProps>;
declare function Stack<E extends React.ElementType = "div">({ as, gap, style, ...props }: StackProps<E>): React.JSX.Element;

type GridProps = React__default.HTMLAttributes<HTMLDivElement> & {
    /** Fixed column count (ignored if auto is true) */
    columns?: 2 | 3 | 4;
    /** Use auto-fit with a minimum width instead of fixed columns */
    auto?: boolean;
    /** Minimum column width when auto=true */
    minItemWidth?: string;
    responsive?: boolean;
};
declare function Grid({ columns, auto, minItemWidth, responsive, className, style, ...props }: GridProps): React__default.JSX.Element;

type LayoutContainerProps = React__default.HTMLAttributes<HTMLDivElement> & {
    max?: "page" | "section" | "none";
};
declare function LayoutContainer({ max, className, ...props }: LayoutContainerProps): React__default.JSX.Element;

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
type ButtonSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
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
declare const Button: ({ label, children, icon, iconPosition, variant, tone, size, shape, disabled, className, ...props }: ButtonProps) => React__default.JSX.Element;

type InputSize = "sm" | "md" | "lg";
interface InputProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    inputSize?: InputSize;
    debounceDelay?: number;
    placeholder?: string;
}
declare const Input: ({ onChange, inputSize, placeholder, debounceDelay, ...props }: InputProps) => React__default.JSX.Element;

interface TableColumnMeta {
    filterVariant?: "text" | "range" | "select" | "dateRange" | "none";
}
interface TableColumn {
    accessorKey: string;
    header: string;
    cell?: (info: any) => React__default.ReactNode;
    filterFn?: string;
    meta?: TableColumnMeta;
}
interface TableProps {
    data: any[];
    columns: Array<ColumnDef<typeof features, TableColumn>>;
    hideFilters?: boolean;
}
declare const features: {
    rowSortingFeature: _tanstack_react_table.TableFeature;
    columnFacetingFeature: _tanstack_react_table.TableFeature;
    columnFilteringFeature: _tanstack_react_table.TableFeature;
    rowPaginationFeature: _tanstack_react_table.TableFeature;
    sortedRowModel: (table: _tanstack_react_table.Table<any, any>) => () => _tanstack_react_table.RowModel<any, any>;
    paginatedRowModel: (table: _tanstack_react_table.Table<any, any>) => () => _tanstack_react_table.RowModel<any, any>;
    filteredRowModel: (table: _tanstack_react_table.Table<any, any>) => () => _tanstack_react_table.RowModel<any, any>;
    sortFns: {
        alphanumeric: _tanstack_react_table.CreatedSortFn<any, any>;
        text: _tanstack_react_table.CreatedSortFn<any, any>;
        datetime: _tanstack_react_table.CreatedSortFn<any, any>;
    };
    facetedRowModel: (table: _tanstack_react_table.Table<any, any>, columnId: string) => () => _tanstack_react_table.RowModel<any, any>;
    facetedMinMaxValues: (table: _tanstack_react_table.Table<_tanstack_react_table.TableFeatures, any>, columnId: string) => () => undefined | [number, number];
    facetedUniqueValues: (table: _tanstack_react_table.Table<_tanstack_react_table.TableFeatures, any>, columnId: string) => () => Map<any, number>;
    filterFns: {
        includesString: _tanstack_react_table.CreatedFilterFn<any, any>;
        inNumberRange: _tanstack_react_table.CreatedFilterFn<any, any>;
        inDateRange: _tanstack_react_table.CreatedFilterFn<any, any>;
        equalsString: _tanstack_react_table.CreatedFilterFn<any, any>;
    };
    columnMeta: TableColumnMeta;
};
declare function Table({ data, columns, hideFilters }: TableProps): React__default.JSX.Element;

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

interface ModalProps {
    /** Is the modal open? */
    isOpen: boolean;
    /** Callback function triggered when closing the modal */
    onClose: () => void;
    /** The title text displayed in the header */
    title?: string;
    /** The main content inside the modal */
    children: React__default.ReactNode;
    /** Optional footer content (e.g., action buttons) */
    footer?: React__default.ReactNode;
}
declare const Modal: React__default.FC<ModalProps>;

type SelectSize = "sm" | "md" | "lg";
interface SelectProps extends React__default.SelectHTMLAttributes<HTMLSelectElement> {
    selectSize?: SelectSize;
}
declare const Select: ({ onChange, value, selectSize, children, ...props }: SelectProps) => React__default.JSX.Element;

interface CheckboxOption {
    label: string;
    value: string;
}
interface CheckboxGroupProps {
    options: CheckboxOption[];
    value?: string[];
    onChange?: (nextValues: string[]) => void;
    name: string;
}
declare const CheckboxGroup: ({ options, value, onChange, name, ...props }: CheckboxGroupProps) => React__default.JSX.Element;

interface PieData {
    id: number;
    value: number;
    category: string;
    color?: string;
    label?: string;
}
interface PieProps {
    data: PieData[];
    title?: string;
    size?: number;
}
/** Primary UI component for user interaction */
declare const Pie: ({ title, size, ...props }: PieProps) => React__default.JSX.Element;

interface BarChartItem {
    id: string | number;
    groupId: string;
    category: string;
    label: string;
    value: number;
    color: string;
}
interface BarChartProps {
    data: BarChartItem[];
    title?: string;
    height?: number;
    maxValue?: number;
}
/** Primary UI component for user interaction */
declare const BarChart: ({ title, height, ...props }: BarChartProps) => React__default.JSX.Element;

export { BarChart, type BarChartItem, type BarChartProps, Button, type ButtonShape, type ButtonSize, type ButtonTone, type ButtonVariant, Card, CardBody, CardFooter, CardHeader, type CardProps, CardRoot, type CardSectionProps, CheckboxGroup, type CheckboxOption, Grid, Heading, type HeadingProps, Icon, type IconName, type IconProps, Inline, type InlineProps, Input, type InputSize, LayoutContainer, Modal, type ModalProps, Pie, type PieData, Select, type SelectSize, Stack, type StackProps, Table, type TableColumn, type TableColumnMeta, Text, type TextProps };
