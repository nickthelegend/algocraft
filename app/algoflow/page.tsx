'use client'

import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { GitBranch, Play, Zap, Settings, Brain, MousePointer, Share2, Code } from "lucide-react";
import Iridescence from "@/components/Iridescence";
import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function AlgoFlow() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };
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
    <div className="min-h-screen overflow-hidden">
      <ScrollProgress />
      
      {/* Main Hero Section with Iridescence */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Iridescence
            color={[0.2, 0.4, 0.25]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center justify-center mb-8">
                <GitBranch className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                Visual Workflow Builder for Algorand
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Drag and drop to create transactions and smart contracts. Generate code in Python, JavaScript, and more.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Python</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">JavaScript</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">TypeScript</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Drag & Drop</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://flow.algocraft.fun/" target="_blank" rel="noopener noreferrer">
                  <GlassButton variant="primary" size="lg" className="px-10 py-5 text-lg">
                    Start Building
                  </GlassButton>
                </a>
                <GlassButton onClick={scrollToFeatures} variant="outline" size="lg" className="px-10 py-5 text-lg">
                  Explore Features
                </GlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creation Types Section */}
      <section id="features" className="min-h-screen py-24 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What You Can Create
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build transactions, smart contracts, and complex workflows with visual tools for Algorand blockchain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {creationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="text-center p-6">
                    <div className="mb-4 flex justify-center">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {type.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-primary flex items-center justify-center gap-2">
                          <span className="text-green-400">✓</span> {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen py-24 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, test, and deploy Algorand workflows efficiently.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="text-center p-6">
                    <div className="mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Node Library Section */}
      <section className="min-h-screen py-24 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Node Library
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive collection of pre-built nodes for building complex Algorand workflows.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {nodeTypes.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.nodes.map((node, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground bg-primary/5 rounded-lg px-3 py-2">
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Visual Transaction Building
              </h2>
              <p className="text-muted-foreground">
                From transaction design to blockchain execution on Algorand
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <MousePointer className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Select Type</span>
              </motion.div>
              <div className="text-muted-foreground text-xl">→</div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Settings className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Configure</span>
              </motion.div>
              <div className="text-muted-foreground text-xl">→</div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <GitBranch className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Group</span>
              </motion.div>
              <div className="text-muted-foreground text-xl">→</div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Play className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Sign</span>
              </motion.div>
              <div className="text-muted-foreground text-xl">→</div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Share2 className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Submit</span>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}