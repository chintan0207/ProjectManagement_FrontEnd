import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define styles
const inputVariants = cva(
  "flex w-full rounded-md border border-gray-200 border-input bg-white px-3 py-2 text-xs text-gray-700 transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-PRIMARY-400 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-9",
        sm: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Input = React.forwardRef(
  ({ className, size, asChild = false, icon, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";

    return (
      <div className="relative w-full">
        <Comp
          className={cn(
            inputVariants({ size }),
            icon && "pr-10", // Add space for icon if it exists
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-cursor">
            {icon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
