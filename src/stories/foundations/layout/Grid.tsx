import React from "react";
import { cx } from "../../utils/classNames";
// import "./grid.css";
import "./layout.css";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Fixed column count (ignored if auto is true) */
  columns?: 2 | 3 | 4;
  /** Use auto-fit with a minimum width instead of fixed columns */
  auto?: boolean;
  /** Minimum column width when auto=true */
  minItemWidth?: string; // e.g. "14rem"
  responsive?: boolean;
};

export function Grid({
  columns,
  auto,
  minItemWidth = "14rem",
  responsive,
  className,
  style,
  ...props
}: GridProps) {
  return (
    <div
      className={cx("bmd-grid", className)}
      data-columns={!auto ? columns : undefined}
      data-auto={auto ? "true" : undefined}
      data-responsive={responsive ? "true" : undefined}
      style={
        {
          "--bmd-grid-min": minItemWidth,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}
