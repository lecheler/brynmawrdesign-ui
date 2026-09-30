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

// 3. Define the actual raw dataset matching the User interface
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
// 4. Create the story variant and pass data down via args
export const DefaultLayout = meta.story({
  args: {
    data: mockUsers,
    columns: columns,
    tableClassName: "my-custom-design-system-table",
  },
});

// 5. You can easily spin up another variant (e.g., an empty state)
export const EmptyState = meta.story({
  args: {
    data: [],
    columns: columns,
  },
});
