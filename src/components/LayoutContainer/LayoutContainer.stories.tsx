import React from "react";
import preview from "../../../.storybook/preview";
import { LayoutContainer } from "./LayoutContainer";
import { Stack } from "../Stack/Stack";
import { Inline } from "../Inline/Inline";
import { Grid } from "../Grid/Grid";

// Visual block boundaries helper mapping
const PlaceholderBox = ({ label, height = "80px", bg = "#3b82f6" }: any) => (
  <div
    style={{
      width: "100%",
      height,
      backgroundColor: bg,
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      fontWeight: "bold",
      fontSize: "14px",
      fontFamily: "sans-serif",
    }}
  >
    {label}
  </div>
);

const meta = preview.meta({
  title: "Layout/LayoutContainer",
  component: LayoutContainer,
  tags: ["autodocs"],
});

export const Default = meta.story({
  args: {
    size: "lg",
    cleanPadding: false,
    children: (
      <PlaceholderBox label="Layout Container Window Content" height="120px" />
    ),
  },
});

// ✅ REFACTORED COMPOSITION: Demonstrates true layout nesting with pristine UI components!
export const DashboardCompositionExample = meta.story({
  render: (args) => (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "24px 0",
        minHeight: "100vh",
      }}
    >
      <LayoutContainer {...args}>
        {/* 1. Stack sets unified vertical breathing room downward */}
        <Stack gap={4}>
          {/* 2. Inline configures horizontal bar flow automatically wrapping on mobile */}
          <Inline justify="space-between" align="center" gap={2}>
            <h2 style={{ margin: 0, fontFamily: "sans-serif" }}>
              🎵 Live Analytics Monitor
            </h2>
            <Inline gap={2}>
              <button style={{ padding: "8px 16px" }}>Reset</button>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Export Data
              </button>
            </Inline>
          </Inline>

          {/* 3. Grid coordinates responsive block structures side-by-side */}
          <Grid columns={2} gap={4}>
            <PlaceholderBox
              label="🗺️ Live Telemetry Map Tracker View"
              height="350px"
              bg="#10b981"
            />

            {/* Nested stack handles sidebar card tracking spaces */}
            <Stack gap={3}>
              <PlaceholderBox
                label="📊 Band Selection Filter Chips"
                height="100px"
                bg="#f59e0b"
              />
              <PlaceholderBox
                label="📋 Selected Show Location Summary"
                height="218px"
                bg="#6b7280"
              />
            </Stack>
          </Grid>

          {/* 4. Bottom row adapts fluidly to a 3-column track array layout */}
          <Grid columns={3} gap={3}>
            <PlaceholderBox label="Metric Box A" height="100px" bg="#8b5cf6" />
            <PlaceholderBox label="Metric Box B" height="100px" bg="#8b5cf6" />
            <PlaceholderBox label="Metric Box C" height="100px" bg="#8b5cf6" />
          </Grid>
        </Stack>
      </LayoutContainer>
    </div>
  ),
  args: {
    size: "xl", // Extra large lock boundary fits composite dash configurations perfectly
  },
});
