import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:Sanjavan7@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjavan-ghodasara-854138235/" },
  { label: "GitHub", href: "https://github.com/Sanjavan7" },
  { label: "Devpost", href: "https://devpost.com/sanjavan7" },
];

export const Contact = () => {
  return (
    <footer className="section-spacing bg-card/50">
      <div className="w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-mono mb-3">
            <span className="accent-dot mr-2" />
            Connect
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold tracking-tight leading-tight mb-4">
            Let's build something
            <br />
            <span className="text-muted-foreground">meaningful together.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-serif">
            Open to research collaborations, founding opportunities,
            and products that create real impact.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-20">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="btn-editorial-outline"
            >
              {link.label}
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          ))}
        </div>

        <hr className="section-divider mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-base font-display font-bold">
            Sanjavan<span className="accent-dot ml-1" />
          </p>
          <p className="label-mono text-muted-foreground">
            © {new Date().getFullYear()} Sanjavan Ghodasara
          </p>
        </div>
      </div>
    </footer>
  );
};
