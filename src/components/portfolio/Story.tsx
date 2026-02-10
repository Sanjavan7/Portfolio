import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

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
      className="section-spacing relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "hsl(175 80% 50% / 0.04)" }} />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: "hsl(260 60% 60% / 0.04)" }} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div style={{ opacity }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
          >
            The Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.05] mb-10"
          >
            From the football field
            <br />
            <span className="text-gradient-accent">to the data field.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Captain of the National Soccer Team. Six hours of daily training.
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed.
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-foreground text-lg md:text-xl font-semibold">
              They never did.
            </p>
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training
              sessions now drives hackathon sprints.
            </p>
            <p>
              Few months later: Won HackPrinceton. Deployed ML systems at Jio serving millions.
              Published at ACM conferences. Built brain surgery AI now piloting in hospitals.
            </p>
            <p className="text-foreground font-bold text-lg md:text-xl">
              The game changed. The discipline didn't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 card-tech p-6 inline-flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold font-display tracking-tight">
                MS in Machine Learning
              </p>
              <p className="text-sm text-muted-foreground">
                Stevens Institute of Technology · 2025 – 2027
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
