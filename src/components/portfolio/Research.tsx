import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="section-spacing">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">
            <span className="accent-dot mr-2" />
            Publications
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold tracking-tight">
            Advancing the field.
          </h2>
        </motion.div>

        <div className="max-w-4xl flow" style={{ '--flow-space': '2.5rem' } as React.CSSProperties}>
          {/* ACM Paper */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-editorial"
          >
            <p className="label-mono mb-4">ACM Learning @ Scale 2025</p>
            <a
              href="https://dl.acm.org/doi/10.1145/3698205.3729550"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-block"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight leading-tight mb-4 group-hover/link:text-secondary transition-colors duration-200" style={{ color: 'var(--color-secondary)' }}>
                Can Learners Navigate Imperfect Generative Pedagogical Chatbots?
                <ArrowUpRight className="inline w-5 h-5 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
              </h3>
            </a>
            <p className="text-base text-muted-foreground leading-relaxed mb-5 font-serif">
              Multi-university study on student interactions with AI chatbots. Developed taxonomy
              for 500+ inquiries, identified 5 distinct learning profiles. Framework adopted by
              Khan Academy and Duolingo.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Educational AI", "Latent Profile Analysis", "Qualitative Research"].map((tag) => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </motion.article>

          {/* SOCET */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-editorial"
          >
            <p className="label-mono mb-4">IEEE SB · NLP Research Group · Dec 2023</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tight leading-tight mb-4">
              SOCET
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-3 font-serif">
              Conducted research on NLP, covering text processing, linguistic fundamentals, and applications
              in various fields, including healthcare and finance.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-serif">
              Implemented ML techniques for text classification, sentiment analysis, and explored advanced
              models like RNNs and transformers, emphasizing ethical implications in NLP.
            </p>
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-display font-medium inline-flex items-center gap-1"
            >
              Google Scholar <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
