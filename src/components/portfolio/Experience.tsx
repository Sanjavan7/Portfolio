import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Stevens Institute of Technology",
    role: "Graduate Research Assistant",
    period: "Oct 2025 – Present",
    description: "First-author ACM publication. Educational AI research.",
  },
  {
    company: "Jio Platforms Limited",
    role: "Data Scientist · AI/ML",
    period: "Jan – May 2025",
    description: "Geospatial ML processing 500K+ satellite tiles daily. 93% accuracy nationwide.",
  },
  {
    company: "IBM WatsonX",
    role: "AI/ML Team Lead",
    period: "May – Sep 2024",
    description: "Led 6-person team. Healthcare chatbot serving 50K+ daily queries. $2M+ ARR.",
  },
  {
    company: "IBM",
    role: "Data Analyst",
    period: "Jul – Sep 2024",
    description: "Road safety analytics for National Highways. 100K+ incidents analyzed.",
  },
  {
    company: "LTI Mindtree",
    role: "Junior Software Developer",
    period: "Aug 2022 – Feb 2023",
    description: "Microservices supporting 10K+ daily requests. Flutter apps with 50K+ downloads.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-spacing">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
            Where I've built.
          </h2>
        </motion.div>

        <div className="max-w-5xl space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="card-tech p-6 flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display tracking-tight mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">{exp.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap font-medium mt-1">
                {exp.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
