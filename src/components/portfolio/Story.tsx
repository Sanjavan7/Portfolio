import { motion } from "framer-motion";
import { BotanicalCornerTopRight, BotanicalCornerBottomLeft } from "./BotanicalSVG";

export const Story = () => {
  return (
    <section
      id="story"
      className="section-spacing relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-indigo-faint)' }}
    >
      {/* Botanical decoration */}
      <BotanicalCornerTopRight className="absolute -top-8 -right-8 w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none" opacity={0.1} />
      <BotanicalCornerBottomLeft className="absolute -bottom-12 -left-12 w-[300px] h-[300px] md:w-[420px] md:h-[420px] pointer-events-none" opacity={0.08} />

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        {/* Section header */}
        <div className="section-number mb-16">
          <span className="section-number-label">(005)</span>
          <span className="section-number-title">THE STORY</span>
        </div>

        {/* Large serif statement — AceFund about section style */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] mb-12 max-w-5xl"
        >
          From the football field to the data field — captain of the National Soccer Team turned AI engineer, bringing the same discipline to hackathon sprints and research breakthroughs.
        </motion.h2>

        {/* Pill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {["Machine Learning", "AI Research", "Full-Stack", "Healthcare AI", "NLP", "Computer Vision"].map((tag) => (
            <span key={tag} className="pill-tag">{tag}</span>
          ))}
        </motion.div>

        {/* Story details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16"
        >
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans">
            <p>
              Captain of the National Soccer Team. Six hours of daily training.
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed.
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-foreground text-xl md:text-2xl font-serif">
              They never did.
            </p>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans">
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training
              sessions now drives hackathon sprints.
            </p>
            <p>
              Few months later: 8 hackathon victories — HackPrinceton, Hacklytics MLH Winner at Georgia Tech,
              HackIllinois Top 7 Shark Tank, DevFest Columbia Best Use of Flowglad, and more.
            </p>
            <p className="text-foreground font-medium text-xl md:text-2xl font-serif">
              The game changed. The discipline didn't.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-10 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-3 font-sans tracking-wide uppercase">
            Education
          </p>
          <p className="text-2xl md:text-3xl font-bold tracking-tight">
            MS in Machine Learning
          </p>
          <p className="text-lg text-muted-foreground font-sans">
            Stevens Institute of Technology · 2025 – 2027
          </p>
        </motion.div>
      </div>
    </section>
  );
};
