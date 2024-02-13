import { cn } from "@/libs/utils";
import { ReactNode } from "react";

const BaseLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-6 md:px-20 lg:px-32", className)}
    >
      {children}
    </div>
  );
};

export default BaseLayout;
