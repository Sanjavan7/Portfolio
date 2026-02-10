import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:Sanjavan7@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjavan-ghodasara-854138235/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Sanjavan7", icon: Github },
];

export const Contact = () => {
  return (
    <footer id="contact" className="section-spacing">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Get in Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-[1.05] mb-6">
            Let's build something
            <br />
            <span className="text-gradient-accent">meaningful together.</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Open to research collaborations, founding opportunities,
            and products that create real impact.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-tech px-6 py-4 flex items-center gap-3 glow-ring"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="section-divider mb-6" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sanjavan Ghodasara
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
