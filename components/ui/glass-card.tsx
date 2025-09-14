import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 sm:p-8 backdrop-blur-sm",
        "shadow-lg hover:shadow-2xl hover:shadow-primary/30",
        "transition-all duration-300 hover:border-primary/50 hover:bg-card/70 hover:scale-105",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>

    </div>
  )
}