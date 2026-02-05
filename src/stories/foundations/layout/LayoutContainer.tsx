import React from "react";
import { cx } from "../../utils/classNames";
import "./layout.css";

type LayoutContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  max?: "page" | "section" | "none";
};

export function LayoutContainer({
  max = "none",
  className,
  ...props
}: LayoutContainerProps) {
  return (
    <div
      className={cx("bmd-layout-container", className)}
      data-max={max !== "none" ? max : undefined}
      {...props}
    />
  );
}
