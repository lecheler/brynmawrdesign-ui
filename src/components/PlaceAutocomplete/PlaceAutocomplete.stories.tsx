import React, { useState } from "react";
import preview from "../../../.storybook/preview";
import { PlaceAutocomplete, type PlaceSelection } from "./PlaceAutocomplete";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";

const meta = preview.meta({
  title: "Components/PlaceAutocomplete",
  component: PlaceAutocomplete,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: (args) => {
    const [selectedPlace, setSelectedPlace] = useState<PlaceSelection | null>(
      null,
    );

    return (
      <Stack gap={3} style={{ maxWidth: "450px" }}>
        <Stack gap={1}>
          <Text variant="label">Search Venue via Google Places</Text>
          <PlaceAutocomplete
            {...args}
            onPlaceSelect={(place) => {
              setSelectedPlace(place);
              args.onPlaceSelect?.(place);
            }}
          />
        </Stack>

        {selectedPlace && (
          <pre
            style={{
              padding: "12px",
              borderRadius: "6px",
              background: "#f3f4f6",
              fontSize: "12px",
              overflowX: "auto",
            }}
          >
            {JSON.stringify(selectedPlace, null, 2)}
          </pre>
        )}
      </Stack>
    );
  },
  args: {
    placeholder: "Enter a venue or business name...",
    // @ts-ignore
    apiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_KEY || "",
  },
});
