// "use client";

// import { cubicBezier, motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import React, { useRef } from "react";
// import {
//   Code,
//   Layers,
//   Activity,
//   Layout,
//   Cpu,
//   Shield,
// } from "lucide-react";
// import { AnimatedBeam } from "@/components/uilayouts/animated-beam";

// function Tooltip({ label }: { label: string }) {
//   return (
//     <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap
//       rounded-md border border-white/10 bg-black/80 px-3 py-1.5 text-xs text-gray-300
//       opacity-0 group-hover:opacity-100 transition-opacity">
//       {label}
//     </div>
//   );
// }

// export default function HowIBuild() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Shared professional easing
//   const smoothEase = cubicBezier(0.25, 0.46, 0.45, 0.94);

//   const codeRef = useRef<HTMLDivElement>(null);
//   const uiRef = useRef<HTMLDivElement>(null);
//   const motionRef = useRef<HTMLDivElement>(null);
//   const frameworkRef = useRef<HTMLDivElement>(null);
//   const runtimeRef = useRef<HTMLDivElement>(null);
//   const coreRef = useRef<HTMLDivElement>(null);

//   // Animation variants
//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: smoothEase,
//       },
//     },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const diagramVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: smoothEase,
//         delay: 0.3,
//       },
//     },
//   };

//   const listVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.4,
//       },
//     },
//   };

//   const listItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="bg-black py-24 px-4" ref={ref}>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* Left Content */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <motion.p 
//             className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4"
//             variants={textVariants}
//           >
//             How I Build
//           </motion.p>

//           <motion.h2 
//             className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight"
//             variants={textVariants}
//           >
//             Systems, not just interfaces
//           </motion.h2>

//           <motion.p 
//             className="text-gray-300 text-lg leading-relaxed mb-6"
//             variants={textVariants}
//           >
//             Every project is built as a cohesive system — clean code,
//             predictable behavior, and production readiness from day one.
//           </motion.p>

//           <motion.ul 
//             className="space-y-3 text-gray-400 text-sm"
//             variants={listVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             <motion.li variants={listItemVariants}>• Architecture before implementation</motion.li>
//             <motion.li variants={listItemVariants}>• Performance-aware UI and rendering</motion.li>
//             <motion.li variants={listItemVariants}>• Motion used only when it improves clarity</motion.li>
//             <motion.li variants={listItemVariants}>• Deployment and scaling considered early</motion.li>
//           </motion.ul>
//         </motion.div>

//         {/* System Diagram */}
//         <motion.div
//           ref={containerRef}
//           className="relative mx-auto w-full max-w-[460px] aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
//           variants={diagramVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           <div className="flex h-full w-full flex-col justify-between">

//             {/* Top */}
//             <div className="flex justify-between">
//               <GlassCircle
//                 ref={codeRef}
//                 icon={<Code />}
//                 label="Type-safe, maintainable code"
//               />
//               <GlassCircle
//                 ref={uiRef}
//                 icon={<Layers />}
//                 label="Scalable UI architecture"
//               />
//             </div>

//             {/* Middle */}
//             <div className="flex justify-between items-center">
//               <GlassCircle
//                 ref={motionRef}
//                 icon={<Activity />}
//                 label="Intentional motion & feedback"
//               />

//               <GlassCircle
//                 ref={coreRef}
//                 icon={<Shield />}
//                 label="Reliable production system"
//                 large
//               />

//               <GlassCircle ref={runtimeRef} icon={<Cpu />} label="Empowers fast, smooth execution" />
//             </div>

//             {/* Bottom */}
//             <div className="flex justify-center">
//               <GlassCircle ref={frameworkRef} icon={<Layout />} label="Creating harmonious, adaptable layouts" />
//             </div>
//           </div>

//           {/* Beams (subtle, explanatory) */}
//           <div className="absolute inset-0">
//             <AnimatedBeam containerRef={containerRef} fromRef={codeRef} toRef={coreRef} dotted />
//             <AnimatedBeam containerRef={containerRef} fromRef={uiRef} toRef={coreRef} dotted />
//             <AnimatedBeam containerRef={containerRef} fromRef={motionRef} toRef={coreRef} dotted />
//             <AnimatedBeam containerRef={containerRef} fromRef={runtimeRef} toRef={coreRef} dotted />
//             <AnimatedBeam containerRef={containerRef} fromRef={frameworkRef} toRef={coreRef} dotted />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// const GlassCircle = React.forwardRef<
//   HTMLDivElement,
//   {
//     icon: React.ReactNode;
//     label: string;
//     large?: boolean;
//   }
// >(({ icon, label, large }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={`group relative flex items-center justify-center rounded-full
//       border border-white/15 bg-white/5 backdrop-blur-md text-gray-200
//       transition-colors hover:bg-white/10
//       ${large ? "h-16 w-16" : "h-12 w-12"}`}
//     >
//       {icon}
//       <Tooltip label={label} />
//     </div>
//   );
// });
// GlassCircle.displayName = "GlassCircle";



