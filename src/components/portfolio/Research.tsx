import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="section-spacing bg-secondary/40">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="section-header-line"
        >
          <p className="label-mono mb-4">Publications</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wider">
            RESEARCH
          </h2>
        </motion.div>

        <div className="max-w-5xl space-y-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex-1">
              <p className="label-mono mb-4">ACM Learning @ Scale 2025</p>
              <a
                href="https://dl.acm.org/doi/10.1145/3698205.3729550"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-block"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-wider leading-tight mb-4 group-hover/link:text-accent-orange transition-colors duration-300" style={{ color: 'var(--color-accent)' }}>
                  CAN LEARNERS NAVIGATE IMPERFECT GENERATIVE PEDAGOGICAL CHATBOTS?
                  <ArrowUpRight className="inline w-6 h-6 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                </h3>
              </a>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-serif">
                Multi-university study on student interactions with AI chatbots. Developed taxonomy
                for 500+ inquiries, identified 5 distinct learning profiles. Framework adopted by
                Khan Academy and Duolingo.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Educational AI", "Latent Profile Analysis", "Qualitative Research"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm border-2 border-border font-mono tracking-wider uppercase"
                    style={{ fontSize: '0.7rem' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="divider-organic" />

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex-1">
              <p className="label-mono mb-4">IEEE SB (NLP Research Group) · December 2023</p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-wider leading-tight mb-4">
                SOCET
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3 font-serif">
                Conducted research on NLP, covering text processing, linguistic fundamentals, and applications
                in various fields, including healthcare and finance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                Implemented ML techniques for text classification, sentiment analysis, and explored advanced
                models like RNNs and transformers, emphasizing ethical implications in NLP.
              </p>
            </div>
          </motion.article>

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
              className="inline-flex items-center gap-2 label-mono hover:text-foreground transition-colors duration-300"
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
