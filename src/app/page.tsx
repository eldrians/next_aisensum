import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TableComponent from "@/components/Table";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { ArrowDownToLine, CheckCircle, Leaf, Plus } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import PaginationComponent from "@/components/PaginationComponent";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DataTableDemo } from "@/components/Tes";

export default function Home() {
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
        <MaxWidthWrapper className="flex flex-row justify-center items-start gap-4 h-fit py-6">
          <Card className="w-4/6 p-6">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <Heading
                    title="Customers"
                    description="Here's a list of customers!"
                  />
                  <Button size="sm" className="sm:hidden">
                    <Plus className="mr-2 h-4 w-4" /> Add New
                  </Button>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <DataTableDemo></DataTableDemo>
              </div>
            </div>
          </Card>

          <Card className="w-2/6 p-6 h-auto">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <Heading
                    title="Add customer"
                    description="add customer here!"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2 ">
                  <Label htmlFor="terms" className="text-xs">
                    Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="terms" className="text-xs">
                    Username (instagram)
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="terms" className="text-xs">
                    Favourite Color
                  </Label>
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full gap-2 flex flex-row justify-end">
                <Link href="/products" className={buttonVariants()}>
                  <Button className="text-xs" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add New
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
