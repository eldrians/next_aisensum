"use client";

import * as React from "react";
import { flexRender } from "@tanstack/react-table";
import { ChevronDown, Settings2 } from "lucide-react";

// shadcn
import * as UI from "@/components/ui";

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
    <div className="w-full min-h-[520px]">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center py-4">
        <div className="w-full flex flex-row order-2 lg:order-1 gap-2">
          <UI.input.Input
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
            className="w-5/6 lg:w-full "
          />
          <div className="w-1/6 flex justify-center items-center lg:hidden">
            <UI.dropdown.DropdownMenu>
              <UI.dropdown.DropdownMenuTrigger
                asChild
                className="w-full order-1 lg:mb-0 lg:order-2"
              >
                <UI.button.Button variant="outline">
                  <Settings2 className="h-5 w-5 "></Settings2>
                </UI.button.Button>
              </UI.dropdown.DropdownMenuTrigger>
              <UI.dropdown.DropdownMenuContent align="end">
                {data
                  .getAllColumns()
                  .filter((column: any) => column.getCanHide())
                  .map((column: any) => {
                    return (
                      <UI.dropdown.DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </UI.dropdown.DropdownMenuCheckboxItem>
                    );
                  })}
              </UI.dropdown.DropdownMenuContent>
            </UI.dropdown.DropdownMenu>
          </div>
        </div>
        <UI.dropdown.DropdownMenu>
          <UI.dropdown.DropdownMenuTrigger
            asChild
            className="hidden lg:flex w-full lg:w-fit lg:ml-3 order-1 mb-4 lg:mb-0 lg:order-2"
          >
            <UI.button.Button variant="outline">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </UI.button.Button>
          </UI.dropdown.DropdownMenuTrigger>
          <UI.dropdown.DropdownMenuContent align="end">
            {data
              .getAllColumns()
              .filter((column: any) => column.getCanHide())
              .map((column: any) => {
                return (
                  <UI.dropdown.DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </UI.dropdown.DropdownMenuCheckboxItem>
                );
              })}
          </UI.dropdown.DropdownMenuContent>
        </UI.dropdown.DropdownMenu>
      </div>
      <div className="rounded-md border">
        <UI.table.Table>
          <UI.table.TableHeader>
            {data.getHeaderGroups().map((headerGroup: any) => (
              <UI.table.TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => {
                  return (
                    <UI.table.TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </UI.table.TableHead>
                  );
                })}
              </UI.table.TableRow>
            ))}
          </UI.table.TableHeader>
          <UI.table.TableBody>
            {data.getRowModel().rows?.length ? (
              data.getRowModel().rows.map((row: any) => (
                <UI.table.TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell: any) => (
                    <UI.table.TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </UI.table.TableCell>
                  ))}
                </UI.table.TableRow>
              ))
            ) : (
              <UI.table.TableRow>
                <UI.table.TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </UI.table.TableCell>
              </UI.table.TableRow>
            )}
          </UI.table.TableBody>
        </UI.table.Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 px-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {data.getFilteredRowModel().rows.length} customers
        </div>
        <div className="space-x-2">
          <UI.button.Button
            variant="outline"
            size="sm"
            onClick={() => data.previousPage()}
            disabled={!data.getCanPreviousPage()}
          >
            Previous
          </UI.button.Button>
          <UI.button.Button
            variant="outline"
            size="sm"
            onClick={() => data.nextPage()}
            disabled={!data.getCanNextPage()}
          >
            Next
          </UI.button.Button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
