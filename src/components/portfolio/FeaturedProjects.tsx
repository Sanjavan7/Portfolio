import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
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
  {
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description:
      "Surgical outcome prediction system using physics-based finite element analysis and Google Gemini multimodal reasoning delivering real-time neurological deficit predictions in under 10 seconds vs 6+ hours traditional pre-operative mapping.",
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
      "Conversational onboarding platform leveraging CUA systems agents with Chrome DevTools Protocol and Touch ID biometric authentication.",
    metric: "Requested by Omi",
    year: "2025",
    link: "https://www.omi.me/",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="section-header-line"
        >
          <p className="label-mono mb-4">Selected Work</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wider">
            PROJECTS
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
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.33, 1, 0.68, 1] }}
              className="group block"
            >
              <div className="py-6 md:py-8 border-t border-border project-row -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-wider group-hover:text-accent-orange transition-colors duration-300" style={{ color: 'var(--color-accent)', WebkitTextFillColor: 'initial' }}>
                        {project.name}
                      </h3>
                      <span className="label-mono">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground text-base md:text-lg mb-2 font-serif italic">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground/60 text-sm max-w-2xl leading-relaxed hidden md:block font-serif">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="label-mono hidden lg:block max-w-[200px] text-right">
                      {project.metric}
                    </span>
                    <div className="w-12 h-12 border-2 border-border flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:text-background transition-colors duration-300" />
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
