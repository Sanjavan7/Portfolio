import { motion } from "framer-motion";
import { Sparkle } from "./CoinlyDecorations";
import type { Chapter } from "@/components/island/chapters";

const WAVE = "M0,40 C160,8 320,8 480,30 C640,52 800,52 960,30 C1120,8 1280,8 1440,36 L1440,64 L0,64 Z";

// Soft wave that blends the see-through opener into the solid section next to it.
const Wave = ({ color, flip = false }: { color: string; flip?: boolean }) => (
  <svg
    className={`absolute left-0 w-full h-10 md:h-14 ${flip ? "-top-px rotate-180" : "-bottom-px"}`}
    viewBox="0 0 1440 64"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d={WAVE} style={{ fill: color }} />
  </svg>
);

// Full-screen, see-through block before each numbered section: the island camera
// flies to this chapter's building while the chapter card slides in.
export const ChapterOpener = ({ chapter }: { chapter: Chapter }) => (
  <section
    id={`chapter-${chapter.id}`}
    data-chapter={chapter.id}
    data-backdrop
    className="relative h-[80svh] md:h-screen"
  >
    {chapter.prevColor && <Wave color={chapter.prevColor} flip />}

    <div className="absolute inset-x-0 bottom-16 md:bottom-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block max-w-sm rounded-[24px] px-6 py-5"
          style={{
            background: "var(--coinly-cream)",
            border: "2.5px solid var(--coinly-deep-blue)",
            boxShadow: "6px 6px 0 var(--coinly-deep-blue)",
          }}
        >
          <Sparkle className="absolute -top-4 -right-4 animate-wobble" color="var(--coinly-orange)" size={30} />
          <p className="section-label mb-2">Chapter {chapter.num}</p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-tight leading-none text-coinly-navy">
            {chapter.title}
          </h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-wider text-coinly-navy/60">
            ✦ {chapter.place}
          </p>
        </motion.div>
      </div>
    </div>

    <Wave color={chapter.nextColor} />
  </section>
);
