import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

export function useDataTables({
  data,
  columns,
  paginationData,
  setPaginationData,
  initialSorting = [],
  initialColumnFilters = [],
  initialColumnVisibility = {},
}) {
  const [columnFilters, setColumnFilters] = useState(initialColumnFilters);
  const [columnVisibility, setColumnVisibility] = useState(
    initialColumnVisibility
  );
  const [sorting, setSorting] = useState(initialSorting);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      sorting,
      pagination: {
        pageIndex: paginationData.page - 1,
        pageSize: paginationData.limit,
      },
    },
    onPaginationChange: (updater) => {
      const newPagination =
        typeof updater === "function"
          ? updater({
              pageIndex: paginationData.page - 1,
              pageSize: paginationData.limit,
            })
          : updater;

      setPaginationData({
        page: newPagination.pageIndex + 1,
        limit: newPagination.pageSize,
      });
    },
    manualPagination: true,
    manualSorting: true,
    pageCount: Math.ceil(paginationData.numOfRecords / paginationData.limit),
  });

  return table;
}
