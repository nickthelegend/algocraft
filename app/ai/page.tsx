'use client'

import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Brain, Zap, Code, Rocket, Share2 } from "lucide-react";
import Iridescence from "@/components/Iridescence";
import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function AI() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <ScrollProgress />
      
      {/* Main Hero Section with Iridescence - Centered AI Content */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Iridescence
            color={[0.25, 0.15, 0.35]}
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
                AI-Powered Smart Contract Development
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Generate, optimize, and audit Algorand smart contracts with AI assistance. From natural language to production-ready code.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">TEAL Generation</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">PyTeal Support</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Security Audits</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Gas Optimization</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton variant="primary" size="lg" className="px-10 py-5 text-lg">
                  Generate Code
                </GlassButton>
                <GlassButton onClick={scrollToFeatures} variant="outline" size="lg" className="px-10 py-5 text-lg">
                  Explore AI Tools
                </GlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Hero Section 1: AI Code Generation - Full Screen */}
      <section id="features" className="min-h-screen py-20 flex items-center bg-background/50">
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
                <p className="text-muted-foreground mb-6">Describe your smart contract in plain English and get optimized TEAL or PyTeal code for Algorand instantly.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Supports TEAL, PyTeal, and more</li>
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Context-aware suggestions</li>
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Auto-complete and refactoring</li>
                </ul>
              </div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 mx-auto max-w-sm relative border border-primary/20 shadow-lg">
                  <div className="absolute top-2 right-2 text-xs text-primary font-semibold">PyTeal</div>
                  <pre className="text-sm font-mono text-foreground text-left whitespace-pre leading-relaxed"><span className="text-blue-400"># AI Generated</span>{`
`}<span className="text-purple-400">from</span> pyteal <span className="text-purple-400">import</span> *{`
`}<span className="text-green-400">def</span> <span className="text-yellow-400">escrow</span>():{`
`}  <span className="text-purple-400">return</span> Seq([{`
`}    App.globalPut({`
`}      Bytes(<span className="text-orange-400">"amount"</span>),{`
`}      Txn.amount(){`
`}    ){`
`}  ])</pre>
                </div>
              </motion.div>
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
                <p className="text-muted-foreground mb-6">AI analyzes your Algorand smart contracts for gas efficiency, security vulnerabilities, and performance bottlenecks.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Gas cost analysis</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Security vulnerability detection</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Refactoring recommendations</li>
                </ul>
              </div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 mx-auto max-w-sm border border-primary/20 shadow-lg">
                  <div className="space-y-3 text-left text-sm">
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-green-400 text-lg">✓</span> 
                      <span className="text-foreground font-medium">Gas Cost Analysis</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-green-400 text-lg">✓</span> 
                      <span className="text-foreground font-medium">Security Scanning</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-green-400 text-lg">✓</span> 
                      <span className="text-foreground font-medium">Code Refactoring</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
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
                <p className="text-muted-foreground mb-6">AI-powered tools identify issues in your Algorand smart contracts and suggest fixes with detailed explanations.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Automated audits</li>
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Code explanations</li>
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Compliance checks</li>
                </ul>
              </div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 mx-auto max-w-sm border border-primary/20 shadow-lg">
                  <p className="text-sm text-muted-foreground mb-2">AI Security Audit:</p>
                  <div className="bg-background/50 rounded px-3 py-2 text-sm text-foreground">
                    <span className="text-green-400">✓</span> Contract is secure for escrow operations on Algorand
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </section>


    </div>
  )
}