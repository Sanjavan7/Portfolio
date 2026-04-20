import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="w-full px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-black tracking-tight flex items-center gap-1"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-coinly-navy">Sanjavan</span>
          <span
            className="inline-block w-2.5 h-2.5 rounded-full"
            style={{ background: 'var(--coinly-orange)' }}
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "Research", "Experience", "Story"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === "work" ? "projects" : item.toLowerCase())}
              className="text-sm font-bold text-coinly-navy hover:text-coinly-orange transition-colors duration-200"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border-2 border-coinly-navy hover:bg-coinly-yellow transition-colors duration-200"
            style={{ borderColor: 'var(--coinly-deep-blue)' }}
            whileHover={{ scale: 1.08, rotate: 12 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <motion.a
            href="/Sanjavan_Ghodasara_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coinly !py-2 !px-4 !text-xs"
            whileTap={{ scale: 0.96 }}
          >
            Resume
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};
