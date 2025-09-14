import { WebGLShader } from "@/components/ui/web-gl-shader";
import { Hero } from "@/components/ui/animated-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Code, Zap, Brain, ArrowRight } from "lucide-react";

const Index = () => {
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

      {/* Features Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Build the Future of <span className="text-primary">DeFi</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <GlassCard key={index} delay={index * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <GlassCard className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Building?
              </h3>
              <p className="text-muted-foreground mb-8">
                Join thousands of developers building the next generation of decentralized applications on Algorand.
              </p>
               <LiquidButton size="xl" className="text-white border rounded-full">
                 Launch Playground <ArrowRight className="w-4 h-4" />
               </LiquidButton>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Index;
