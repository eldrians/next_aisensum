"use client";

import React, { useState } from "react";
import Link from "next/link";

import { MaxWidthWrapper, DataTable, CustomerForm } from "@/components";

//shadcn
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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

// icons
import { Plus } from "lucide-react";

//lib
import { cn } from "@/lib/utils";

export default function Home() {
  const [isOn, setIsOn] = useState(true);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-4xl">
          <div className="pb-1">
            <Badge variant="outline">Axel Eldrian Hadiwibowo</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
            Assessment Test For Web Developer
            {/* <span className="text-rose-800 ">AISENSUM</span> */}
          </h1>
          <p className="mt-3 text-lg max-w-prose text-muted-foreground">
            A web application that serves as a basic customer survey data system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/products" className={buttonVariants()}>
              <Button>
                <p>Final Task!</p>
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              My Linkedin &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* 1 */}
      <section className="border-t border-gray-200 bg-gray-100">
        <MaxWidthWrapper>
          <div className="flex flex-row justify-center items-start gap-4 py-4 lg:py-6">
            <Card className="w-full lg:w-4/6">
              <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <CardTitle>Customers</CardTitle>
                  <CardDescription>Here's a list of customers!</CardDescription>
                </div>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button size="xs" className="lg:hidden">
                      <Plus className="h-4 w-4 md:mr-2" />
                      <span className="hidden md:block">Add</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-xl">
                      <DrawerHeader>
                        <DrawerTitle>Add Customer</DrawerTitle>
                        <DrawerDescription>
                          add customer here!
                        </DrawerDescription>
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
              </CardHeader>
              <CardContent>
                <DataTable />
              </CardContent>
            </Card>
            <div className="w-2/5 h-auto hidden lg:flex lg:flex-col lg:gap-4">
              <Button onClick={toggleSwitch}>
                {isOn ? "Update" : "Hapus Update"}
              </Button>
              <Card className={cn("w-full", isOn ? "hidden" : "")}>
                <CardHeader className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <CardTitle>Update Customers</CardTitle>
                    <CardDescription>Update customer here</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <CustomerForm />
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <CardTitle>Add Customers</CardTitle>
                    <CardDescription>Add customer here</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <CustomerForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
