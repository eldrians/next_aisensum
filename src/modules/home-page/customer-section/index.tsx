import { MaxWidthWrapper } from "@/components";
import { AddCustomer, DataCustomer } from "@/app/(components)";
const CustomerSection = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-row justify-center items-start gap-4 py-4 lg:py-6">
        <DataCustomer />
        <div className="w-2/5 h-auto hidden lg:flex lg:flex-col lg:gap-4">
          <AddCustomer />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerSection;
