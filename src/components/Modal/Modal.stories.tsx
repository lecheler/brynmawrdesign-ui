import React, { useState } from "react";
import preview from "../../../.storybook/preview";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { Stack } from "../Stack/Stack";
import { Inline } from "../Inline/Inline";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import { Heading } from "../Heading/Heading";
import { Text } from "../Text/Text";
import { Input } from "../Input/Input";

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
    <LayoutContainer>
      <Stack align="start">
        <Heading level={1}>Example Page Title</Heading>
        <Text variant="lead">
          Acilis facilis eum temporibus deleniti anim eu ipsum est ipsum officia
          reprehenderit nisi laboris dolor
        </Text>
        <Heading level={2}>Example Page Subtitle</Heading>
        <Text variant="body">
          lorem ipsum dolor sit amet consectetur adipiscing elit aut ea soluta
          irure eiusmod consequatur magna quas aliqua sunt in sunt est id duis
          mollit repellendus est voluptas dolorum ut vel facilis sit officia
          esse et facilis facilis eum temporibus deleniti anim eu ipsum est
          ipsum officia reprehenderit nisi laboris dolor
        </Text>
        <Button tone="primary" variant="soft" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose} />
      </Stack>
    </LayoutContainer>
  );
};

export const WithFooter = meta.story({
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    isOpen: false,
    title: "Add a show",
    children: (
      <Stack gap={4}>
        <Text variant="lead">Create a new performance entry</Text>
        <div className="bmd-separator" />
        <Stack>
          <Inline noWrap={true}>
            <Stack gap={1}>
              <Text variant="label">First Name</Text>
              <Input
                inputSize="sm"
                type="text"
                placeholder="Enter your first name..."
              />
            </Stack>
            <Stack gap={1}>
              <Text variant="label">Last Name</Text>
              <Input
                inputSize="sm"
                type="text"
                placeholder="Enter your last name..."
              />
            </Stack>
          </Inline>
        </Stack>
      </Stack>
    ),
    footer: (
      <Inline gap={1} justify="end">
        <Button variant="outlined" tone="primary">
          Cancel
        </Button>
        <Button tone="primary" icon={{ name: "check" }}>
          Confirm
        </Button>
      </Inline>
    ),
  },
});
