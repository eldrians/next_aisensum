import Link from "next/link";
import { BaseLayout } from "@/components";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-black sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative">
        <BaseLayout>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Image
                    src="/aisensum-logo.png"
                    height={30}
                    width={150}
                    alt="aisensum"
                  />
                </Link>
              </div>
              <div className="block z-50 lg:ml-8 lg:self-stretch"></div>
            </div>
          </div>
        </BaseLayout>
      </header>
    </div>
  );
};

export default Navbar;
