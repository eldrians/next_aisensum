import Link from "next/link";
import { MaxWidthWrapper, NavItems } from "@/components";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  AISENSUM
                  {/* <Icons.logo className="h-10 w-10" /> */}
                </Link>
              </div>
              <div className="block z-50 lg:ml-8 lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
