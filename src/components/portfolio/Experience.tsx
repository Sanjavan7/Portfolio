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
        Research with{" "}
        <a
          href="https://tiffanywentingli.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black underline decoration-2 underline-offset-2"
        >
          Prof. Tiffany Li
        </a>{" "}
        on how students learn with an AI chatbot, reading and web search. 919 coded messages,
        344 sessions, models written from scratch. CHI 2027 poster and L@S 2027 paper in preparation.
      </>
    ),
  },
  {
    company: "Reliance Jio",
    role: "AI/ML Intern · Network Automation",
    period: "Jan – May 2025",
    color: "purple",
    description: "Satellite land classification for 5G/6G site planning: fine-tuned VGG19 to 93% accuracy across 10 cities and deployed batch inference on GCP (50K tiles in 22 hours).",
  },
  {
    company: "IBM India Software Lab (WatsonX)",
    role: "AI/ML Team Lead Intern",
    period: "May – Sep 2024",
    color: "green",
    description: "Led a 6-person student team building a BERT/GPT healthcare chatbot on IBM Watson.",
  },
  {
    company: "IBM India",
    role: "Data Analyst Intern · Government Infrastructure Analytics",
    period: "Jul – Sep 2024",
    color: "sky",
    description: "Road-safety analytics dashboards for India's National Highways Authority (Python, SQL, Tableau).",
  },
  {
    company: "IEEE Student Branch, Silver Oak",
    role: "Technical Team Member · NLP Research Committee",
    period: "Jan 2023 – Jan 2024",
    color: "yellow",
    description: "Built web content for the branch's website and worked on the NLP research committee (Python, Java, C#).",
  },
  {
    company: "PLUSINFOSYS",
    role: "Python (Web) Developer",
    period: "May – Jul 2023",
    color: "orange",
    description: "Built and optimized responsive web interfaces with React, Node.js and Python.",
  },
  {
    company: "LTIMindtree",
    role: "Junior Software Developer Intern",
    period: "Aug 2022 – Feb 2023",
    color: "purple",
    description: "FastAPI microservices and cross-platform Flutter apps.",
  },
  {
    company: "TEDx Silver Oak University",
    role: "Team Leader · earlier Web Developer & Junior Graphic Designer",
    period: "Dec 2021 – May 2022",
    color: "green",
    description: "Led the designers and developers for the TEDx event, managed sponsors and logistics, built the event website and made the promo graphics.",
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
