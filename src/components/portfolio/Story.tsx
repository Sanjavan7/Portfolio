import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Parallax floating elements */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(y, (v) => v * -0.5) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary mb-8"
          >
            The Story
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            From Football Field to
            <br />
            <span className="gradient-text">AI Research</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              Captain of the Gujarat State Football Team. 6 hours daily training.
              On track for a professional career.
            </p>
            <p>
              Then{" "}
              <span className="text-foreground font-medium">COVID-19</span>{" "}
              happened. Fields closed. Career ended at 19.
            </p>
            <p>
              I waited 6 months for the fields to reopen. They never did.
            </p>
            <p>
              So I taught myself to{" "}
              <span className="text-foreground font-medium">code</span>.
            </p>
            <p>
              The same discipline that drove 5 AM training sessions now drives
              36-hour hackathon sprints.
            </p>
            <p className="text-foreground font-medium text-xl md:text-2xl pt-4">
              HackPrinceton Winner. Technology Acquired. Published Researcher.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Education
            </p>
            <p className="text-xl md:text-2xl font-bold">
              MS in Machine Learning
            </p>
            <p className="text-muted-foreground">
              Stevens Institute of Technology • 2025 - 2027
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
