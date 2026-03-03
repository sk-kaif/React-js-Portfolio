"use client";

import { motion, useInView } from "framer-motion";
import React, { MouseEvent, useRef, useState } from "react";
import { LayoutTemplate, MonitorSmartphone, ServerCog } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

/* ---------------------------------------------
   Spotlight Card
--------------------------------------------- */
function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]",
        className,
      )}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ---------------------------------------------
   Background Grid
--------------------------------------------- */
function GridBackground() {
  return (
    <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
  );
}

/* ---------------------------------------------
   Procedural Visuals (Different per card)
--------------------------------------------- */

// Web Apps → layout blocks
function LayoutVisual() {
  return (
    <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="h-6 rounded-md bg-white/15 group-hover:bg-white/30 transition"
        />
      ))}
    </div>
  );
}

// Frontend → interaction nodes
function InteractionVisual() {
  return (
    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative">
          <div className="h-3 w-3 rounded-full bg-white/40" />
          <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
        </div>
      ))}
    </div>
  );
}

// Backend → data flow
function BackendVisual() {
  return (
    <div className="absolute bottom-6 left-6 right-6 space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-2 w-full rounded-full bg-gradient-to-r from-white/10 via-white/30 to-white/10"
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------
   Service Card
--------------------------------------------- */
function ServiceCard({
  icon: Icon,
  label,
  title,
  description,
  visual,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: EASE_SMOOTH,
      },
    },
  };

  return (
    <motion.div variants={cardVariants}>
      <SpotlightCard className="h-[320px]">
        <GridBackground />

        <div className="p-6 flex flex-col h-full">
          <span className="text-xs font-mono uppercase tracking-wide text-gray-400">
            {label}
          </span>

          <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>

          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            {description}
          </p>

          <div className="mt-auto relative h-20">{visual}</div>

          <Icon className="absolute top-6 right-6 h-9 w-9 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

/* ---------------------------------------------
   Main Section
--------------------------------------------- */
export default function ServicesSpotlightBento() {
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

  const containerVariants = {
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
    <section id="services" className="bg-black py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
            What I Do
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Services built for real products
          </h2>
          <p className="text-gray-300 text-lg">
            I design and engineer fast, scalable, production-ready web
            applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ServiceCard
            icon={LayoutTemplate}
            label="Development"
            title="Custom Web Apps"
            description="End-to-end web systems built with React, Next.js, and modern architecture."
            visual={<LayoutVisual />}
          />

          <ServiceCard
            icon={MonitorSmartphone}
            label="Frontend"
            title="UI Engineering"
            description="Accessible, responsive, and interaction-driven interfaces."
            visual={<InteractionVisual />}
          />

          <ServiceCard
            icon={ServerCog}
            label="Backend"
            title="APIs & Auth"
            description="Secure APIs, authentication, and scalable backend infrastructure."
            visual={<BackendVisual />}
          />
        </motion.div>
      </div>
    </section>
  );
}
