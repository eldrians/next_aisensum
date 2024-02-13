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
import { ArrowUpDown, MoreHorizontal, Pen, Trash2 } from "lucide-react";

//api
import { deleteCustomer, getCustomers } from "@/app/api/customer";

//components
import { Alert, CustomerForm, TableComponent } from "@/components";
import TableSkeleton from "./table-skeleton";

//shadcn
import * as UI from "@/components/ui";

//types
import { TCustomer } from "@/types/Customer";
import { useQueryClient } from "@tanstack/react-query";
import { COLOR_ITEMS } from "@/constants";

const TableCustomerSection = () => {
  const [data, setData] = useState<TCustomer[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const deleteCustomerMutation = deleteCustomer();
  const queryClient = useQueryClient();

  const { data: res, isLoading, isError }: any = getCustomers();

  useEffect(() => {
    if (res) {
      console.log(res);
      setData(res);
    }
    table.setPageSize(5);
  }, [res]);

  const columns: ColumnDef<TCustomer>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <div className="flex flex-row items-center gap-2">
            <h3 className="">Name</h3>
            <div
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
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
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
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
          {COLOR_ITEMS.map((color) =>
            row.getValue("fav_color") === color.hex ? (
              <span className="text-xs">{color.color}</span>
            ) : null
          )}
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex flex-row gap-4 justify-center items-center">
            <Alert
              variant="form"
              btnTitle={
                <Pen className="w-4 h-4 text-zinc-600 cursor-pointer" />
              }
              title={`Update "${row.getValue("name")}"`}
              description={<CustomerForm dataCustomer={row.original} />}
            ></Alert>
            <Alert
              btnTitle={
                <Trash2 className="w-4 h-4 text-red-400 cursor-pointer" />
              }
              title={`Are you sure delete "${row.getValue("name")}"?`}
              description="This action cannot be undone. This will permanently delete your customer and remove your data from our database."
              onClickHandle={() => handleDelete(row.original.id)}
              button="Delete"
            ></Alert>
          </div>
        );
      },
    },
  ];

  const handleDelete = async (customerId: any) => {
    try {
      await deleteCustomerMutation.mutateAsync(customerId);
      const updatedData = data.filter((customer) => customer.id !== customerId);
      setData(updatedData);
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

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
    <div>
      <Alert />
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TableComponent
          columns={columns}
          data={table}
          searchColumnName="name"
        />
      )}
    </div>
  );
};

export default TableCustomerSection;
