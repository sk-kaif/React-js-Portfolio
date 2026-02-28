'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronDown, Calendar, MapPin, Briefcase, FileText, Globe } from 'lucide-react';
import { EASE_SMOOTH } from '@/lib/motion';
import Link from 'next/link';

interface Role {
  title: string;
  type: string;
  period: string;
  description: string[];
  icon: 'suitcase' | 'document';
}

interface ExperienceItem {
  company: string;
  isActive: boolean;
  mainRole: string;
  totalPeriod: string;
  location: string;
  roles: Role[];
  skills: string[];
  companyLink: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: 'Parashift Technologies PVT. LTD.',
    companyLink: 'https://www.parashifttech.com/',
    isActive: true,
    mainRole: 'Full Stack Developer',
    totalPeriod: 'JUL 2024 - Present',
    location: 'Mumbai',
    roles: [
      {
        title: 'Full Stack Developer',
        type: 'Full-time',
        period: '07/2024 - Present',
        icon: 'suitcase',
        description: [
          'Utilized modern web technologies, including JavaScript, Reactjs, Nextjs and version control (Git), to optimize code quality and application performance.',
          'Developed & maintained full-stack web applications with focus on responsive design and performance.',
          'Collaborated in Agile workflows to deliver high-quality, user-focused solutions.',
          'Integrated RESTful APIs and enhanced UX/UI with smooth animations and transitions.'
        ],
      },
    ],
    skills: ['Next.js', 'React.js', 'TypeScript', 'REST Api' ,'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'Git']
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="bg-black text-white py-24 px-4" id="experience" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        >
          <p className="text-gray-400 text-sm font-mono uppercase tracking-[0.2em] mb-4">
            Professional Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            My Professional <span className="text-gray-500 italic">Journey</span>
          </h2>
          <div className="max-w-3xl lg:mr-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Results-driven Full Stack Developer with 2 years of experience in designing and developing
              responsive, high-performance web applications using modern technologies and Agile workflows.
            </p>
          </div>
        </motion.div>

        {/* Experience List */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Vertical Timeline Line - Subtle */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

          { experienceData.map((exp, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div key={idx} variants={itemVariants} className="mb-10 relative">
                <div className={`group transition-all duration-500 overflow-hidden border ${isOpen ? 'bg-white/[0.04] backdrop-blur-xl border-white/20' : 'bg-transparent border-white/10 hover:border-white/20'} rounded-2xl`}>
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(idx)}
                    className="w-full p-6 md:p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="flex items-center gap-6">
                      {/* Logo Container - App Style */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'bg-white/[0.05] text-white border-white/10'}`}>
                        {exp.isActive ? <Globe size={28} /> : <Briefcase size={28} />}
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <Link href={exp.companyLink} target="_blank" >
                          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.company}</h3>
                          </Link>
                          {exp.isActive && (
                            <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white/50 text-[10px] uppercase font-bold tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 font-medium">{exp.mainRole}</p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.totalPeriod}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                  
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                      >
                        <div className="px-6 pb-8 md:px-12 md:pb-12 border-t border-white/5">
                          {/* Inner Content */}
                          <div className="space-y-12 mt-8">
                            {exp.roles.map((role, rIdx) => (
                              <div key={rIdx} className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 flex-wrap">
                                  <div className="p-2 rounded-lg bg-white/[0.05] border border-white/10">
                                     {role.icon === 'suitcase' ? <Briefcase size={18} className="text-gray-400" /> : <FileText size={18} className="text-gray-400" />}
                                  </div>
                                  <div>
                                    <h4 className="text-lg font-bold text-white">{role.title}</h4>
                                    <div className="flex items-center gap-3 mt-1">
                                      <span className="text-gray-500 text-xs font-mono">{role.period}</span>
                                      <span className="w-1 h-1 rounded-full bg-gray-700" />
                                      <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">{role.type}</span>
                                    </div>
                                  </div>
                                </div>

                                <ul className="space-y-4">
                                  {role.description.map((desc, dIdx) => (
                                    <li key={dIdx} className="text-gray-400 leading-relaxed flex gap-4 text-sm md:text-base">
                                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                      <span>{desc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Skill Tags - App Style */}
                          <div className="mt-12">
                             <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Technologies utilized</p>
                             <div className="flex flex-wrap gap-2">
                               {exp.skills.map((skill, sIdx) => (
                                 <span key={sIdx} className="px-3 py-1.5 rounded bg-white/[0.03] border border-white/10 text-gray-400 text-[11px] font-mono hover:text-white hover:border-white/30 transition-all duration-300">
                                   {skill}
                                 </span>
                               ))}
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
