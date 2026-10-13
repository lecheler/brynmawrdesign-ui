// src/components/Heading/Heading.stories.tsx
import React from "react";
import preview from "../../../.storybook/preview";
import { Heading } from "./Heading";

const meta = preview.meta({
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
});

// 1. The Interactive Playground Story
export const Playground = meta.story({
  args: {
    level: 2,
    as: "h2",
    children: "🎵 Main Performance Dashboard",
  },
});

// 2. The Comprehensive Levels Variant Preview Story (Replaces the "Heading Levels" page)
export const AllLevels = meta.story({
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading level={1}>Level 1 Display Heading (32px)</Heading>
      <Heading level={2}>Level 2 Section Title (24px)</Heading>
      <Heading level={3}>Level 3 Subsection Header (20px)</Heading>
    </div>
  ),
});
