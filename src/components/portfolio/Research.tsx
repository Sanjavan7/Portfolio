import { motion } from "framer-motion";
import { SectionLabel, Sparkle, Star, Cloud } from "./CoinlyDecorations";

export const Research = () => {
  return (
    <section id="research" className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-cream)' }}>
      <Cloud className="absolute top-[10%] right-[5%] animate-float-slow" color="var(--coinly-sky)" size={90} />
      <Sparkle className="absolute bottom-[20%] left-[6%] animate-wobble" color="var(--coinly-green)" size={28} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>02 — Research</SectionLabel>
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
          {/* Current research — Purple card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-coinly relative overflow-hidden md:col-span-2"
            style={{ background: 'var(--coinly-purple)', color: '#fff' }}
          >
            <Star className="absolute top-4 right-4" color="#fff" size={28} />

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div>
                <span className="chip mb-4">CHI 2027 poster · EDM 2027 full paper · in preparation</span>
                <h3 className="text-xl md:text-3xl font-black leading-tight mt-3 mb-3">
                  How students learn with an AI chatbot
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider opacity-85 mb-4">
                  Graduate Research Assistant, Stevens Institute of Technology · Advisor:{" "}
                  <a
                    href="https://tiffanywentingli.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-2"
                  >
                    Prof. Tiffany Wenting Li
                  </a>{" "}
                  · Oct 2025 – present
                </p>
                <p className="text-sm md:text-base leading-relaxed font-medium opacity-95">
                  I study how 179 learners used an AI chatbot, reading materials and web search while
                  studying, and which behaviors predicted how well they did. I own the analysis
                  pipeline, Methods and Results.
                </p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-wider opacity-90 mb-3">✦ What I built</p>
                <ul className="space-y-2.5 text-sm leading-relaxed font-medium opacity-95 mb-5">
                  {[
                    "A multivariate Poisson mixture model, written from scratch, to segment sparse, zero-heavy behavior counts",
                    "A custom proximal-gradient (FISTA) solver for elastic-net logistic and ordinal regression, validated against scikit-learn and SciPy",
                    "Leakage-controlled evaluation on 300 session-grouped train/test splits, plus stability selection",
                    "Permutation tests (a million shuffles) with Holm multiple-testing correction",
                    "A reproducibility pipeline that regenerates and diffs ~900 reported numbers on every run",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "NumPy", "SciPy", "scikit-learn", "statistics", "learning analytics"].map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
              </div>
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
              ✦ IEEE Student Branch · 2023
            </p>
            <h3 className="text-xl md:text-2xl font-black leading-tight mb-4">
              NLP Research Committee
            </h3>
            <p className="text-sm leading-relaxed font-medium opacity-90">
              Core member of the student branch's NLP research committee, working on text
              classification, sentiment analysis and transformer models.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
