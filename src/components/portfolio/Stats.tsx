import { motion } from "framer-motion";

const stats = [
  { value: "11", label: "Products Shipped" },
  { value: "5", label: "Hackathon Wins" },
  { value: "500K+", label: "Daily Users" },
  { value: "1", label: "Acquisition" },
  { value: "ACM", label: "Published" },
  { value: "15+", label: "Hackathons" },
];

export const Stats = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="card-tech p-6 text-center glow-ring"
            >
              <div className="text-3xl md:text-4xl font-bold font-display text-gradient-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
