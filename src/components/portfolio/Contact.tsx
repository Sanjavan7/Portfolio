import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:Sanjavan7@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjavan-ghodasara-854138235/" },
  { label: "GitHub", href: "https://github.com/Sanjavan7" },
];

export const Contact = () => {
  return (
    <footer className="section-spacing">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-base md:text-lg text-muted-foreground tracking-wide mb-6">
            Get in Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            Let's build something
            <br />
            <span className="text-muted-foreground">meaningful together.</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed">
            Open to research collaborations, founding opportunities,
            and products that create real impact.
          </p>

          <div className="flex flex-wrap gap-8 mb-16">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex items-center gap-2 text-lg text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="pt-10 border-t border-border">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Sanjavan Ghodasara
          </p>
        </div>
      </div>
    </footer>
  );
};
