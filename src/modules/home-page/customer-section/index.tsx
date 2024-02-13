"use client";

import { BaseLayout } from "@/components";
import TableCustomerSection from "./table-customer";
import AddCustomerSection from "./add-customer";
import Image from "next/image";
import Link from "next/link";

import * as UI from "@/components/ui";

const CustomerSection = () => {
  return (
    <BaseLayout className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center px-4">
        <Link href="/">
          <Image
            src="/aisensum-logo.png"
            height={30}
            width={150}
            alt="aisensum"
          />
        </Link>
        <AddCustomerSection type="mobile" />
      </div>
      <UI.card.Card className="w-full flex flex-row justify-center items-center h-full">
        <UI.card.CardContent className="w-full lg:w-2/3 ">
          <TableCustomerSection />
        </UI.card.CardContent>
        <UI.card.CardContent className="w-1/3 bg-black rounded-lg h-full hidden lg:block">
          <AddCustomerSection />
        </UI.card.CardContent>
      </UI.card.Card>
    </BaseLayout>
  );
};

export default CustomerSection;
