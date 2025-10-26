'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Layers, Hammer, Play, Cloud, Database, Shield, Zap, Settings, Brain, Network } from "lucide-react";

export default function ArcCraft() {
  const architectureTypes = [
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      name: "Cloud Architecture",
      description: "Design scalable cloud-native systems",
      features: ["Multi-cloud support", "Auto-scaling", "Cost optimization"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      name: "Data Architecture",
      description: "Build robust data pipelines and storage",
      features: ["Data modeling", "ETL pipelines", "Analytics ready"]
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      name: "Microservices",
      description: "Distributed system design patterns",
      features: ["Service mesh", "API gateway", "Event-driven"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      name: "Security Architecture",
      description: "Zero-trust security frameworks",
      features: ["Identity management", "Encryption", "Compliance"]
    }
  ];

  const features = [
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Visual Design Canvas",
      description: "Drag-and-drop architecture components"
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "AI Recommendations",
      description: "Intelligent architecture suggestions"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Performance Analysis",
      description: "Real-time architecture validation"
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Infrastructure as Code",
      description: "Generate deployment templates"
    }
  ];

  const components = [
    {
      category: "Compute",
      items: ["Containers", "Serverless", "Virtual Machines", "Edge Computing"]
    },
    {
      category: "Storage",
      items: ["Object Storage", "Block Storage", "File Systems", "Databases"]
    },
    {
      category: "Networking",
      items: ["Load Balancers", "CDN", "VPN", "API Gateway"]
    },
    {
      category: "Security",
      items: ["Firewalls", "Identity", "Encryption", "Monitoring"]
    }
  ];

  const patterns = [
    {
      name: "Event-Driven Architecture",
      description: "Asynchronous communication patterns",
      useCase: "Real-time processing"
    },
    {
      name: "CQRS & Event Sourcing",
      description: "Command Query Responsibility Segregation",
      useCase: "Complex business logic"
    },
    {
      name: "Circuit Breaker",
      description: "Fault tolerance and resilience",
      useCase: "Distributed systems"
    },
    {
      name: "Saga Pattern",
      description: "Distributed transaction management",
      useCase: "Microservices coordination"
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
              <Layers className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ArcCraft
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Architecture design and system crafting tools. Build scalable, robust system architectures with intelligent recommendations
            </p>
            <GlassButton size="xl" className="rounded-full">
              <Play className="w-5 h-5 mr-2" />
              Start Designing
            </GlassButton>
          </div>

          {/* Architecture Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Architecture <span className="text-primary">Types</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {architectureTypes.map((type, index) => (
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
                      Design {type.name.split(' ')[0]}
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

          {/* Component Library */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Component <span className="text-primary">Library</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {components.map((category, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground bg-background/20 rounded px-2 py-1">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Design Patterns */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Design <span className="text-primary">Patterns</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {patterns.map((pattern, index) => (
                <GlassCard key={index}>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {pattern.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      {pattern.description}
                    </p>
                    <div className="text-xs text-primary mb-4">
                      {pattern.useCase}
                    </div>
                    <GlassButton variant="outline" size="sm" className="w-full">
                      Apply Pattern
                    </GlassButton>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Design Process */}
          <div className="mb-16">
            <GlassCard className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Architecture Design Process
                </h2>
                <p className="text-muted-foreground">
                  From requirements to deployment-ready architecture
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Analyze</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Design</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Validate</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Generate</span>
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-primary" />
                  <span className="text-foreground">Deploy</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Craft Your Architecture?
              </h3>
              <p className="text-muted-foreground mb-6">
                Design scalable, secure, and efficient system architectures with AI-powered insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton size="lg" className="rounded-full">
                  <Play className="w-4 h-4 mr-2" />
                  Launch ArcCraft
                </GlassButton>
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