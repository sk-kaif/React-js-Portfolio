"use client";
// import { Layers, Zap, Rocket, UserCheck, CheckCircle } from "lucide-react";

// export default function WhyWorkSection() {
//   const features = [
//     {
//       icon: Layers,
//       title: "Clean & Maintainable Code",
//       description: "Readable architecture that scales and is easy to maintain."
//     },
//     {
//       icon: Zap,
//       title: "Performance-Focused Development",
//       description: "Optimized builds, fast load times, and best practices."
//     },
//     {
//       icon: Rocket,
//       title: "Production Experience",
//       description: "Experience deploying real applications, not just demos."
//     },
//     {
//       icon: UserCheck,
//       title: "Direct Communication",
//       description: "You work directly with the developer — fast, clear, no delays."
//     },
//     {
//       icon: CheckCircle,
//       title: "Clear Scope & Delivery",
//       description: "Transparent timelines and no hidden surprises."
//     }
//   ];

//   return (
//     <section className="bg-black py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column - Header */}
//           <div>
//             <p className="text-gray-400 text-sm font-medium mb-4 tracking-wide uppercase font-mono">
//               Why work with me
//             </p>
//             <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               A reliable developer, not just another freelancer
//             </h2>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               I focus on long-term quality, clear communication, and production-ready delivery.
//             </p>
//           </div>

//           {/* Right Column - Features */}
//           <div className="space-y-6">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-900/30 transition-colors duration-300 group"
//                 >
//                   <Icon className="h-6 w-6 text-gray-400 mt-1 group-hover:text-white transition-colors duration-300" />
//                   <div>
//                     <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
//                     <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

////////  //////////////////////////////////////////////////////////////////
// import {   Spotlight,
//   SpotLightItem, } from "@/components/uilayouts/spotlight";
// import {
//   Layers,
//   Zap,
//   Rocket,
//   UserCheck,
//   CheckCircle,
//   // Spotlight,
// } from "lucide-react";

// const features = [
//   {
//     title: "Clean & Maintainable Code",
//     description:
//       "Readable architecture that scales and stays easy to maintain.",
//     icon: Layers,
//     className: "col-span-1",
//   },
//   {
//     title: "Performance-Focused Development",
//     description:
//       "Optimized builds, fast load times, and best practices.",
//     icon: Zap,
//     className: "col-span-1",
//   },
//   {
//     title: "Production Experience",
//     description:
//       "Experience deploying real applications, not just demos.",
//     icon: Rocket,
//     className: "col-span-1",
//   },
//   {
//     title: "Direct Communication",
//     description:
//       "You work directly with the developer — no middle layers.",
//     icon: UserCheck,
//     className: "col-span-1",
//   },
//   {
//     title: "Clear Scope & Delivery",
//     description:
//       "Transparent timelines and predictable outcomes.",
//     icon: CheckCircle,
//     className: "col-span-2",
//   },
// ];

// export default function WhyWorkSpotlight() {
//   return (
//     <section className="bg-black py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-16 max-w-2xl">
//           <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
//             Why work with me
//           </p>
//           <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             A reliable developer, not just another freelancer
//           </h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             I focus on long-term quality, clear communication, and
//             production-ready delivery.
//           </p>
//         </div>

//         {/* Spotlight Grid */}
//         <div className="relative">

//           <Spotlight className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;

//               return (
//                 <SpotLightItem
//                   key={index}
//                   className={`${feature.className} rounded-xl`}
//                 >
//                   <div className="relative h-full rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#161616] p-6 transition-colors duration-300">
//                     <div className="flex flex-col h-full">
//                       <Icon className="h-7 w-7 text-gray-400 mb-4 transition-colors duration-300 group-hover:text-white" />

//                       <h3 className="text-white text-lg font-semibold mb-2">
//                         {feature.title}
//                       </h3>

//                       <p className="text-gray-300 text-sm leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </SpotLightItem>
//               );
//             })}
//           </Spotlight>
//         </div>
//       </div>
//     </section>
//   );
// }

////////////  ////////////////////////////////////////////////////

// import {
//   Layers,
//   Zap,
//   Rocket,
//   UserCheck,
// } from "lucide-react";
// import { Spotlight, SpotLightItem } from "@/components/uilayouts/spotlight";

