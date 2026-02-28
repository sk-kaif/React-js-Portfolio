import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import ProcessBeam from "@/app/components/projects/ProcessBeam";
import TechMarquee from "@/app/components/projects/TechMarquee";

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <section className="bg-black px-4 py-24">
      <div className="max-w-5xl mx-auto space-y-11 lg:space-y-16">
        {/* HERO */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {project.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{project.shortdesc}</p>

          <a
            href={project.prevlink}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            View Live Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* PREVIEW */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={project.img}
            alt={project.title}
            width={1400}
            height={800}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* SUMMARY */}
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm uppercase tracking-widest font-mono text-gray-400 mb-2">
              Project Type
            </h3>
            <p className="text-white">Production Web Application</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest font-mono text-gray-400 mb-2">
              Focus
            </h3>
            <p className="text-white">Performance · Scalability · UX</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-widest font-mono text-gray-400 mb-2">
              Role
            </h3>
            <p className="text-white">Full-Stack Development</p>
          </div>
        </div>

        {/* TECH STACK – MARQUEE */}
        <TechMarquee tech={project.tags} />

        {/* PROCESS – BEAM */}
        <ProcessBeam />

        {/* FEATURES */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Key Outcomes</h2>

          <ul className="space-y-4 text-gray-300">
            <li>• Clean, responsive UI optimized for conversion</li>
            <li>• Modular architecture enabling future scaling</li>
            <li>• SEO-ready structure with fast load times</li>
            <li>• Secure authentication and payment handling</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Want something like this built?
          </h3>
          <p className="text-gray-300 mb-6">
            I design and develop production-ready web applications with clarity
            and speed.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition"
          >
            Start a Project
          </a>
          {/* <CTAButton >Start a Project</CTAButton> */}
        </div>
      </div>
    </section>
  );
}
