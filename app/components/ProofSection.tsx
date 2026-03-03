"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, ShieldCheck, MessageSquare } from "lucide-react";
import { EASE_SMOOTH } from "@/lib/motion";

export default function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const capabilities = [
    {
      icon: Briefcase,
      title: "Real Experience",
      description:
        "6+ months of hands-on internship experience building production-ready features.",
    },
    {
      icon: Code2,
      title: "Technical Capability",
      description:
        "Full-stack development with Next.js, Node.js, MongoDB, authentication, and APIs.",
    },
    {
      icon: ShieldCheck,
      title: "Production Mindset",
      description:
        "Clean architecture, performance-first thinking, and maintainable codebases.",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description:
        "You work directly with the developer — no agencies, no middle layers.",
    },
  ];

  /* ---------------- Correct Animation System ---------------- */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 10, // very small → stable
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: EASE_SMOOTH, // easeOutCubic (industry standard)
      },
    },
  };

  return (
    <section ref={ref} className="relative bg-black py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="
                  group relative rounded-xl
                  bg-white/[0.04]
                  border border-white/10
                  p-6
                  transition-colors duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                "
              >
                <Icon
                  className="
                    h-7 w-7 mb-4
                    text-white/90
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />

                <h3 className="text-white font-medium mb-2 text-base">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
