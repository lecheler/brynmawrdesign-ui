import * as React from "react";

import preview from "../../../../.storybook/preview";
import { Button, type ButtonSize } from "./Button";
import { Inline } from "../../foundations/layout/Inline";
import { Stack } from "../../foundations/layout/Stack";

const meta = preview.meta({
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Button",
    variant: "solid",
    tone: "primary",
    size: "md",
    shape: "default",
    disabled: false,
  },
});

export const Default = meta.story({
  args: {
    label: "Button",
    variant: "solid",
    tone: "primary",
    size: "md",
    shape: "default",
    disabled: false,
  },
});

export const Sizes = meta.story({
  args: { label: "Button", variant: "solid", size: "md", shape: "default" },
  argTypes: {
    label: { control: false },
    size: { control: false },
  },
  render: (args) => {
    return (
      <Inline gap={2} align="center">
        {["xs", "sm", "md", "lg", "xl"].map((size) => (
          <Button
            key={size}
            tone={args.tone}
            label={size}
            variant={args.variant}
            size={size as ButtonSize}
            shape={args.shape}
            disabled={args.disabled}
          />
        ))}
      </Inline>
    );
  },
});

export const Variants = meta.story({
  args: { label: "Button", tone: "primary", size: "md", shape: "default" },
  argTypes: {
    label: { control: false },
    variant: { control: false },
  },
  render: (args) => {
    return (
      <Inline gap={1} align="center">
        {
          /* Each variant button should inherit tone, size, and shape from args */
          ["solid", "outlined", "soft", "ghost"].map((variant) => (
            <Button
              key={variant}
              variant={variant as any}
              label={variant}
              tone={args.tone}
              size={args.size}
              shape={args.shape}
              disabled={args.disabled}
            />
          ))
        }
      </Inline>
    );
  },
});

export const Tones = meta.story({
  args: { label: "Button", variant: "solid", size: "md", shape: "default" },
  argTypes: {
    label: { control: false },
    tone: { control: false },
  },
  render: (args) => {
    return (
      <Inline gap={1} align="center">
        {
          /* Each tone button should inherit varient, size, and shape from args */
          ["primary", "danger", "success", "warning", "neutral"].map((tone) => (
            <Button
              key={tone}
              tone={tone as any}
              label={tone}
              variant={args.variant}
              size={args.size}
              shape={args.shape}
              disabled={args.disabled}
            />
          ))
        }
      </Inline>
    );
  },
});

export const TonesAndVariants = meta.story({
  args: { label: "Button" },
  argTypes: {
    label: { control: false },
    variant: { control: false },
    tone: { control: false },
  },
  render: (args) => {
    return (
      <Stack gap={2}>
        {
          /* Each row is a variant with all tones */
          ["solid", "outlined", "soft", "ghost"].map((variant) => (
            <Inline key={variant} gap={3} align="center">
              {["primary", "danger", "success", "warning", "neutral"].map(
                (tone) => (
                  <Button
                    key={tone}
                    variant={variant as any}
                    tone={tone as any}
                    label={tone}
                    size={args.size}
                    shape={args.shape}
                    disabled={args.disabled}
                  />
                ),
              )}
            </Inline>
          ))
        }
      </Stack>
    );
  },
});
