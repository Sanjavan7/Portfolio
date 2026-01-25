import { motion } from "framer-motion";

const experiences = [
  {
    company: "Stevens Institute of Technology",
    role: "Graduate Research Assistant",
    period: "Oct 2025 - Present",
    location: "Hoboken, NJ",
    impact:
      "First-author publication at ACM L@S 2026. Qualitative coding of 500+ chatbot interactions, LPA clustering of 576 sessions.",
    color: "bg-blue-500",
  },
  {
    company: "Jio Platforms Limited",
    role: "Data Scientist - AI/ML Network Automation",
    period: "Jan 2025 - May 2025",
    location: "Navi Mumbai, India",
    impact:
      "Built geospatial ML pipeline processing 500K+ satellite tiles daily. 93% land classification accuracy. Deployed nationwide across 23 states.",
    color: "bg-cyan-500",
  },
  {
    company: "IBM WatsonX",
    role: "AI/ML Team Lead - Healthcare AI",
    period: "May 2024 - Sep 2024",
    location: "Ahmedabad, India",
    impact:
      "Led 6-person team building healthcare chatbot. 50K+ daily medical queries. 92% user satisfaction. $2M+ ARR.",
    color: "bg-purple-500",
  },
  {
    company: "IBM",
    role: "Data Analyst - NHAI Project",
    period: "Jul 2024 - Sep 2024",
    location: "Ahmedabad, India",
    impact:
      "Built road safety analytics for National Highways. Analyzed 100K+ incidents. Informed $250M+ infrastructure investments.",
    color: "bg-indigo-500",
  },
  {
    company: "LTI Mindtree",
    role: "Junior Software Developer",
    period: "Aug 2022 - Feb 2023",
    location: "Mumbai, India",
    impact:
      "Built microservices supporting 10K+ daily requests. Flutter apps with 50K+ downloads. 99.9% crash-free sessions.",
    color: "bg-emerald-500",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Where impact meets scale
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full ${exp.color} ring-4 ring-background`}
                  />

                  <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-primary font-medium mb-1">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.location}
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
