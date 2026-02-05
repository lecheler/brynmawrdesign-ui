// src/components/Card/Card.stories.tsx
import React from "react";
import preview from "../../../../.storybook/preview";

import { Card } from "./Card";

// tweak these imports if your paths are different
import { LayoutContainer } from "../../foundations/layout/LayoutContainer";
import { Grid } from "../../foundations/layout/Grid";
import { Heading } from "../../foundations/typography/Heading";

const meta = preview.meta({
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["elevated", "outlined", "subtle"],
    },
    tone: {
      control: { type: "select" },
      options: ["neutral", "danger", "success"],
    },
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    interactive: {
      control: { type: "boolean" },
    },
    as: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  args: {
    variant: "elevated",
    tone: "neutral",
    padding: "md",
    interactive: false,
  },
});

export default meta;

// ----------------------------------------------------
// 1. Playground – shows header/body/footer compound API
// ----------------------------------------------------

export const Playground = meta.story({
  render: (args) => (
    <Card {...args}>
      <Card.Header
        style={{
          padding: "0.75rem 1rem",
          borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
        }}
      >
        <h3 style={{ margin: 0 }}>Card title</h3>
      </Card.Header>

      <Card.Body>
        <p style={{ margin: 0, marginBottom: "0.5rem" }}>
          This card uses <code>Card.Header</code> and <code>Card.Body</code>.
        </p>
        <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
          Use the controls on the right to tweak variant, tone, padding and
          interactivity.
        </p>
      </Card.Body>

      <Card.Footer
        className="bmd-card__footer--padded"
        style={{ textAlign: "right" }}
      >
        <button className="bmd-button" data-tone="primary">
          Action
        </button>
      </Card.Footer>
    </Card>
  ),
});

// ----------------------------------------------------
// 2. Full-bleed header + padded content
// ----------------------------------------------------

export const FullBleedHeader = meta.story({
  args: {
    variant: "elevated",
    tone: "neutral",
    padding: "md",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header
        style={{
          background:
            "linear-gradient(135deg, var(--tone-primary, #2563eb), var(--tone-primary-soft, #93c5fd))",
          color: "white",
          padding: "0.75rem 1rem",
        }}
      >
        <h3 style={{ margin: 0 }}>Pro plan</h3>
        <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.9 }}>
          Best for growing teams.
        </p>
      </Card.Header>

      <Card.Body>
        <p style={{ margin: 0, marginBottom: "0.5rem" }}>
          Get advanced analytics, priority support, and more seats.
        </p>
        <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
          Billed annually. Cancel anytime.
        </p>
      </Card.Body>

      <Card.Footer
        className="bmd-card__footer--padded"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>
          Starting at $19/month
        </span>
        <button className="bmd-button" data-tone="primary">
          Upgrade
        </button>
      </Card.Footer>
    </Card>
  ),
});

// ----------------------------------------------------
// 3. Image header (full-bleed) + padded body
// ----------------------------------------------------

export const ImageHeader = meta.story({
  args: {
    variant: "outlined",
    tone: "neutral",
    padding: "lg",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <img
          src="https://picsum.photos/800/360"
          alt="Preview"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </Card.Header>

      <Card.Body>
        <h3 style={{ marginTop: 0, marginBottom: "0.25rem" }}>
          Loose Morals, No Substance
        </h3>
        <p style={{ margin: 0, marginBottom: "0.5rem", opacity: 0.9 }}>
          Solo record • Classic country, folk, Americana, punk heart.
        </p>
        <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.75 }}>
          Minneapolis · 2026
        </p>
      </Card.Body>

      <Card.Footer
        className="bmd-card__footer--padded"
        style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}
      >
        <button className="bmd-button" data-tone="neutral">
          Details
        </button>
        <button className="bmd-button" data-tone="primary">
          Listen
        </button>
      </Card.Footer>
    </Card>
  ),
});

// ----------------------------------------------------
// 4. Interactive / link card with full-bleed header
// ----------------------------------------------------

export const InteractiveCard = meta.story({
  args: {
    variant: "elevated",
    tone: "neutral",
    padding: "md",
    interactive: true,
  },
  render: (args) => (
    <Card as="a" href="#" {...args}>
      <Card.Header
        style={{
          backgroundColor: "var(--surface-subtle, #f3f4f6)",
          padding: "0.75rem 1rem",
        }}
      >
        <h3 style={{ margin: 0 }}>Project Alpha</h3>
      </Card.Header>

      <Card.Body>
        <p style={{ margin: 0, marginBottom: "0.5rem" }}>
          Clickable card using <code>as="a"</code> for navigation.
        </p>
        <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
          Hover and focus states are handled by the <code>interactive</code>{" "}
          prop on the root.
        </p>
      </Card.Body>

      <Card.Footer
        className="bmd-card__footer--padded"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8rem",
          opacity: 0.8,
        }}
      >
        <span>Updated 2 hours ago</span>
        <span>View details →</span>
      </Card.Footer>
    </Card>
  ),
});

// ----------------------------------------------------
// 5. Responsive grid demo (cards + layout primitives)
// ----------------------------------------------------

export const ResponsiveGrid = meta.story({
  name: "Responsive grid with full-bleed headers",
  args: {
    variant: "elevated",
    tone: "neutral",
    padding: "md",
  },
  render: (args) => (
    <LayoutContainer max="page">
      <Grid auto responsive minItemWidth="16rem">
        {[
          { title: "Billing", color: "var(--tone-primary, #2563eb)" },
          { title: "Team", color: "var(--tone-success, #16a34a)" },
          { title: "Notifications", color: "var(--tone-warning, #f59e0b)" },
          { title: "Security", color: "var(--tone-danger, #dc2626)" },
          { title: "API Access", color: "var(--tone-neutral, #4b5563)" },
          { title: "Usage", color: "var(--tone-primary-soft, #93c5fd)" },
        ].map((item) => (
          <Card key={item.title} {...args}>
            <Card.Header
              style={{
                background: item.color,
                color: "white",
                padding: "0.5rem 0.75rem",
              }}
            >
              <Heading level={3}>{item.title}</Heading>
            </Card.Header>

            <Card.Body>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  opacity: 0.9,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                non dui vel ligula efficitur.
              </p>
            </Card.Body>
          </Card>
        ))}
      </Grid>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.8rem",
          opacity: 0.7,
        }}
      >
        Resize the canvas or switch viewports to see cards reflow with{" "}
        <code>LayoutContainer</code> and <code>Grid</code>. Headers remain
        full-bleed while body content stays padded.
      </p>
    </LayoutContainer>
  ),
});
