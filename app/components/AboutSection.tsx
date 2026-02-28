// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import Image from 'next/image';

// export default function AboutSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // Container animation for orchestrating child elements
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   // Text elements slide up with professional easing
//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: [0.25, 0.46, 0.45, 0.94],
//       },
//     },
//   };

//   // Image slides in from right with subtle scale
//   const imageVariants = {
//     hidden: { opacity: 0, x: 50, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.25, 0.46, 0.45, 0.94],
//         delay: 0.2,
//       },
//     },
//   };

//   // Glass container subtle entrance
//   const glassVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   // List items stagger for readability
//   const listVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
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
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   return (
//     <section id="about" className="relative bg-black py-28 px-4" ref={ref}>
//       <div className="max-w-6xl mx-auto">
//         {/* Glass container */}
//         <motion.div 
//           className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 lg:p-14"
//           variants={glassVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >

//           {/* LEFT — Content */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             <motion.p 
//               className="text-xs uppercase tracking-widest text-gray-400 mb-3"
//               variants={textVariants}
//             >
//               About
//             </motion.p>

//             <motion.h2 
//               className="text-3xl lg:text-4xl font-semibold text-white mb-6"
//               variants={textVariants}
//             >
//               Developer focused on clarity, performance, and delivery
//             </motion.h2>

//             <motion.p 
//               className="text-gray-300 leading-relaxed mb-4"
//               variants={textVariants}
//             >
//               I&apos;m a full-stack web developer building production-ready applications
//               for startups and teams that value clarity and execution.
//             </motion.p>

//             <motion.p 
//               className="text-gray-300 leading-relaxed mb-6"
//               variants={textVariants}
//             >
//               I work with React, Next.js, and modern backend systems to deliver
//               reliable products — without unnecessary complexity or visual noise.
//             </motion.p>

//             <motion.p 
//               className="text-gray-300 leading-relaxed mb-6"
//               variants={textVariants}
//             >
//               I&apos;m a good fit if you need a developer who can take ownership,
//               communicate clearly, and ship without hand-holding.
//             </motion.p>

//             {/* Trust bullets */}
//             <motion.ul 
//               className="space-y-3 text-sm text-gray-400"
//               variants={listVariants}
//               initial="hidden"
//               animate={isInView ? "visible" : "hidden"}
//             >
//               <motion.li variants={listItemVariants}>• Direct communication — no middlemen</motion.li>
//               <motion.li variants={listItemVariants}>• Predictable delivery with clear milestones</motion.li>
//               <motion.li variants={listItemVariants}>• Clean, maintainable code</motion.li>
//               <motion.li variants={listItemVariants}>• Strong focus on UX and performance</motion.li>
//             </motion.ul>
//           </motion.div>

//           {/* RIGHT — Visual anchor */}
//           <motion.div 
//             className="flex justify-center lg:justify-end"
//             variants={imageVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             <div className="relative w-64 h-80 rounded-xl overflow-hidden border border-white/10 bg-black/40">
//               <Image
//                 src="/Kaifdev.png"
//                 alt="Professional portrait"
//                 fill
//                 className="object-cover grayscale hover:grayscale-0 transition duration-500"
//               />
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }




'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { EASE_SMOOTH } from '@/lib/motion';

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Container orchestrates child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Text slides up
  const textVariants = {
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

  // Image enters from right
  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: EASE_SMOOTH,
        delay: 0.2,
      },
    },
  };

  // Glass container
  const glassVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  // Bullet list stagger
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black py-28 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 lg:p-14"
          variants={glassVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* LEFT — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              className="text-xs uppercase font-mono tracking-widest text-gray-400 mb-3"
              variants={textVariants}
            >
              About
            </motion.p>

            <motion.h2
              className="text-3xl lg:text-4xl font-semibold text-white mb-6"
              variants={textVariants}
            >
              Developer focused on clarity, performance, and delivery
            </motion.h2>

            <motion.p
              className="text-gray-300 leading-relaxed mb-4"
              variants={textVariants}
            >
              I&apos;m a full-stack web developer building production-ready
              applications for startups and teams that value clarity and execution.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6"
              variants={textVariants}
            >
              I work with React, Next.js, and modern backend systems to deliver
              reliable products — without unnecessary complexity or visual noise.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6"
              variants={textVariants}
            >
              I&apos;m a good fit if you need a developer who can take ownership,
              communicate clearly, and ship without hand-holding.
            </motion.p>

            <motion.ul
              className="space-y-3 text-sm text-gray-400"
              variants={listVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.li variants={listItemVariants}>
                • Direct communication — no middlemen
              </motion.li>
              <motion.li variants={listItemVariants}>
                • Predictable delivery with clear milestones
              </motion.li>
              <motion.li variants={listItemVariants}>
                • Clean, maintainable code
              </motion.li>
              <motion.li variants={listItemVariants}>
                • Strong focus on UX and performance
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* RIGHT — Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="relative w-64 h-80 rounded-xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/Kaifdev.png"
                alt="Professional portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
