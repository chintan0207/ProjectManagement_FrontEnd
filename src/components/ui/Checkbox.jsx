import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Styling variants using cva
const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded border border-red border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center",
  {
    variants: {
      color: {
        default:
          "text-black data-[state=checked]:bg-PRIMARY data-[state=checked]:text-white",
        destructive:
          "bg-red-600 text-white data-[state=checked]:border-red-600",
        warning:
          "bg-yellow-400 text-black data-[state=checked]:border-yellow-400",
        success:
          "bg-green-600 text-white data-[state=checked]:border-green-600",
        info: "bg-sky-500 text-white data-[state=checked]:border-sky-500",
        dark: "bg-black text-white data-[state=checked]:border-black",
      },
    },
    defaultVariants: {
      color: "default",
    },
  }
);

const Checkbox = React.forwardRef(({ className, color, ...props }, ref) => {
  return (
    <RadixCheckbox.Root
      ref={ref}
      className={cn(checkboxVariants({ color }), className)}
      {...props}
    >
      <RadixCheckbox.Indicator className="text-current">
        <CheckIcon className="h-4 w-4" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
