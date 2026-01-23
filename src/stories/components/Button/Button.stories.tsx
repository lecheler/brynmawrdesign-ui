import * as React from "react";

import preview from "../../../../.storybook/preview";
import { fn } from "storybook/test";
import { Button } from "./Button";
import { Inline } from "../../foundations/layout/Inline";
import { Stack } from "../../foundations/layout/Stack";

const meta = preview.meta({
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  args: { label: "Button", onClick: fn() },
});

export const Default = meta.story({
  args: { label: "Button" },
});

// export const Variants = meta.story({
//   args: { label: "Button" },
//   render: (_args) => (
//     <Inline gap={2} align="center">
//       <Button variant="solid" label="solid" />
//       <Button variant="outlined" label="outlined" />
//       <Button variant="soft" label="soft" />
//       <Button variant="subtle" label="subtle" />
//       <Button variant="ghost" label="ghost" />
//     </Inline>
//   ),
// });

// export const Tones = meta.story({
//   args: { label: "Button" },
//   render: (_args) => (
//     <Inline gap={2} align="center">
//       <Button variant="solid" label="solid" />
//       <Button variant="outlined" label="outlined" />
//       <Button variant="soft" label="soft" />
//       <Button variant="subtle" label="subtle" />
//       <Button variant="ghost" label="ghost" />
//     </Inline>
//   ),
// });

export const TonesAndVariants = meta.story({
  args: { label: "Button" },
  render: (_args) => {
    const sGap = 4;
    const iGap = 2;
    return (
      <Stack gap={sGap}>
        <Inline gap={iGap} align="center">
          <Button variant="solid" tone="primary" label="Primary" />
          <Button variant="solid" tone="danger" label="Danger" />
          <Button variant="solid" tone="success" label="Success" />
          <Button variant="solid" tone="warning" label="Warning" />
          <Button variant="solid" tone="neutral" label="Neutral" />
        </Inline>
        <Inline gap={iGap} align="center">
          <Button variant="outlined" tone="primary" label="Primary" />
          <Button variant="outlined" tone="danger" label="Danger" />
          <Button variant="outlined" tone="success" label="Success" />
          <Button variant="outlined" tone="warning" label="Warning" />
          <Button variant="outlined" tone="neutral" label="Neutral" />
        </Inline>
        <Inline gap={iGap} align="center">
          <Button variant="soft" tone="primary" label="Primary" />
          <Button variant="soft" tone="danger" label="Danger" />
          <Button variant="soft" tone="success" label="Success" />
          <Button variant="soft" tone="warning" label="Warning" />
          <Button variant="soft" tone="neutral" label="Neutral" />
        </Inline>
        <Inline gap={iGap} align="center">
          <Button variant="subtle" tone="primary" label="Primary" />
          <Button variant="subtle" tone="danger" label="Danger" />
          <Button variant="subtle" tone="success" label="Success" />
          <Button variant="subtle" tone="warning" label="Warning" />
          <Button variant="subtle" tone="neutral" label="Neutral" />
        </Inline>
        <Inline gap={iGap} align="center">
          <Button variant="ghost" tone="primary" label="Primary" />
          <Button variant="ghost" tone="danger" label="Danger" />
          <Button variant="ghost" tone="success" label="Success" />
          <Button variant="ghost" tone="warning" label="Warning" />
          <Button variant="ghost" tone="neutral" label="Neutral" />
        </Inline>
      </Stack>
    );
  },
});
export const Round = meta.story({
  args: { label: "Button" },
  render: (_args) => (
    <Inline gap={1} align="center">
      <Button variant="solid" label="Save" />
      <Button variant="outlined" label="Cancel" />
      <Button variant="soft" label="Preview" />
      <Button variant="subtle" label="Duplicate" />
      <Button variant="ghost" label="Learn more" />
    </Inline>
  ),
});

export const Disabled = meta.story({
  args: { label: "Button" },
  render: (_args) => (
    <Inline gap={1} align="center">
      <Button variant="solid" label="Save" />
      <Button variant="outlined" label="Cancel" />
      <Button variant="soft" label="Preview" />
      <Button variant="subtle" label="Duplicate" />
      <Button variant="ghost" label="Learn more" />
    </Inline>
  ),
});
