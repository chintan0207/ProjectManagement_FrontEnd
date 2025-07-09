import { Button } from "../components/ui/button";
import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

export function SortableHeader({ column, title, setSortingData }) {
  const sortState = column.getIsSorted();

  const handleSort = () => {
    const field = column.id;
    if (!sortState) {
      column.toggleSorting(false); // ascending
      setSortingData({ sortField: field, sortOrder: "asc" });
    } else if (sortState === "asc") {
      column.toggleSorting(true); // descending
      setSortingData({ sortField: field, sortOrder: "desc" });
    } else {
      column.clearSorting(); // reset
      setSortingData({ sortField: "", sortOrder: "" });
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleSort}
      aria-label={`Sort by ${title}`}
      className="flex items-center"
    >
      {title}
      {sortState === "asc" ? (
        <ArrowUp className="ml-2 h-4 w-4" />
      ) : sortState === "desc" ? (
        <ArrowDown className="ml-2 h-4 w-4" />
      ) : (
        <ArrowUpDown className="ml-2 h-4 w-4" />
      )}
    </Button>
  );
}
