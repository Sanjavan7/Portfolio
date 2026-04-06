import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Synaptix",
    tagline: "Repurpose drugs. Rescue lives.",
    description: "Drug repurposing platform identifying new therapeutic uses for FDA-approved drugs — type a disease with no cure, receive drug candidates with biological reasoning.",
    metric: "MLH Track Winner, Hacklytics",
    year: "2026",
    link: "https://devpost.com/software/synaptix",
    tags: ["Healthcare AI", "Drug Discovery"],
  },
  {
    name: "GeneAI",
    tagline: "Your genes. Your medicine.",
    description: "Pharmacogenomics platform predicting adverse drug reactions based on patient genetic profiles, addressing 1.3M+ annual ER visits from wrong drug prescriptions.",
    metric: "Top 7 HackIllinois Shark Tank",
    year: "2026",
    link: "https://devpost.com/software/geneai",
    tags: ["Genomics", "ML"],
  },
  {
    name: "ContractPilot",
    tagline: "Sign smarter. Sign safer.",
    description: "Legal contract analysis system explaining every clause in plain English, delivering $2.99 consumer access vs $300/hour attorney fees.",
    metric: "Best Use of Flowglad, DevFest Columbia",
    year: "2026",
    link: "https://devpost.com/software/contractpilot-1l3rnd",
    tags: ["Legal Tech", "NLP"],
  },
  {
    name: "RentSense",
    tagline: "Live where you should — not just where you can.",
    description: "AI-powered system that helps people choose where to live by turning 'quality of life' into a personalized, data-driven decision.",
    metric: "NexHacks Selection",
    year: "2026",
    link: "https://devpost.com/software/stealth-mode-startup",
    tags: ["Data Science", "GIS"],
  },
  {
    name: "DejaVu Music",
    tagline: "Find the song stuck in your head.",
    description: "Music discovery platform finding songs that sound similar to your query — solving the \"I've heard this melody before\" problem.",
    metric: "2,500+ LinkedIn impressions",
    year: "2026",
    link: "https://dejavumusic.vercel.app/",
    tags: ["Audio ML", "Search"],
  },
  {
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description: "Surgical outcome prediction system using physics-based finite element analysis and Google Gemini multimodal reasoning.",
    metric: "HackPrinceton Winner",
    year: "2025",
    link: "https://synovia.tech",
    tags: ["Neuroscience", "Computer Vision"],
  },
  {
    name: "CliniJoy AI",
    tagline: "Healthcare scheduling, reimagined.",
    description: "Intelligent optimization replacing 40+ hours of manual work with 5-minute AI scheduling.",
    metric: "Made for Sevaro",
    year: "2025",
    link: "https://sevaro.com/",
    tags: ["Healthcare", "Optimization"],
  },
  {
    name: "UltraBench",
    tagline: "The standard for AI memory benchmarking.",
    description: "Open-source benchmark platform that tests AI memory providers head-to-head with real data.",
    metric: "Requested by Supermemory",
    year: "2025",
    link: "https://devpost.com/software/ultrabench-open-benchmark-platform-for-ai-memory-providers",
    tags: ["Benchmarking", "Open Source"],
  },
  {
    name: "Alama",
    tagline: "One-touch AI companion onboarding.",
    description: "Conversational onboarding platform leveraging CUA systems agents with Chrome DevTools Protocol and Touch ID biometric authentication.",
    metric: "Requested by Omi",
    year: "2025",
    link: "https://www.omi.me/",
    tags: ["CUA", "Onboarding"],
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing">
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
            Selected Work
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold tracking-tight">
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
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group block"
            >
              <div className="py-6 md:py-7 border-t border-border hover:bg-card/60 transition-colors duration-200 -mx-6 px-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight group-hover:text-secondary transition-colors duration-200" style={{ color: 'var(--color-secondary)' }}>
                        {project.name}
                      </h3>
                      <span className="label-mono text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="text-muted-foreground text-base mb-2 font-serif italic">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground/60 text-sm leading-relaxed hidden md:block font-serif max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-3 hidden md:flex">
                      {project.tags.map(tag => (
                        <span key={tag} className="badge">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="label-mono hidden lg:block max-w-[180px] text-right text-muted-foreground">
                      {project.metric}
                    </span>
                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors duration-200" />
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
