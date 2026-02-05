import React from "react";
import preview from "../../../../.storybook/preview";

import { Button, type ButtonShape, type ButtonSize } from "./Button";
import { Inline } from "../../foundations/layout/Inline";
import { Stack } from "../../foundations/layout/Stack";

const TONES = ["primary", "danger", "success", "warning", "neutral"];
const SIZES = ["xs", "sm", "md", "lg", "xl"];
const SHAPES = ["default", "rounded", "pill"];
const VARIANTS = ["solid", "outlined", "soft", "ghost"];
const ICON_NAMES = ["check", "download", "search", "star", "warning", "x"];

const meta = preview.meta({
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
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
    icon: undefined,
    iconPosition: "left",
  },
  argTypes: {
    label: { control: { type: "text" } },
    tone: { control: { type: "radio" }, options: TONES },
    size: { control: { type: "radio" }, options: SIZES },
    shape: { control: { type: "radio" }, options: SHAPES },
    variant: { control: { type: "radio" }, options: VARIANTS },
    icon: {
      control: { type: "select" },
      options: ICON_NAMES,
      mapping: Object.fromEntries(
        ICON_NAMES.map((key) => [key, { name: `${key}` }] as [string, any]),
      ),
    },
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

export const WithIcon = meta.story({
  args: {
    label: "Button",
  },
  argTypes: {
    label: { control: false },
    tone: { control: { disable: true } },
  },
  render: (args) => {
    return (
      <Inline gap={2} align="center">
        <Button
          key={"download"}
          label={"Download"}
          tone={"neutral"}
          variant={args.variant}
          size={args.size}
          shape={args.shape}
          disabled={args.disabled}
          icon={{ name: "download" }}
        />
        <Button
          key={"star"}
          tone={"primary"}
          variant={args.variant}
          size={args.size}
          shape={args.shape}
          disabled={args.disabled}
          icon={{ name: "star" }}
          aria-label="Add this to your favorites"
        />
        <Button
          key={"search"}
          tone={"neutral"}
          variant={args.variant}
          size={args.size}
          shape={args.shape}
          disabled={args.disabled}
          icon={{ name: "search" }}
          iconPosition="left"
        >
          Search
        </Button>
        <Button
          key={"warning"}
          tone={"warning"}
          variant={args.variant}
          size={args.size}
          shape={args.shape}
          disabled={args.disabled}
          icon={{ name: "warning" }}
          iconPosition="right"
        >
          Warning
        </Button>
      </Inline>
    );
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
        {SIZES.map((size) => (
          <Button
            key={size}
            tone={args.tone}
            label={size}
            variant={args.variant}
            size={size as ButtonSize}
            shape={args.shape}
            disabled={args.disabled}
            icon={args.icon}
            iconPosition={args.iconPosition}
          />
        ))}
      </Inline>
    );
  },
});

export const Shapes = meta.story({
  args: { label: "Button", variant: "solid", size: "md", shape: "default" },
  argTypes: {
    label: { control: false },
    shape: { control: false },
  },
  render: (args) => {
    return (
      <Inline gap={2} align="center">
        {SHAPES.map((shape) => (
          <Button
            key={shape}
            tone={args.tone}
            label={shape}
            variant={args.variant}
            size={args.size}
            shape={shape as ButtonShape}
            disabled={args.disabled}
            icon={args.icon}
            iconPosition={args.iconPosition}
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
      <Inline gap={2} align="center">
        {VARIANTS.map((variant) => (
          <Button
            key={variant}
            variant={variant as any}
            label={variant}
            tone={args.tone}
            size={args.size}
            shape={args.shape}
            disabled={args.disabled}
            icon={args.icon}
            iconPosition={args.iconPosition}
          />
        ))}
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
      <Inline gap={2} align="center">
        {TONES.map((tone) => (
          <Button
            key={tone}
            tone={tone as any}
            label={tone}
            variant={args.variant}
            size={args.size}
            shape={args.shape}
            disabled={args.disabled}
            icon={args.icon}
            iconPosition={args.iconPosition}
          />
        ))}
      </Inline>
    );
  },
});

export const KitchenSink = meta.story({
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
          VARIANTS.map((variant) => (
            <Inline key={variant} gap={3} align="center">
              {TONES.map((tone) => (
                <Button
                  key={tone}
                  variant={variant as any}
                  tone={tone as any}
                  label={tone}
                  size={args.size}
                  shape={args.shape}
                  disabled={args.disabled}
                  icon={args.icon}
                  iconPosition={args.iconPosition}
                />
              ))}
            </Inline>
          ))
        }
      </Stack>
    );
  },
});
