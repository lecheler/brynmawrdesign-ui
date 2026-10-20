import React from "react";
import { useState } from "react";
import preview from "../../../.storybook/preview";
import { CheckboxGroup } from "./CheckboxGroup";

import { mockBandsData } from "../../data/bands.mock";
import { getBandTheme } from "../../utils/analyticsTransformers";

const meta = preview.meta({
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
});

export const Default = meta.story({
  args: {
    name: "band-filter",
    options: mockBandsData.map((band) => {
      return {
        label: band.name,
        value: band.slug,
        colorToken: getBandTheme(band.slug).colorVar,
      };
    }),
    value: ["right-here"],
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
