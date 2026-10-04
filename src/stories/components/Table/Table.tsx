import React from "react";
import {
  useTable,
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  sortFn_alphanumeric,
  sortFn_text,
  sortFn_datetime,
  columnFilteringFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  filterFn_equalsString,
  filterFn_inDateRange,
  filterFn_inNumberRange,
  filterFn_includesString,
  metaHelper,
  ColumnDef,
  Column,
  rowPaginationFeature,
} from "@tanstack/react-table";

import "./Table.css";
import { Icon, IconName } from "../../foundations/icons/Icon";
import { Button } from "../Button/Button";
import { Inline } from "../../foundations/layout/Inline";
import { Input } from "../Input/Input";

interface TableProps<TData> {
  data: TData[];
  columns: Array<ColumnDef<typeof features, TData>>;
}

// allows us to define custom properties for our columns
interface MyColumnMeta {
  filterVariant?: "text" | "range" | "select" | "dateRange";
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
  paginatedRowModel: createPaginatedRowModel(),
  columnFilteringFeature,
  filterFns: {
    includesString: filterFn_includesString,
    inNumberRange: filterFn_inNumberRange,
    inDateRange: filterFn_inDateRange,
    equalsString: filterFn_equalsString,
  },
  columnMeta: metaHelper<MyColumnMeta>(),
  rowPaginationFeature,
});

export function Table<TData>({ data, columns }: TableProps<TData>) {
  const columnHelper = createColumnHelper<typeof features, TData>();

  const filterColumns = React.useMemo(() => {
    return columnHelper.columns(columns).map((col) => {
      // console.log("col:", col);
      return {
        ...col,
        meta: { ...col.meta, filterVariant: col.meta?.filterVariant ?? "text" },
      };
    });
  }, []);

  // console.log("filterColumns:", filterColumns);

  const table = useTable({
    columns: filterColumns,
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
                      <div>
                        {{
                          asc: <Icon name="arrowUp" />,
                          desc: <Icon name="arrowDown" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} />
                        </div>
                      ) : null}
                      <div></div>
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
          <Input
            placeholder="Page #"
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
      <pre data-testid="table-state">
        {JSON.stringify(table.state, null, 2)}
      </pre>
    </div>
  );
};

function Filter({
  column,
}: {
  column: Column<typeof features, any, MyColumnMeta>;
}) {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};
  console.log(
    "columnFilterValue:",
    columnFilterValue,
    "filterVariant:",
    filterVariant,
  );

  return filterVariant === "dateRange" ? (
    <div>
      <div className="filter-row">
        <Input
          placeholder={`Min`}
          type="date"
          aria-label={`${column.id} min`}
          value={(columnFilterValue as [string, string] | undefined)?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [string, string] | undefined) => [
              value,
              old?.[1],
            ])
          }
          className="filter-input"
        />
        <Input
          placeholder={`Max`}
          type="date"
          aria-label={`${column.id} max`}
          value={(columnFilterValue as [string, string] | undefined)?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [string, string] | undefined) => [
              old?.[0],
              value,
            ])
          }
          className="filter-input"
        />
      </div>
      <div className="spacer-xs" />
    </div>
  ) : filterVariant === "range" ? (
    <div>
      <div className="filter-row">
        {/* See faceted column filters example for min max values functionality */}
        <Input
          type="number"
          value={(columnFilterValue as [number, number] | undefined)?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number] | undefined) => [
              value,
              old?.[1],
            ])
          }
          placeholder={`Min`}
          className="filter-input"
        />
        <Input
          type="number"
          value={(columnFilterValue as [number, number] | undefined)?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number] | undefined) => [
              old?.[0],
              value,
            ])
          }
          placeholder={`Max`}
          className="filter-input"
        />
      </div>
      <div className="spacer-xs" />
    </div>
  ) : filterVariant === "select" ? (
    <select
      onChange={(e) => column.setFilterValue(e.target.value)}
      value={columnFilterValue?.toString()}
    >
      {/* See faceted column filters example for dynamic select options */}
      <option value="">All</option>
      <option value="complicated">complicated</option>
      <option value="relationship">relationship</option>
      <option value="single">single</option>
    </select>
  ) : (
    <Input
      onChange={(value) => column.setFilterValue(value)}
      placeholder={`Search...`}
      type="text"
      value={(columnFilterValue ?? "") as string}
    />
    // See faceted column filters example for datalist search suggestions
  );
}

// https://tanstack.com/table/latest/docs/framework/react/examples/sorting
