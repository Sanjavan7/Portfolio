import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "ContractPilot",
    tagline: "Sign smarter. Sign safer.",
    description:
      "AI-powered contract reviewer that analyzes legal documents clause-by-clause using K2 Think reasoning and a 500+ contract legal knowledge base, delivering plain-English risk analysis across four categories with interactive PDF highlighting and AI clause chat in under 60 seconds vs $300/hour traditional legal review.",
    metric: "DevFest (Columbia) Winner",
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
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description:
      "Surgical outcome prediction system using physics-based finite element analysis and Google Gemini multimodal reasoning delivering real-time neurological deficit predictions (motor, language, cognitive) in under 10 seconds vs 6+ hours traditional pre-operative mapping.",
    metric: "HackPrinceton Winner",
    year: "2025",
    link: "https://synovia.tech",
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
    name: "CliniJoy AI",
    tagline: "Healthcare scheduling, reimagined",
    description:
      "Intelligent optimization replacing 40+ hours of manual work with 5-minute AI scheduling.",
    metric: "Made for Sevaro",
    year: "2025",
    link: "https://sevaro.com/",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-base md:text-lg text-muted-foreground tracking-wide mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Products that ship.
            <br />
            <span className="text-muted-foreground">Impact that scales.</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group block"
            >
              <div className="py-6 md:py-8 border-t border-border hover:bg-secondary/30 transition-all duration-500 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg md:text-xl mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground/70 text-base max-w-2xl leading-relaxed hidden md:block">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-base text-muted-foreground">
                      {project.metric}
                    </span>
                    <motion.div
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:text-background transition-colors duration-300" />
                    </motion.div>
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
