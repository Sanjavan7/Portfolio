import { motion } from "framer-motion";
import { SectionLabel, Sparkle } from "./CoinlyDecorations";
import { CHAPTERS, scrollToChapter } from "@/components/island/chapters";

// See-through hero: the 3D island shows behind it, and the framed box doubles as
// a table of contents (Shopify Editions style).
export const Hero = () => {
  return (
    <section data-chapter="hero" data-backdrop className="relative min-h-[100svh] flex items-end md:items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-[44svh] md:pt-28 pb-10 md:pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-xl rounded-[28px] p-6 md:p-8"
          style={{
            background: "var(--coinly-cream)",
            border: "2.5px solid var(--coinly-deep-blue)",
            boxShadow: "8px 8px 0 var(--coinly-deep-blue)",
          }}
        >
          <Sparkle className="absolute -top-5 -right-5 animate-wobble" color="var(--coinly-orange)" size={40} />
          <Sparkle className="absolute -bottom-4 right-16" color="var(--coinly-purple)" size={24} />

          <SectionLabel>ML Engineer · AI Researcher · Builder</SectionLabel>

          <h1 className="text-[clamp(2rem,3.7vw,3.25rem)] font-black leading-[1.08] mt-4 mb-5 text-coinly-navy">
            Building <span className="highlight-orange">intelligent</span>
            <br />
            systems that shape
            <br />
            <span className="highlight-purple highlight-right">how we live</span>
          </h1>

          <p className="text-base md:text-lg text-coinly-navy/70 leading-relaxed font-medium mb-6">
            I build AI for problems that matter: predicting brain-surgery outcomes,
            reading satellite imagery, and understanding how students learn with AI.
          </p>

          <ol className="pt-4 space-y-1.5" style={{ borderTop: "2px dashed rgba(42, 50, 66, 0.2)" }}>
            {CHAPTERS.map((c) => (
              <li key={c.id}>
                <button onClick={() => scrollToChapter(c.id)} className="group w-full flex items-baseline gap-3 text-left">
                  <span className="text-lg md:text-xl font-black text-coinly-navy group-hover:text-coinly-orange transition-colors">
                    {c.title}
                  </span>
                  <span className="flex-1 border-b-2 border-dotted" style={{ borderColor: "rgba(42, 50, 66, 0.25)" }} />
                  <span className="text-sm font-black text-coinly-orange">{c.num}</span>
                </button>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
};
