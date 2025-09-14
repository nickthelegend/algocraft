'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { GitBranch, Workflow, Play, Zap, Settings, Brain, MousePointer, Share2 } from "lucide-react";

export default function AlgoFlow() {
  const creationTypes = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      name: "Transactions",
      description: "Payment, asset, and application transactions",
      features: ["Python support", "JavaScript support", "Visual builder"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      name: "Smart Contracts",
      description: "Build contracts with drag & drop",
      features: ["PyTeal generation", "TealScript output", "Logic validation"]
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      name: "Multi-Language",
      description: "Generate code in multiple languages",
      features: ["Python", "JavaScript", "TypeScript"]
    },
    {
      icon: <Share2 className="w-8 h-8 text-primary" />,
      name: "Complex Flows",
      description: "Combine transactions and contracts",
      features: ["Atomic groups", "Conditional logic", "State management"]
    }
  ];

  const features = [
    {
      icon: <MousePointer className="w-6 h-6 text-primary" />,
      title: "Drag & Drop Interface",
      description: "Intuitive visual workflow builder"
    },
    {
      icon: <Play className="w-6 h-6 text-primary" />,
      title: "Real-time Execution",
      description: "Test workflows as you build them"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Custom Nodes",
      description: "Create reusable workflow components"
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary" />,
      title: "Team Collaboration",
      description: "Share and collaborate on workflows"
    }
  ];

  const nodeTypes = [
    {
      category: "Input/Output",
      nodes: ["File Reader", "Database Query", "API Request", "User Input"]
    },
    {
      category: "Processing",
      nodes: ["Filter", "Transform", "Aggregate", "Sort"]
    },
    {
      category: "Logic",
      nodes: ["Condition", "Loop", "Switch", "Merge"]
    },
    {
      category: "Output",
      nodes: ["File Writer", "Database Insert", "API Response", "Notification"]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <WebGLShader />
      
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <GitBranch className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AlgoFlow
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Drag and drop to create transactions in Python, JavaScript etc. and also create smart contracts
            </p>
            <a href="https://algorand-ide.vercel.app/build" target="_blank" rel="noopener noreferrer">
              <GlassButton size="xl" className="rounded-full inline-flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Start Building
              </GlassButton>
            </a>
          </div>

          {/* Creation Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              What You Can <span className="text-primary">Create</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {creationTypes.map((type, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <div className="mb-4">
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {type.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                    <GlassButton variant="outline" size="sm" className="w-full">
                      Build {type.name.split(' ')[0]}
                    </GlassButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <div className="mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Node Library */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Node <span className="text-primary">Library</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nodeTypes.map((category, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.nodes.map((node, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground bg-background/20 rounded px-2 py-1">
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Workflow Process */}
          <div className="mb-16">
            <GlassCard className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Visual Transaction Building
                </h2>
                <p className="text-muted-foreground">
                  From transaction design to blockchain execution
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MousePointer className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Select Type</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Configure</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Group</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Sign</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Submit</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build Algorand Transactions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Create, manage, and execute Algorand transactions with visual drag-and-drop simplicity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://algorand-ide.vercel.app/build" target="_blank" rel="noopener noreferrer">
                  <GlassButton size="lg" className="rounded-full inline-flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Launch AlgoFlow
                  </GlassButton>
                </a>
                <GlassButton variant="outline" size="lg" className="rounded-full">
                  View Examples
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}