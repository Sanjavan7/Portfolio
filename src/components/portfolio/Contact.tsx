import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BotanicalCornerTopRight, BotanicalCornerBottomLeft, BotanicalBorder } from "./BotanicalSVG";

const links = [
  { label: "Email", href: "mailto:Sanjavan7@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjavan-ghodasara-854138235/" },
  { label: "GitHub", href: "https://github.com/Sanjavan7" },
  { label: "Devpost", href: "https://devpost.com/sanjavan7" },
];

export const Contact = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section with arch — AceFund style */}
      <div className="relative">
        {/* Arch shape with botanical illustrations */}
        <div className="bg-background flex justify-center pt-16 md:pt-24">
          <div className="cta-arch relative w-full max-w-4xl mx-6 md:mx-16 overflow-hidden" style={{ backgroundColor: 'var(--color-indigo-faint)', minHeight: '300px' }}>
            <BotanicalCornerTopRight className="absolute -top-4 -right-4 w-[250px] h-[250px] md:w-[350px] md:h-[350px] pointer-events-none" opacity={0.15} />
            <BotanicalCornerBottomLeft className="absolute -bottom-8 -left-8 w-[200px] h-[200px] md:w-[300px] md:h-[300px] pointer-events-none" opacity={0.12} />
            <BotanicalBorder className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none" opacity={0.1} />

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 md:py-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4"
              >
                Let's build something
                <br />
                meaningful together.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed font-sans"
              >
                Open to research collaborations, founding opportunities,
                and products that create real impact.
              </motion.p>

              <motion.a
                href="mailto:Sanjavan7@gmail.com"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="btn-minimal"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer on indigo */}
        <div className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-indigo)' }}>
          {/* Botanical decorations */}
          <BotanicalCornerTopRight className="absolute -top-6 -right-6 w-[200px] h-[200px] md:w-[300px] md:h-[300px] pointer-events-none" opacity={0.08} color="#fff" />
          <BotanicalCornerBottomLeft className="absolute -bottom-6 -left-6 w-[180px] h-[180px] md:w-[250px] md:h-[250px] pointer-events-none" opacity={0.06} color="#fff" />

          <div className="w-full px-6 md:px-16 lg:px-24 py-12 md:py-16 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                  Sanjavan
                </p>
                <p className="text-white/50 text-sm font-sans">
                  © {new Date().getFullYear()} Sanjavan Ghodasara
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 font-sans"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
