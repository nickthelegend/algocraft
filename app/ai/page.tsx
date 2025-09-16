'use client'

import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Zap, Code, Rocket, Share2 } from "lucide-react";
import Iridescence from "@/components/Iridescence";
import { motion } from "framer-motion";

export default function AI() {
  return (
    <div className="min-h-screen overflow-hidden">
      
      {/* Main Hero Section with Iridescence - Centered AI Content */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Iridescence
            color={[0.8, 0.3, 0.1]}
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
                <Brain className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                AI-Powered Algorithm Generation
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Let artificial intelligence create, analyze, and optimize your algorithms and smart contracts. Code smarter, deploy faster, and innovate with AI assistance in every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors">
                  Generate Code
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  Explore AI Tools
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Hero Section 1: AI Code Generation - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              AI Code Generation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Describe your algorithm or smart contract in natural language, and let AI generate production-ready code for Algorand.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Natural Language to Code</h3>
                <p className="text-muted-foreground mb-6">Input your requirements, get optimized TEAL or PyTeal code instantly.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Supports TEAL, PyTeal, and more</li>
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Context-aware suggestions</li>
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Auto-complete and refactoring</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-muted rounded-lg p-6 mx-auto max-w-sm">
                  <pre className="text-sm font-mono text-foreground">/* AI Generated */
# Prompt: Create a simple escrow contract
app.globalPut(1, txn.amount)</pre>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Hero Section 2: Algorithm Optimization - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Smart Optimization
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI analyzes your code and suggests optimizations for performance, gas efficiency, and security on Algorand.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Performance Tuning</h3>
                <p className="text-muted-foreground mb-6">Get AI-driven insights to reduce complexity and improve execution speed.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Gas cost analysis</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Security vulnerability detection</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Refactoring recommendations</li>
                </ul>
              </div>
              <div className="text-center">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold">
                  Optimize Code
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Hero Section 3: Smart Contract Assistance - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Share2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contract Assistance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI helps debug, audit, and explain your smart contracts, ensuring robust and compliant blockchain applications.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Intelligent Debugging</h3>
                <p className="text-muted-foreground mb-6">AI-powered tools to identify issues and suggest fixes in real-time.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Automated audits</li>
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Code explanations</li>
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Compliance checks</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-muted rounded-lg p-6 mx-auto max-w-sm">
                  <p className="text-sm text-foreground">AI Insight: <br /> This contract is secure for escrow use.</p>
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
              <Brain className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Unlock AI for Your Blockchain Projects
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start using AI to supercharge your algorithm and smart contract development on Algorand today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors">
                Try AI Now
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                Learn More
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  )
}