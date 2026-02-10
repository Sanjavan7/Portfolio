import { motion } from "framer-motion";
import { Brain, Globe } from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "AI / ML Research",
    audience: "Researchers & Engineers",
    description:
      "Deep learning, NLP, computer vision, and applied ML — building systems that push the boundary between research papers and production deployments.",
    skills: ["PyTorch", "TensorFlow", "Transformers", "Statistical Analysis"],
  },
  {
    icon: Globe,
    title: "Full-Stack AI Products",
    audience: "Builders & Founders",
    description:
      "End-to-end product development — from data pipelines and model training to React frontends and cloud deployment. Shipping AI that real users depend on.",
    skills: ["React", "Python", "Cloud", "System Design"],
  },
];

export const Tracks = () => {
  return (
    <section className="section-spacing">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
            Two tracks,
            <br />
            <span className="text-muted-foreground">one mission.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-tech p-8 md:p-10 glow-ring group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <track.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight mb-2">
                {track.title}
              </h3>
              <p className="text-sm text-primary font-semibold mb-4">
                {track.audience}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {track.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {track.skills.map((skill) => (
                  <span key={skill} className="tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