// export default function WhyWorkBentoSpotlight() {
//   return (
//     <section className="bg-black py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-16 max-w-2xl">
//           <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
//             Why work with me
//           </p>
//           <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             A reliable developer, not just another freelancer
//           </h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             I focus on long-term quality, clear communication, and
//             production-ready delivery.
//           </p>
//         </div>

//         {/* TRUE BENTO GRID */}
//         <Spotlight className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//           {/* Small Card 1 */}
//           <SpotLightItem className="lg:col-span-1">
//          <MiniCard
//   icon={Layers}
//   title="Clean Code"
//   description="Readable, maintainable architecture that scales."
// />

//           </SpotLightItem>

//           {/* Small Card 2 */}
//           <SpotLightItem className="lg:col-span-1">

// <MiniCard
//   icon={Zap}
//   title="Performance"
//   description="Optimized rendering, fast load, smooth UX."
// />
//           </SpotLightItem>

//           {/* BIG CARD */}
//           <SpotLightItem className="lg:col-span-2 lg:row-span-2">
//             <BigCard />
//           </SpotLightItem>

//           {/* Small Card 3 */}
//           <SpotLightItem className="lg:col-span-1">
//            <MiniCard
//   icon={Rocket}
//   title="Production Ready"
//   description="Built to deploy, monitor, and scale."
// />
//           </SpotLightItem>

//           {/* Small Card 4 */}
//           <SpotLightItem className="lg:col-span-1">
//             <MiniCard
//   icon={UserCheck}
//   title="Direct Work"
//   description="No middlemen. Clear communication."
// />
//           </SpotLightItem>

//         </Spotlight>
//       </div>
//     </section>
//   );
// }

// /* ---------- Small Visual Cards ---------- */

// // function MiniCard({
// //   icon: Icon,
// //   title,
// //   pattern,
// // }: {
// //   icon: any;
// //   title: string;
// //   pattern: "lines" | "bars" | "chart" | "dots";
// // }) {
// //   return (
// //     <div className="relative h-48 rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#161616] p-4 overflow-hidden">
// //       <AbstractPattern type={pattern} />
// //       <div className="relative z-10">
// //         <Icon className="h-6 w-6 text-gray-400 mb-3" />
// //         <h4 className="text-white font-medium">{title}</h4>
// //       </div>
// //     </div>
// //   );
// // }

// function MiniCard({
//   icon: Icon,
//   title,
//   description,
// }: {
//   icon: React.ComponentType<{ className?: string }>;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="relative h-48 rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#161616] p-5 flex flex-col justify-between">
//       <Icon className="h-7 w-7 text-indigo-400" />

//       <div>
//         <h4 className="text-white font-medium mb-1">{title}</h4>
//         <p className="text-gray-400 text-sm leading-relaxed">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------- Big Content Card ---------- */

// // function BigCard() {
// //   return (
// //     <div className="relative h-full rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#161616] p-8 overflow-hidden">
// //       <AbstractPattern type="bars" strong />
// //       <div className="relative z-10">
// //         <h3 className="text-white text-2xl font-semibold mb-4">
// //           Built for real-world production
// //         </h3>
// //         <p className="text-gray-300 text-sm leading-relaxed max-w-md">
// //           I don’t just build interfaces. I ship production-ready
// //           applications with clean architecture, performance
// //           optimizations, and deployment awareness.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// function BigCard() {
//   return (
//     <div className="relative h-full rounded-xl border border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#161616] p-8 overflow-hidden">

//       {/* Subtle system bars */}
//       <div className="absolute right-6 bottom-6 flex gap-2 opacity-20">
//         {[40, 60, 80].map((h, i) => (
//           <div
//             key={i}
//             className="w-3 rounded bg-white"
//             style={{ height: `${h}px` }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-md">
//         <h3 className="text-white text-2xl font-semibold mb-4">
//           Built for real-world production
//         </h3>
//         <p className="text-gray-300 text-sm leading-relaxed">
//           I don’t just design interfaces. I engineer systems that
//           survive production, handle scale, and stay maintainable
//           long after launch.
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ---------- Abstract Patterns (CSS Only) ---------- */

// function AbstractPattern({
//   type,
// }: {
//   type: string;
//   strong?: boolean;
// }) {
//   if (type === "bars") {
//     return (
//       <div className="absolute inset-0 flex items-end gap-2 p-6 opacity-30">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="w-6 bg-white/20 rounded"
//             style={{ height: `${30 + i * 15}%` }}
//           />
//         ))}
//       </div>
//     );
//   }

