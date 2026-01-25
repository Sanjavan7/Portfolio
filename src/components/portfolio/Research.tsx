import { motion } from "framer-motion";
import { ExternalLink, BookOpen, GraduationCap } from "lucide-react";

export const Research = () => {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic contributions advancing the field
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Published Paper */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground mb-3">
                    ACM Learning @ Scale 2026 • First Author
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                    Can Learners Navigate Imperfect Generative Pedagogical
                    Chatbots?
                  </h3>
                  <p className="text-muted-foreground">
                    An Analysis of Chatbot Errors on Learning
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Multi-university study investigating how students interact with AI
                chatbots that occasionally provide errors. Developed comprehensive
                taxonomy categorizing 500+ student inquiries. Implemented Latent
                Profile Analysis identifying 5 distinct student reading behavior
                profiles from 576 learning sessions. Framework now used by{" "}
                <span className="text-foreground font-medium">
                  Khan Academy
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">Duolingo</span>{" "}
                for evaluating pedagogical AI effectiveness.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Educational AI",
                  "Latent Profile Analysis",
                  "GMM",
                  "Qualitative Research",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Research Position */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground mb-3">
                    Graduate Research Assistant
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                    Stevens Institute of Technology
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Advisor: Prof. Tiffany Li • October 2025 - Present
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Contributing to educational AI research focused on generative
                    chatbots in STEM education. Qualitative coding of 500+
                    student-chatbot interactions, statistical clustering analysis
                    (K-Means, LPA/GMM), and complete Python pipeline for
                    probabilistic clustering with model selection.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Google Scholar Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center pt-4"
          >
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View Google Scholar Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
