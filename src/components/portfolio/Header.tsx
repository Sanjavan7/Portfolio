import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
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
        <div className="text-2xl font-black tracking-tight flex items-center gap-1">
          <motion.a
            href="#"
            className="text-coinly-navy"
            whileHover={{ scale: 1.03 }}
          >
            Sanjavan
          </motion.a>
          {/* Secret door — clicking the orange dot opens the private project hub. */}
          <motion.span
            whileHover={{ scale: 1.6 }}
            whileTap={{ scale: 0.85 }}
            className="inline-block"
          >
            <Link
              to="/projects"
              aria-label="Sanjavan brand mark"
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ background: 'var(--coinly-orange)' }}
            />
          </motion.span>
        </div>

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
          <motion.a
            href="/SResume_Sanjavan_Updated.pdf"
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
