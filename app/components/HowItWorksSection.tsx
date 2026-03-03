// "use client";

// import { motion, useInView } from 'framer-motion';
// import React, { MouseEvent, useRef, useState } from "react";
// import { MessageSquare, ClipboardList, Code2, Rocket } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { EASE_SMOOTH } from "@/lib/motion";

// /* ---------------------------------------------
//    Reusable Soft Spotlight Wrapper (lighter)
// --------------------------------------------- */
// function SoftSpotlight({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [hovered, setHovered] = useState(false);
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   const onMove = (e: MouseEvent<HTMLDivElement>) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     setPos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   return (
//     <div
//       ref={ref}
//       onMouseMove={onMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className={cn(
//         "relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b]",
//         className
//       )}
//     >
//       {hovered && (
//         <div
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 65%)`,
//           }}
//         />
//       )}

//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// }

// /* ---------------------------------------------
//    Single Step Card
// --------------------------------------------- */
// function StepCard({
//   step,
//   icon: Icon,
//   title,
//   description,
// }: {
//   step: string;
//   icon: React.ComponentType<{ className?: string }>;
//   title: string;
//   description: string;
// }) {
//   const stepVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: EASE_SMOOTH,
//       },
//     },
//   };

//   return (
//     <motion.div variants={stepVariants}>
//       <SoftSpotlight className="p-6 md:p-8">
//         <div className="flex gap-5 items-start">
//           {/* Step Indicator */}
//           <div className="flex flex-col items-center">
//             <span className="font-mono text-xs text-gray-400">{step}</span>
//             <div className="mt-2 h-10 w-10 rounded-lg border border-white/10 flex items-center justify-center">
//               <Icon className="h-5 w-5 text-white/70" />
//             </div>
//           </div>

//           {/* Content */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-2">
//               {title}
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-md">
//               {description}
//             </p>
//           </div>
//         </div>
//       </SoftSpotlight>
//     </motion.div>
//   );
// }

// /* ---------------------------------------------
//    Main Section
// --------------------------------------------- */
// export default function HowItWorksSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const headerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: EASE_SMOOTH,
//       },
//     },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   return (
//     <section className="bg-black py-24 px-4" ref={ref}>
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center max-w-2xl mx-auto mb-16"
//           variants={headerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
//             How It Works
//           </p>
//           <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
//             A clear, predictable process
//           </h2>
//           <p className="text-gray-300 text-lg">
//             No surprises. No confusion. Just a structured workflow from idea to launch.
//           </p>
//         </motion.div>

//         {/* Steps */}
//         <motion.div
//           className="grid grid-cols-1 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <StepCard
//             step="01"
//             icon={MessageSquare}
//             title="Discuss requirements"
//             description="We align on goals, scope, and constraints to ensure the project starts with clarity."
//           />

//           <StepCard
//             step="02"
//             icon={ClipboardList}
//             title="Plan & estimate"
//             description="I define architecture, timelines, and deliverables so expectations are clear upfront."
//           />

//           <StepCard
//             step="03"
//             icon={Code2}
//             title="Build & review"
//             description="Development happens in iterations with regular updates and review checkpoints."
//           />

//           <StepCard
//             step="04"
//             icon={Rocket}
//             title="Deploy & support"
//             description="The product is deployed to production with post-launch support and maintenance."
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useInView } from "framer-motion";
import React, { MouseEvent, useRef, useState } from "react";
import { MessageSquare, ClipboardList, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

/* ---------------------------------------------
   Soft Spotlight (unchanged logic, refined feel)
--------------------------------------------- */
function SoftSpotlight({
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
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: EASE_SMOOTH },
      }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0b]",
        className,
      )}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.07), transparent 65%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

/* ---------------------------------------------
   Step Card (psychologically aligned motion)
--------------------------------------------- */
function StepCard({
  step,
  icon: Icon,
  title,
  description,
}: {
  step: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -24,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: EASE_SMOOTH,
      },
    },
  };

  return (
    <motion.div variants={stepVariants}>
      <SoftSpotlight className="p-6 md:p-8">
        <div className="flex gap-5 items-start">
          {/* Step Indicator */}
          <div className="flex flex-col items-center shrink-0">
            <span className="font-mono text-xs text-gray-400">{step}</span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="mt-2 h-10 w-10 rounded-lg border border-white/10
                         flex items-center justify-center"
            >
              <Icon className="h-5 w-5 text-white/70" />
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {description}
            </p>
          </div>
        </div>
      </SoftSpotlight>
    </motion.div>
  );
}

/* ---------------------------------------------
   Main Section
--------------------------------------------- */
export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: EASE_SMOOTH,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  return (
    <section className="bg-black py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
            How It Works
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            A clear, predictable process
          </h2>
          <p className="text-gray-300 text-lg">
            No surprises. No confusion. Just a structured workflow from idea to
            launch.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <StepCard
            step="01"
            icon={MessageSquare}
            title="Discuss requirements"
            description="We align on goals, scope, and constraints to ensure the project starts with clarity."
          />

          <StepCard
            step="02"
            icon={ClipboardList}
            title="Plan & estimate"
            description="I define architecture, timelines, and deliverables so expectations are clear upfront."
          />

          <StepCard
            step="03"
            icon={Code2}
            title="Build & review"
            description="Development happens in iterations with regular updates and review checkpoints."
          />

          <StepCard
            step="04"
            icon={Rocket}
            title="Deploy & support"
            description="The product is deployed to production with post-launch support and maintenance."
          />
        </motion.div>
      </div>
    </section>
  );
}