//   if (type === "lines") {
//     return (
//       <div className="absolute inset-0 opacity-20">
//         <svg className="w-full h-full">
//           <polyline
//             points="0,80 60,40 120,60 180,20"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
//     );
//   }

//   if (type === "chart") {
//     return (
//       <div className="absolute inset-0 opacity-20 flex items-center justify-center">
//         <div className="h-24 w-24 rounded-full border border-white/20" />
//       </div>
//     );
//   }

//   return (
//     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:12px_12px]" />
//   );
// }

// // const _unused = AbstractPattern;

"use client";

import { Layers, Zap, Rocket, UserCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight, SpotLightItem } from "@/components/uilayouts/spotlight";
import { EASE_SMOOTH } from "@/lib/motion";

/* ---------------------------------------------
   Motion Variants
--------------------------------------------- */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: EASE_SMOOTH,
    },
  },
};

/* ---------------------------------------------
   Main Section
--------------------------------------------- */

export default function WhyWorkBentoSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="bg-black py-16 md:py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE_SMOOTH }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-4">
            Why work with me
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            A reliable developer, not just another freelancer
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I focus on long-term quality, clear communication, and
            production-ready delivery.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Spotlight className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SpotLightItem className="lg:col-span-1">
              <motion.div variants={cardVariants}>
                <MiniCard
                  icon={Layers}
                  title="Clean Code"
                  description="Readable, maintainable architecture that scales."
                />
              </motion.div>
            </SpotLightItem>

            <SpotLightItem className="lg:col-span-1">
              <motion.div variants={cardVariants}>
                <MiniCard
                  icon={Zap}
                  title="Performance"
                  description="Optimized rendering, fast load, smooth UX."
                />
              </motion.div>
            </SpotLightItem>

            {/* Big Card (slightly heavier motion) */}
            <SpotLightItem className="lg:col-span-2 lg:row-span-2">
              <motion.div
                variants={cardVariants}
                transition={{ duration: 0.65, ease: EASE_SMOOTH }}
              >
                <BigCard />
              </motion.div>
            </SpotLightItem>

            <SpotLightItem className="lg:col-span-1">
              <motion.div variants={cardVariants}>
                <MiniCard
                  icon={Rocket}
                  title="Production Ready"
                  description="Built to deploy, monitor, and scale."
                />
              </motion.div>
            </SpotLightItem>

            <SpotLightItem className="lg:col-span-1">
              <motion.div variants={cardVariants}>
                <MiniCard
                  icon={UserCheck}
                  title="Direct Work"
                  description="No middlemen. Clear communication."
                />
              </motion.div>
            </SpotLightItem>
          </Spotlight>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Mini Card (subtle hover intelligence)
--------------------------------------------- */

function MiniCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.25, ease: EASE_SMOOTH },
      }}
      className="relative h-48 rounded-xl border border-white/10
                 bg-gradient-to-b from-[#0b0b0b] to-[#161616]
                 p-5 flex flex-col justify-between"
    >
      <Icon className="h-7 w-7 text-indigo-400" />

      <div>
        <h4 className="text-white font-medium mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------
   Big Card (authority motion)
--------------------------------------------- */

function BigCard() {
  return (
    <motion.div
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: EASE_SMOOTH },
      }}
      className="relative h-full rounded-xl border border-white/10
                 bg-gradient-to-b from-[#0b0b0b] to-[#161616]
                 p-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-md">
        <h3 className="text-white text-2xl font-semibold mb-4">
          Built for real-world production
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          I don’t just design interfaces. I engineer systems that survive
          production, handle scale, and stay maintainable long after launch.
        </p>

        {/* Supporting points */}
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Predictable architecture decisions</li>
          <li>• Performance budgets considered early</li>
          <li>• Deployment & monitoring awareness</li>
          <li>• Code that other developers can own</li>
        </ul>
      </div>

      {/* Bottom signal (credibility anchor) */}
      <div className="relative z-10 mt-8 flex items-center gap-4 text-xs text-gray-500">
        <span className="uppercase tracking-wide">Focus</span>
        <span className="h-px w-10 bg-white/20" />
        <span>Stability • Scale • Longevity</span>
      </div>

      {/* Subtle system bars */}
      <div className="absolute right-6 bottom-6 flex gap-2 opacity-20">
        {[40, 60, 80].map((h, i) => (
          <div
            key={i}
            className="w-3 rounded bg-white"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
    </motion.div>
  );
}
