import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { SectionLabel, Sparkle, Dots } from "./CoinlyDecorations";

const experiences: {
  company: string;
  role: string;
  period: string;
  description: ReactNode;
  color: string;
}[] = [
  {
    company: "Stevens Institute of Technology",
    role: "Graduate Research Assistant",
    period: "Oct 2025 – Present",
    color: "orange",
    description: (
      <>
        Conducting extended research on "Can Learners Navigate Imperfect Generative Pedagogical Chatbots?" under{" "}
        <a
          href="https://tiffanywentingli.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black underline decoration-2 underline-offset-2"
        >
          Prof. Tiffany Li
        </a>
        . Qualitative coding of 500+ interactions, statistical clustering (K-Means, LPA/GMM).
      </>
    ),
  },
  {
    company: "Jio Platforms Limited",
    role: "Data Scientist · AI/ML",
    period: "Jan – May 2025",
    color: "purple",
    description: "Geospatial ML processing 500K+ satellite tiles daily. 93% accuracy nationwide.",
  },
  {
    company: "IBM WatsonX",
    role: "AI/ML Team Lead",
    period: "May – Sep 2024",
    color: "green",
    description: "Led 6-person team. Healthcare chatbot serving 50K+ daily queries. $2M+ ARR.",
  },
  {
    company: "IBM",
    role: "Data Analyst",
    period: "Jul – Sep 2024",
    color: "sky",
    description: "Road safety analytics for National Highways. 100K+ incidents analyzed.",
  },
  {
    company: "LTI Mindtree",
    role: "Junior Software Developer",
    period: "Aug 2022 – Feb 2023",
    color: "yellow",
    description: "Microservices supporting 10K+ daily requests. Flutter apps with 50K+ downloads.",
  },
];

const colorMap: Record<string, string> = {
  orange: 'var(--coinly-orange)',
  purple: 'var(--coinly-purple)',
  green: 'var(--coinly-green)',
  sky: 'var(--coinly-sky)',
  yellow: 'var(--coinly-yellow)',
};

export const Experience = () => {
  return (
    <section id="experience" className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-sky)' }}>
      <Sparkle className="absolute top-[8%] right-[8%] animate-wobble" color="#fff" size={32} />
      <Sparkle className="absolute bottom-[10%] left-[5%] animate-wobble" color="var(--coinly-yellow)" size={28} />
      <Dots className="absolute top-[30%] left-[3%]" color="#fff" size={50} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>
            <span style={{ color: 'var(--coinly-deep-blue)' }}>03 — Career</span>
          </SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight leading-[1.1] mt-4 text-coinly-navy"
          >
            Where I've <span className="highlight-orange">built</span>.
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-coinly relative"
              style={{
                background: 'var(--coinly-cream)',
                color: 'var(--coinly-deep-blue)',
                borderLeftWidth: '10px',
                borderLeftColor: colorMap[exp.color],
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-base font-bold mb-3 opacity-75">
                    {exp.role}
                  </p>
                  <p className="text-sm leading-relaxed font-medium opacity-85">
                    {exp.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="chip">{exp.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
