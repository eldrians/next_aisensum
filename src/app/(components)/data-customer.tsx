"use client";

import React from "react";

//components
import { DataTable } from "@/components";
import { AddCustomer } from "@/app/(components)";

//shadcn
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const DataCustomer = () => {
  return (
    <Card className="w-full lg:w-4/6">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-col">
          <CardTitle>Customers</CardTitle>
          <CardDescription>Here's a list of customers!</CardDescription>
        </div>
        <AddCustomer type="mobile" />
      </CardHeader>
      <CardContent>
        <DataTable />
      </CardContent>
    </Card>
  );
};

export default DataCustomer;
