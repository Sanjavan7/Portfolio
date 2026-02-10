import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Work", "Research", "Experience", "Story", "Contact"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold font-display tracking-tight"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-gradient-accent">Sanjavan</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() =>
                scrollToSection(
                  item.toLowerCase() === "work" ? "projects" : item.toLowerCase()
                )
              }
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
              whileHover={{ y: -1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="/Sanjavan_Ghodasara_Resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all duration-300"
            whileHover={{ y: -1, boxShadow: "0 0 20px hsl(175 80% 50% / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollToSection(
                  item.toLowerCase() === "work" ? "projects" : item.toLowerCase()
                )
              }
              className="block w-full text-left text-base text-muted-foreground hover:text-foreground py-2"
            >
              {item}
            </button>
          ))}
          <a
            href="/Sanjavan_Ghodasara_Resume.pdf"
            download
            className="flex items-center gap-2 text-primary font-semibold py-2"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};
