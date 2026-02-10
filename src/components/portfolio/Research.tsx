import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="section-spacing">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Research
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
            Advancing the field.
          </h2>
        </motion.div>

        <div className="max-w-5xl space-y-8">
          {/* ACM Paper */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-tech p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
                  ACM Learning @ Scale 2026 · First Author
                </p>
                <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight leading-tight mb-3">
                  Can Learners Navigate Imperfect Generative Pedagogical Chatbots?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Multi-university study on student interactions with AI chatbots. Developed taxonomy
                  for 500+ inquiries, identified 5 distinct learning profiles. Framework adopted by
                  Khan Academy and Duolingo.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Educational AI", "Latent Profile Analysis", "Qualitative Research"].map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Stevens */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-tech p-6 md:p-8"
          >
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
              Graduate Research Assistant · Oct 2025 – Present
            </p>
            <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight leading-tight mb-3">
              Stevens Institute of Technology
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contributing to educational AI research under Prof. Tiffany Li.
              Qualitative coding of 500+ interactions, statistical clustering (K-Means, LPA/GMM),
              complete Python pipeline for probabilistic analysis.
            </p>
          </motion.article>

          {/* SOCET */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="card-tech p-6 md:p-8"
          >
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
              EEE SB (NLP Research Group Member) · December 2023
            </p>
            <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight leading-tight mb-3">
              SOCET
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Conducted research on NLP, covering text processing, linguistic fundamentals, and applications
              in various fields, including healthcare and finance.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Implemented ML techniques for text classification, sentiment analysis, and explored advanced
              models like RNNs and transformers, emphasizing ethical implications in NLP.
            </p>
          </motion.article>

          {/* Scholar link */}
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
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
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
