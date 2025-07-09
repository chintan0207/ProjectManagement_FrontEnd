import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "../../lib/utils"; // Replace with your own classNames() if needed

export const DropdownMenu = (props) => (
  <DropdownMenuPrimitive.Root {...props} />
);

export const DropdownMenuPortal = (props) => (
  <DropdownMenuPrimitive.Portal {...props} />
);

export const DropdownMenuTrigger = (props) => (
  <DropdownMenuPrimitive.Trigger {...props} />
);

export const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

export const DropdownMenuItem = ({
  className,
  inset,
  variant = "default",
  ...props
}) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "focus:bg-gray-100",
      inset && "pl-8",
      variant === "destructive" && "text-red-600 focus:bg-red-100",
      className
    )}
    {...props}
  />
);

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none",
      "focus:bg-gray-100",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
);

export const DropdownMenuRadioGroup = (props) => (
  <DropdownMenuPrimitive.RadioGroup {...props} />
);

export const DropdownMenuRadioItem = ({ className, children, ...props }) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none",
      "focus:bg-gray-100",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
);

export const DropdownMenuLabel = ({ className, inset, ...props }) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      "px-2 py-1.5 text-sm font-medium",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

export const DropdownMenuSeparator = ({ className, ...props }) => (
  <DropdownMenuPrimitive.Separator
    className={cn("my-1 h-px bg-gray-200", className)}
    {...props}
  />
);

export const DropdownMenuShortcut = ({ className, ...props }) => (
  <span
    className={cn("ml-auto text-xs text-muted-foreground", className)}
    {...props}
  />
);

export const DropdownMenuGroup = (props) => (
  <DropdownMenuPrimitive.Group {...props} />
);
export const DropdownMenuSub = (props) => (
  <DropdownMenuPrimitive.Sub {...props} />
);

export const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "focus:bg-gray-100",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
);

export const DropdownMenuSubContent = ({ className, ...props }) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-lg",
      className
    )}
    {...props}
  />
);
