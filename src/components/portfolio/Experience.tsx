import { motion } from "framer-motion";
import { type ReactNode } from "react";

const experiences: {
  company: string;
  role: string;
  period: string;
  description: ReactNode;
}[] = [
  {
    company: "Stevens Institute of Technology",
    role: "Graduate Research Assistant",
    period: "Oct 2025 – Present",
    description: (
      <>
        Conducting extended research on "Can Learners Navigate Imperfect Generative Pedagogical Chatbots?" under{" "}
        <a href="https://tiffanywentingli.com/" target="_blank" rel="noopener noreferrer" className="link-underline">Prof. Tiffany Li</a>.
        Qualitative coding of 500+ interactions, statistical clustering (K-Means, LPA/GMM).
      </>
    ),
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
    <section id="experience" className="section-spacing bg-card/50">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">
            <span className="accent-dot mr-2" />
            Career
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold tracking-tight">
            Where I've built.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="py-6 md:py-7 border-t border-border hover:bg-background/60 transition-colors duration-200 -mx-6 px-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground text-base mb-2 font-serif italic">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground/60 text-sm leading-relaxed hidden md:block font-serif max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="label-mono text-muted-foreground">{exp.period}</span>
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
