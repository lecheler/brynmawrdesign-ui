import preview from "../../../../.storybook/preview";

import { Pie } from "./Pie";

const meta = preview.meta({
  title: "Charts/Pie",
  component: Pie,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Pie Chart",
    data: [
      { value: 30, category: "Category A" },
      { value: 25, category: "Category B" },
      { value: 45, category: "Category C" },
    ],
  },
  argTypes: {
    title: { control: { type: "text" } },
  },
});

export const Default = meta.story({
  args: {
    title: "Default Pie Chart",
    size: 100,
    data: [
      { value: 10, category: "Category A", color: "#95a5a6" },
      { value: 20, category: "Category B", color: "#2ecc71" },
      { value: 30, category: "Category C", color: "#e74c3c" },
      { value: 40, category: "Category D", color: "#3498db" },
    ],
  },
});

export default meta;
