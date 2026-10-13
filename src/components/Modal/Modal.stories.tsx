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
      <div>
        lorem ipsum dolor sit amet consectetur adipiscing elit aut ea soluta
        irure eiusmod consequatur magna quas aliqua sunt in sunt est id duis
        mollit repellendus est voluptas dolorum ut vel facilis sit officia esse
        et facilis facilis eum temporibus deleniti anim eu ipsum est ipsum
        officia reprehenderit nisi laboris dolor
      </div>
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
