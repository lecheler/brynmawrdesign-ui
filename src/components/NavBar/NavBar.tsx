// src/components/Layout/NavBar/NavBar.tsx
import * as React from "react";
import {
  LayoutContainer,
  type ContainerSize,
} from "../LayoutContainer/LayoutContainer";
import "./NavBar.css";

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: ContainerSize; // Forwards max width bounds straight to LayoutContainer
  sticky?: boolean; // Toggles fixed position tracking at the top of the viewport
  children: React.ReactNode;
}

export function NavBar({
  containerSize = "xl", // Dashboard layouts generally thrive on wider constraints
  sticky = true, // Contemporary apps default to sticky navigation bars
  children,
  className = "",
  ...props
}: NavBarProps) {
  return (
    <nav
      className={`bmd-navbar ${className}`}
      data-sticky={sticky || undefined}
      {...props}
    >
      <LayoutContainer size={containerSize}>
        <div className="bmd-navbar-inner">{children}</div>
      </LayoutContainer>
    </nav>
  );
}
