'use client'

import { GlassCard } from "@/components/ui/glass-card";
import { Terminal, Code, Layers, Rocket, Share2 } from "lucide-react";
import Iridescence from "@/components/Iridescence";
import { motion } from "framer-motion";

export default function IDE() {
  const handleStartBuilding = () => {
    window.open('https://ide.algocraft.fun/', '_blank');
  };

  return (
    <div className="min-h-screen overflow-hidden">
      
      {/* Main Hero Section with Iridescence - Centered IDE Content */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Iridescence
            color={[0.1, 0.3, 0.3]}
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
                <Terminal className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                Algorand IDE
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Build, test, and deploy smart contracts with our powerful integrated development environment. Code with confidence on Algorand blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleStartBuilding}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  Start Building
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Hero Section 1: Code Editor - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Advanced Code Editor
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Write smart contracts with syntax highlighting, auto-completion, and real-time error detection for TEAL and PyTeal.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Smart Code Assistance</h3>
                <p className="text-muted-foreground mb-6">Intelligent features to boost your productivity and code quality.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Code className="w-4 h-4" /> Syntax highlighting for TEAL/PyTeal</li>
                  <li className="flex items-center gap-2 text-primary"><Code className="w-4 h-4" /> Auto-completion and snippets</li>
                  <li className="flex items-center gap-2 text-primary"><Code className="w-4 h-4" /> Real-time error detection</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-muted rounded-lg p-6 mx-auto max-w-sm">
                  <pre className="text-sm font-mono text-foreground">// Smart Contract
#pragma version 8
txn ApplicationID
int 0
==</pre>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Hero Section 2: Testing & Debugging - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Layers className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Testing & Debugging
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive testing tools and debugging capabilities to ensure your smart contracts work flawlessly.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Robust Testing Suite</h3>
                <p className="text-muted-foreground mb-6">Test your contracts thoroughly before deployment with our integrated testing framework.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Layers className="w-4 h-4" /> Unit testing framework</li>
                  <li className="flex items-center gap-2 text-primary"><Layers className="w-4 h-4" /> Transaction simulation</li>
                  <li className="flex items-center gap-2 text-primary"><Layers className="w-4 h-4" /> Step-by-step debugging</li>
                </ul>
              </div>
              <div className="text-center">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold">
                  Run Tests
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Hero Section 3: Deployment - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              One-Click Deployment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy your smart contracts to Algorand MainNet or TestNet with a single click. Manage deployments effortlessly.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Seamless Deployment</h3>
                <p className="text-muted-foreground mb-6">Deploy to multiple networks with confidence and track your contract's performance.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> MainNet & TestNet support</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Gas estimation</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Deployment history</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-muted rounded-lg p-6 mx-auto max-w-sm">
                  <p className="text-sm text-foreground">✅ Contract deployed<br />App ID: 123456789</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Call-to-Action Hero Section - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="flex items-center justify-center mb-8">
              <Terminal className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Start Building on Algorand Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the most powerful blockchain IDE for Algorand development. Build, test, and deploy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleStartBuilding}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                Launch IDE
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                View Examples
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}