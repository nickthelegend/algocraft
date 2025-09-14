import { motion } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-6 sm:p-8 backdrop-blur-sm",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 hover:border-border hover:bg-card/70",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>

    </motion.div>
  )
}