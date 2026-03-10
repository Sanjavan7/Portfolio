import { motion } from "framer-motion";
import { BotanicalCornerTopRight, BotanicalCornerBottomLeft, BotanicalHeroBottom } from "./BotanicalSVG";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Indigo Arch/Dome — AceFund hero style */}
      <div className="hero-arch relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ backgroundColor: 'var(--color-indigo)' }}>
        {/* White botanical illustrations on the arch */}
        <BotanicalCornerTopRight className="absolute -top-8 -right-8 w-[450px] h-[450px] md:w-[650px] md:h-[650px]" opacity={0.15} color="#fff" />
        <BotanicalCornerBottomLeft className="absolute -bottom-16 -left-16 w-[400px] h-[400px] md:w-[600px] md:h-[600px]" opacity={0.12} color="#fff" />
        <BotanicalCornerBottomLeft className="absolute -top-20 -left-20 w-[300px] h-[300px] md:w-[480px] md:h-[480px] rotate-180" opacity={0.08} color="#fff" />
        <BotanicalCornerTopRight className="absolute -bottom-12 -right-12 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rotate-180" opacity={0.06} color="#fff" />

        {/* Dense botanical bottom border */}
        <BotanicalHeroBottom className="absolute bottom-0 left-0 w-full h-[250px] md:h-[320px]" opacity={0.18} color="#fff" />

        <div className="relative z-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-base text-white/50 tracking-[0.2em] uppercase mb-8 font-sans"
          >
            Founder · ML Engineer · AI Researcher
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] mb-8 text-white"
          >
            Crafting intelligent
            <br />
            systems that shape
            <br />
            <span className="text-white/40">how we live.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed mb-10 font-sans"
          >
            I build AI systems that solve real-world problems at scale —
            from neuroscience to network technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full font-medium text-base font-sans transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: '#fff', color: 'var(--color-indigo)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Selected Work
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full font-medium text-base border border-white/30 text-white font-sans transition-all duration-300 hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Read Research
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-white/30 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs tracking-[0.3em] uppercase font-sans">scroll</span>
          <div className="w-px h-8 bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};
