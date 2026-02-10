import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="section-spacing bg-secondary/30">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-muted-foreground tracking-wide mb-3">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
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
                <p className="text-base text-muted-foreground mb-3">
                  ACM Learning @ Scale 2026 · First Author
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">
                  Can Learners Navigate Imperfect Generative Pedagogical Chatbots?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  Multi-university study on student interactions with AI chatbots. Developed taxonomy 
                  for 500+ inquiries, identified 5 distinct learning profiles. Framework adopted by 
                  Khan Academy and Duolingo.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Educational AI", "Latent Profile Analysis", "Qualitative Research"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-background border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          <div className="divider-organic" />

          {/* Research Position - Stevens */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex-1">
              <p className="text-base text-muted-foreground mb-3">
                Graduate Research Assistant · Oct 2025 – Present
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">
                Stevens Institute of Technology
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contributing to educational AI research under Prof. Tiffany Li. 
                Qualitative coding of 500+ interactions, statistical clustering (K-Means, LPA/GMM), 
                complete Python pipeline for probabilistic analysis.
              </p>
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
              <p className="text-base text-muted-foreground mb-3">
                EEE SB (NLP Research Group Member) · December 2023
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">
                SOCET
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Conducted research on NLP, covering text processing, linguistic fundamentals, and applications 
                in various fields, including healthcare and finance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
              className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
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
