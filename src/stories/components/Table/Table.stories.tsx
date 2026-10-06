import preview from "../../../../.storybook/preview";
import { mockShowsData } from "../../data/shows.mock";

import { Table, TableData } from "./Table";

const meta = preview.meta({
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
});

const showColumns: TableData[] = [
  {
    header: "Date",
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
    accessorKey: "band_name",
    header: "Band",
    meta: {
      filterVariant: "select",
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
    data: mockShowsData.data.map((show) => ({
      // ...show,

      date: show.date, // Convert date strings to Date objects for proper sorting/filtering
      band_name: show.band.name || "Unknown Band",
      venue_name: show.venue.name || "Unknown Venue",
      locality: show.venue.locality || "Unknown City",
      administrative_area:
        show.venue.administrative_area || "Unknown State/Region",
      country_code: show.venue.country_code || "Unknown Country",
    })),
  },
});
