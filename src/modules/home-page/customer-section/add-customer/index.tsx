"use client";

import React from "react";

//components
import { CustomerForm } from "@/components";
import * as UI from "@/components/ui";

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
        <div className="flex flex-col gap-4 justify-center items-start w-full h-full">
          <CustomerForm />
        </div>
      );
    } else if (type == "mobile") {
      return (
        <UI.drawer.Drawer>
          <UI.drawer.DrawerTrigger asChild>
            <UI.button.Button variant="outline" size="xs" className="lg:hidden">
              <Plus className="h-4 w-4 md:mr-2" />
              <span className="hidden md:block">Add</span>
            </UI.button.Button>
          </UI.drawer.DrawerTrigger>
          <UI.drawer.DrawerContent>
            <div className="mx-auto w-full max-w-xl">
              <UI.drawer.DrawerHeader>
                <UI.drawer.DrawerTitle className="text-xl">
                  Add Customer
                </UI.drawer.DrawerTitle>
                <UI.drawer.DrawerDescription>
                  adding new customer here!
                </UI.drawer.DrawerDescription>
              </UI.drawer.DrawerHeader>
              <div>
                <CustomerForm />
              </div>
            </div>
            <UI.drawer.DrawerFooter className="pt-0">
              <UI.drawer.DrawerClose asChild>
                <UI.button.Button variant="outline">Cancel</UI.button.Button>
              </UI.drawer.DrawerClose>
            </UI.drawer.DrawerFooter>
          </UI.drawer.DrawerContent>
        </UI.drawer.Drawer>
      );
    }
  };

  return <FormType />;
};

export default AddCustomerSection;
