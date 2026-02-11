import * as React from "react";
import preview from "../../../../.storybook/preview";
import { Text } from "./Text";
import { Stack } from "../layout/Stack";

const meta = preview.meta({
  title: "Foundations/Typography",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
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
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
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
    <Stack gap={2}>
      <Text {...args} size="xs">
        Extra small body text – good for footer, etc.
      </Text>
      <Text {...args} size="sm">
        Small body text – good for secondary or dense content.
      </Text>
      <Text {...args} size="md">
        Medium body text – default size for most content.
      </Text>
      <Text {...args} size="lg">
        Large body text – for emphasis or key summaries.
      </Text>
      <Text {...args} size="xl">
        Extra large body text.
      </Text>
      <Text {...args} size="2xl">
        Double-xl body text.
      </Text>
    </Stack>
  ),
});
