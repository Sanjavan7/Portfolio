import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="section-spacing bg-secondary/40 overflow-hidden relative"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="section-header-line"
          >
            <p className="label-mono mb-4">The Story</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wider">
              ORIGIN
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed font-serif"
            >
              <p>
                Captain of the National Soccer Team. Six hours of daily training.
                On track for a professional career.
              </p>
              <p>
                Then COVID happened. Fields closed.
                At nineteen, I waited six months for them to reopen.
              </p>
              <p className="text-foreground text-2xl md:text-3xl font-display tracking-wider" style={{ lineHeight: 1.1 }}>
                THEY NEVER DID.
              </p>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed font-serif"
            >
              <p>
                So I taught myself to code. The same discipline that drove 5 AM training
                sessions now drives hackathon sprints.
              </p>
              <p>
                Few months later: 8 hackathon victories — HackPrinceton, Hacklytics MLH Winner at Georgia Tech,
                HackIllinois Top 7 Shark Tank, DevFest Columbia Best Use of Flowglad, and more.
              </p>
              <p className="text-foreground text-2xl md:text-3xl font-display tracking-wider" style={{ lineHeight: 1.1 }}>
                THE GAME CHANGED.
                <br />
                <span style={{ color: 'var(--color-accent)' }}>THE DISCIPLINE DIDN'T.</span>
              </p>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-10 border-t border-border"
          >
            <p className="label-mono mb-3">Education</p>
            <p className="text-3xl md:text-4xl font-display tracking-wider">
              MS IN MACHINE LEARNING
            </p>
            <p className="text-lg text-muted-foreground font-serif">
              Stevens Institute of Technology · 2025 – 2027
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
