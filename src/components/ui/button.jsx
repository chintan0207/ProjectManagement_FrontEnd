import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define styles
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-PRIMARY text-white hover:bg-PRIMARY-700",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        success: "bg-green-600 text-white hover:bg-green-700",
        info: "bg-sky-500 text-white hover:bg-sky-600",
        warning: "bg-yellow-400 text-black hover:bg-yellow-500",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        dark: "bg-black text-white hover:bg-gray-800",
        link: "underline text-blue-600 hover:text-blue-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
