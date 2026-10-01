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
  createPaginatedRowModel,
  rowPaginationFeature,
} from "@tanstack/react-table";

import "./Table.css";
import { Icon, IconName } from "../../foundations/icons/Icon";
import { Button } from "../Button/Button";
import { Inline } from "../../foundations/layout/Inline";
import { TextInput } from "../TextInput/TextInput";

interface TableProps<TData> {
  data: TData[];
  columns: Array<ColumnDef<typeof features, TData>>;
}

// New in v9: declare which features this table uses
const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: {
    alphanumeric: sortFn_alphanumeric,
    text: sortFn_text,
    datetime: sortFn_datetime,
  },
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

export function Table<TData>({ data, columns }: TableProps<TData>) {
  const table = useTable({
    columns: columns,
    data: data,
    features: features,
  });
  return (
    <div className="bmd-table">
      <table>
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
                        asc: <Icon name="arrowUp" />,
                        desc: <Icon name="arrowDown" />,
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
      <PaginationControls table={table} />
    </div>
  );
}
interface PaginationControlsProps {
  table: any;
}
const PaginationControls = ({ table }: PaginationControlsProps) => {
  const paginationButtons = [
    {
      icon: "chevronsLeft" as IconName,
      onClick: () => table.firstPage(),
      disabled: !table.getCanPreviousPage(),
    },
    {
      icon: "chevronLeft" as IconName,
      onClick: () => table.previousPage(),
      disabled: !table.getCanPreviousPage(),
    },
    {
      icon: "chevronRight" as IconName,
      onClick: () => table.nextPage(),
      disabled: !table.getCanNextPage(),
    },
    {
      icon: "chevronsRight" as IconName,
      onClick: () => table.lastPage(),
      disabled: !table.getCanLastPage(),
    },
  ];
  return (
    <div className="bmd-table__pagination-controls-wrapper">
      <Inline gap={3}>
        <Inline gap={0}>
          {paginationButtons.map(({ icon, onClick, disabled }) => (
            <Button
              key={icon} // Unique identifier
              icon={{ name: icon }}
              onClick={onClick}
              disabled={disabled}
              size="xs"
              shape="square"
              tone="neutral"
              variant="ghost"
            />
          ))}
        </Inline>

        <Inline gap={1}>
          <span>Page</span>
          <strong>
            {(table.state.pagination.pageIndex + 1).toLocaleString()} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
          <span>| Go to page:</span>
          <TextInput
            name="page-index"
            type="number"
            min="1"
            max={table.getPageCount()}
            value={table.state.pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </Inline>
        <select
          name="page-row-size"
          value={table.state.pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
          <option value={Infinity}>Show All</option>
        </select>
      </Inline>
      {/* <pre data-testid="table-state">
        {JSON.stringify(table.state, null, 2)}
      </pre> */}
    </div>
  );
};

// https://tanstack.com/table/latest/docs/framework/react/examples/sorting
