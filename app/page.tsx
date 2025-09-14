'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Hero } from "@/components/ui/animated-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Code, Zap, Brain, ArrowRight, Home as HomeIcon, Settings, User, FileText, Shield, HelpCircle } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Development",
      description: "Leverage artificial intelligence to write, optimize, and debug smart contracts automatically with natural language processing."
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Drag & Drop Interface",
      description: "Build complex smart contracts visually with our intuitive drag-and-drop interface, no coding experience required."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Deployment",
      description: "Deploy your smart contracts to Algorand testnet and mainnet with a single click, including automated testing."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <WebGLShader />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Navigation Tabs - Top Center */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <ExpandableTabs 
          tabs={[
            { title: "Dashboard", icon: HomeIcon },
            { title: "Smart Contracts", icon: Code },
            { type: "separator" },
            { title: "AI Tools", icon: Brain },
            { title: "Deploy", icon: Zap },
            { type: "separator" },
            { title: "Profile", icon: User },
            { title: "Settings", icon: Settings }
          ]}
          activeColor="text-primary"
        />
      </div>

      {/* Features Section */}
      <div className="relative z-10 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 sm:mb-16">
            Build the Future of <span className="text-primary">DeFi</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <GlassCard key={index} delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 sm:mt-20">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Ready to Start Building?
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Join thousands of developers building the next generation of decentralized applications.
              </p>
               <GlassButton size="xl" variant="primary" className="rounded-full">
                 Launch Playground <ArrowRight className="w-4 h-4" />
               </GlassButton>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;