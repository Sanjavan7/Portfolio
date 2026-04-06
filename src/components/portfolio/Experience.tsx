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
        <a href="https://tiffanywentingli.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors duration-300" style={{ color: 'var(--color-accent)' }}>Prof. Tiffany Li</a>.
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
    <section id="experience" className="section-spacing">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="section-header-line"
        >
          <p className="label-mono mb-4">Where I've Built</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wider">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
              className="group"
            >
              <div className="py-6 md:py-8 border-t border-border project-row -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-wider mb-2 group-hover:text-accent-orange transition-colors duration-300" style={{ color: 'var(--color-accent)' }}>
                      {exp.company.toUpperCase()}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg mb-2 font-serif italic">
                      {exp.role}
                    </p>
                    <p className="text-muted-foreground/60 text-sm max-w-2xl leading-relaxed hidden md:block font-serif">
                      {exp.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="label-mono">{exp.period}</span>
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
