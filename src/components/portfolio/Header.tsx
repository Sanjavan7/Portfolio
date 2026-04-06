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
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-1 left-0 right-0 z-50 glass"
    >
      <nav className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-lg font-display font-bold tracking-tight"
          whileHover={{ opacity: 0.7 }}
        >
          Sanjavan<span className="accent-dot ml-1" />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {["Work", "Research", "Experience", "Story"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase() === "work" ? "projects" : item.toLowerCase())}
              className="text-sm font-display font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="/Sanjavan_Ghodasara_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial !py-2 !px-4 !text-xs"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
