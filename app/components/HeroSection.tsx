"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { EASE_SMOOTH } from "@/lib/motion";

// export default function HeroSection() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
//       {/* Blocks Background */}
//       <div ref={containerRef} className="absolute inset-0">
//         <Blocks
//           containerRef={containerRef}
//           classname="w-full h-full"
//           divClass="border-white/20"
//           activeDivsClass="bg-white/20"
//           activeDivs={{
//             1: new Set([1, 2, 3]),
//             3: new Set([2, 4, 5]),
//             5: new Set([3, 6, 7]),
//             7: new Set([5, 8, 9]),
//             9: new Set([6, 10]),
//           }}
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//         <p className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-6">
//           Freelance Web Developer
//         </p>

//         <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 leading-tight">
//           I build fast, reliable <br /> web applications
//         </h1>

//         <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//           Specialized in Next.js and MERN stack, delivering clean,
//           scalable, production-ready websites.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
//             Work with me
//           </button>
//           <button className="text-white/80 hover:text-white transition font-medium">
//             View projects
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


//////////////////////////////////////////////////

// export default function HeroSection() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     const dots = Array.from({ length: 80 }, () => ({
//       x: Math.random() * width,
//       y: Math.random() * height,
//       r: 1 + Math.random() * 3,
//       dx: (Math.random() - 0.5) * 0.3,
//       dy: (Math.random() - 0.5) * 0.3,
//     }));

//     function animate() {
//       ctx.clearRect(0, 0, width, height);

//       dots.forEach(dot => {
//         dot.x += dot.dx;
//         dot.y += dot.dy;

//         if (dot.x < 0 || dot.x > width) dot.dx *= -1;
//         if (dot.y < 0 || dot.y > height) dot.dy *= -1;

//         ctx.beginPath();
//         ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.15)";
//         ctx.fill();
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden">
//       {/* Canvas Background */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

//       {/* Hero Content */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto">
//         <p className="text-gray-400 text-sm font-medium mb-6 tracking-wide uppercase font-mono">
//           Freelance Web Developer
//         </p>

//         <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//           I build fast, reliable web applications
//         </h1>

//         <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
//           Specialized in Next.js and MERN stack, delivering clean, scalable,
//           production-ready websites for startups and businesses.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//             Work with me
//           </button>
//           <button className="text-white hover:text-gray-300 transition-colors font-medium">
//             View projects
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


////////    ////////////////////////////////////


// import React from 'react';
// import Earth from '@/components/uilayouts/globe';
// import { Sparkles } from '@/components/uilayouts/sparkles';

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center px-4">
//       {/* Headline & Subtitle */}
//       <div className="relative z-10 text-center max-w-4xl mx-auto">
//         {/* <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35] font-mono">
//           Freelance Web Developer
//         </span> */}
//         <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight tracking-tight bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent">
//           I Build Fast, Reliable Web Applications
//         </h1>
//         <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//           Specialized in Next.js and MERN stack, delivering clean, scalable,
//           production-ready websites for startups and businesses.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//             Work with me
//           </button>
//           <button className="text-white hover:text-gray-300 transition-colors font-medium">
//             View Projects
//           </button>
//         </div>
//       </div>

//       {/* Globe & Sparkles */}
//       <div className="absolute inset-0 flex items-center justify-center -z-0">
//         {/* <Earth className="w-full max-w-3xl h-auto" /> */}
//         <Sparkles
//           density={800}
//           speed={1.2}
//           size={1.2}
//           direction="top"
//           opacitySpeed={2}
//           color="#32A7FF"
//           className="absolute inset-0 w-full h-full"
//         />
//       </div>

//       {/* Optional subtle gradient overlay for readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 -z-10" />
//     </section>
//   );
// }



export default function HeroSection() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE_SMOOTH, // Professional easing
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: EASE_SMOOTH,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: EASE_SMOOTH,
        delay: 0.4,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle grid background */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px] opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-4"
          variants={itemVariants}
        >
          Full-Stack Web Developer
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.15]"
          variants={titleVariants}
        >
          Production-Ready Web Applications
          <br className="hidden md:block" />
          for Startups & Teams
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I design and build scalable, high-performance web products using
          Next.js and the MERN stack — focused on clarity, reliability, and
          long-term maintainability.
        </motion.p>

        {/* Trust signals */}
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400"
          variants={itemVariants}
        >
          <span>Clean architecture</span>
          <span>Predictable delivery</span>
          <span>Direct collaboration</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center sm:flex-row justify-center gap-4"
          variants={buttonVariants}
        >
          <CTAButton href="#contact">Start a project</CTAButton>
          <CTAButton variant="secondary" href="#projects">View work</CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
