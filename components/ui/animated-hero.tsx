import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["AI agent", "smart contracts", "drag & drop", "blockchain IDE", "transaction flow"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-6 py-16 sm:py-20 lg:py-28 items-center justify-center flex-col px-4">
          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-foreground">Playground AI for development</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-foreground">which executes on Algorand</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center px-4">
              Build, deploy, and manage smart contracts on Algorand with our AI-powered IDE. 
              Drag and drop components, execute transaction flows, and bring your blockchain 
              applications to life with the power of artificial intelligence.
            </p>
          </div>
          <div>
            <GlassButton size="xl" className="gap-3 px-12 py-4 text-lg rounded-full bg-black/30 border-2 border-white/30 text-white font-bold shadow-2xl backdrop-blur-lg hover:bg-white/20 hover:text-white hover:border-white/50 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpolygon points=%2210,0 20,10 10,20 0,10%22/%3E%3C/g%3E%3C/svg%3E')] before:bg-repeat after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/10 after:to-transparent after:opacity-50" variant="primary">
              Start Building
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };