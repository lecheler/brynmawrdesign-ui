import React from "react";

import preview from "../../../.storybook/preview";
import { mockShowsData } from "../../data/shows.mock";

import { Table, TableColumn } from "./Table";
import { getBandTheme } from "../../utils/analyticsTransformers";

const meta = preview.meta({
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
});

const showColumns: TableColumn[] = [
  {
    header: "Show Date",
    accessorKey: "date",
    // A locale-independent date format keeps the demo (and its tests) stable
    cell: (info) => {
      const rawValue = info.getValue();
      const date = new Date(rawValue);

      if (isNaN(date.getTime())) return "Invalid Date";

      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const day = String(date.getDate()).padStart(2, "0");
      const year = date.getFullYear();

      return `${month}/${day}/${year}`; // Outputs: "10/05/2026"
    },
    filterFn: "inDateRange", // accepts Date objects, timestamps, or parseable date strings
    meta: {
      filterVariant: "dateRange",
    },
  },
  {
    accessorFn: (row) => row.band.name,
    id: "band",
    // sortingFn: "text",
    header: "Band",
    meta: {
      filterVariant: "select",
    },

    cell: (info) => {
      const value = info.getValue();
      const colorToken = getBandTheme(value.slug).colorVar;
      return (
        <span
          className="bmd-pill-label"
          style={{ backgroundColor: colorToken }}
        >
          {value.name}
        </span>
      );
    },
  },
  { accessorKey: "venue_name", header: "Venue" },
  { accessorKey: "locality", header: "City" },
  { accessorKey: "administrative_area", header: "State/Region" },
  {
    accessorKey: "country_code",
    header: "Country",
    meta: {
      filterVariant: "select",
    },
  },
];
// You can easily spin up another variant (e.g., an empty state)
export const EmptyState = meta.story({
  args: {
    data: [],
    columns: showColumns,
  },
});

export const DefaultLayout = meta.story({
  args: {
    columns: showColumns,
    data: mockShowsData.map((show) => ({
      date: show.date, // Convert date strings to Date objects for proper sorting/filtering
      band: show.band || "Unknown Band",
      venue_name: show.venue.name || "Unknown Venue",
      locality: show.venue.locality || "Unknown City",
      administrative_area:
        show.venue.administrative_area || "Unknown State/Region",
      country_code: show.venue.country_code || "Unknown Country",
    })),
    showFilters: false,
  },
});
