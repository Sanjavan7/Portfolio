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
    <footer className="section-spacing relative overflow-hidden grid-bg">
      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="section-header-line"
        >
          <p className="label-mono mb-4">Get in Touch</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wider">
            CONNECT
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-serif"
        >
          Open to research collaborations, founding opportunities,
          and products that create real impact.
        </motion.p>

        <div className="flex flex-wrap gap-6 mb-20">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
              className="btn-shadow-outline !py-3 !px-6"
            >
              <span className="flex items-center gap-2">
                {link.label}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-2xl font-display tracking-widest">SG</p>
          <p className="label-mono">
            © {new Date().getFullYear()} Sanjavan Ghodasara
          </p>
        </div>
      </div>
    </footer>
  );
};
