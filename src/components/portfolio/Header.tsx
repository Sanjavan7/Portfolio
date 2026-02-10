import { motion } from "framer-motion";
import { Download, Moon, Sun } from "lucide-react";
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
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="w-full px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-medium tracking-tight"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          Sanjavan
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {["Work", "Research", "Experience", "Story"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === "work" ? "projects" : item.toLowerCase())}
              className="text-base text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-secondary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          <div className="flex items-center gap-2">
            <motion.a
              href="/Sanjavan_Ghodasara_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-base font-medium hover:opacity-80 transition-opacity duration-300"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="hidden sm:inline">Resume</span>
            </motion.a>

            <motion.a
              href="/Sanjavan_Ghodasara_Resume.pdf"
              download
              className="p-2.5 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
