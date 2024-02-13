"use client";

import { BaseLayout } from "@/components";
import TableCustomerSection from "./table-customer";
import AddCustomerSection from "./add-customer";

import * as UI from "@/components/ui";

const CustomerSection = () => {
  return (
    <BaseLayout>
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
