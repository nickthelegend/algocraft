'use client'

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Hero } from "@/components/ui/animated-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Code, Zap, Brain, ArrowRight, Home as HomeIcon, Settings, User, FileText, Shield, HelpCircle, Play, GitBranch, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const Home = () => {
  const platforms = [
    {
      icon: <Play className="w-8 h-8 text-primary" />,
      title: "Playground",
      description: "Experiment with code, test algorithms, and prototype your ideas in our interactive development environment.",
      href: "/playground"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      title: "AlgoFlow",
      description: "Visual algorithm design and workflow automation. Create complex algorithmic processes with drag-and-drop simplicity.",
      href: "/algoflow"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Algorand Smart Contracts AI",
      description: "AI-powered Algorand smart contract development. Generate, audit, and deploy secure smart contracts with intelligent assistance.",
      href: "/algorand-smart-contracts-ai"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <WebGLShader />
      
      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>


      {/* Features Section */}
      <div className="relative z-10 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 sm:mb-16">
            Explore Our <span className="text-primary">Platforms</span>
          </h2>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <GlassCard key={index}>
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                    {platform.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6 flex-grow">
                    {platform.description}
                  </p>
                  <Link href={platform.href}>
                    <GlassButton variant="primary" className="w-full">
                      Start Building
                    </GlassButton>
                  </Link>
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
                Choose your preferred platform and start creating innovative solutions today.
              </p>
               <Link href="/playground">
                 <GlassButton size="xl" variant="primary" className="rounded-full inline-flex items-center">
                   Start Building
                 </GlassButton>
               </Link>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;