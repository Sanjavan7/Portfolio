import { motion } from "framer-motion";

const stats = [
  { value: "11", label: "Products Built", icon: "🚀" },
  { value: "5", label: "Hackathon Wins", icon: "🏆" },
  { value: "500K+", label: "Daily Users", icon: "👥" },
  { value: "1", label: "Acquisition", icon: "💼" },
  { value: "ACM", label: "Published Researcher", icon: "📝" },
  { value: "15+", label: "Hackathons Attended", icon: "⚡" },
];

export const Stats = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            By the Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            Impact you can measure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="stat-card group"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border/50 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
