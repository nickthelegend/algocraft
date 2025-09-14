'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Code, Play, Terminal, Zap, FileText, Settings, Brain, Layers } from "lucide-react";

export default function Playground() {
  const languages = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      name: "JavaScript",
      description: "Modern ES6+ with Node.js runtime",
      features: ["Real-time execution", "NPM packages", "Console output"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      name: "Python",
      description: "Python 3.x with popular libraries",
      features: ["Instant feedback", "Data science libs", "Algorithm testing"]
    },
    {
      icon: <Terminal className="w-8 h-8 text-primary" />,
      name: "TypeScript",
      description: "Type-safe JavaScript development",
      features: ["IntelliSense", "Error checking", "Modern syntax"]
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      name: "HTML/CSS",
      description: "Frontend prototyping and design",
      features: ["Live preview", "Responsive design", "CSS frameworks"]
    }
  ];

  const features = [
    {
      icon: <Play className="w-6 h-6 text-primary" />,
      title: "Instant Execution",
      description: "Run code immediately with real-time output"
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "AI Code Assistant",
      description: "Get help with debugging and optimization"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Code Templates",
      description: "Start with pre-built algorithm templates"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Customizable Environment",
      description: "Configure your development preferences"
    }
  ];

  const templates = [
    {
      name: "Sorting Algorithms",
      description: "Bubble sort, quick sort, merge sort implementations",
      language: "JavaScript"
    },
    {
      name: "Data Structures",
      description: "Arrays, linked lists, trees, and graphs",
      language: "Python"
    },
    {
      name: "API Integration",
      description: "Fetch data and handle REST API responses",
      language: "TypeScript"
    },
    {
      name: "Interactive UI",
      description: "Responsive components and animations",
      language: "HTML/CSS"
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
            
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Code Playground
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Play with the smart contract examples, created by our community devs
            </p>
            <GlassButton size="xl" className="rounded-full inline-flex items-center">
             
              Start Coding
            </GlassButton>
          </div>



          {/* Playground Templates */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Playground <span className="text-primary">Templates</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Explore community-created smart contract templates.
            </p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <GlassCard>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Hello World
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Hello world program with PyTeal/Python.
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-primary">PyTeal</span>
                    <span className="text-xs text-muted-foreground">Beginner</span>
                  </div>
                  <a href="https://algorand-ide.vercel.app/play/hello_world" target="_blank" rel="noopener noreferrer">
                    <GlassButton variant="outline" size="sm" className="w-full">
                      Launch
                    </GlassButton>
                  </a>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    NFT Marketplace
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A smart contract for creating and managing an NFT marketplace.
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-primary">PyTeal</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <a href="https://algorand-ide.vercel.app/play/nft_marketplace" target="_blank" rel="noopener noreferrer">
                    <GlassButton variant="outline" size="sm" className="w-full">
                      Launch
                    </GlassButton>
                  </a>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Token Minter
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A smart contract for minting and managing fungible tokens.
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-primary">PyTeal</span>
                    <span className="text-xs text-muted-foreground">Intermediate</span>
                  </div>
                  <a href="https://algorand-ide.vercel.app/play/tok_minter" target="_blank" rel="noopener noreferrer">
                    <GlassButton variant="outline" size="sm" className="w-full">
                      Launch
                    </GlassButton>
                  </a>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Experimenting?
              </h3>
              <p className="text-muted-foreground mb-6">
                Jump into our interactive playground and bring your ideas to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton size="lg" className="rounded-full inline-flex items-center">
                 
                  Launch Playground
                </GlassButton>
                <GlassButton variant="outline" size="lg" className="rounded-full">
                  Browse Templates
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}