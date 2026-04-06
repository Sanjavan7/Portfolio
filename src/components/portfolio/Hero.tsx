import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%] w-16 h-16 border-2 border-foreground/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[8%] w-12 h-12 rounded-full border-2 border-foreground/8"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[15%] w-3 h-3 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)', opacity: 0.3 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[25%] right-[25%] w-2 h-2 rounded-full bg-foreground/10"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="w-full px-6 md:px-16 lg:px-24 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl">
          {/* Mono label */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="label-mono mb-8"
          >
            Founder / ML Engineer / AI Researcher
          </motion.p>

          {/* Giant split name — filled + outline */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="text-[clamp(3.5rem,12vw,11rem)] font-display leading-[0.9] tracking-wider hover-glitch"
            >
              SANJAVAN
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
              className="text-[clamp(3.5rem,12vw,11rem)] font-display leading-[0.9] tracking-wider text-stroke hover-glitch"
            >
              GHODASARA
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-serif"
          >
            I build AI systems that solve real-world problems at scale —
            from neuroscience to network technology.
          </motion.p>

          {/* CTA buttons with shadow offset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button onClick={scrollToProjects} className="btn-shadow">
              View Selected Work
            </button>
            <button
              onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-shadow-outline"
            >
              Read Research
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-8 md:left-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="label-mono rotate-90 origin-center">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
