"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-12 p-6 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group"
    >
      <div className="flex justify-center px-2 mb-7">
        <Link
          href="https://kaif-reactportfolio.vercel.app/project"
          target="_blank"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-base font-mono"
        >
          <h2 className="underline underline-offset-8 decoration-white/10 group-hover:decoration-white/30 transition-colors text-2xl text-center">
            click here to see more project...
          </h2>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Link
          href="https://github.com/shaikhKaif-ps"
          target="_blank"
          className="group relative flex flex-col items-center justify-center gap-2 px-8 py-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
        >
          <Github className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
          <span className="text-xl font-medium text-gray-400 group-hover:text-white transition-colors">
            workspace git
          </span>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        <Link
          href="https://github.com/sk-kaif"
          target="_blank"
          className="group relative flex flex-col items-center justify-center gap-2 px-8 py-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
        >
          <Github className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
          <span className="text-xl font-medium text-gray-400 group-hover:text-white transition-colors">
            personal git
          </span>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/[0.02] blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/[0.02] blur-[80px] rounded-full pointer-events-none" />
    </motion.div>
  );
}
