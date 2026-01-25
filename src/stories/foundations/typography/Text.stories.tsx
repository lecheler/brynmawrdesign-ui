import * as React from "react";
import preview from "../../../../.storybook/preview";
import { Text } from "./Text";
import { Icon } from "../icons/Icon";

const meta = preview.meta({
  title: "Foundations/Typography",
  component: Text,
});
export const TextPlayground = meta.story({
  args: {
    children:
      "Body text uses Inter with a compact size and comfortable line-height.",
    size: "md",
    as: "p",
  },
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div"],
    },
    children: {
      control: "text",
    },
  },
});

export const TextSizes = meta.story({
  args: {
    as: "p",
  },
  argTypes: {
    size: { control: false },
    as: { control: false },
    children: { control: false },
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Text {...args} size="sm">
        <Icon name="x" aria-label="X icon" /> Small body text – good for
        secondary or dense content.
      </Text>
      <Text {...args} size="md">
        <Icon name="check" aria-label="Check icon" /> Medium body text – default
        size for most content.
      </Text>
      <Text {...args} size="lg">
        Large body text – for emphasis or key summaries.
      </Text>
    </div>
  ),
});