"use client";

import React, { useRef } from "react";
import {
  Code,
  Layers,
  Activity,
  Layout,
  Cpu,
  Shield,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedBeam } from "@/components/uilayouts/animated-beam";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";

/* ---------------------------------------------
   Motion Variants (Professional, calm)
--------------------------------------------- */

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_SMOOTH,
    },
  },
};



const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const nodeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: EASE_SMOOTH,
    },
  },
};

const coreVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: EASE_SMOOTH,
    },
  },
};

/* ---------------------------------------------
   Tooltip
--------------------------------------------- */

function Tooltip({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2
      whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-3 py-1.5
      text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      {label}
    </div>
  );
}

/* ---------------------------------------------
   GlassCircle
--------------------------------------------- */

const GlassCircle = React.forwardRef<
  HTMLDivElement,
  {
    icon: React.ReactNode;
    label: string;
    large?: boolean;
  }
>(({ icon, label, large }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={large ? coreVariants : nodeVariants}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.25)",
      }}
      className={cn(
        "group relative flex items-center justify-center rounded-full",
        "border border-white/15 bg-white/5 backdrop-blur-md text-gray-200",
        "transition-colors hover:bg-white/10",
        large ? "h-16 w-16" : "h-12 w-12"
      )}
    >
      {icon}
      <Tooltip label={label} />
    </motion.div>
  );
});
GlassCircle.displayName = "GlassCircle";

/* ---------------------------------------------
   HowIBuild Section
--------------------------------------------- */

export default function HowIBuild() {
  const containerRef = useRef<HTMLDivElement>(null);

  const codeRef = useRef<HTMLDivElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const frameworkRef = useRef<HTMLDivElement>(null);
  const runtimeRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        {/* <div>
          <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
            How I Build
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Systems, not just interfaces
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Every project is engineered as a cohesive system —
            predictable behavior, clean architecture, and production
            readiness from day one.
          </p>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>• Architecture before implementation</li>
            <li>• Performance-aware UI and rendering</li>
            <li>• Motion used only when it improves clarity</li>
            <li>• Deployment and scaling considered early</li>
          </ul>
        </div> */}

<motion.div
  variants={textContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  <motion.p
    variants={textItem}
    className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4"
  >
    How I Build
  </motion.p>

  <motion.h2
    variants={textItem}
    className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight"
  >
    Systems, not just interfaces
  </motion.h2>

  <motion.p
    variants={textItem}
    className="text-gray-300 text-lg leading-relaxed mb-6"
  >
    Every project is engineered as a cohesive system —
    predictable behavior, clean architecture, and production
    readiness from day one.
  </motion.p>

  <motion.ul
    variants={textItem}
    className="space-y-3 text-gray-400 text-sm"
  >
    <li>• Architecture before implementation</li>
    <li>• Performance-aware UI and rendering</li>
    <li>• Motion used only when it improves clarity</li>
    <li>• Deployment and scaling considered early</li>
  </motion.ul>
</motion.div>



        {/* System Diagram */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto w-full max-w-[460px] aspect-square
            rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
        >
          <div className="flex h-full w-full flex-col justify-between">

            {/* Top */}
            <div className="flex justify-between">
              <GlassCircle
                ref={codeRef}
                icon={<Code />}
                label="Type-safe, maintainable code"
              />
              <GlassCircle
                ref={uiRef}
                icon={<Layers />}
                label="Scalable UI architecture"
              />
            </div>

            {/* Middle */}
            <div className="flex justify-between items-center">
              <GlassCircle
                ref={motionRef}
                icon={<Activity />}
                label="Intentional motion & feedback"
              />

              <GlassCircle
                ref={coreRef}
                icon={<Shield />}
                label="Reliable production system"
                large
              />

              <GlassCircle
                ref={runtimeRef}
                icon={<Cpu />}
                label="Fast, predictable runtime behavior"
              />
            </div>

            {/* Bottom */}
            <div className="flex justify-center">
              <GlassCircle
                ref={frameworkRef}
                icon={<Layout />}
                label="Composable, adaptable layouts"
              />
            </div>
          </div>

          {/* Beams (subtle, explanatory) */}
          {!reduceMotion && (
            <>
              <AnimatedBeam containerRef={containerRef} fromRef={codeRef} toRef={coreRef} dotted />
              <AnimatedBeam containerRef={containerRef} fromRef={uiRef} toRef={coreRef} dotted />
              <AnimatedBeam containerRef={containerRef} fromRef={motionRef} toRef={coreRef} dotted />
              <AnimatedBeam containerRef={containerRef} fromRef={runtimeRef} toRef={coreRef} dotted />
              <AnimatedBeam containerRef={containerRef} fromRef={frameworkRef} toRef={coreRef} dotted />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
