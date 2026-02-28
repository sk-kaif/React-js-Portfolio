'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectLinks from "./ProjectLinks";
import { EASE_SMOOTH } from "@/lib/motion";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="bg-black px-4 pt-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="max-w-xl mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-xs uppercase font-mono tracking-widest text-gray-400 mb-3">
            Projects
          </p>
          <h2 className="text-4xl font-semibold text-white mb-4">
            Real-World Work
          </h2>
          <p className="text-gray-300">
            Production-ready applications built with performance, clarity, and scale in mind.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Links Section */}
        <ProjectLinks />
      </div>
    </section>
  );
}
