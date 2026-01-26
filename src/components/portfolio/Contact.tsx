import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:sanjavan@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sanjavan" },
  { label: "GitHub", href: "https://github.com/sanjavan" },
];

export const Contact = () => {
  return (
    <footer className="section-spacing">
      <div className="container mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <p className="text-sm text-muted-foreground tracking-wide mb-8">
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
            Let's build something
            <br />
            <span className="text-muted-foreground">meaningful together.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-16 max-w-lg leading-relaxed">
            Open to research collaborations, founding opportunities, 
            and products that create real impact.
          </p>

          <div className="flex flex-wrap gap-6 mb-24">
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
                className="group flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sanjavan Ghodasara
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
