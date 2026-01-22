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
