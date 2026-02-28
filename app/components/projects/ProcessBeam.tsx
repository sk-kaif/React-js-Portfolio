// import { Circle } from "@/components/uilayouts/animated-beam";
// import { CheckCircle, Code, Rocket } from "lucide-react";

// export default function ProcessBeam() {
//   return (
//     <div className="grid md:grid-cols-3 gap-10 text-center">
//       <ProcessItem icon={<CheckCircle />} title="Understand the Problem" />
//       <ProcessItem icon={<Code />} title="Build the Solution" />
//       <ProcessItem icon={<Rocket />} title="Deploy & Optimize" />
//     </div>
//   );
// }

// function ProcessItem({ icon, title }: { icon: React.ReactNode; title: string }) {
//   return (
//     <div className="space-y-4">
//       <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black">
//         {icon}
//       </div>
//       <p className="text-white font-medium">{title}</p>
//       <p className="text-sm text-gray-400">
//         Structured development focused on performance, UX, and long-term maintainability.
//       </p>
//     </div>
//   );
// }


// 'use client';

// import React, { useRef, useEffect, useState } from 'react';
// import { AnimatedBeam, Circle } from '@/components/uilayouts/animated-beam';
// import { CheckCircle, Code, Rocket } from 'lucide-react';

// export default function ProcessBeam() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const step1 = useRef<HTMLDivElement>(null);
//   const step2 = useRef<HTMLDivElement>(null);
//   const step3 = useRef<HTMLDivElement>(null);
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     if (step1.current && step2.current && step3.current) {
//       setReady(true);
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative grid md:grid-cols-3 gap-16 text-center"
//     >
//       <ProcessItem
//         ref={step1}
//         icon={<CheckCircle className="h-5 w-5 text-white" />}
//         title="Understand the Problem"
//       />

//       <ProcessItem
//         ref={step2}
//         icon={<Code className="h-5 w-5 text-white" />}
//         title="Build the Solution"
//       />

//       <ProcessItem
//         ref={step3}
//         icon={<Rocket className="h-5 w-5 text-white" />}
//         title="Deploy & Optimize"
//       />

//       {/* Beams */}
//       {ready && (
//         <>
//           <AnimatedBeam
//             containerRef={containerRef}
//             fromRef={step1}
//             toRef={step2}
//             dotted
//             dotSpacing={6}
//             gradientStartColor="#9ca3af"
//             gradientStopColor="#ffffff"
//           />
//           <AnimatedBeam
//             containerRef={containerRef}
//             fromRef={step2}
//             toRef={step3}
//             dotted
//             dotSpacing={6}
//             gradientStartColor="#9ca3af"
//             gradientStopColor="#ffffff"
//           />
//         </>
//       )}
//     </div>
//   );
// }

// const ProcessItem = React.forwardRef<
//   HTMLDivElement,
//   { icon: React.ReactNode; title: string }
// >(({ icon, title }, ref) => {
//   return (
//     <div ref={ref} className="space-y-4 relative z-10">
//       <Circle className="mx-auto bg-black border-white/20">
//         {icon}
//       </Circle>

//       <p className="text-white font-medium">{title}</p>

//       <p className="text-sm text-gray-400 max-w-xs mx-auto">
//         Structured development focused on performance, UX, and long-term maintainability.
//       </p>
//     </div>
//   );
// });

// ProcessItem.displayName = 'ProcessItem';




"use client";

import React, { useRef } from "react";
import { AnimatedBeam, Circle } from "@/components/uilayouts/animated-beam";
import { CheckCircle, Code, Rocket } from "lucide-react";

export default function ProcessBeam() {
  const containerRef = useRef<HTMLDivElement>(null);

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative max-w-6xl mx-auto py-24"
    >
      {/* Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={step1Ref}
        toRef={step2Ref}
        dotted
        className="opacity-60"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={step2Ref}
        toRef={step3Ref}
        dotted
        className="opacity-60"
      />

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-16 text-center relative z-10">
        <ProcessItem
          beamRef={step1Ref}
          icon={<CheckCircle className="h-5 w-5 text-white" />}
          title="Understand the Problem"
          description="We analyze requirements, constraints, and business goals before writing a single line of code."
        />

        <ProcessItem
          beamRef={step2Ref}
          icon={<Code className="h-5 w-5 text-white" />}
          title="Build the Solution"
          description="Clean architecture, scalable systems, and performance-first development."
        />

        <ProcessItem
          beamRef={step3Ref}
          icon={<Rocket className="h-5 w-5 text-white" />}
          title="Deploy & Optimize"
          description="Production deployment, monitoring, and continuous optimization."
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function ProcessItem({
  beamRef,
  icon,
  title,
  description,
}: {
  beamRef: React.RefObject<HTMLDivElement | null>;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      {/* IMPORTANT: ref is attached ONLY to the circle */}
      <div ref={beamRef} className="flex justify-center">
        <Circle className="bg-black border border-white/20">
          {icon}
        </Circle>
      </div>

      <p className="text-white font-medium text-base">
        {title}
      </p>

      <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
