// src/components/LayoutContainer/LayoutContainer.tsx
import * as React from "react";
import "./LayoutContainer.css";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize; // Restricts max horizontal bounds
  cleanPadding?: boolean; // Quick boolean toggle to strip gutters if needed
  children: React.ReactNode;
}

export function LayoutContainer({
  size = "lg",
  cleanPadding = false,
  children,
  className = "",
  ...props
}: LayoutContainerProps) {
  return (
    <div
      className={`bmd-container ${className}`}
      data-size={size}
      data-clean-padding={cleanPadding || undefined}
      {...props}
    >
      {children}
    </div>
  );
}
