import { GlassButton } from "@/components/ui/glass-button";
import { Play, GitBranch, Layers, Brain, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Platform } from "@/types/platform";

const iconMap = {
  Play,
  GitBranch,
  Layers,
  Brain,
  Shield,
};

interface PlatformSectionProps {
  platform: Platform;
}

const PlatformSection = ({ platform }: PlatformSectionProps) => {
  const IconComponent = iconMap[platform.icon as keyof typeof iconMap];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 border-b border-border/50 last:border-b-0" 
      aria-labelledby={`platform-${platform.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 order-2 lg:order-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={platform.image}
                alt={`${platform.title} preview`}
                width={600}
                height={400}
                className="relative w-full h-auto rounded-xl object-cover shadow-2xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyMiIvPjwvc3ZnPg=="
              />
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8 flex items-center gap-4">
              {IconComponent && <IconComponent className="w-12 h-12 text-primary" />}
              <h2 id={`platform-${platform.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {platform.title}
            </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {platform.description}
            </p>
            <Link href={platform.href} className="group inline-block" aria-label={`Start building with ${platform.title}`}>
              <GlassButton variant="primary" size="lg" className="gap-2 px-10 py-5 text-lg hover:scale-105 transition-transform duration-300">
                Start Building
              </GlassButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PlatformSection;