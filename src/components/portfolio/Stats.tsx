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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="text-sm text-muted-foreground tracking-wide mb-4">
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-muted-foreground">
            Impact you can measure.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
