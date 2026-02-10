import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(240 20% 16%) 50%, hsl(220 20% 12%) 100%)",
          }}
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[100px]" style={{ background: "hsl(175 80% 50% / 0.1)" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] rounded-full blur-[80px]" style={{ background: "hsl(260 60% 60% / 0.08)" }} />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
              Ready to <span className="text-gradient-accent">collaborate?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Whether it's a research partnership, a startup idea, or an AI product that needs building — let's talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="mailto:Sanjavan7@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/Sanjavan_Ghodasara_Resume.pdf"
                download
                className="btn-outline inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
