"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/app/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="
        group relative block rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur-xl
        overflow-hidden
        transition
        hover:border-white/20
        focus-within:ring-2 focus-within:ring-white/20
      "
    >
      {/* Main Link Overlay - Resolves hydration error by not nesting <a> tags */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 focus:outline-none"
      >
        <span className="sr-only">View {project.title}</span>
      </Link>

      {/* Preview */}
      <div className="relative h-52">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/20" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-medium text-white">{project.title}</h3>

        <p className="text-sm text-gray-300">{project.shortdesc}</p>

        {/* <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md
                         border border-white/10
                         bg-black/40 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div> */}

        {/* Actions */}
        <div className="pt-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-sm text-gray-400 group-hover:text-white transition">
            View Details <ArrowUpRight className="h-4 w-4" />
          </span>

          {/* Live Demo Link - Z-index ensures it sits above the overlay link */}
          <Link
            href={project.prevlink}
            target="_blank"
            className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition relative z-20"
          >
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
