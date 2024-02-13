"use client";

import { BaseLayout } from "@/components";
import TableCustomerSection from "./table-customer";
import AddCustomerSection from "./add-customer";

import * as UI from "@/components/ui";

const CustomerSection = () => {
  return (
    <BaseLayout className="w-full h-fit flex justify-center items-center">
      <div className="w-full h-full flex flex-row justify-center items-start gap-2">
        <UI.card.Card className="w-full lg:w-2/3  h-auto">
          <UI.card.CardContent className="pb-0">
            <div className="mt-6 flex flex-col gap-2">
              <UI.card.CardTitle className="text-zinc-950">
                Customer
              </UI.card.CardTitle>
              <UI.card.CardDescription>
                Here list our customer!
              </UI.card.CardDescription>
            </div>
            <TableCustomerSection />
          </UI.card.CardContent>
        </UI.card.Card>
        <UI.card.Card className="w-1/3 hidden lg:flex lg:flex-col lg:gap-2 justify-center h-fit pt-6 pb-10 items-center">
          <UI.card.CardContent className="pb-0 w-full flex flex-col">
            <div className="flex flex-col mb-4 justify-center items-start">
              <p className="text-sm text-slate-800">
                Adding new customer here!
              </p>
            </div>
            <AddCustomerSection />
          </UI.card.CardContent>
        </UI.card.Card>
      </div>
    </BaseLayout>
  );
};

export default CustomerSection;
