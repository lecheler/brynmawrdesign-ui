import React from "react";
import preview from "../../../.storybook/preview";
import { Grid } from "./Grid";

const Panel = ({ title }: { title: string }) => (
  <div
    style={{
      background: "#7c3aed",
      color: "#fff",
      padding: "32px 16px",
      // textOrigin: "center",
      borderRadius: "8px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
    }}
  >
    {title}
  </div>
);

const meta = preview.meta({
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
});

export const Default = meta.story({
  args: {
    columns: 3,
    gap: 3,
    children: [
      <Panel key={1} title="Analytics Chart Block" />,
      <Panel key={2} title="Data Streams Grid" />,
      <Panel key={3} title="Performance Index Table" />,
      <Panel key={4} title="Map Location Monitor" />,
    ],
  },
});
