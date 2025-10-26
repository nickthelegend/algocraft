import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/glass-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  
  const scrollToPlatforms = () => {
    document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' });
  };
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
              <span className="text-foreground">Build Smart Contracts on Algorand with</span>
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
              The complete development platform for Algorand. Write, test, and deploy smart contracts with AI assistance, visual workflows, and professional-grade tools.
            </p>
          </div>
          <div>
            <GlassButton onClick={scrollToPlatforms} size="xl" variant="primary" className="px-12 py-6 text-lg">
              Start Building
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };