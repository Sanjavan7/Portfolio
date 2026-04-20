import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, Sparkle } from "./CoinlyDecorations";

const projects = [
  {
    name: "Synaptix",
    tagline: "Repurpose drugs. Rescue lives.",
    description: "Drug repurposing platform identifying new therapeutic uses for FDA-approved drugs — type a disease with no cure, receive drug candidates with biological reasoning.",
    metric: "MLH Track Winner, Hacklytics",
    year: "2026",
    link: "https://devpost.com/software/synaptix",
    color: "orange",
  },
  {
    name: "GeneAI",
    tagline: "Your genes. Your medicine.",
    description: "Pharmacogenomics platform predicting adverse drug reactions based on patient genetic profiles, addressing 1.3M+ annual ER visits from wrong drug prescriptions.",
    metric: "Top 7 HackIllinois Shark Tank",
    year: "2026",
    link: "https://devpost.com/software/geneai",
    color: "yellow",
  },
  {
    name: "ContractPilot",
    tagline: "Sign smarter. Sign safer.",
    description: "Legal contract analysis system explaining every clause in plain English, delivering $2.99 consumer access vs $300/hour attorney fees.",
    metric: "Best Use of Flowglad, DevFest Columbia",
    year: "2026",
    link: "https://devpost.com/software/contractpilot-1l3rnd",
    color: "sky",
  },
  {
    name: "RentSense",
    tagline: "Live where you should — not just where you can.",
    description: "AI-powered system that helps people choose where to live by turning 'quality of life' into a personalized, data-driven decision.",
    metric: "NexHacks Selection",
    year: "2026",
    link: "https://devpost.com/software/stealth-mode-startup",
    color: "green",
  },
  {
    name: "DejaVu Music",
    tagline: "Find the song stuck in your head.",
    description: "Music discovery platform finding songs that sound similar to your query — solving the \"I've heard this melody before\" problem.",
    metric: "2,500+ LinkedIn impressions",
    year: "2026",
    link: "https://dejavumusic.vercel.app/",
    color: "purple",
  },
  {
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description: "Surgical outcome prediction system using physics-based finite element analysis and Google Gemini multimodal reasoning.",
    metric: "HackPrinceton Winner",
    year: "2025",
    link: "https://synovia.tech",
    color: "orange",
  },
  {
    name: "CliniJoy AI",
    tagline: "Healthcare scheduling, reimagined.",
    description: "Intelligent optimization replacing 40+ hours of manual work with 5-minute AI scheduling.",
    metric: "Made for Sevaro",
    year: "2025",
    link: "https://sevaro.com/",
    color: "yellow",
  },
  {
    name: "UltraBench",
    tagline: "The standard for AI memory benchmarking.",
    description: "Open-source benchmark platform that tests AI memory providers head-to-head with real data.",
    metric: "Requested by Supermemory",
    year: "2025",
    link: "https://devpost.com/software/ultrabench-open-benchmark-platform-for-ai-memory-providers",
    color: "sky",
  },
  {
    name: "Alama",
    tagline: "One-touch AI companion onboarding.",
    description: "Conversational onboarding platform leveraging CUA systems agents with Chrome DevTools Protocol and Touch ID biometric authentication.",
    metric: "Requested by Omi",
    year: "2025",
    link: "https://www.omi.me/",
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  orange: { bg: 'var(--coinly-orange)', text: '#fff' },
  yellow: { bg: 'var(--coinly-yellow)', text: 'var(--coinly-deep-blue)' },
  sky: { bg: 'var(--coinly-sky)', text: '#fff' },
  green: { bg: 'var(--coinly-green)', text: 'var(--coinly-deep-blue)' },
  purple: { bg: 'var(--coinly-purple)', text: '#fff' },
};

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-cream)' }}>
      <Sparkle className="absolute top-[8%] right-[5%] animate-wobble" color="var(--coinly-orange)" size={32} />
      <Sparkle className="absolute bottom-[5%] left-[4%]" color="var(--coinly-purple)" size={24} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel>01 — Selected Work</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tight leading-[1.1] mt-4 text-coinly-navy"
          >
            Products that <span className="highlight-orange">ship</span>.
            <br />
            Impact that <span className="highlight-green highlight-right">scales</span>.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
                className="card-coinly group block relative overflow-hidden"
                style={{ background: colors.bg, color: colors.text }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl lg:text-2xl font-black tracking-tight">
                      {project.name}
                    </h3>
                    <span className="chip">{project.year}</span>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-transform group-hover:rotate-12"
                    style={{
                      background: 'var(--coinly-deep-blue)',
                      borderColor: 'var(--coinly-deep-blue)',
                      color: 'var(--coinly-cream)'
                    }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-base md:text-lg font-bold mb-2 opacity-95">
                  {project.tagline}
                </p>
                <p className="text-sm leading-relaxed mb-4 opacity-80 font-medium">
                  {project.description}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider opacity-75">
                  ✦ {project.metric}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
