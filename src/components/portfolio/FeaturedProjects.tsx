import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Synovia",
    tagline: "Predicting the future of brain surgery",
    description:
      "AI that visualizes neurological consequences before the first incision. Physics-based simulation meets deep learning.",
    metric: "HackPrinceton Winner",
    year: "2024",
    link: "https://synovia.tech",
  },
  {
    name: "Alama",
    tagline: "One-touch AI companion onboarding",
    description:
      "Replaced 47 OAuth screens with single Touch ID authentication. Acquired by Based Hardware.",
    metric: "Acquired",
    year: "2024",
    link: "#",
  },
  {
    name: "UltraBench",
    tagline: "The standard for AI memory benchmarking",
    description:
      "Open-source suite measuring how AI providers store and retrieve information. Cited by Pinecone & Weaviate.",
    metric: "5K+ Weekly Downloads",
    year: "2024",
    link: "#",
  },
  {
    name: "CliniJoy AI",
    tagline: "Healthcare scheduling, reimagined",
    description:
      "Intelligent optimization replacing 40+ hours of manual work with 5-minute AI scheduling.",
    metric: "$630K Annual Savings",
    year: "2024",
    link: "#",
  },
  {
    name: "RentSense",
    tagline: "Finding home in New York City",
    description:
      "Scores all 197 NYC neighborhoods across 8 lifestyle dimensions using AI-powered recommendations.",
    metric: "NexHacks Selection",
    year: "2024",
    link: "#",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="container mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <p className="text-sm text-muted-foreground tracking-wide mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
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
              <div className="py-10 md:py-14 border-t border-border hover:bg-secondary/30 transition-all duration-500 -mx-8 md:-mx-12 px-8 md:px-12">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-muted-foreground/70 text-sm max-w-xl leading-relaxed hidden md:block">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-8">
                    <span className="text-sm text-muted-foreground">
                      {project.metric}
                    </span>
                    <motion.div
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:text-background transition-colors duration-300" />
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
