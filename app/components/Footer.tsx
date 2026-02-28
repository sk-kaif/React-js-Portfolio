"use client";

import React, { useRef, useState, useEffect, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Circle, AnimatedBeam } from "@/components/uilayouts/animated-beam";
import { Github, Linkedin, Mail, Send, Phone } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import CTABtn from "./CTABtn";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH } from "@/lib/motion";
import { openLink } from "universal-app-opener";
import emailjs from '@emailjs/browser';

/* ---------------------------------------------
   SpotlightCard (Internal Component)
--------------------------------------------- */
function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        className
      )}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(
              280px circle at ${pos.x}px ${pos.y}px,
              rgba(255,255,255,0.08),
              transparent 60%
            )`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/* ---------------- Animation Variants ---------------- */

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_SMOOTH,
    },
  },
};

/* ---------------- Main Component ---------------- */

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  // --- Contact Form Logic ---
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    if (!form.current) return;

    emailjs.sendForm('service_dw68ald', 'template_htasd22', form.current, 'Kt2gWv4iXUWqig7kG')
      .then((result) => {
          (e.target as HTMLFormElement).reset();
          setStatus("success");
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      });
  };

  // --- Refs for Contact Beams ---
  const contactBeamContainerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  // --- Refs for Social Beams ---
  const socialContainerRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLDivElement>(null);
  const twitterRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);

  // Ensure beams only render after mount/refs (preventing hydration mismatch issues)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    openLink(url, { openInNewTab: true });
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="bg-black border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-20">

        {/* ==================== CONTACT SECTION ==================== */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left: Text & Heading */}
          <motion.div variants={itemVariants} className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <p className="text-xs uppercase font-mono tracking-widest text-gray-400 mb-3">
              Contact
            </p>
            <h2 className="text-4xl font-semibold text-white leading-tight mb-4">
              Start a conversation
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I help teams and founders ship fast, reliable web products. Clear
              scope. Clean code. No surprises.
            </p>

            {/* Direct Contact Section */}
            <div className="flex flex-col gap-4 mb-8">
              <a 
                href="tel:9920489366"
                className="group flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <Phone className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="flex flex-col items-start translate-y-[1px]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">
                    Want to call me?
                  </span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    +91 9920489366
                  </span>
                </div>
              </a>

              <a 
                href="mailto:shk.mohd.kaif@gmail.com"
                className="group flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-black group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <Mail className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="flex flex-col items-start translate-y-[1px]">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors">
                    Just want to email?
                  </span>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    shk.mohd.kaif@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Visual Beam Element (Mail -> Send) */}
            <div className="relative flex justify-center lg:justify-start h-14 w-full">
              <div
                ref={contactBeamContainerRef}
                className="relative flex items-center gap-12"
              >
                <Circle ref={fromRef} className="bg-black border-white/20 z-10">
                  <Mail className="h-4 w-4 text-white" />
                </Circle>
                <Circle ref={toRef} className="bg-black border-white/20 z-10">
                  <Send className="h-4 w-4 text-white" />
                </Circle>

                {mounted && (
                  <AnimatedBeam
                    containerRef={contactBeamContainerRef}
                    fromRef={fromRef}
                    toRef={toRef}
                    dotted
                    duration={2.5}
                    gradientStartColor="rgba(255,255,255,0.9)"
                    gradientStopColor="rgba(255,255,255,0.35)"
                    className="stroke-white/70"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants} className="w-full">
            <SpotlightCard className="p-6 lg:p-8 w-full">
              <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <input
                    name="name"
                    placeholder="Your name"
                    required
                    className="rounded-lg bg-black/40 border border-white/10 focus:border-white/30 px-4 py-3 text-white focus:outline-none placeholder:text-gray-600 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="rounded-lg bg-black/40 border border-white/10 focus:border-white/30 px-4 py-3 text-white focus:outline-none placeholder:text-gray-600 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project"
                    required
                    className="min-h-[140px] resize-none rounded-lg bg-black/40 border border-white/10 focus:border-white/30 px-4 py-3 text-white focus:outline-none placeholder:text-gray-600 transition-colors"
                  />
                </div>

                <CTABtn
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "mt-2 rounded-lg px-6 py-3 font-medium transition w-full",
                    status === "success"
                      ? "bg-green-500 text-black hover:bg-green-400"
                      : status === "error"
                        ? "bg-red-500 text-black animate-shake hover:bg-red-400"
                        : "bg-white text-black hover:bg-gray-100"
                  )}
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                      ? "Message sent"
                      : status === "error"
                        ? "Try again"
                        : "Send message"}
                </CTABtn>
              </form>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Separator */}
        <div className="border-t border-white/10 w-full mb-12" />

        {/* ==================== FOOTER LINKS ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">

          {/* Identity */}
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">Kaif Shaikh</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Full-stack developer focused on production-ready systems,
              performance, and long-term maintainability.
            </p>
          </div>

          {/* Connected Socials */}
          <div
            className="relative isolate flex items-center justify-center md:justify-end gap-6 h-20"
            ref={socialContainerRef}
          >
            <Circle
              ref={githubRef}
              className="z-10 bg-black/40 border border-white/15 hover:bg-black/60 transition"
            >
              <a
                href="https://github.com/sk-kaif"
                onClick={(e) => handleSocialClick(e, "https://github.com/sk-kaif")}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </Circle>
            <Circle
              ref={linkedinRef}
              className="z-10 bg-black/40 border border-white/15 hover:bg-black/60 transition"
            >
              <a
                href="https://www.linkedin.com/in/shaikh-kaif-62ba3725b/"
                onClick={(e) => handleSocialClick(e, "https://www.linkedin.com/in/shaikh-kaif-62ba3725b/")}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </Circle>
            <Circle
              ref={twitterRef}
              className="z-10 bg-black/40 border border-white/15 hover:bg-black/60 transition"
            >
              <a
                href="https://x.com/shaikhkaif_?s=11&t=IiJuhe8cESBqfifsYfgtZw"
                onClick={(e) => handleSocialClick(e, "https://x.com/shaikhkaif_?s=11&t=IiJuhe8cESBqfifsYfgtZw")}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5 text-white" />
              </a>
            </Circle>
            <Circle
              ref={emailRef}
              className="z-10 bg-black/40 border border-white/15 hover:bg-black/60 transition"
            >
              <a href="mailto:shk.mohd.kaif@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </Circle>

            {/* Connecting Beams */}
            {mounted && (
              <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
                <AnimatedBeam
                  containerRef={socialContainerRef}
                  fromRef={githubRef}
                  toRef={linkedinRef}
                  dotted
                  className="stroke-white/20"
                />
                <AnimatedBeam
                  containerRef={socialContainerRef}
                  fromRef={linkedinRef}
                  toRef={twitterRef}
                  dotted
                  className="stroke-white/20"
                />
                <AnimatedBeam
                  containerRef={socialContainerRef}
                  fromRef={twitterRef}
                  toRef={emailRef}
                  dotted
                  className="stroke-white/20"
                />
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Kaif Shaikh. Built with performance in
            mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
