'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { Layers, Hammer } from "lucide-react";

export default function ArcCraft() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <WebGLShader />
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Layers className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ArcCraft
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Architecture design and system crafting tools. Build scalable, robust system architectures with intelligent recommendations.
            </p>
          </div>

          <GlassCard className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Hammer className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  Architecture crafting tools are under development
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}