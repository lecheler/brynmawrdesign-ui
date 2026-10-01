import React from "react";
import {
  useTable,
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  sortFn_alphanumeric,
  sortFn_text,
  sortFn_datetime,
  ColumnDef,
} from "@tanstack/react-table";

import "./Table.css";

interface TableProps<TData> {
  data: TData[];
  columns: Array<ColumnDef<typeof features, TData>>;
}

// 1. Define the shape of your data
// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// 2. Give your data a stable reference (module scope, useState, useQuery, etc.)
// const data: Array<Person> = [
//   { firstName: "tanner", lastName: "linsley", age: 24 },
//   { firstName: "tandy", lastName: "miller", age: 40 },
//   { firstName: "joe", lastName: "dirte", age: 45 },
// ];

// // 3. New in v9: declare which features this table uses (none yet)
const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
    datetime: sortFn_datetime,
  },
});

// // 4. Define your columns
// const columns: Array<ColumnDef<typeof features, Person>> = [
//   {
//     accessorKey: "firstName", // accessorKey shorthand
//     header: "First Name",
//     cell: (info) => info.getValue(),
//     sortFn: "alphanumeric",
//   },
//   {
//     accessorFn: (row) => row.lastName, // accessorFn alternative with a custom id
//     id: "lastName",
//     header: () => <span>Last Name</span>,
//     cell: (info) => <i>{info.getValue<string>()}</i>,
//   },
//   {
//     accessorKey: "age",
//     header: () => "Age",
//   },
// ];

export function Table<TData>({ data, columns }: TableProps<TData>) {
  // 5. Create the table instance
  // const table = useTable({
  //   key: "person-table", // needed for devtools, omit if you don't want to use the devtools
  //   features,
  //   columns,
  //   data,
  // });

  // 6. Render markup from the table instance APIs
  const table = useTable({
    key: "person-table",
    columns: columns,
    data: data,
    features: features,
  });
  return (
    <table className="bmd-table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <div
                    className={
                      header.column.getCanSort()
                        ? "bmd-table__sortable-header"
                        : ""
                    }
                    onClick={header.column.getToggleSortingHandler()}
                    title={
                      header.column.getCanSort()
                        ? header.column.getNextSortingOrder() === "asc"
                          ? "Sort ascending"
                          : header.column.getNextSortingOrder() === "desc"
                            ? "Sort descending"
                            : "Clear sort"
                        : undefined
                    }
                  >
                    <table.FlexRender header={header} />
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getAllCells().map((cell) => (
              <td key={cell.id}>
                <table.FlexRender cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// https://tanstack.com/table/latest/docs/framework/react/examples/sorting
