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
      className="section-spacing bg-secondary/30 overflow-hidden"
    >
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-muted/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] blob bg-muted/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-sm text-muted-foreground tracking-wide mb-8"
          >
            The Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-12"
          >
            From the football field
            <br />
            to AI research.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              Captain of the Gujarat State Football Team. Six hours of daily training. 
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed. 
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-foreground">
              They never did.
            </p>
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training 
              sessions now drives 36-hour hackathon sprints.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Education
            </p>
            <p className="text-2xl font-semibold tracking-tight">
              MS in Machine Learning
            </p>
            <p className="text-muted-foreground">
              Stevens Institute of Technology · 2025 – 2027
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
