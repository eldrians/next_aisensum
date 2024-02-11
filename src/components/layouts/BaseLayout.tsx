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
      className={cn("mx-auto w-full max-w-screen-xl px-4 lg:px-20", className)}
    >
      {children}
    </div>
  );
};

export default BaseLayout;
