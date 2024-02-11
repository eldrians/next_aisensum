"use client";

import * as React from "react";

//tanstack
import { flexRender } from "@tanstack/react-table";

//icons
import { ChevronDown, Settings2 } from "lucide-react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
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

const TableComponent = ({
  columns,
  data,
  searchColumnName,
}: {
  columns: any;
  data: any;
  searchColumnName?: string;
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4">
        <div className="w-full flex flex-row order-2 lg:order-1 gap-2">
          <Input
            placeholder={`Search ${searchColumnName}...`}
            value={
              (data.getColumn(searchColumnName)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              data
                .getColumn(searchColumnName)
                ?.setFilterValue(event.target.value)
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
                {data
                  .getAllColumns()
                  .filter((column: any) => column.getCanHide())
                  .map((column: any) => {
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
            {data
              .getAllColumns()
              .filter((column: any) => column.getCanHide())
              .map((column: any) => {
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
            {data.getHeaderGroups().map((headerGroup: any) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
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
            {data.getRowModel().rows?.length ? (
              data.getRowModel().rows.map((row: any) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell: any) => (
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
          {data.getFilteredSelectedRowModel().rows.length} of{" "}
          {data.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => data.previousPage()}
            disabled={!data.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => data.nextPage()}
            disabled={!data.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
