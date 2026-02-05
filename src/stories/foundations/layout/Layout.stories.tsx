import * as React from "react";
import preview from "../../../../.storybook/preview";
import { LayoutContainer } from "./LayoutContainer";
import { Heading } from "../typography/Heading";
import { Text } from "../typography/Text";
import { Stack } from "./Stack";
import { Grid } from "./Grid";
import { Card } from "../../components/Card/Card";

const meta = preview.meta({
  title: "Foundations/Layout",
  component: LayoutContainer,
});

export const Default = meta.story({
  args: {
    max: "none",
  },
  argTypes: {
    max: { control: { type: "radio" }, options: ["page", "section", "none"] },
  },

  render: (args) => {
    return (
      <LayoutContainer {...args}>
        <Stack gap={4}>
          <Stack gap={1}>
            <Heading level={1}>Layout Containers</Heading>
            <Text>
              Layout foundations include <em>Grid</em>, <em>Stack</em>, and{" "}
              <em>Inline</em> containers.
            </Text>
          </Stack>
          <Stack gap={1}>
            <Heading level={2}>Grid</Heading>
            <Text>Grid layout with cards:</Text>
          </Stack>
          <Grid auto responsive minItemWidth="16rem">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Card key={item} as="div" variant="outlined">
                <Card.Header>
                  <img
                    src="https://picsum.photos/800/320"
                    alt="Preview"
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </Card.Header>
                <Card.Body>
                  <Stack gap={1}>
                    <Text>This is the content of the card</Text>
                    <div
                      style={{
                        backgroundColor: "lightgray",
                        width: "100%",
                        height: 200,
                      }}
                    />
                  </Stack>
                </Card.Body>
              </Card>
            ))}
          </Grid>
        </Stack>
      </LayoutContainer>
    );
  },
});
