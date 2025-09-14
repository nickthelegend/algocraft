'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Shield, Code, Brain, Zap, Terminal, Wallet, FileText, Play, GitBranch, Layers } from "lucide-react";

export default function AlgorandSmartContractsAI() {
  const frameworks = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      name: "PyTeal",
      description: "Python-based smart contract development with PyTeal library",
      features: ["Python syntax", "TEAL generation", "pytest testing"]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      name: "TealScript",
      description: "TypeScript-based smart contract development",
      features: ["TypeScript syntax", "AlgoKit compiler", "Jest testing"]
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      name: "PuyaPy",
      description: "Pythonic smart contract development with AlgoPy",
      features: ["Simplified syntax", "AlgoPy framework", "Python testing"]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      name: "PuyaTs",
      description: "TypeScript version of PuyaPy framework",
      features: ["Type safety", "Modern syntax", "Jest testing"]
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "AI-Powered Assistant",
      description: "Context-aware AI with RAG-based knowledge retrieval"
    },
    {
      icon: <Terminal className="w-6 h-6 text-primary" />,
      title: "WebContainer IDE",
      description: "Full development environment running in your browser"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Build Pipeline",
      description: "Automated build, test, and deployment workflow"
    },
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      title: "Wallet Integration",
      description: "TestNet/MainNet deployment with transaction monitoring"
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
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Algorand Smart Contract IDE
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose a template to start building your Algorand Smart Contract
            </p>
            <a href="https://algorand-ide.vercel.app/pyteal" target="_blank" rel="noopener noreferrer">
              <GlassButton size="xl" className="rounded-full inline-flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Launch IDE
              </GlassButton>
            </a>
          </div>

          {/* Framework Selection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Choose Your <span className="text-primary">Framework</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {frameworks.map((framework, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <div className="mb-4">
                      {framework.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {framework.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {framework.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {framework.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                    <a href={`https://algorand-ide.vercel.app/${framework.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                      <GlassButton variant="outline" size="sm" className="w-full">
                        Start with {framework.name}
                      </GlassButton>
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Professional <span className="text-primary">Development Environment</span>
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

          {/* Build Pipeline */}
          <div className="mb-16">
            <GlassCard className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Seamless Build to Deployment
                </h2>
                <p className="text-muted-foreground">
                  From code to blockchain in minutes
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Code</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Build</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                 
                  <span className="text-foreground">Test</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Deploy</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Monitor</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Build on Algorand?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join developers building the future of blockchain with our AI-powered IDE
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://algorand-ide.vercel.app/pyteal" target="_blank" rel="noopener noreferrer">
                  <GlassButton size="lg" className="rounded-full inline-flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Launch IDE Now
                  </GlassButton>
                </a>
                <GlassButton variant="outline" size="lg" className="rounded-full">
                  View Templates
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}