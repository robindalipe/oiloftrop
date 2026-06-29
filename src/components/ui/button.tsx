import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent bg-clip-padding font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_16px_30px_rgba(22,160,133,0.24)] hover:bg-[color-mix(in_srgb,var(--primary),#000_8%)]",
        outline:
          "border-border bg-background-strong text-foreground hover:border-primary hover:bg-accent hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_srgb,var(--secondary),#000_4%)]",
        ghost: "text-primary hover:bg-primary/8 hover:text-primary",
        link: "rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 text-[0.833rem]",
        sm: "min-h-10 px-4 text-[0.833rem]",
        lg: "min-h-12 px-6 text-[1rem]",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
