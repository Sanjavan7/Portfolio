import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:sanjavan@example.com",
    display: "sanjavan@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sanjavan",
    display: "linkedin.com/in/sanjavan",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sanjavan",
    display: "github.com/sanjavan",
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "#",
    display: "sanjavan.dev",
  },
];

export const Contact = () => {
  return (
    <footer className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's build something
            <br />
            <span className="gradient-text">that matters.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to research collaborations, founding opportunities, and
            building products that make real impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sanjavan Ghodasara. Designed &
              built with precision.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
