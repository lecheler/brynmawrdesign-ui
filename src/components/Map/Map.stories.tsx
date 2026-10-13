import React, { useMemo, useState } from "react";
import preview from "../../../.storybook/preview";
import { mockBandsData, mockShowsData } from "../../data/shows.mock";
import {
  CheckboxGroup,
  type CheckboxOption,
} from "../CheckboxGroup/CheckboxGroup";
import { Map, type MapMarkerData } from "./Map";

const meta = preview.meta({
  title: "Analytics/Map",
  component: Map,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
});

const sampleConcertVenues: MapMarkerData[] = [
  {
    id: 1,
    lat: 44.9833,
    lng: -93.275,
    title: "First Avenue",
    subtitle: "Played with The Beats (2024)",
  },
  {
    id: 2,
    lat: 44.9734,
    lng: -93.2575,
    title: "The Armory",
    subtitle: "Sold Out Performance (2025)",
  },
  {
    id: 3,
    lat: 44.9496,
    lng: -93.0931,
    title: "Xcel Energy Center",
    subtitle: "Festival Stage Setup",
  },
];

export const Default = meta.story({
  args: {
    zoom: 11,
    center: { lat: 44.9778, lng: -93.265 },
    markers: sampleConcertVenues,

    apiKey:
      // @ts-ignore
      import.meta.env.VITE_APP_GOOGLE_MAPS_KEY ||
      "MOCK_KEY_FOR_STORYBOOK_RENDER",
  },
});

// Interactive Template Controller Block
const InteractiveTemplate: React.FC<any> = (args) => {
  // 1. Grab raw shows from your story's mock parameters
  const rawShows = args.markers || [];

  // Transform bands response into standardized select options
  const bands: CheckboxOption[] = useMemo(() => {
    return mockBandsData.data.map((band) => ({
      label: band.name,
      value: band.slug,
    }));
  }, []);

  const [selectedBands, setSelectedBands] = useState<string[]>([
    "nato-coles",
    "right-here",
  ]);

  // 2. Perform localized filtering over the mapped show records
  const filteredShows = useMemo(() => {
    return rawShows.filter((show: any) => {
      if (selectedBands.length === 0) return true; // Default to showing everything if no filters active

      return selectedBands.some(
        (bandSlug) => show.bandSlug?.toLowerCase() === bandSlug.toLowerCase(),
      );
    });
  }, [rawShows, selectedBands]);

  return (
    <div>
      <CheckboxGroup
        name="bands"
        options={bands}
        value={selectedBands}
        onChange={(nextValues) => setSelectedBands(nextValues)}
      />
      {/* ✅ FIX: Pass the filtered array back into 'markers', not 'data' */}
      <Map {...args} markers={filteredShows} />
    </div>
  );
};

export const Interactive = meta.story({
  // ✅ FIX: Lift the render key OUT of args so Storybook executes it properly
  render: (args) => <InteractiveTemplate {...args} />,
  args: {
    zoom: 11,
    center: { lat: 44.9778, lng: -93.265 },
    // ✅ FIX: Carry the band's slug parameter down inside the marker objects for the filter function
    markers: mockShowsData.data.map((show) => ({
      id: show.id,
      lat: Number(show.venue.latitude),
      lng: Number(show.venue.longitude),
      title: show.venue.name,
      bandSlug: show.band.slug, // Appended to keep your search filters mapping correctly
      subtitle: show.band.name,
    })),
    // @ts-ignore
    apiKey:
      // @ts-ignore
      import.meta.env.VITE_APP_GOOGLE_MAPS_KEY ||
      "MOCK_KEY_FOR_STORYBOOK_RENDER",
  },
});

export const MissingKeyFallback = meta.story({
  args: {
    apiKey: "",
  },
});
