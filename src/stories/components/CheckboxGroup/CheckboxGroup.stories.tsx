import preview from "../../../../.storybook/preview";
import { CheckboxGroup } from "./CheckboxGroup";

const meta = preview.meta({
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
});

// Mock array of options matching your band filtering use case
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
    value: ["the-beats"], // Pre-select an option by default to demonstrate the active state
  },
});
