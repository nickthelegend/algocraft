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
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg",
        "shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        "transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-50",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Mosaic glass texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpolygon points=%2210,0 20,10 10,20 0,10%22/%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
      </div>
    </motion.div>
  )
}