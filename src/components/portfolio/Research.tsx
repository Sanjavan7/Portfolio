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
            className="card-coinly relative overflow-hidden"
            style={{ background: 'var(--coinly-purple)', color: '#fff' }}
          >
            <Star className="absolute top-4 right-4" color="#fff" size={28} />
            <Sparkle className="absolute bottom-4 right-8 opacity-40" color="#fff" size={20} />

            <p className="text-xs font-black tracking-wider uppercase opacity-90 mb-4">
              ✦ In preparation · CHI 2027 poster & L@S 2027 paper
            </p>
            <h3 className="text-xl md:text-2xl font-black leading-tight mb-4">
              How students learn with AI chatbots, reading and web search
            </h3>
            <p className="text-sm leading-relaxed mb-5 opacity-90 font-medium">
              Research assistant with{" "}
              <a
                href="https://tiffanywentingli.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-black underline decoration-2 underline-offset-2"
              >
                Prof. Tiffany Wenting Li
              </a>{" "}
              at Stevens, extending her work on imperfect pedagogical chatbots. 919 coded chatbot
              messages across 344 learning sessions. I wrote the statistical models from scratch:
              a multivariate Poisson mixture, Jensen–Shannon k-medoids clustering and a custom
              FISTA elastic-net solver.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Educational AI", "Mixture Models", "Learning Analytics"].map((tag) => (
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
