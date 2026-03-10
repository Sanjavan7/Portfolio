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
    <section className="py-16 md:py-24">
      <div className="w-full px-6 md:px-16 lg:px-24">
        {/* Section header — AceFund numbering */}
        <div className="section-number mb-16">
          <span className="section-number-label">(002)</span>
          <span className="section-number-title">BY THE NUMBERS</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16"
        >
          Impact you can measure.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="relative"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2" style={{ color: 'var(--color-indigo)' }}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-sans tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
