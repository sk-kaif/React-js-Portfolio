"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { EASE_SMOOTH } from "@/lib/motion";

const faqData = [
  {
    question: "How do you ensure code quality?",
    answer:
      "I follow clean architecture principles, use TypeScript for strong typing, and write modular, maintainable code with proper documentation.",
  },
  {
    question: "What is your development process?",
    answer:
      "I start by understanding the problem, then plan and build scalable solutions, integrate animations carefully, and finally deploy production-ready systems.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, I provide support and maintenance after launch to ensure stability, scalability, and smooth user experience.",
  },
  {
    question: "Can you work directly with my team?",
    answer:
      "Absolutely. I collaborate directly with clients and internal teams, providing clear communication and regular progress updates.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE_SMOOTH,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE_SMOOTH,
      },
    },
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
            FAQ
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Clear answers to common questions about my work, process, and
            collaboration.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqData.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <motion.div
                key={i}
                layout
                variants={itemVariants}
                className="border border-white/10 rounded-xl overflow-hidden bg-black/90"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition-colors"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-white font-medium">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-[#ffffff] h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut" as const,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 text-gray-300 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
