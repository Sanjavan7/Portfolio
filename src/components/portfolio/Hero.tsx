import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 items-end">
          {/* Left: content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-mono mb-6"
            >
              Founder / ML Engineer / AI Researcher
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-display font-extrabold tracking-tight leading-[1.05] mb-6"
            >
              Building intelligent systems
              <br />
              <span className="text-muted-foreground">that shape how we live.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10 font-serif"
            >
              I build AI systems that solve real-world problems at scale —
              from neuroscience to network technology. No hype, just impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button onClick={scrollToProjects} className="btn-editorial">
                View selected work
              </button>
              <button
                onClick={() => document.getElementById("research")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-editorial-outline"
              >
                Read research
              </button>
            </motion.div>
          </div>

          {/* Right: decorative geometric — Piccalilli-style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex flex-col items-center gap-2"
          >
            <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] border-l-transparent border-r-transparent" style={{ borderBottomColor: 'var(--color-primary)' }} />
            <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[69px] border-l-transparent border-r-transparent border-b-foreground/10" />
            <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent" style={{ borderBottomColor: 'var(--color-secondary)', opacity: 0.6 }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
