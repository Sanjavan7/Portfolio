import { motion } from "framer-motion";
import { Sparkle } from "./CoinlyDecorations";

const stats = [
  { value: "11", label: "Products Shipped", icon: "🚀" },
  { value: "8", label: "Hackathon Wins", icon: "🏆" },
  { value: "500K+", label: "Daily Users", icon: "📈" },
  { value: "3", label: "Acquisitions", icon: "🪙" },
  { value: "ACM", label: "Published", icon: "📚" },
  { value: "10+", label: "Hackathons", icon: "✨" },
];

export const Stats = () => {
  return (
    <section className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-deep-blue)', color: 'var(--coinly-cream)' }}>
      <Sparkle className="absolute top-[15%] left-[8%] animate-wobble" color="var(--coinly-orange)" size={32} />
      <Sparkle className="absolute bottom-[15%] right-[10%] animate-wobble" color="var(--coinly-yellow)" size={28} />
      <Sparkle className="absolute top-[60%] left-[45%]" color="var(--coinly-sky)" size={20} />

      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(1.75rem,4vw,3rem)] font-black tracking-tight"
          >
            Impact you can <span className="highlight-yellow">measure</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-4xl md:text-5xl font-black tracking-tight mb-1"
                style={{ color: 'var(--coinly-orange)' }}
              >
                {stat.value}
              </div>
              <div
                className="h-1 w-8 mx-auto mb-3 rounded-full"
                style={{ background: 'var(--coinly-yellow)' }}
              />
              <div className="text-xs font-bold tracking-wider uppercase opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
