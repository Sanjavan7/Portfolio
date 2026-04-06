import { motion } from "framer-motion";

export const Story = () => {
  return (
    <section id="story" className="section-spacing">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">
            <span className="accent-dot mr-2" />
            Origin
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold tracking-tight">
            From the football field
            <br />
            <span className="text-muted-foreground">to the data field.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flow font-serif text-muted-foreground text-base leading-relaxed"
            style={{ '--flow-space': '1.25em' } as React.CSSProperties}
          >
            <p>
              Captain of the National Soccer Team. Six hours of daily training.
              On track for a professional career.
            </p>
            <p>
              Then COVID happened. Fields closed.
              At nineteen, I waited six months for them to reopen.
            </p>
            <p className="text-foreground text-xl font-display font-bold" style={{ lineHeight: 1.2 }}>
              They never did.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flow font-serif text-muted-foreground text-base leading-relaxed"
            style={{ '--flow-space': '1.25em' } as React.CSSProperties}
          >
            <p>
              So I taught myself to code. The same discipline that drove 5 AM training
              sessions now drives hackathon sprints.
            </p>
            <p>
              8 hackathon victories — HackPrinceton, Hacklytics MLH Winner at Georgia Tech,
              HackIllinois Top 7 Shark Tank, DevFest Columbia Best Use of Flowglad, and more.
            </p>
            <p className="text-foreground text-xl font-display font-bold" style={{ lineHeight: 1.2 }}>
              The game changed.
              <span style={{ color: 'var(--color-primary)' }}> The discipline didn't.</span>
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-editorial"
        >
          <p className="label-mono mb-2">Education</p>
          <p className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-1">
            MS in Machine Learning
          </p>
          <p className="text-base text-muted-foreground font-serif">
            Stevens Institute of Technology · 2025 – 2027
          </p>
        </motion.div>
      </div>
    </section>
  );
};
