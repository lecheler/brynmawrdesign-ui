// src/foundations/typography/Typography.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";
import { Heading } from "./Heading";

const meta: Meta<typeof Text> = {
  title: "Foundations/Typography",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

// -------- TEXT STORIES --------

type TextStory = StoryObj<typeof Text>;

export const TextPlayground: TextStory = {
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
};

export const TextSizes = {
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
        Small body text – good for secondary or dense content.
      </Text>
      <Text {...args} size="md">
        Medium body text – default size for most content.
      </Text>
      <Text {...args} size="lg">
        Large body text – for emphasis or key summaries.
      </Text>
    </div>
  ),
} satisfies TextStory;

// -------- HEADING STORIES --------

type HeadingStory = StoryObj<React.ComponentProps<typeof Heading>>;

export const HeadingPlayground: HeadingStory = {
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
};

// export const HeadingLevels: HeadingStory = {
//   render: (args) => (
//     <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
//       <Heading {...args} level={1}>
//         Page title (level 1)
//       </Heading>
//       <Heading {...args} level={2}>
//         Section heading (level 2)
//       </Heading>
//       <Heading {...args} level={3}>
//         Subsection heading (level 3)
//       </Heading>
//     </div>
//   ),
//   args: {},
//   argTypes: {
//     level: { control: false },
//     as: { control: false },
//     children: { control: false },
//   },
// };
