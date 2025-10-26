'use client'

import dynamic from 'next/dynamic';
import GridDistortion from "@/components/GridBackground";
import { Hero } from "@/components/ui/animated-hero";
import { platforms } from "@/data/platforms";
import { ScrollProgress } from "@/components/ScrollProgress";

const PlatformSection = dynamic(() => import('@/components/PlatformSection'), {
  loading: () => <div className="py-20">Loading platform...</div>
});

const Home = () => {

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
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
      <div id="platforms" className="relative z-10">
        {platforms.map((platform) => (
          <PlatformSection key={platform.title} platform={platform} />
        ))}
      </div>
    </div>
  )
}

export default Home;