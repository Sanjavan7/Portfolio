import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BotanicalCornerTopRight, BotanicalCornerBottomLeft } from "./BotanicalSVG";

const projects = [
  // 2026
  {
    name: "Synaptix",
    tagline: "Repurpose drugs. Rescue lives.",
    description:
      "Drug repurposing platform identifying new therapeutic uses for FDA-approved drugs — type a disease with no cure, receive drug candidates with biological reasoning, addressing years-long drug development timelines.",
    metric: "MLH Track Winner, Hacklytics (Georgia Tech, 600+ participants)",
    year: "2026",
    link: "https://devpost.com/software/synaptix",
  },
  {
    name: "GeneAI",
    tagline: "Your genes. Your medicine.",
    description:
      "Pharmacogenomics platform predicting adverse drug reactions based on patient genetic profiles, addressing 1.3M+ annual ER visits from wrong drug prescriptions.",
    metric: "Top 7 HackIllinois Shark Tank (800+ participants)",
    year: "2026",
    link: "https://devpost.com/software/geneai",
  },
  {
    name: "ContractPilot",
    tagline: "Sign smarter. Sign safer.",
    description:
      "Legal contract analysis system explaining every clause in plain English, delivering $2.99 consumer access vs $300/hour attorney fees.",
    metric: "Best Use of Flowglad, DevFest Columbia (600+ participants)",
    year: "2026",
    link: "https://devpost.com/software/contractpilot-1l3rnd",
  },
  {
    name: "RentSense",
    tagline: "Live where you should — not just where you can.",
    description:
      "AI-powered system that helps people choose where to live by turning 'quality of life' into a personalized, data-driven decision.",
    metric: "NexHacks Selection",
    year: "2026",
    link: "https://devpost.com/software/stealth-mode-startup",
  },
  {
    name: "DejaVu Music",
    tagline: "Find the song stuck in your head.",
    description:
      "Music discovery platform finding songs that sound similar to your query — solving the \"I've heard this melody before\" problem.",
    metric: "2,500+ LinkedIn impressions",
    year: "2026",
    link: "https://dejavumusic.vercel.app/",
  },
  // 2025
  {
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description:
      "Surgical outcome prediction system using physics-based finite element analysis and Google Gemini multimodal reasoning delivering real-time neurological deficit predictions (motor, language, cognitive) in under 10 seconds vs 6+ hours traditional pre-operative mapping.",
    metric: "HackPrinceton Winner (800+ participants)",
    year: "2025",
    link: "https://synovia.tech",
  },
  {
    name: "CliniJoy AI",
    tagline: "Healthcare scheduling, reimagined",
    description:
      "Intelligent optimization replacing 40+ hours of manual work with 5-minute AI scheduling.",
    metric: "Made for Sevaro",
    year: "2025",
    link: "https://sevaro.com/",
  },
  {
    name: "UltraBench",
    tagline: "The standard for AI memory benchmarking",
    description:
      "Open-source benchmark platform that tests AI memory providers head-to-head with real data.",
    metric: "Requested by Supermemory",
    year: "2025",
    link: "https://devpost.com/software/ultrabench-open-benchmark-platform-for-ai-memory-providers",
  },
  {
    name: "Alama",
    tagline: "One-touch AI companion onboarding",
    description:
      "Conversational onboarding platform leveraging CUA systems agents with Chrome DevTools Protocol and Touch ID biometric authentication, replacing multiple OAuth permission screens with few seconds setup flow and increasing completion rate.",
    metric: "Requested by Omi",
    year: "2025",
    link: "https://www.omi.me/",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      {/* Background botanicals */}
      <BotanicalCornerTopRight className="absolute -top-12 -right-12 w-[350px] h-[350px] md:w-[500px] md:h-[500px] pointer-events-none" opacity={0.04} />
      <BotanicalCornerBottomLeft className="absolute -bottom-16 -left-16 w-[300px] h-[300px] md:w-[450px] md:h-[450px] pointer-events-none" opacity={0.035} />
      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        {/* Section header — AceFund numbering style */}
        <div className="section-number mb-16">
          <span className="section-number-label">(001)</span>
          <span className="section-number-title">SELECTED WORK</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Products that ship.
            <br />
            <span className="text-muted-foreground">Impact that scales.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group block"
            >
              <div className="py-6 md:py-8 border-t border-border transition-all duration-500 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24" style={{ transition: 'background-color 0.5s' }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-indigo-faint)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300" style={{ transition: 'color 0.3s' }}>
                        {project.name}
                      </h3>
                      <span className="text-sm text-muted-foreground font-sans">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg md:text-xl mb-3 font-sans">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground/60 text-base max-w-2xl leading-relaxed hidden md:block font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground font-sans hidden lg:block max-w-[200px] text-right">
                      {project.metric}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-transparent transition-all duration-300" style={{ transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--color-indigo)'; e.currentTarget.style.borderColor = 'var(--color-indigo)'; }} onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = ''; }}>
                      <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
