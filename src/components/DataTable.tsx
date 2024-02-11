"use client";

import * as React from "react";
import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Search,
  Settings2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const data: Customer[] = [
  {
    id: "m5gr84i9",
    name: "Axel Eldrian Hadiwibowo",
    username_ig: "axeldrian_",
    fav_color: "#FF0000",
  },
  {
    id: "3u1reuv4",
    name: "Aldrin Hadiwibowo",
    username_ig: "aldrin45",
    fav_color: "#FFF",
  },
  {
    id: "derv1ws0",
    name: "Ella Ismalina",
    username_ig: "Monserrat44",
    fav_color: "#000",
  },
  {
    id: "5kma53ae",
    name: "Elon Musk",
    username_ig: "Silas22",
    fav_color: "#FF7F00",
  },
  {
    id: "bhqecj4p",
    name: "Xi Jinping",
    username_ig: "carmella",
    fav_color: "#00FF00",
  },
];

export type Customer = {
  id: string;
  name: string;
  username_ig: string;
  fav_color: string;
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex flex-row items-center gap-2">
          <h3 className="">Name</h3>
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="cursor-pointer group"
          >
            <ArrowUpDown className="h-3 w-3 group-hover:font-bold group-hover:text-slate-900 " />
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("name")}</div>;
    },
  },
  {
    accessorKey: "username_ig",
    header: ({ column }) => {
      return (
        <div className="flex flex-row items-center gap-2">
          <h3 className="">Instagram</h3>
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="cursor-pointer group"
          >
            <ArrowUpDown className="h-3 w-3 group-hover:font-bold group-hover:text-slate-900 " />
          </div>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-xs">@{row.getValue("username_ig")}</div>
    ),
  },
  {
    accessorKey: "fav_color",
    header: "Color",
    cell: ({ row }) => (
      <div className="capitalize flex flex-row gap-1 items-center">
        <div
          style={{ backgroundColor: row.getValue("fav_color") }}
          className="h-3 w-3 rounded-full"
        />
        <div className="lowercase text-xs">{row.getValue("fav_color")}</div>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const DataTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4">
        <div className="w-full flex flex-row order-2 lg:order-1 gap-2">
          <Input
            placeholder="Search Name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="w-5/6 lg:w-full"
          />
          <div className="w-1/6 flex justify-center items-center lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="w-full order-1 lg:mb-0 lg:order-2"
              >
                <Button variant="outline">
                  <Settings2 className="h-5 w-5 "></Settings2>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="hidden lg:flex w-full lg:w-fit lg:ml-3 order-1 mb-4 lg:mb-0 lg:order-2"
          >
            <Button variant="outline">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
