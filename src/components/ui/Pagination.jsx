import { Button } from "../ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);
    if (startPage > 2) pages.push("...");
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (endPage < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center mt-4 space-x-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-8 px-2"
      >
        <IoIosArrowBack className="h-4 w-4" />
        <span className="ml-1">Prev</span>
      </Button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={idx}
            className="px-2 text-muted-foreground text-sm select-none"
          >
            ...
          </span>
        ) : (
          <Button
            key={idx}
            size="sm"
            variant={page === currentPage ? "default" : "ghost"}
            onClick={() => onPageChange(page)}
            className={`h-8 w-8 p-0 rounded-full ${
              page === currentPage ? "bg-primary text-white" : ""
            }`}
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-8 px-2"
      >
        <span className="mr-1">Next</span>
        <IoIosArrowForward className="h-4 w-4" />
      </Button>
    </div>
  );
};
