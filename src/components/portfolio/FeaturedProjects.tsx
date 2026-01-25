import { motion } from "framer-motion";
import { ArrowRight, Award, TrendingUp } from "lucide-react";

const projects = [
  {
    name: "Synovia",
    tagline: "Brain Surgery AI Outcome Predictor",
    metric: "HackPrinceton Winner",
    metricDetail: "Hospital Pilots Ongoing",
    description:
      "Predicts neurological consequences of brain tissue removal BEFORE making the first incision. Physics-based FEA simulation + Gemini AI integration.",
    gradient: "from-blue-600 to-cyan-500",
    link: "https://synovia.tech",
    tech: ["FastAPI", "React Three Fiber", "Google Gemini 2.0", "Physics FEA"],
  },
  {
    name: "Alama",
    tagline: "AI Companion Onboarding",
    metric: "Acquired",
    metricDetail: "by Based Hardware",
    description:
      "One-touch AI companion onboarding inspired by 'Her'. Replaces 47 OAuth screens with single Touch ID authentication.",
    gradient: "from-purple-600 to-pink-500",
    link: "#",
    tech: ["React", "FastAPI", "Chrome DevTools Protocol", "Touch ID"],
  },
  {
    name: "UltraBench",
    tagline: "AI Memory Provider Benchmarking",
    metric: "5K+ Weekly Downloads",
    metricDetail: "Industry Standard",
    description:
      "Open-source benchmarking suite measuring how well AI memory providers store and retrieve information. Adopted by Supermemory, cited by Pinecone & Weaviate.",
    gradient: "from-emerald-600 to-teal-500",
    link: "#",
    tech: ["TypeScript", "Bun", "React", "Gemini 2.0"],
  },
  {
    name: "CliniJoy AI",
    tagline: "Healthcare Provider Scheduling",
    metric: "$630K Savings",
    metricDetail: "98.6% Coverage",
    description:
      "Intelligent scheduling platform automating doctor shift assignments. Replaces 40+ hours of manual Excel work with 5-minute AI optimization.",
    gradient: "from-orange-500 to-red-500",
    link: "#",
    tech: ["Google OR-Tools", "React", "D3.js", "FastAPI"],
  },
  {
    name: "RentSense",
    tagline: "AI-Powered NYC Neighborhood Finder",
    metric: "VC Speed-Dating Selected",
    metricDetail: "NexHacks 2026",
    description:
      "Intelligent neighborhood recommendations based on lifestyle preferences. Scores all 197 NYC neighborhoods across 8 dimensions.",
    gradient: "from-indigo-600 to-blue-500",
    link: "#",
    tech: ["React", "Gemini AI", "Leaflet.js", "FastAPI"],
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Products that ship. Systems at scale. Real impact.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 overflow-hidden">
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-5 blur-3xl transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {project.metric.includes("Acquired") ||
                        project.metric.includes("Winner") ? (
                          <Award className="w-3 h-3" />
                        ) : (
                          <TrendingUp className="w-3 h-3" />
                        )}
                        {project.metric}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.metricDetail}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium group/link"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
