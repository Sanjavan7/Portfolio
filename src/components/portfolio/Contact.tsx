import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Sparkle, Cloud, Star, Squiggle, SectionLabel } from "./CoinlyDecorations";

const links = [
  { label: "Email", href: "mailto:Sanjavan7@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjavan-ghodasara-854138235/" },
  { label: "GitHub", href: "https://github.com/Sanjavan7" },
  { label: "Devpost", href: "https://devpost.com/sanjavan7" },
];

export const Contact = () => {
  return (
    <footer className="relative">
      {/* CTA section - yellow */}
      <section className="section-spacing relative overflow-hidden" style={{ background: 'var(--coinly-yellow)', color: 'var(--coinly-deep-blue)' }}>
        <Sparkle className="absolute top-[12%] right-[10%] animate-wobble" color="var(--coinly-orange)" size={40} />
        <Sparkle className="absolute bottom-[20%] left-[8%] animate-wobble" color="var(--coinly-purple)" size={32} />
        <Sparkle className="absolute top-[40%] left-[5%]" color="var(--coinly-deep-blue)" size={24} />
        <Cloud className="absolute top-[15%] left-[30%] animate-float-slow" color="var(--coinly-orange)" size={80} />
        <Cloud className="absolute bottom-[15%] right-[5%]" color="#fff" size={70} />
        <Star className="absolute top-[60%] right-[15%] animate-wobble" color="var(--coinly-green)" size={32} />
        <Squiggle className="absolute bottom-[40%] right-[30%]" color="var(--coinly-deep-blue)" size={100} />

        <div className="w-full max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
          <SectionLabel>
            <span style={{ color: 'var(--coinly-deep-blue)' }}>05 — Connect</span>
          </SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-[1.05] mt-6 mb-8"
          >
            Let's build something{" "}
            <span className="highlight-orange">meaningful</span>{" "}
            together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl font-bold max-w-2xl mx-auto mb-10 opacity-85"
          >
            Open to research collaborations, founding opportunities,
            and products that create real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={link.label === "Email" ? "btn-coinly" : "btn-coinly-outline"}
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer bottom - deep navy */}
      <div className="relative" style={{ background: 'var(--coinly-deep-blue)', color: 'var(--coinly-cream)' }}>
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-xl font-black">Sanjavan</span>
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ background: 'var(--coinly-orange)' }}
            />
          </div>
          <p className="text-xs font-bold uppercase tracking-wider opacity-70">
            ✦ © {new Date().getFullYear()} Sanjavan Ghodasara ✦
          </p>
        </div>
      </div>
    </footer>
  );
};
