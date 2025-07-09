/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { flexRender } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { Pagination } from "../ui/Pagination";
import { useDataTables } from "../ui/useDataTables";
import { RowActions } from "../../utils/RowActions";
import { SortableHeader } from "../../utils/SortableHeader";
import FilterBtn from "../../utils/FilterBtn";
import useProjectStore from "../../stores/useProjectStore";
import { createQueryParams } from "../../utils/utility";
import { DetailHeaderPaths } from "../../utils/HeaderPaths";
import { formatDistanceToNow } from "date-fns";
import { TableSkeleton } from "../skeletons/TableSkeleton";

export function Projects() {
  const {
    project,
    projects,
    isProjectLoading,
    isProjectsLoading,
    getProjects,
    paginationData,
    setPaginationData,
    sortingData,
    setSortingData,
    searchFilter,
    setSearchFilter,
  } = useProjectStore();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchDebounceRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  const [showFilters, setShowFilters] = useState(false);

  // Initial setup from URL
  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";

    setSearchValue(search);
    setPaginationData({ ...paginationData, page, limit });
    setSearchFilter({ ...searchFilter, search });
  }, []);

  // Debounced Search Handler
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);

    searchDebounceRef.current = setTimeout(() => {
      setSearchFilter({ ...searchFilter, search: value });
      setPaginationData({ ...paginationData, page: 1 });
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, []);

  // Sync URL with pagination, sorting, search
  useEffect(() => {
    const params = {};

    if (paginationData.page) params.page = paginationData.page.toString();
    if (paginationData.limit) params.limit = paginationData.limit.toString();
    if (searchFilter.search) params.search = searchFilter.search;

    if (sortingData.sortField !== "createdAt")
      params.sortField = sortingData.sortField;
    if (sortingData.sortOrder !== "desc")
      params.sortOrder = sortingData.sortOrder;

    const query = createQueryParams(params);

    if (Object.keys(params).length > 0) {
      setSearchParams(query);
      navigate(`/projects${query}`);
    } else {
      setSearchParams({});
      navigate(`/projects`);
    }
  }, [paginationData.page, paginationData.limit, searchFilter, sortingData]);

  useEffect(() => {
    getProjects();
  }, [paginationData.limit, paginationData.page, sortingData, searchFilter]);

  const curPage = (pageNum) => {
    setPaginationData({ ...paginationData, page: pageNum });
  };

  const handleEdit = (id) => navigate(`/projects/edit/${id}`);
  const handleView = (id) => alert("View: " + id);
  const handleDelete = (id) => {
    alert("Delete: " + id);
  };

  const columns = [
    {
      id: "srNo",
      header: "Sr No",
      cell: ({ table, row }) => {
        const visibleRows = table.getRowModel().rows;
        const rowIndex = visibleRows.findIndex((r) => r.id === row.id);
        return (
          <span>
            {rowIndex + 1 + (paginationData.page - 1) * paginationData.limit}
          </span>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <SortableHeader
          column={column}
          title="Project Name"
          setSortingData={setSortingData}
        />
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <span>{row.original.description}</span>,
    },
    {
      accessorKey: "createdBy.fullname",
      header: "Name",
      cell: ({ row }) => <span>{row.original.createdBy.fullname}</span>,
    },
    {
      accessorKey: "createdBy.email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.createdBy.email}</span>,
    },
    {
      accessorKey: "members",
      header: "Members",
      cell: ({ row }) => <span>{row.original.totalMembers}</span>,
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => {
        const createdAt = row.original.createdAt;
        return (
          <span>
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </span>
        );
      },
    },
    {
      id: "action",
      header: "Action",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => (
        <RowActions
          id={row.original.projectId}
          onEdit={handleEdit}
          onView={handleView}
          onDelete={handleDelete}
          entityName="project"
        />
      ),
    },
  ];

  const table = useDataTables({
    data: projects,
    columns,
    paginationData,
    setPaginationData,
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <DetailHeaderPaths label="Projects" />
        <Button variant="square-btn" className="text-white h-10">
          <Link to="/projects/add" className="flex items-center gap-1">
            <FaPlus /> Add Project
          </Link>
        </Button>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-3">
          <FilterBtn
            showFilters={showFilters}
            onClick={() => setShowFilters(!showFilters)}
          />
          {!showFilters && (
            <Input
              placeholder="Search Projects..."
              className="w-full sm:max-w-xs"
              value={searchValue}
              onChange={handleSearchChange}
            />
          )}
        </div>
        {showFilters && (
          <div className=" card-box mt-4 bg-white shadow p-6 rounded">
            <Input
              placeholder="Search Projects..."
              className="w-full sm:max-w-xs"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        )}
      </div>

      <div className="card-box bg-white shadow py-3 p-6 rounded">
        <div className="flex items-center pb-4">
          <h2 className="text-2xl font-semibold">Projects List</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="pagination-btn" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((col) => col.getCanHide())
                .map((col) => (
                  <DropdownMenuCheckboxItem
                    key={col.id}
                    className="capitalize"
                    checked={col.getIsVisible()}
                    onCheckedChange={(val) => col.toggleVisibility(!!val)}
                  >
                    {col.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          {isProjectsLoading ? (
            <TableSkeleton />
          ) : (
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>

        {paginationData.numberOfRecords > 0 && (
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Rows per page:
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="page-size" size="sm">
                    {paginationData.limit}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {[1, 2, 3, 5, 10, 20].map((size) => (
                    <DropdownMenuItem
                      key={size}
                      onClick={() => {
                        setPaginationData({
                          ...paginationData,
                          limit: size,
                          page: 1,
                        });
                      }}
                    >
                      {size}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-sm text-muted-foreground">
                {Math.min(
                  (paginationData.page - 1) * paginationData.limit + 1,
                  paginationData.numberOfRecords
                )}
                –
                {Math.min(
                  paginationData.page * paginationData.limit,
                  paginationData.numberOfRecords
                )}{" "}
                of {paginationData.numberOfRecords}
              </span>
            </div>
            <Pagination
              currentPage={paginationData.page}
              totalPages={Math.ceil(
                paginationData.numberOfRecords / paginationData.limit
              )}
              onPageChange={curPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
