"use client";

import React from "react";

//component
import { CustomerForm } from "@/components";

//shadcnui
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

//icon
import { Plus } from "lucide-react";

const AddCustomerSection = ({
  type = "desktop",
}: {
  type?: "mobile" | "desktop";
}) => {
  const FormType = () => {
    if (type == "desktop") {
      return (
        <div>
          <h1>Add Customer</h1>
          <CustomerForm />
        </div>
        // <Card className="w-full">
        //   <CardHeader>
        //     <CardTitle>Add Customers | desktop</CardTitle>
        //   </CardHeader>
        //   <CardContent>
        //     <CustomerForm />
        //   </CardContent>
        // </Card>
      );
    } else if (type == "mobile") {
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button 
            variant="outline"
            size="xs" className="lg:hidden">
              <Plus className="h-4 w-4 md:mr-2" />
              <span className="hidden md:block">Add</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-xl">
              <DrawerHeader>
                <DrawerTitle>Add Customer</DrawerTitle>
                <DrawerDescription>add customer here!</DrawerDescription>
              </DrawerHeader>
              <div>
                <CustomerForm />
              </div>
            </div>
            <DrawerFooter className="pt-0">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    }
  };

  return <FormType />;
};

export default AddCustomerSection;
