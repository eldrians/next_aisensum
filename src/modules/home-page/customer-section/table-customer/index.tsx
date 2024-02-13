"use client";

import React, { useEffect } from "react";

//components
import { TableComponent } from "@/components";
import AddCustomerSection from "../add-customer";

//shadcn
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
//types
import { TCustomer } from "@/types/Customer";

//tanstack
import { useState } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "@/app/api/customer";

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

const TableCustomerSection = () => {
  const [data, setData] = useState<TCustomer[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const {
    data: queryData,
    isLoading,
    isError,
  } = useQuery<TCustomer[]>({
    queryKey: ["customer"],
    queryFn: fetchCustomers,
  });

  useEffect(() => {
    console.log("queryData changed:", queryData);
    if (queryData) {
      console.log(queryData);
      setData(queryData);
    }
  }, [queryData]);

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

  if (isLoading) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center">
        It Is Loading ...
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center">
        It Is Error ...
      </main>
    );
  }
  return (
    <Card className="w-full lg:w-4/6">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col">
          <CardTitle>Customers</CardTitle>
          <CardDescription>Here's a list of customers!</CardDescription>
        </div>
        <AddCustomerSection type="mobile" />
      </CardHeader>
      <CardContent>
        <TableComponent
          columns={columns}
          data={table}
          searchColumnName="name"
        />
      </CardContent>
    </Card>
  );
};

export default TableCustomerSection;
