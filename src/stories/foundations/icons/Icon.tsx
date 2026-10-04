import React from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Exclamation,
  Search,
  Star,
  X,
} from "./index";

import "./Icon.css";

export type IconName =
  | "arrowUp"
  | "arrowDown"
  | "check"
  | "chevronRight"
  | "chevronLeft"
  | "chevronsRight"
  | "chevronsLeft"
  | "download"
  | "search"
  | "star"
  | "warning"
  | "x";

const ICONS: Record<IconName, string> = {
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronsRight: ChevronsRight,
  chevronsLeft: ChevronsLeft,
  check: Check,
  download: Download,
  search: Search,
  star: Star,
  x: X,
  warning: Exclamation,
};

// 1. FIX: Extend HTMLAttributes for a span element instead of SVGProps
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  style,
  ...rest
}) => {
  const iconUrl = ICONS[name] as unknown as string;

  // 1. Explicitly construct the mandatory mask styling block beforehand
  const maskStyles: React.CSSProperties = {
    maskImage: `url("${iconUrl}")`,
    WebkitMaskImage: `url("${iconUrl}")`,
    ...style, // Merge user-passed style overrides safely
  };

  return (
    <span
      // 2. Spread parameters first so they act as base defaults
      {...rest}
      className={["bmd-icon", className].filter(Boolean).join(" ")}
      aria-hidden={rest["aria-label"] ? undefined : true}
      // 3. Force your custom styles parameter to apply last so it can't be cleared out
      style={maskStyles}
    />
  );
};
