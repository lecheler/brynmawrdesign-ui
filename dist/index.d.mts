import * as React from 'react';
import React__default, { JSX } from 'react';
import * as _tanstack_react_table from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';

type IconName = "arrowUp" | "arrowDown" | "calendar" | "chart" | "check" | "chevronRight" | "chevronLeft" | "chevronsRight" | "chevronsLeft" | "download" | "map" | "pen" | "plus" | "search" | "star" | "warning" | "table" | "trash" | "x";
interface IconProps extends React__default.HTMLAttributes<HTMLSpanElement> {
    name: IconName;
    className?: string;
}
declare const Icon: React__default.FC<IconProps>;

type InlineGap = 0 | 1 | 2 | 3 | 4 | 6 | 8;
type InlineJustify = "start" | "center" | "end" | "space-between";
type InlineAlign = "start" | "center" | "end" | "baseline";
interface InlineProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: InlineGap;
    justify?: InlineJustify;
    align?: InlineAlign;
    noWrap?: boolean;
    children: React.ReactNode;
}
declare function Inline({ gap, justify, align, noWrap, children, className, ...props }: InlineProps): React.JSX.Element;

type StackGap = 0 | 1 | 2 | 3 | 4 | 6 | 8;
type StackAlign = "start" | "center" | "end" | "stretch";
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: StackGap;
    align?: StackAlign;
    children: React.ReactNode;
}
declare function Stack({ gap, align, children, className, ...props }: StackProps): React.JSX.Element;

type GridColumns = 1 | 2 | 3 | 4;
type GridGap = 0 | 1 | 2 | 3 | 4 | 6 | 8;
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: GridColumns;
    gap?: GridGap;
    children: React.ReactNode;
}
declare function Grid({ columns, gap, children, className, ...props }: GridProps): React.JSX.Element;

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";
interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: ContainerSize;
    cleanPadding?: boolean;
    children: React.ReactNode;
}
declare function LayoutContainer({ size, cleanPadding, children, className, ...props }: LayoutContainerProps): React.JSX.Element;

type HeadingLevel = 1 | 2 | 3;
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    as?: HeadingTag;
    children: React.ReactNode;
}
declare function Heading({ level, as, children, className, ...props }: HeadingProps): React.JSX.Element;

type TextVariant = "body" | "lead" | "caption" | "code" | "label";
type TextTag = "p" | "span" | "div" | "span" | "code" | "small" | "label";
interface TextProps extends React.AllHTMLAttributes<HTMLElement> {
    variant?: TextVariant;
    as?: TextTag;
    bold?: boolean;
    children: React.ReactNode;
}
declare function Text({ variant, as, bold, children, className, ...props }: TextProps): React.JSX.Element;

type ButtonVariant = "solid" | "outlined" | "soft" | "ghost";
type ButtonTone = "primary" | "danger" | "success" | "warning" | "neutral";
type ButtonSize = "sm" | "md" | "lg";
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

interface MapMarkerData {
    id: number | string;
    lat: number;
    lng: number;
    title: string;
    subtitle?: string;
    colorToken?: string;
}
interface MapProps {
    markers?: MapMarkerData[];
    center?: {
        lat: number;
        lng: number;
    };
    zoom?: number;
    apiKey?: string;
}
declare const Map$1: React__default.MemoExoticComponent<({ markers, center, zoom, apiKey: userApiKey, ...props }: MapProps) => React__default.JSX.Element>;

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

interface MultiFilterOption {
    label: string;
    value: string;
    searchString: string;
    colorToken?: string;
}
interface MultiFilterProps {
    label?: string;
    placeholder?: string;
    options: MultiFilterOption[];
    value?: string[];
    onChange: (nextValues: string[]) => void;
    name: string;
}
declare const MultiFilter: ({ label, placeholder, options, value, onChange, name, }: MultiFilterProps) => React__default.JSX.Element;

type SelectSize = "sm" | "md" | "lg";
interface SelectProps extends React__default.SelectHTMLAttributes<HTMLSelectElement> {
    selectSize?: SelectSize;
}
declare const Select: ({ onChange, value, selectSize, children, ...props }: SelectProps) => React__default.JSX.Element;

interface CheckboxOption {
    label: string;
    value: string;
    colorToken?: string;
}
interface CheckboxGroupProps {
    options: CheckboxOption[];
    value: string[];
    onChange: (nextValues: string[]) => void;
    name: string;
    dismissible?: boolean;
}
declare const CheckboxGroup: ({ options, value, onChange, name, dismissible, ...props }: CheckboxGroupProps) => React__default.JSX.Element;

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
    containerSize?: ContainerSize;
    sticky?: boolean;
    children: React.ReactNode;
}
declare function NavBar({ containerSize, // Dashboard layouts generally thrive on wider constraints
sticky, // Contemporary apps default to sticky navigation bars
children, className, ...props }: NavBarProps): React.JSX.Element;

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
    height?: number;
    maxValue?: number;
}
/** Primary UI component for user interaction */
declare const BarChart: ({ height, ...props }: BarChartProps) => React__default.JSX.Element;

export { BarChart, type BarChartItem, type BarChartProps, Button, type ButtonShape, type ButtonSize, type ButtonTone, type ButtonVariant, Card, CardBody, CardFooter, CardHeader, type CardProps, CardRoot, type CardSectionProps, CheckboxGroup, type CheckboxOption, type ContainerSize, Grid, type GridColumns, type GridGap, type GridProps, Heading, type HeadingLevel, type HeadingProps, type HeadingTag, Icon, type IconName, type IconProps, Inline, type InlineAlign, type InlineGap, type InlineJustify, type InlineProps, Input, type InputSize, LayoutContainer, type LayoutContainerProps, Map$1 as Map, type MapMarkerData, Modal, type ModalProps, MultiFilter, type MultiFilterOption, NavBar, type NavBarProps, Pie, type PieData, Select, type SelectSize, Stack, type StackAlign, type StackGap, type StackProps, Table, type TableColumn, type TableColumnMeta, Text, type TextProps, type TextTag, type TextVariant };
