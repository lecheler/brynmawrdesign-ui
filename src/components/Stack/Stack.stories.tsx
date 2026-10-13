import React from "react";
import preview from "../../../.storybook/preview";
import { Stack } from "./Stack";

const Box = ({ num }: { num: number }) => (
  <div
    style={{
      background: "#4f46e5",
      color: "#fff",
      padding: "16px",
      borderRadius: "6px",
      fontFamily: "sans-serif",
    }}
  >
    Row Element Segment #{num}
  </div>
);

const meta = preview.meta({
  title: "Components/Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
});

export const Default = meta.story({
  args: {
    gap: 2,
    align: "stretch",
    children: [
      <Box key={1} num={1} />,
      <Box key={2} num={2} />,
      <Box key={3} num={3} />,
    ],
  },
});
