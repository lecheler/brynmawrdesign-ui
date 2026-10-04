import React from "react";
import {
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  sortFn_alphanumeric,
  sortFn_text,
  sortFn_datetime,
  ColumnDef,
} from "@tanstack/react-table";

import preview from "../../../../.storybook/preview";

import { mockShowsData } from "../../data/shows.mock";

import { Table } from "./Table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const meta = preview.meta({
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
});

const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
    datetime: sortFn_datetime,
  },
});

const columns: Array<ColumnDef<typeof features, User>> = [
  {
    accessorKey: "id", // accessorKey shorthand
    header: "ID",
    cell: (info) => info.getValue(),
    sortFn: "alphanumeric",
  },
  {
    accessorKey: "name",
    header: () => "Name",
  },
  {
    accessorKey: "email",
    header: () => "Email",
  },
  {
    accessorKey: "role",
    header: () => "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    // Example of a custom cell template completely controlled visually
    cell: (data: any) => <span>{data.getValue() === "Active" ? "X" : ""}</span>,
  },
];

// Define the actual raw dataset matching the User interface
const mockUsers: User[] = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Taylor Swift",
    email: "taylor@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Jordan Blake",
    email: "jordan@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sam Smith",
    email: "sam@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "Chris Evans",
    email: "chris@example.com",
    role: "Viewer",
    status: "Inactive",
  },
];
// Create the story variant and pass data down via args
export const DefaultLayout = meta.story({
  args: {
    data: mockUsers,
    columns: columns,
    tableClassName: "my-custom-design-system-table",
  },
});

// You can easily spin up another variant (e.g., an empty state)
export const EmptyState = meta.story({
  args: {
    data: [],
    columns: columns,
  },
});

export const Shows = meta.story({
  args: {
    columns: [
      {
        header: "Date",
        accessorKey: "date",
        // A locale-independent date format keeps the demo (and its tests) stable
        cell: (info) => {
          // console.log("info:", info.getValue());
          // return info.getValue().toISOString().slice(0, 10);
          return info.getValue();
        },
        filterFn: "inDateRange", // accepts Date objects, timestamps, or parseable date strings
        meta: {
          filterVariant: "dateRange",
        },
      },

      { accessorKey: "band_name", header: "Band" },
      { accessorKey: "venue_name", header: "Venue" },
      { accessorKey: "locality", header: "City" },
      { accessorKey: "administrative_area", header: "State/Region" },
      { accessorKey: "country_code", header: "Country" },
    ],
    data: mockShowsData,
    tableClassName: "my-custom-design-system-table",
  },
});
