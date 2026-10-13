import React from "react";
import preview from "../../../.storybook/preview";
import { Inline } from "./Inline";

const Chip = ({ label }: { label: string }) => (
  <div
    style={{
      background: "#10b981",
      color: "#fff",
      padding: "8px 16px",
      borderRadius: "9999px",
      fontSize: "14px",
      fontFamily: "sans-serif",
    }}
  >
    {label}
  </div>
);

const meta = preview.meta({
  title: "Components/Layout/Inline",
  component: Inline,
  tags: ["autodocs"],
});

export const Default = meta.story({
  args: {
    gap: 2,
    justify: "start",
    align: "center",
    noWrap: false,
    children: [
      <Chip key={1} label="🎸 Nirvana" />,
      <Chip key={2} label="🥁 The Beats" />,
      <Chip key={3} label="🎤 Radiohead" />,
      <Chip key={4} label="🎹 Daft Punk" />,
    ],
  },
});
