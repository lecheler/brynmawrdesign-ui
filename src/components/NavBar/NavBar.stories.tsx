// src/components/Layout/NavBar/NavBar.stories.tsx
import React from "react";
import preview from "../../../.storybook/preview";
import { NavBar } from "./NavBar";
import { Inline } from "../Inline/Inline";
import { Heading } from "../Heading/Heading";
import { Button } from "../Button/Button";

const meta = preview.meta({
  title: "Layout/NavBar", // Registers it inside your clean structural category block
  component: NavBar,
  tags: ["autodocs"],
});

// A standard text navigation link blueprint token
const NavLink = ({ text, active }: { text: string; active?: boolean }) => (
  <a
    href="#"
    style={{
      fontFamily: "sans-serif",
      fontSize: "14px",
      fontWeight: active ? 700 : 500,
      color: active ? "var(--color-text-main)" : "var(--color-text-muted)",
      textDecoration: "none",
      transition: "color 0.2s",
    }}
  >
    {text}
  </a>
);

export const Default = meta.story({
  args: {
    sticky: true,
    containerSize: "xl",
    children: (
      // We compose content using an Inline block to layout elements on a single horizontal row
      <Inline justify="space-between" align="center" style={{ width: "100%" }}>
        {/* Left Slot: Branding Signature Logo */}
        <Inline gap={2}>
          <div
            style={{
              background: "#000",
              color: "#fff",
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            BMD
          </div>
          <Heading level={3} style={{ margin: 0 }}>
            Portfolio Analytics
          </Heading>
        </Inline>

        {/* Center/Right Slot: Component Links and System Action Triggers */}
        <Inline gap={4}>
          <NavLink text="Home" />
          <NavLink text="Case Studies" />
          <NavLink text="Interactive Demo" active />

          <Button size="sm" tone="primary" variant="solid" shape="pill">
            Sign In
          </Button>
        </Inline>
      </Inline>
    ),
  },
  // Mount inside a taller scrolling sandbox wrapper to showcase the sticky pin mechanics
  render: (args) => (
    <div style={{ background: "#f3f4f6", minHeight: "150vh" }}>
      <NavBar {...args} />

      <div
        style={{
          padding: "48px 24px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <p style={{ color: "#6b7280" }}>
          👇 Scroll down the viewport canvas layer to verify that the navbar
          locks smoothly at top=0 bounds!
        </p>

        {/* Structural spacing block markers */}
        <div
          style={{
            height: "800px",
            margin: "40px 0",
            background: "linear-gradient(180deg, #fff 0%, #e5e7eb 100%)",
            borderRadius: "12px",
            border: "1px dashed #d1d5db",
          }}
        />

        <p style={{ color: "#9ca3af" }}>
          End of telemetry scroll viewport matrix container area.
        </p>
      </div>
    </div>
  ),
});
