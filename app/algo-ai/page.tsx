'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Brain, Cpu, Play, Zap, BarChart, Target, Code, Settings, TrendingUp, Search } from "lucide-react";

export default function AlgoAI() {
  const aiCapabilities = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      name: "Algorithm Generation",
      description: "AI creates optimized algorithms from requirements",
      features: ["Natural language input", "Multiple approaches", "Code generation"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      name: "Performance Optimization",
      description: "Analyze and improve algorithm efficiency",
      features: ["Complexity analysis", "Bottleneck detection", "Optimization suggestions"]
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      name: "Pattern Recognition",
      description: "Identify algorithmic patterns and solutions",
      features: ["Pattern matching", "Similar problems", "Best practices"]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      name: "Smart Debugging",
      description: "AI-powered debugging and error detection",
      features: ["Error analysis", "Fix suggestions", "Test generation"]
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Natural Language Processing",
      description: "Describe algorithms in plain English"
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Performance Analytics",
      description: "Real-time complexity and efficiency analysis"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Instant Optimization",
      description: "Automatic performance improvements"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Multi-Language Support",
      description: "Generate code in multiple programming languages"
    }
  ];

  const algorithmTypes = [
    {
      category: "Sorting & Searching",
      algorithms: ["Quick Sort", "Binary Search", "Merge Sort", "Hash Tables"]
    },
    {
      category: "Graph Algorithms",
      algorithms: ["Dijkstra's", "BFS/DFS", "Minimum Spanning Tree", "Topological Sort"]
    },
    {
      category: "Dynamic Programming",
      algorithms: ["Fibonacci", "Knapsack", "Longest Subsequence", "Edit Distance"]
    },
    {
      category: "Machine Learning",
      algorithms: ["Linear Regression", "Decision Trees", "Neural Networks", "Clustering"]
    }
  ];

  const optimizationAreas = [
    {
      name: "Time Complexity",
      description: "Reduce algorithm execution time",
      improvement: "Up to 90% faster"
    },
    {
      name: "Space Complexity",
      description: "Optimize memory usage patterns",
      improvement: "50-80% less memory"
    },
    {
      name: "Code Quality",
      description: "Improve readability and maintainability",
      improvement: "Industry best practices"
    },
    {
      name: "Scalability",
      description: "Handle larger datasets efficiently",
      improvement: "10x+ data capacity"
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
              <Brain className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Algo AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              AI-powered algorithm generation and optimization. Let artificial intelligence create, analyze, and improve your algorithms
            </p>
            <GlassButton size="xl" className="rounded-full">
            
              Start Creating
            </GlassButton>
          </div>

          {/* AI Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              AI <span className="text-primary">Capabilities</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiCapabilities.map((capability, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <div className="mb-4">
                      {capability.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {capability.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {capability.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {capability.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                    <GlassButton variant="outline" size="sm" className="w-full">
                      Try {capability.name.split(' ')[0]}
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

          {/* Algorithm Library */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Algorithm <span className="text-primary">Library</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {algorithmTypes.map((category, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.algorithms.map((algorithm, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground bg-background/20 rounded px-2 py-1">
                          {algorithm}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Optimization Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Optimization <span className="text-primary">Areas</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {optimizationAreas.map((area, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {area.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {area.description}
                    </p>
                    <div className="text-xs text-primary font-semibold">
                      {area.improvement}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* AI Process */}
          <div className="mb-16">
            <GlassCard className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  AI Algorithm Development Process
                </h2>
                <p className="text-muted-foreground">
                  From idea to optimized implementation
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Understand</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Generate</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Analyze</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Optimize</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Validate</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Supercharge Your Algorithms?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let AI help you create, optimize, and perfect your algorithmic solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton size="lg" className="rounded-full">
                   
                  Launch Algo AI
                </GlassButton>
                <GlassButton variant="outline" size="lg" className="rounded-full">
                  Explore Algorithms
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}