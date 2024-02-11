"use client";

import React from "react";

//components
import { CustomerForm } from "@/components";

//shadcn
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const UpdateCustomerSection = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Update Customers</CardTitle>
      </CardHeader>
      <CardContent>
        <CustomerForm />
      </CardContent>
    </Card>
  );
};

export default UpdateCustomerSection;
