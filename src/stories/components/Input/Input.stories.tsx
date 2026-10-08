import preview from "../../../../.storybook/preview";
import { Input, type InputSize } from "./Input";

const meta = preview.meta({
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
});

export const Default = meta.story({
  args: {
    placeholder: "hello",
  },
});

export const Date = meta.story({
  args: {
    type: "date",
    inputSize: "sm" as InputSize,
  },
});
