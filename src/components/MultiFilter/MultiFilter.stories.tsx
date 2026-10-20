import React, { useState } from "react";
import preview from "../../../.storybook/preview";
import { mockVenuesData } from "../../data/venues.mock";

import { MultiFilter, type MultiFilterOption } from "./MultiFilter";

const meta = preview.meta({
  title: "Components/MultiFilter", // Categorize under components layout tiers
  component: MultiFilter,
  tags: ["autodocs"],
});

// Mock Dataset Variant A: Cities/States (50+ entries model)
const mockGeographies: MultiFilterOption[] = [
  { label: "Denver", value: "den", searchString: "Denver, Colorado (USA)" },
  {
    label: "Milwaukee",
    value: "mke",
    searchString: "Milwaukee, Wisconsin (USA)",
  },
  {
    label: "Minneapolis",
    value: "msp",
    searchString: "Minneapolis, Minnesota (USA)",
  },
  { label: "London", value: "lon", searchString: "London, England (UK)" },
];

export const GeographyFilterExample = meta.story({
  render: (args) => {
    const [selectedGeo, setSelectedGeo] = useState<string[]>(["msp"]);
    return (
      <div style={{ maxWidth: "400px" }}>
        <MultiFilter
          {...args}
          value={selectedGeo}
          onChange={(next) => setSelectedGeo(next)}
        />
      </div>
    );
  },
  args: {
    name: "geography",
    label: "Filter Performance Cities",
    placeholder: "Type a city or region name...",
    options: mockGeographies,
  },
});

export const VenueFilterExample = meta.story({
  render: (args) => {
    const [selectedVenues, setSelectedVenues] = useState<string[]>(["msp"]);
    return (
      <div style={{ maxWidth: "400px" }}>
        <MultiFilter
          {...args}
          value={selectedVenues}
          onChange={(next) => setSelectedVenues(next)}
        />
      </div>
    );
  },
  args: {
    name: "venues",
    label: "Filter Performance Venues",
    placeholder: "Type a venue name...",
    options: [...mockVenuesData]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((venue) => {
        return {
          label: venue.name,
          value: venue.place_id,
          searchString: `${venue.name} (${venue.locality} ${venue.administrative_area}, ${venue.country_code})`,
        };
      }),
  },
});
