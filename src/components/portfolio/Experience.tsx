import { motion } from "framer-motion";

const experiences = [
  {
    company: "Stevens Institute of Technology",
    role: "Graduate Research Assistant",
    period: "Oct 2025 – Present",
    description: "First-author ACM publication at L@S '25. Extended research on pedagogical chatbot error management in STEM learning.",
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
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-muted-foreground tracking-wide mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Where I've built.
          </h2>
        </motion.div>

        <div className="space-y-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="py-6 md:py-8 border-t border-border hover:bg-secondary/30 transition-all duration-500 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg md:text-xl mb-3">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground/70 text-base max-w-2xl leading-relaxed hidden md:block">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-base text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
