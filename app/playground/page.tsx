'use client'

import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
import { Code, Play, Zap, Share2, Rocket } from "lucide-react";
import Iridescence from "@/components/Iridescence";
import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Playground() {
  const handleStartCoding = () => {
    window.open('https://play.algocraft.fun/', '_blank');
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <ScrollProgress />
      
      {/* Main Hero Section with Iridescence - Centered Playground Content */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Iridescence
            color={[0.15, 0.25, 0.4]}
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
                <Play className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                Interactive Smart Contract Playground
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                Write, test, and deploy Algorand smart contracts in real-time. Share your work with the community and collaborate seamlessly.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">TEAL</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">PyTeal</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Algorand Network</span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">WalletConnect</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton onClick={handleStartCoding} variant="primary" size="lg" className="px-10 py-5 text-lg">
                  Start Coding
                </GlassButton>
                <GlassButton onClick={scrollToFeatures} variant="outline" size="lg" className="px-10 py-5 text-lg">
                  Explore Features
                </GlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Hero Section 1: Code Execution - Full Screen */}
      <section id="features" className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real-Time Code Execution
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Write, test, and debug your Algorand smart contracts instantly in a live environment.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Instant Feedback</h3>
                <p className="text-muted-foreground mb-6">Write TEAL and PyTeal with real-time syntax highlighting, error detection, and instant execution on Algorand TestNet.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Supports TEAL and PyTeal</li>
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Simulate transactions</li>
                  <li className="flex items-center gap-2 text-primary"><Zap className="w-4 h-4" /> Visual debugging tools</li>
                </ul>
              </div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 mx-auto max-w-sm relative group border border-primary/20 shadow-lg">
                  <div className="absolute top-2 right-2 text-xs text-primary font-semibold">TEAL</div>
                  <pre className="text-sm font-mono text-foreground text-left whitespace-pre leading-relaxed"><span className="text-blue-400">#pragma</span> version 8{`
`}<span className="text-purple-400">txn</span> ApplicationID{`
`}<span className="text-green-400">int</span> 0{`
`}<span className="text-yellow-400">==</span>{`
`}<span className="text-purple-400">assert</span>{`
`}<span className="text-green-400">int</span> 1{`
`}<span className="text-purple-400">return</span></pre>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Hero Section 2: Smart Contract Deployment - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Seamless Deployment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy your smart contracts to Algorand testnet or mainnet with one click.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Easy Integration</h3>
                <p className="text-muted-foreground mb-6">Connect via WalletConnect and deploy to Algorand TestNet or MainNet directly from the playground.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> WalletConnect support</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Testnet simulation</li>
                  <li className="flex items-center gap-2 text-primary"><Rocket className="w-4 h-4" /> Gas optimization</li>
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
                      <span className="text-foreground font-medium">TestNet Ready</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-green-400 text-lg">✓</span> 
                      <span className="text-foreground font-medium">MainNet Compatible</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-green-400 text-lg">✓</span> 
                      <span className="text-foreground font-medium">Gas Estimation</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Hero Section 3: Sharing & Collaboration - Full Screen */}
      <section className="min-h-screen py-20 flex items-center bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Share2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Share and Collaborate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase your smart contracts to the community and collaborate in real-time.
            </p>
          </div>
          <GlassCard className="max-w-4xl mx-auto p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Community Features</h3>
                <p className="text-muted-foreground mb-6">Generate shareable links, export to GitHub, and collaborate in real-time with other developers.</p>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Public galleries</li>
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Real-time co-editing</li>
                  <li className="flex items-center gap-2 text-primary"><Share2 className="w-4 h-4" /> Export to GitHub</li>
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
                  <p className="text-sm text-muted-foreground mb-2">Share your contract:</p>
                  <div className="bg-background/50 rounded px-3 py-2 font-mono text-sm text-primary break-all">
                    playground.algocraft/share/abc123
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