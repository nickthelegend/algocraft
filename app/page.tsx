'use client'

import GridDistortion from "@/components/GridBackground";
import { Hero } from "@/components/ui/animated-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Code, Zap, Brain, ArrowRight, Home as HomeIcon, Settings, User, FileText, Shield, HelpCircle, Play, GitBranch, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const Home = () => {
  const platforms = [
    {
      image: "/placeholder.svg",
      icon: <Play className="w-8 h-8 text-primary" />,
      title: "Playground",
      description: "Dive into our interactive coding environment where you can experiment with algorithms, test your code in real-time, and prototype innovative solutions without any setup. Perfect for developers, students, and enthusiasts looking to build and iterate quickly.",
      href: "/playground"
    },
    {
      image: "/placeholder.svg",
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      title: "AlgoFlow",
      description: "Design visual workflows and automate algorithmic processes with an intuitive drag-and-drop interface. Streamline your development pipeline, connect tools seamlessly, and visualize data flows to create efficient, scalable applications effortlessly.",
      href: "/algoflow"
    },
    {
      image: "/placeholder.svg",
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "ArcCraft",
      description: "Craft sophisticated system architectures using AI-driven recommendations. Design layered structures, integrate components intelligently, and ensure scalability from the ground up. Ideal for architects building complex, future-proof software ecosystems.",
      href: "/arccraft"
    },
    {
      image: "/placeholder.svg",
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Algo AI",
      description: "Harness the power of artificial intelligence to generate, optimize, and debug algorithms automatically. Input your requirements, and let our AI suggest improvements, predict performance, and evolve your code into efficient, intelligent solutions.",
      href: "/ai"
    },
    {
      image: "/placeholder.svg",
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Algorand Smart Contracts AI",
      description: "Develop secure blockchain smart contracts on Algorand with AI assistance. From generation to auditing, deployment, and optimization, ensure your contracts are robust, compliant, and efficient. Empower your decentralized applications with cutting-edge intelligence.",
      href: "/algorand-smart-contracts-ai"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="h-screen relative">
        <GridDistortion
          imageSrc="https://static.vecteezy.com/system/resources/previews/007/622/535/non_2x/abstract-template-blue-fluid-gradient-shapes-with-wave-lines-on-blue-background-vector.jpg"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        >
          
        </GridDistortion>
        
        {/* Hero Section overlaid on background */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-transparent pointer-events-none">
          <div className="pointer-events-auto">
            <Hero />
          </div>
        </div>
      </div>
      
      {/* Platforms Hero Sections */}
      <div className="relative z-10">
        {platforms.map((platform, index) => (
          <section key={index} className="py-20 border-b border-border/50 last:border-b-0">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 order-2 lg:order-1">
                  <Image
                    src={platform.image}
                    alt={`${platform.title} preview`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-xl object-cover shadow-2xl"
                  />
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <div className="mb-6 flex items-center gap-3">
                    {platform.icon}
                    <span className="text-primary font-semibold text-lg">Platform</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {platform.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {platform.description}
                  </p>
                  <Link href={platform.href} className="group">
                    <GlassButton variant="primary" size="lg" className="gap-2 px-8 py-4 text-lg">
                      Start Building
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </GlassButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Home;