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

        {/* Two-column layout: heading left, story right */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-16">
          {/* Left column - heading + tags */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-10"
            >
              From the football field
              <br />
              to the data field.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {["Machine Learning", "AI Research", "Full-Stack", "Healthcare AI", "NLP", "Computer Vision"].map((tag) => (
                <span key={tag} className="pill-tag">{tag}</span>
              ))}
            </motion.div>
          </div>

          {/* Right column - story narrative */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans"
          >
            <p>
              Captain of the National Soccer Team. Six hours of daily training.
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed.
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-foreground text-xl md:text-2xl font-serif font-bold">
              They never did.
            </p>
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training
              sessions now drives hackathon sprints.
            </p>
            <p>
              Few months later: 8 hackathon victories — HackPrinceton, Hacklytics MLH Winner at Georgia Tech,
              HackIllinois Top 7 Shark Tank, DevFest Columbia Best Use of Flowglad, and more. Deployed ML systems at Jio serving millions.
              Published at ACM conferences.
            </p>
            <p className="text-foreground font-medium text-xl md:text-2xl font-serif font-bold">
              The game changed. The discipline didn't.
            </p>
          </motion.div>
        </div>

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
