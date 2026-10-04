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
  console.log("iconUrl:", iconUrl, "name:", name, "className:", className);

  const maskStyles: React.CSSProperties = {
    /* 🌟 Clean, safe standard single quotes since the Base64 data string has no internal quotes! */
    maskImage: `url('${iconUrl}')`,
    WebkitMaskImage: `url('${iconUrl}')`,
    ...style,
  };

  return (
    <span
      {...rest}
      className={["bmd-icon", className].filter(Boolean).join(" ")}
      aria-hidden={rest["aria-label"] ? undefined : true}
      style={maskStyles}
    />
  );
};

const a =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Pro%20v7.1.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M352%2096L352%2064L288%2064L288%20306.7C257.3%20276%20236%20254.7%20224%20242.7L178.7%20288C181.6%20290.9%20221.1%20330.4%20297.3%20406.6L320%20429.3C322.9%20426.4%20362.4%20386.9%20438.6%20310.7L461.3%20288L416%20242.7C404%20254.7%20382.7%20276%20352%20306.7L352%2096zM96%20384L96%20544L544%20544L544%20384L433.1%20384C395.4%20421.7%20357.7%20459.4%20320%20497.1C282.3%20459.4%20244.6%20421.7%20206.9%20384L96%20384zM464%20440C477.3%20440%20488%20450.7%20488%20464C488%20477.3%20477.3%20488%20464%20488C450.7%20488%20440%20477.3%20440%20464C440%20450.7%20450.7%20440%20464%20440z'%20/%3e%3c/svg%3e";
