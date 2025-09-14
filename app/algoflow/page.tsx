'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { GitBranch, Workflow } from "lucide-react";

export default function AlgoFlow() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <WebGLShader />
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <GitBranch className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AlgoFlow
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visual algorithm design and workflow automation. Create complex algorithmic processes with drag-and-drop simplicity.
            </p>
          </div>

          <GlassCard className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Workflow className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  Visual workflow builder is under development
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}