"use client";

import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

//api
import { getCustomers } from "@/app/api/customer";

//components
import { TableComponent } from "@/components";
import AddCustomerSection from "../add-customer";
import TableSkeleton from "./table-skeleton";

//shadcn
import * as UI from "@/components/ui";

//types
import { TCustomer } from "@/types/Customer";

export const columns: ColumnDef<TCustomer>[] = [
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
          className="h-3 w-3 rounded-full border border-slate-400"
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
        <UI.dropdown.DropdownMenu>
          <UI.dropdown.DropdownMenuTrigger asChild>
            <UI.button.Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </UI.button.Button>
          </UI.dropdown.DropdownMenuTrigger>
          <UI.dropdown.DropdownMenuContent align="end">
            <UI.dropdown.DropdownMenuLabel>
              Actions
            </UI.dropdown.DropdownMenuLabel>
            <UI.dropdown.DropdownMenuSeparator />
            <UI.dropdown.DropdownMenuItem>Update</UI.dropdown.DropdownMenuItem>
            <UI.dropdown.DropdownMenuItem>Delete</UI.dropdown.DropdownMenuItem>
          </UI.dropdown.DropdownMenuContent>
        </UI.dropdown.DropdownMenu>
      );
    },
  },
];

const TableCustomerSection = () => {
  const [data, setData] = useState<TCustomer[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const { data: res, isLoading, isError }: any = getCustomers();

  useEffect(() => {
    if (res) {
      setData(res);
    }
    table.setPageSize(5);
  }, [res]);

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

  if (isError) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center text-red-600">
        Error
      </main>
    );
  }
  return (
    <UI.card.Card className="w-full lg:w-4/6">
      <UI.card.CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col">
          <UI.card.CardTitle>Customers</UI.card.CardTitle>
          <UI.card.CardDescription>
            Here's a list of customers!
          </UI.card.CardDescription>
        </div>
        <AddCustomerSection type="mobile" />
      </UI.card.CardHeader>
      <UI.card.CardContent>
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <TableComponent
            columns={columns}
            data={table}
            searchColumnName="name"
          />
        )}
      </UI.card.CardContent>
    </UI.card.Card>
  );
};

export default TableCustomerSection;
