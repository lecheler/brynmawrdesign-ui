import * as React from "react";
import preview from "../../../../.storybook/preview";
import { Heading } from "./Heading";

const meta = preview.meta({
  title: "Foundations/Typography",
  component: Heading,
  tags: ["autodocs"],
});

export const HeadingPlayground = meta.story({
  args: {
    children: "Section heading",
    level: 2,
  },
  argTypes: {
    level: {
      control: { type: "inline-radio" },
      options: [1, 2, 3],
    },
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "p", "div"],
    },
    children: {
      control: "text",
    },
  },
});

export const HeadingLevels = meta.story({
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Heading {...args} level={1}>
        Page title (level 1)
      </Heading>
      <Heading {...args} level={2}>
        Section heading (level 2)
      </Heading>
      <Heading {...args} level={3}>
        Subsection heading (level 3)
      </Heading>
    </div>
  ),
  args: {},
  argTypes: {
    level: { control: false },
    as: { control: false },
    children: { control: false },
  },
});
