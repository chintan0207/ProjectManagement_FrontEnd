import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define styles
const inputVariants = cva(
  "flex w-full rounded-md border border-gray-200 border-input bg-white px-3 py-2 text-xs text-gray-700  transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 disabled:cursor-not-allowed disabled:opacity-50",
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
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";
    return (
      <Comp
        className={cn(inputVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
