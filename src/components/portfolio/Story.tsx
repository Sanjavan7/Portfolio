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
      {/* Botanical background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-indigo-faint)', opacity: 0.5 }} />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] blob blur-3xl" style={{ backgroundColor: 'var(--color-indigo-faint)', opacity: 0.3 }} />
        <svg
          className="absolute top-12 right-8 w-[200px] h-[200px]"
          viewBox="0 0 150 150"
          fill="none"
          style={{ opacity: 0.05 }}
        >
          <path d="M75 140 Q78 110 75 80 Q72 50 78 20" stroke="var(--color-indigo)" strokeWidth="1.2" fill="none" />
          <ellipse cx="55" cy="50" rx="20" ry="8" transform="rotate(-35 55 50)" fill="var(--color-indigo)" opacity="0.4" />
          <ellipse cx="95" cy="40" rx="20" ry="8" transform="rotate(35 95 40)" fill="var(--color-indigo)" opacity="0.35" />
          <ellipse cx="58" cy="80" rx="18" ry="7" transform="rotate(-30 58 80)" fill="var(--color-indigo)" opacity="0.3" />
          <ellipse cx="92" cy="70" rx="18" ry="7" transform="rotate(30 92 70)" fill="var(--color-indigo)" opacity="0.35" />
        </svg>
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div
          style={{ opacity }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-base md:text-lg text-muted-foreground tracking-wide mb-6"
          >
            The Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-10"
          >
            From the football field
            <br />
            to the data field.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              Captain of the National Soccer Team. Six hours of daily training. 
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed. 
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-foreground text-xl md:text-2xl">
              They never did.
            </p>
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training 
              sessions now drives hackathon sprints.
            </p>
            <p>
              Few months later: 8 hackathon victories — HackPrinceton, Hacklytics MLH Winner at Georgia Tech,
              HackIllinois Top 7 Shark Tank, DevFest Columbia Best Use of Flowglad, and more. Deployed ML systems at Jio serving millions.
              Published at ACM conferences. Built AI systems that are currently solving real-world problems.
            </p>
            <p className="text-foreground font-medium text-xl md:text-2xl">
              The game changed. The discipline didn't.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 pt-10 border-t border-border"
          >
            <p className="text-base text-muted-foreground mb-3">
              Education
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">
              MS in Machine Learning
            </p>
            <p className="text-lg text-muted-foreground">
              Stevens Institute of Technology · 2025 – 2027
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
