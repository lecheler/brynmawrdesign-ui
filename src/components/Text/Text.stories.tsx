// src/components/Text/Text.stories.tsx
import React from "react";
import preview from "../../../.storybook/preview";
import { Text } from "./Text";

const meta = preview.meta({
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
});

export const Playground = meta.story({
  args: {
    variant: "body",
    bold: false,
    children: "This is a paragraph tracking historical band concert timelines.",
  },
});

export const AllVariants = meta.story({
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Text variant="lead">
        Lead Paragraph: Used for introductions and biographies.
      </Text>
      <Text variant="body">
        Body Paragraph: Standard content blocks and descriptive descriptions.
      </Text>
      <Text variant="caption">
        Caption text: Used for supporting table timestamps and metadata labels.
      </Text>
      <Text variant="code">{`const filteredShows = rawShows.filter(show => true);`}</Text>
    </div>
  ),
});
