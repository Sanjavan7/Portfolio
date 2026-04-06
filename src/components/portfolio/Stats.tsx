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
    <section className="py-16 md:py-24 bg-card/50">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="text-center md:text-left"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-1" style={{ color: 'var(--color-primary)' }}>
                {stat.value}
              </div>
              <div className="label-mono text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
