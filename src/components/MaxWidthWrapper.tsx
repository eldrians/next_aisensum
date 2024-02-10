import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// this file is created to make entire layout looks Good
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-4 lg:px-20", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
