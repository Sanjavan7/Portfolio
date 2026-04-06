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
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="w-full px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-display tracking-widest"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          SG
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {["Work", "Research", "Experience", "Story"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === "work" ? "projects" : item.toLowerCase())}
              className="label-mono hover:text-foreground transition-colors duration-300"
              style={{ color: 'var(--color-caramel)' }}
              whileHover={{ y: -2 }}
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

          <motion.a
            href="/Sanjavan_Ghodasara_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shadow !py-2.5 !px-5 !text-xs"
            whileHover={{ y: 0 }}
          >
            Resume
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};
