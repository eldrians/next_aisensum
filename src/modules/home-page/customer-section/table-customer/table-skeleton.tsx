import * as UI from "@/components/ui";

const TableSkeleton = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 min-h-screen items-center">
      <div className="flex flex-row w-full gap-4">
        <UI.skeleton.Skeleton className="w-5/6 h-[40px]" />
        <UI.skeleton.Skeleton className="w-1/6 h-[40px]" />
      </div>
      <UI.skeleton.Skeleton className="w-full h-[200px]" />
    </div>
  );
};

export default TableSkeleton;
