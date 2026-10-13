import * as React from "react";
import "./Grid.css";

export type GridColumns = 1 | 2 | 3 | 4;
export type GridGap = 0 | 1 | 2 | 3 | 4 | 6 | 8;

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns; // Tracks max layout columns rendered on desktop viewports
  gap?: GridGap; // Spacing metric step matching Layer 1 tokens
  children: React.ReactNode;
}

export function Grid({
  columns = 3,
  gap = 3,
  children,
  className = "",
  ...props
}: GridProps) {
  return (
    <div
      className={`bmd-grid ${className}`}
      data-columns={columns}
      data-gap={gap}
      {...props}
    >
      {children}
    </div>
  );
}
