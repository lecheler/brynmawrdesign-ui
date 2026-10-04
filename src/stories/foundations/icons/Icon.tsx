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

  // 🌟 THE ULTIMATE FIX: Dynamically normalize the path for the CSS Mask engine
  const getSafeMaskUrl = (url: string): string => {
    if (!url) return "";

    // Condition A: If it's a raw un-encoded SVG text block, safely convert it to binary Base64 on-the-fly
    if (url.startsWith("data:image/svg+xml") && !url.includes("base64")) {
      try {
        // Extract the pure XML content out of the data URL header
        const rawContent = decodeURIComponent(url.split(",")[1]);
        // Convert to safe, quote-immune Base64
        const base64 = window.btoa(unescape(encodeURIComponent(rawContent)));
        return `data:image/svg+xml;base64,${base64}`;
      } catch (e) {
        console.error("Failed to decode raw SVG data string:", e);
      }
    }

    // Condition B: If it's already a Base64 string or a plain file path url, return it exactly as-is
    return url;
  };

  const cleanUrl = getSafeMaskUrl(iconUrl);

  const maskStyles: React.CSSProperties = {
    /* Safe single quotes since the dynamic helper ensures the string contains zero quote mismatches! */
    maskImage: `url('${cleanUrl}')`,
    WebkitMaskImage: `url('${cleanUrl}')`,
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
