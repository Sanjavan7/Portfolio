import { motion } from "framer-motion";

const stats = [
  { value: "11", label: "Products Shipped" },
  { value: "8", label: "Hackathon Wins" },
  { value: "500K+", label: "Daily Users" },
  { value: "3", label: "Acquisition" },
  { value: "ACM", label: "Published" },
  { value: "10+", label: "Hackathons" },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
              className="text-center md:text-left"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-display tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>
                {stat.value}
              </div>
              <div className="label-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
