import React, { useState } from "react";
import preview from "../../../../.storybook/preview";
import { Modal } from "./Modal";

const meta = preview.meta({
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    isOpen: false,
    title: "Modal Title",
    children: <p>This is the main body content of your modal component.</p>,
  },
  argTypes: {},
});

export const Default = meta.story({
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    isOpen: false,
    title: "Modal Title",
    children: <p>This is the main body content of your modal component.</p>,
  },
});

// Interactive template that updates the isOpen state within Storybook
const InteractiveTemplate: React.FC<any> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    args.onClose();
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal {...args} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export const WithFooter = meta.story({
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    isOpen: false,
    title: "Discard Changes?",
    children: <p>Are you sure you want to discard your unsaved changes?</p>,
    footer: (
      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
        <button style={{ padding: "8px 16px" }}>Cancel</button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Confirm
        </button>
      </div>
    ),
  },
});
