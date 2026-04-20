import { motion } from "framer-motion";
import { Sparkle, Cloud, Dots, Squiggle, Star, Zigzag, Leaf, Curve, SectionLabel } from "./CoinlyDecorations";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'var(--coinly-cream)' }}>
      {/* Decorative scatter */}
      <Sparkle className="absolute top-[20%] left-[8%] animate-wobble" color="var(--coinly-orange)" size={40} />
      <Sparkle className="absolute top-[32%] right-[10%] animate-wobble" color="var(--coinly-purple)" size={32} />
      <Sparkle className="absolute bottom-[25%] left-[12%]" color="var(--coinly-yellow)" size={24} />
      <Sparkle className="absolute bottom-[40%] right-[18%] animate-wobble" color="var(--coinly-green)" size={28} />
      <Cloud className="absolute top-[15%] right-[30%] animate-float-slow" color="var(--coinly-sky)" size={100} />
      <Cloud className="absolute bottom-[20%] right-[8%] animate-float-slow" color="var(--coinly-orange)" size={70} />
      <Dots className="absolute top-[50%] left-[3%]" color="var(--coinly-purple)" size={50} />
      <Squiggle className="absolute bottom-[35%] right-[25%]" color="var(--coinly-orange)" size={80} />
      <Zigzag className="absolute top-[12%] left-[40%]" color="var(--coinly-green)" size={80} />
      <Star className="absolute top-[60%] right-[5%] animate-wobble" color="var(--coinly-purple)" size={26} />
      <Leaf className="absolute bottom-[15%] left-[28%]" color="var(--coinly-yellow)" size={32} />
      <Curve className="absolute bottom-[10%] right-[35%]" color="var(--coinly-purple)" size={140} />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <SectionLabel>Founder · ML Engineer · AI Researcher</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-[clamp(2.25rem,7vw,5.5rem)] font-black leading-[1.05] mb-8 text-coinly-navy"
        >
          Building <span className="highlight-orange">intelligent</span>
          <br />
          systems that shape
          <br />
          <span className="highlight-purple highlight-right">how we live</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-lg md:text-xl text-coinly-navy/70 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          I build AI systems that solve real-world problems at scale —
          from neuroscience to network technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={scrollToProjects} className="btn-coinly">
            View Selected Work
          </button>
          <button
            onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-coinly-outline"
          >
            Read Research
          </button>
        </motion.div>
      </div>
    </section>
  );
};
