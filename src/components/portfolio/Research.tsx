import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BotanicalCornerBottomLeft } from "./BotanicalSVG";

export const Research = () => {
  return (
    <section id="research" className="section-spacing relative overflow-hidden" style={{ backgroundColor: 'var(--color-indigo-faint)' }}>
      <BotanicalCornerBottomLeft className="absolute -bottom-8 -left-8 w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none" opacity={0.08} />
      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        {/* Section header */}
        <div className="section-number mb-16">
          <span className="section-number-label">(003)</span>
          <span className="section-number-title">RESEARCH</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Advancing the field.
          </h2>
        </motion.div>

        <div className="max-w-5xl space-y-12">
          {/* Published Paper */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-3 font-sans tracking-wide uppercase">
                  ACM Learning @ Scale 2025
                </p>
                <a
                  href="https://dl.acm.org/doi/10.1145/3698205.3729550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-block"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3 group-hover/link:text-muted-foreground transition-colors duration-300">
                    Can Learners Navigate Imperfect Generative Pedagogical Chatbots?
                    <ArrowUpRight className="inline w-6 h-6 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  </h3>
                </a>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5 font-sans">
                  Multi-university study on student interactions with AI chatbots. Developed taxonomy
                  for 500+ inquiries, identified 5 distinct learning profiles. Framework adopted by
                  Khan Academy and Duolingo.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Educational AI", "Latent Profile Analysis", "Qualitative Research"].map((tag) => (
                    <span key={tag} className="pill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="divider-organic" />

          {/* Research Position - SOCET */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-3 font-sans tracking-wide uppercase">
                IEEE SB (NLP Research Group Member) · December 2023
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-3">
                SOCET
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3 font-sans">
                Conducted research on NLP, covering text processing, linguistic fundamentals, and applications
                in various fields, including healthcare and finance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Implemented ML techniques for text classification, sentiment analysis, and explored advanced
                models like RNNs and transformers, emphasizing ethical implications in NLP.
              </p>
            </div>
          </motion.article>

          {/* Scholar Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors duration-300 font-sans"
            >
              Google Scholar
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
