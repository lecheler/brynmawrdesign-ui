// src/icons/Icon.tsx
import React from "react";
import type { SVGProps } from "react";
import { CheckIcon, Download, ExclamationIcon, StarIcon, XIcon } from "./index";

import "./Icon.css";

export type IconName = "check" | "download" | "star" | "warning" | "x";

// Use semantic icon names:
const ICONS: Record<IconName, React.FC<SVGProps<SVGSVGElement>>> = {
  check: CheckIcon,
  download: Download,
  star: StarIcon,
  x: XIcon,
  warning: ExclamationIcon,
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className, ...rest }) => {
  const Svg = ICONS[name];

  return (
    <Svg
      className={["bmd-icon", className].filter(Boolean).join(" ")}
      aria-hidden={rest["aria-label"] ? undefined : true}
      focusable="false"
      {...rest}
    />
  );
};
