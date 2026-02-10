import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What technologies do you work with?",
    answer:
      "Primarily Python, PyTorch, TensorFlow, and Scikit-learn for ML. React, TypeScript, and Tailwind for frontend. Google Cloud, AWS, and Supabase for infrastructure. I pick the right tool for the problem.",
  },
  {
    question: "Are you open to co-founding opportunities?",
    answer:
      "Yes — I'm actively looking for the right founding opportunity in AI/ML. I bring both the technical depth (research + engineering) and the shipping mindset (11 products, 5 hackathon wins).",
  },
  {
    question: "What kind of collaborations interest you?",
    answer:
      "Research collaborations in NLP, educational AI, or healthcare ML. Product collaborations where AI is the core value proposition. I'm most excited about problems where the research-to-production gap is the bottleneck.",
  },
  {
    question: "Can I see your code or publications?",
    answer:
      "Most of my open-source work is on GitHub. My ACM publication is available through the ACM Digital Library. Feel free to reach out for specific code samples or research pre-prints.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
            Common questions.
          </h2>
        </motion.div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-tech overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
