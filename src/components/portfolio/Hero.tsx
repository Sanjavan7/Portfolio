import { motion } from "framer-motion";

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

        {/* Botanical SVG - top right */}
        <svg
          className="absolute top-20 right-12 w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
          viewBox="0 0 200 200"
          fill="none"
          style={{ opacity: 0.06 }}
        >
          <path d="M100 180 Q95 140 100 100 Q105 60 95 20" stroke="var(--color-indigo)" strokeWidth="1.5" fill="none" />
          <ellipse cx="75" cy="70" rx="25" ry="10" transform="rotate(-30 75 70)" fill="var(--color-indigo)" opacity="0.4" />
          <ellipse cx="70" cy="100" rx="28" ry="11" transform="rotate(-40 70 100)" fill="var(--color-indigo)" opacity="0.3" />
          <ellipse cx="72" cy="130" rx="22" ry="9" transform="rotate(-25 72 130)" fill="var(--color-indigo)" opacity="0.35" />
          <ellipse cx="125" cy="55" rx="25" ry="10" transform="rotate(30 125 55)" fill="var(--color-indigo)" opacity="0.35" />
          <ellipse cx="128" cy="85" rx="28" ry="11" transform="rotate(40 128 85)" fill="var(--color-indigo)" opacity="0.3" />
          <ellipse cx="123" cy="115" rx="22" ry="9" transform="rotate(25 123 115)" fill="var(--color-indigo)" opacity="0.4" />
          <circle cx="95" cy="18" r="4" fill="var(--color-indigo)" opacity="0.3" />
        </svg>

        {/* Botanical SVG - bottom left */}
        <svg
          className="absolute bottom-12 left-8 w-[180px] h-[180px] md:w-[250px] md:h-[250px]"
          viewBox="0 0 150 150"
          fill="none"
          style={{ opacity: 0.04 }}
        >
          <path d="M75 140 Q78 110 75 80 Q72 50 78 20" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />
          <ellipse cx="55" cy="50" rx="20" ry="8" transform="rotate(-35 55 50)" fill="var(--color-indigo)" opacity="0.4" />
          <ellipse cx="95" cy="40" rx="20" ry="8" transform="rotate(35 95 40)" fill="var(--color-indigo)" opacity="0.35" />
          <ellipse cx="58" cy="80" rx="18" ry="7" transform="rotate(-30 58 80)" fill="var(--color-indigo)" opacity="0.3" />
          <ellipse cx="92" cy="70" rx="18" ry="7" transform="rotate(30 92 70)" fill="var(--color-indigo)" opacity="0.35" />
        </svg>
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
