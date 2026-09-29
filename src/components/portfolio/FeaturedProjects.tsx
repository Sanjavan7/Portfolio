import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, Sparkle } from "./CoinlyDecorations";

const projects = [
  {
    name: "Synovia",
    tagline: "See surgical outcomes before the first incision.",
    description: "Predicts neurological deficits before brain surgery by combining finite-element simulation with Gemini multimodal reasoning. I led the ML side and built the simulation API.",
    metric: "Best Healthcare Hack · HackPrinceton Fall 2025",
    year: "2025",
    link: "https://devpost.com/software/presurg",
    color: "orange",
  },
  {
    name: "Synaptix",
    tagline: "Repurpose drugs. Rescue lives.",
    description: "Type a disease with no cure and get FDA-approved drug candidates, with the biological reasoning behind each one. Knowledge-graph embeddings over 97K entities and 5.8M links, plus molecular similarity. I built the ML engine and the frontend.",
    metric: "[MLH] Best Use of Vultr · Hacklytics 2026",
    year: "2026",
    link: "https://devpost.com/software/synaptix",
    color: "purple",
  },
  {
    name: "Night Owl",
    tagline: "Find the rats 311 never hears about.",
    description: "NYC rat data is complaint-driven, so quiet blocks go unseen. I built the modeling stack: LightGBM, a 'silence score', a 119-month backtest and a sensor-site optimizer. Its picks found rat signs at 19.5% of swept lots vs 15.2% for the 311 baseline.",
    metric: "DivHacks 2026 · Columbia",
    year: "2026",
    link: "https://devpost.com/software/barn-owl-vm9n3s",
    color: "sky",
  },
  {
    name: "GeneAI",
    tagline: "Your genes. Your medicine.",
    description: "Predicts adverse drug reactions from a patient's genes instead of population averages. I built the data pipeline (CPIC, PubChem, DrugBank), the API and the deployment.",
    metric: "Top 7 Pitch · HackIllinois 2026",
    year: "2026",
    link: "https://devpost.com/software/geneai",
    color: "yellow",
  },
  {
    name: "ContractPilot",
    tagline: "Sign smarter. Sign safer.",
    description: "Explains every clause of a legal contract in plain English, for $2.99 instead of $300/hour for a lawyer. Built in 24 hours with a team of four.",
    metric: "Best Use of Flowglad · DevFest 2026, Columbia",
    year: "2026",
    link: "https://devpost.com/software/contractpilot-1l3rnd",
    color: "green",
  },
  {
    name: "RentSense",
    tagline: "Live where you should, not just where you can.",
    description: "Turns 'quality of life' into a personalized, data-driven decision about where to live. I built the frontend and connected it to the model API.",
    metric: "NexHacks 2026",
    year: "2026",
    link: "https://devpost.com/software/stealth-mode-startup",
    color: "orange",
  },
];

const moreProjects: {
  name: string;
  description: string;
  metric: string;
  year: string;
  link?: string;
  color: string;
}[] = [
  {
    name: "UltraBench",
    description: "Head-to-head benchmark for AI memory providers (Supermemory, Mem0) across 4 benchmarks and 500+ questions, built on Supermemory's open-source MemoryBench.",
    metric: "Solo build · DevHouse SF 2025",
    year: "2025",
    link: "https://devpost.com/software/ultrabench-open-benchmark-platform-for-ai-memory-providers",
    color: "sky",
  },
  {
    name: "Alma",
    description: "One-touch onboarding for an AI companion: Apple Passwords and Touch ID plus browser automation sign you in to your apps.",
    metric: "Prototype · DevHouse SF 2025",
    year: "2025",
    color: "green",
  },
  {
    name: "CliniJoy AI",
    description: "Clinician scheduling optimizer pitched to sponsor Sevaro. I worked on the optimization and forecasting (CP-SAT plus greedy logic).",
    metric: "Rutgers Health Hack 2025",
    year: "2025",
    link: "https://github.com/akbowen/ru-health-hack-2025",
    color: "yellow",
  },
  {
    name: "Prism",
    description: "My personal morning brief. It pulls arXiv, Hacker News, AI-lab blogs and Hugging Face Papers, ranks them against my interests with Gemini, and sends the top 10 to Telegram every day.",
    metric: "Shipped · personal tool",
    year: "2026",
    color: "purple",
  },
  {
    name: "MoneyPlan",
    description: "Personal money manager with emergency-fund tracking, AI monthly reviews and a 'should I buy this?' check. Next.js, Supabase, Gemini.",
    metric: "Shipped · in daily use",
    year: "2026",
    color: "orange",
  },
  {
    name: "FabricMatch.ai",
    description: "Visual search for textile warehouses: photograph a fabric and find similar rolls in stock. CLIP embeddings with FAISS search and colour matching.",
    metric: "Prototype · tested on 358 real fabrics",
    year: "2026",
    color: "sky",
  },
  {
    name: "DejaVu Music",
    description: "Finds the song stuck in your head: the one that sounds like the one you just heard. Next.js, Gemini, Supabase.",
    metric: "Side project",
    year: "2026",
    link: "https://github.com/Sanjavan7/dejavumusic",
    color: "purple",
  },
  {
    name: "IMC Prosperity 4",
    description: "Algorithmic trading competition in a team of three. I built the round-3 options market makers and a mean-reversion trader in Python.",
    metric: "Trading competition",
    year: "2026",
    color: "yellow",
  },
  {
    name: "Luna Social",
    description: "Backend for a social venue-booking app, built as a part-time trial: a venue recommender and a booking agent in FastAPI.",
    metric: "Trial project",
    year: "2025",
    link: "https://github.com/Sanjavan7/luna-backend",
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

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-black tracking-tight mt-20 mb-10 text-coinly-navy"
        >
          More things I've built
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {moreProjects.map((project, index) => {
            const colors = colorMap[project.color];
            const cardProps = {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.5, delay: (index % 3) * 0.05 },
              className: "card-coinly group block relative overflow-hidden !p-4 md:!p-5",
              style: { background: colors.bg, color: colors.text },
            } as const;
            const content = (
              <>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-lg md:text-xl font-black tracking-tight">
                      {project.name}
                    </h4>
                    <span className="chip">{project.year}</span>
                  </div>
                  {project.link && (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-transform group-hover:rotate-12"
                      style={{
                        background: 'var(--coinly-deep-blue)',
                        borderColor: 'var(--coinly-deep-blue)',
                        color: 'var(--coinly-cream)'
                      }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <p className="text-sm leading-relaxed mb-3 opacity-80 font-medium">
                  {project.description}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider opacity-75">
                  ✦ {project.metric}
                </p>
              </>
            );
            return project.link ? (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                {...cardProps}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div key={project.name} {...cardProps}>
                {content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
