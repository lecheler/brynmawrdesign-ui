import React from "react";
import preview from "../../../../.storybook/preview";
import { Select } from "./Select";

const meta = preview.meta({
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
});

export const Default = meta.story({
  args: {
    selectSize: "md",
    children: [
      <option key="one" value="one">
        One
      </option>,
      <option key="two" value="two">
        Two
      </option>,
      <option key="three" value="three">
        Three
      </option>,
    ],
  },
});
