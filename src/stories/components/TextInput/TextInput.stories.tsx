import preview from "../../../../.storybook/preview";

import { TextInput } from "./TextInput";

const meta = preview.meta({
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
});

export const Default = meta.story({
  args: {},
});

export default meta;
