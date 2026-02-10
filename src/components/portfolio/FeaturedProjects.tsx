import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description:
      "Surgical outcome prediction system using physics-based finite element analysis and Google Gemini multimodal reasoning delivering real-time neurological deficit predictions (motor, language, cognitive) in under 10 seconds vs 6+ hours traditional pre-operative mapping.",
    metric: "HackPrinceton Winner",
    year: "2025",
    link: "https://synovia.tech",
    tags: ["ML", "Healthcare", "Gemini"],
  },
  {
    name: "Alama",
    tagline: "One-touch AI companion onboarding",
    description:
      "Conversational onboarding platform leveraging CUA systems agents with Chrome DevTools Protocol and Touch ID biometric authentication, replacing multiple OAuth permission screens with few seconds setup flow and increasing completion rate.",
    metric: "Requested by Omi",
    year: "2025",
    link: "https://www.omi.me/",
    tags: ["CUA", "Biometrics", "DX"],
  },
  {
    name: "UltraBench",
    tagline: "The standard for AI memory benchmarking",
    description:
      "Open-source benchmark platform that tests AI memory providers head-to-head with real data.",
    metric: "Requested by Supermemory",
    year: "2025",
    link: "https://devpost.com/software/ultrabench-open-benchmark-platform-for-ai-memory-providers",
    tags: ["Open Source", "Benchmarking", "AI"],
  },
  {
    name: "CliniJoy AI",
    tagline: "Healthcare scheduling, reimagined",
    description:
      "Intelligent optimization replacing 40+ hours of manual work with 5-minute AI scheduling.",
    metric: "Made for Sevaro",
    year: "2025",
    link: "https://sevaro.com/",
    tags: ["Healthcare", "Optimization", "AI"],
  },
  {
    name: "RentSense",
    tagline: "Live where you should — not just where you can.",
    description:
      "AI-powered system that helps people choose where to live by turning 'quality of life' into a personalized, data-driven decision.",
    metric: "NexHacks Selection",
    year: "2026",
    link: "https://devpost.com/software/stealth-mode-startup",
    tags: ["Data Science", "Geospatial", "ML"],
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
            Products that ship.
            <br />
            <span className="text-muted-foreground">Impact that scales.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-tech p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight">
                      {project.name}
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium">
                      {project.year}
                    </span>
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                </div>
                <p className="text-foreground font-medium text-lg mb-2">
                  {project.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-primary">
                  {project.metric}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
