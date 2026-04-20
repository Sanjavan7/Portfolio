import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, Sparkle, Star, Cloud } from "./CoinlyDecorations";

export const Research = () => {
  return (
    <section id="research" className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-cream)' }}>
      <Cloud className="absolute top-[10%] right-[5%] animate-float-slow" color="var(--coinly-sky)" size={90} />
      <Sparkle className="absolute bottom-[20%] left-[6%] animate-wobble" color="var(--coinly-green)" size={28} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>02 — Publications</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight leading-[1.1] mt-4 text-coinly-navy"
          >
            Advancing the <span className="highlight-green">field</span>.
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          {/* ACM Paper — Purple card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-coinly relative overflow-hidden"
            style={{ background: 'var(--coinly-purple)', color: '#fff' }}
          >
            <Star className="absolute top-4 right-4" color="#fff" size={28} />
            <Sparkle className="absolute bottom-4 right-8 opacity-40" color="#fff" size={20} />

            <p className="text-xs font-black tracking-wider uppercase opacity-90 mb-4">
              ✦ ACM Learning @ Scale 2025
            </p>
            <a
              href="https://dl.acm.org/doi/10.1145/3698205.3729550"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-block"
            >
              <h3 className="text-xl md:text-2xl font-black leading-tight mb-4">
                Can Learners Navigate Imperfect Generative Pedagogical Chatbots?
                <ArrowUpRight className="inline w-5 h-5 ml-2" />
              </h3>
            </a>
            <p className="text-sm leading-relaxed mb-5 opacity-90 font-medium">
              Multi-university study on student interactions with AI chatbots. Developed taxonomy
              for 500+ inquiries, identified 5 distinct learning profiles. Framework adopted by
              Khan Academy and Duolingo.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Educational AI", "Latent Profile Analysis", "Qualitative Research"].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </motion.article>

          {/* SOCET — Yellow card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-coinly relative overflow-hidden"
            style={{ background: 'var(--coinly-yellow)', color: 'var(--coinly-deep-blue)' }}
          >
            <Sparkle className="absolute top-4 right-4 animate-wobble" color="var(--coinly-deep-blue)" size={24} />

            <p className="text-xs font-black tracking-wider uppercase opacity-80 mb-4">
              ✦ IEEE SB · NLP Research · Dec 2023
            </p>
            <h3 className="text-xl md:text-2xl font-black leading-tight mb-4">
              SOCET Research Group
            </h3>
            <p className="text-sm leading-relaxed mb-3 font-medium opacity-90">
              Conducted research on NLP, covering text processing, linguistic fundamentals,
              and applications in healthcare and finance.
            </p>
            <p className="text-sm leading-relaxed font-medium opacity-90">
              Implemented ML techniques for text classification, sentiment analysis, and explored
              RNNs and transformers with focus on ethical implications.
            </p>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coinly-outline"
          >
            View Google Scholar
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
