import { motion } from "framer-motion";
import { CHAPTERS, scrollToChapter, type SpyId } from "@/components/island/chapters";

// Shopify-Editions-style chapter index pinned to the left edge on large screens.
// Numbers only by default; titles appear when there's room (2xl).
export const SideIndex = ({ active }: { active: SpyId }) => {
  const show = active !== "hero";
  return (
    <motion.nav
      aria-label="Chapters"
      initial={false}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : -16 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:block fixed left-3 top-1/2 z-40"
      style={{ y: "-50%", pointerEvents: show ? "auto" : "none" }}
    >
      <ol
        className="rounded-2xl p-1.5 space-y-1"
        style={{
          background: "var(--coinly-cream)",
          border: "2.5px solid var(--coinly-deep-blue)",
          boxShadow: "4px 4px 0 var(--coinly-deep-blue)",
        }}
      >
        {CHAPTERS.map((c) => {
          const on = c.id === active;
          return (
            <li key={c.id}>
              <button
                onClick={() => scrollToChapter(c.id)}
                aria-current={on ? "true" : undefined}
                title={c.title}
                className={`flex items-center gap-2 w-full rounded-xl px-2 py-1.5 text-xs font-black transition-colors ${on ? "" : "hover:bg-coinly-yellow/60"}`}
                style={on ? { background: "var(--coinly-orange)", color: "#fff" } : { color: "var(--coinly-deep-blue)" }}
              >
                <span>{c.num}</span>
                <span className="hidden 2xl:inline whitespace-nowrap">{c.title}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
};
