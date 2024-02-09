import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TableComponent from "@/components/Table";
import { Button, buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { ArrowDownToLine, CheckCircle, Leaf, Plus } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import PaginationComponent from "@/components/PaginationComponent";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-days refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Assessment Test For Web Developer :{" "}
            <span className="text-rose-800 ">AISENSUM</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            A web application that serves as a basic customer survey data system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <Heading
                  title={`Products (2)`}
                  description="Manage products for your store"
                />
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <Input type="email" placeholder="Email" />
              <TableComponent />
            </div>
            <div className="w-full">
              <PaginationComponent />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section> */}
    </>
  );
}
