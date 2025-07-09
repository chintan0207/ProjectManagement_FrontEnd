import { Skeleton } from "../ui/Skeleton";

export function TableSkeleton({ rows = 6 }) {
  return (
    <div className="space-y-2 border p-4 border border-gray-100 rounded-lg">
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} className=" bg-gray-100 h-13 w-full" />
      ))}
    </div>
  );
}
