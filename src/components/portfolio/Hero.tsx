import { motion } from "framer-motion";
import { BotanicalCornerTopRight, BotanicalCornerBottomLeft } from "./BotanicalSVG";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Botanical background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--color-indigo-faint)', opacity: 0.6 }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] blob blur-3xl"
          style={{ backgroundColor: 'var(--color-indigo-faint)', opacity: 0.4 }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rich botanical illustrations */}
        <BotanicalCornerTopRight className="absolute -top-12 -right-12 w-[400px] h-[400px] md:w-[600px] md:h-[600px]" opacity={0.1} />
        <BotanicalCornerBottomLeft className="absolute -bottom-16 -left-16 w-[350px] h-[350px] md:w-[500px] md:h-[500px]" opacity={0.07} />
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24 pt-28 pb-16 relative z-10">
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground tracking-wide mb-6"
          >
            Founder • Machine Learning Engineer • AI Researcher
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1] mb-6"
          >
            Crafting intelligent
            <br />
            systems that shape
            <br />
            <span className="text-muted-foreground">how we live.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
          >
            I build AI systems that solve real-world problems at scale — 
            from neuroscience to network technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-minimal"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Selected Work
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-minimal-outline"
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
        className="absolute bottom-12 left-8 md:left-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-muted-foreground cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-xs tracking-widest rotate-90 origin-center">scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
