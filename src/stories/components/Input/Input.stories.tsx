import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Type to search...",
  },
  argTypes: {
    debounceDelay: {
      control: { type: "number", min: 0, max: 2000, step: 100 },
      description: "Delay in milliseconds before triggering onChange",
    },
  },
};

// Default standard immediate input
export const Standard = {};

// Presetted Debounced Input story
export const Debounced = {
  args: {
    onChange: (value) => console.log("Debounced input value:", value),
    debounceDelay: 500,
  },
};
