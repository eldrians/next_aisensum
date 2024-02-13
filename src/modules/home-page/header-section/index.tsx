import { BaseLayout } from "@/components";
import AddCustomerSection from "../customer-section/add-customer";
import Image from "next/image";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <BaseLayout>
      <div className="flex flex-row justify-between items-center px-4">
        <Link href="/" className=" flex flex-col gap-1">
          <Image
            src="/aisensum-logo.png"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="aisensum"
          />
          <span className="text-white/80 text-xs block lg:hidden font-thin">
            Axel Eldrian Hadiwibowo
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/axeleldrian/"
          className="text-white/80 text-xl font-thin hidden lg:block"
          target="_blank"
        >
          Axel Eldrian Hadiwibowo
        </Link>
        <AddCustomerSection type="mobile" />
      </div>
    </BaseLayout>
  );
};

export default HeaderSection;
