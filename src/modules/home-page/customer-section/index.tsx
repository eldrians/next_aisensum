import { BaseLayout } from "@/components";
import TableCustomerSection from "./table-customer";
import AddCustomerSection from "./add-customer";

const CustomerSection = () => {
  return (
    <BaseLayout>
      <div className="flex flex-row justify-center items-start gap-4 py-4 lg:py-6">
        <TableCustomerSection />
        <div className="w-2/5 h-auto hidden lg:flex lg:flex-col lg:gap-4">
          <AddCustomerSection />
        </div>
      </div>
    </BaseLayout>
  );
};

export default CustomerSection;
