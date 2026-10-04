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

  // Normalizes development asset tracks and text strings cleanly
  const getSafeMaskUrl = (input: string): string => {
    if (!input) return "";

    // If it's a raw SVG XML text string (emitted by your production tsup text loader)
    if (input.trim().startsWith("<svg")) {
      try {
        // Convert the XML text string directly to a quote-safe Base64 string at runtime
        const base64 = window.btoa(unescape(encodeURIComponent(input.trim())));
        return `data:image/svg+xml;base64,${base64}`;
      } catch (e) {
        console.error("Failed to compile SVG to Base64:", e);
      }
    }

    // Otherwise, it's a standard development server URL path string (used by Storybook)
    return input;
  };

  const cleanUrl = getSafeMaskUrl(iconUrl);

  const maskStyles: React.CSSProperties = {
    /* Wrapped in safe double quotes */
    maskImage: `url(\"${cleanUrl}\")`,
    WebkitMaskImage: `url(\"${cleanUrl}\")`,
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
