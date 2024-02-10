"use client";

import React from "react";

//components
import { CustomerForm } from "@/components";

//shadcn
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const UpdateCustomer = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <CustomerForm />
      </CardContent>
    </Card>
  );
};

export default UpdateCustomer;
