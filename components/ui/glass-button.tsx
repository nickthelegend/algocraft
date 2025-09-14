"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-card/30 border border-border/50 text-foreground backdrop-blur-sm hover:bg-card/50 hover:border-border",
        primary: "bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm hover:bg-primary/30 hover:border-primary/50",
        outline: "border border-border/50 bg-transparent text-foreground backdrop-blur-sm hover:bg-card/20 hover:border-border",
        ghost: "bg-transparent text-foreground hover:bg-card/20 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8",
        xl: "h-12 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div className="relative z-10">
          {children}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      </Comp>
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }