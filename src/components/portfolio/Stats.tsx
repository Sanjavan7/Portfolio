import { motion } from "framer-motion";
import { Sparkle } from "./CoinlyDecorations";

const stats = [
  { value: "11", label: "Products Shipped", accent: "var(--coinly-orange)" },
  { value: "8", label: "Hackathon Wins", accent: "var(--coinly-yellow)" },
  { value: "500K+", label: "Daily Users", accent: "var(--coinly-green)" },
  { value: "3", label: "Acquisitions", accent: "var(--coinly-sky)" },
  { value: "ACM", label: "Published", accent: "var(--coinly-purple)" },
  { value: "10+", label: "Hackathons", accent: "var(--coinly-orange)" },
];

export const Stats = () => {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'var(--coinly-deep-blue)', color: 'var(--coinly-cream)' }}
    >
      <Sparkle className="absolute top-6 right-8 animate-wobble opacity-70" color="var(--coinly-orange)" size={24} />
      <Sparkle className="absolute bottom-6 left-8 opacity-60" color="var(--coinly-yellow)" size={20} />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-black tracking-tight mb-10"
        >
          Impact you can <span className="highlight-yellow">measure</span>.
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="text-center flex flex-col items-center py-4 md:py-5 rounded-2xl"
              style={{
                background: 'rgba(254, 249, 242, 0.04)',
                border: '1.5px solid rgba(254, 249, 242, 0.08)',
              }}
            >
              <div
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none mb-2"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </div>
              <div
                className="h-[3px] w-6 rounded-full mb-2"
                style={{ background: stat.accent, opacity: 0.6 }}
              />
              <div className="text-[10px] md:text-xs font-bold tracking-wider uppercase opacity-80 px-2 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
