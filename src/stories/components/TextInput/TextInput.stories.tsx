import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text…",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: 300 }}>
      <TextInput placeholder="Small" />
      <TextInput placeholder="Medium" />
      <TextInput placeholder="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: 300 }}>
      <TextInput placeholder="Default" />
      <TextInput state="error" placeholder="Error" />
      <TextInput state="success" placeholder="Success" />
      <TextInput disabled placeholder="Disabled" />
    </div>
  ),
};
