import * as React from "react";

import preview from "../../../../.storybook/preview";

import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = preview.meta({
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
});

export const Example = meta.story({
  args: {
    label: "Click Me",
  },
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <Button {...args} primary={true} size="small" />
          <Button {...args} primary={true} size="medium" />
          <Button {...args} primary={true} size="large" />
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <Button {...args} primary={true} onClick={() => alert("BOOM!")} />
          <Button {...args} />
          <Button {...args} />
          <Button {...args} />
        </div>
      </div>
    );
  },
});

export const Primary = meta.story({
  args: {
    primary: true,
    label: "Button",
  },
});

export const Secondary = meta.story({
  args: {
    primary: false,
    label: "Button",
  },
});
