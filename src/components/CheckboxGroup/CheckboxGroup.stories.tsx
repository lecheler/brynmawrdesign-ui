import React from "react";
import { useState } from "react";
import preview from "../../../../.storybook/preview";
import { CheckboxGroup } from "./CheckboxGroup";

const meta = preview.meta({
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
});

const bandOptions = [
  { label: "🎸 Nirvana", value: "nirvana" },
  { label: "🥁 The Beats", value: "the-beats" },
  { label: "🎤 Radiohead", value: "radiohead" },
  { label: "🎹 Daft Punk", value: "daft-punk" },
];

export const Default = meta.story({
  args: {
    name: "band-filter",
    options: bandOptions,
    value: ["the-beats"],
  },
  // 💡 The render function attaches a local state hook to make the story fully interactive
  render: (args) => {
    const [currentValues, setCurrentValues] = useState<string[]>(
      args.value || [],
    );

    return (
      <div style={{ padding: "10px" }}>
        <CheckboxGroup
          {...args}
          value={currentValues}
          onChange={(nextValues) => {
            setCurrentValues(nextValues);
            // Fires Storybook's native action logger tab automatically
            args.onChange?.(nextValues);
          }}
        />

        {/* Debug footprint helper section */}
        <div style={{ marginTop: "16px", fontSize: "12px", color: "#666" }}>
          <strong>Active State Array:</strong> {JSON.stringify(currentValues)}
        </div>
      </div>
    );
  },
});
