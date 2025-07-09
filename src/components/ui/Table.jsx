import { cn } from "../../lib/utils"; // Make sure this utility exists or replace it with classNames

export const Table = ({ className, variant = "default", ...props }) => {
  return (
    <div className="relative w-full overflow-x-auto border border-gray-200 rounded-lg">
      <table
        className={cn(
          "w-full text-sm",
          variant === "default" && "text-black",
          variant === "outlined" && "border-primary text-red",
          variant === "zebra" && "text-black",
          className
        )}
        {...props}
      />
    </div>
  );
};

export const TableHeader = ({ className, variant = "default", ...props }) => {
  return (
    <thead
      className={cn(
        "text-white",
        variant === "default" && "bg-red",
        variant === "outlined" && "bg-red",
        variant === "zebra" && "bg-primary",
        className
      )}
      {...props}
    />
  );
};

export const TableBody = ({ className, variant = "default", ...props }) => {
  return (
    <tbody
      className={cn(
        variant === "zebra" && "[&>tr:nth-child(odd)]:bg-gray-100",
        className
      )}
      {...props}
    />
  );
};

export const TableFooter = ({ className, variant = "default", ...props }) => {
  return (
    <tfoot
      className={cn(
        "border-t font-medium",
        variant === "default" && "bg-gray-50 text-black",
        variant === "outlined" && "bg-white text-black",
        variant === "zebra" && "bg-gray-50 text-black",
        className
      )}
      {...props}
    />
  );
};

export const TableRow = ({ className, variant = "default", ...props }) => {
  return (
    <tr
      className={cn(
        "transition-colors border-b border-gray-200",
        variant === "outlined" && "border-gray-300 bg-primary",
        variant === "default" && "hover:bg-gray-100 bg-white",
        variant === "zebra" && "",
        className
      )}
      {...props}
    />
  );
};

export const TableHead = ({ className, ...props }) => {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left text-sm font-semibold whitespace-nowrap text-black",
        className
      )}
      {...props}
    />
  );
};

export const TableCell = ({ className, ...props }) => {
  return (
    <td
      className={cn(
        "px-4 py-3 text-sm text-black whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
};

export const TableCaption = ({ className, ...props }) => {
  return (
    <caption
      className={cn("mt-4 text-sm text-gray-500", className)}
      {...props}
    />
  );
};
