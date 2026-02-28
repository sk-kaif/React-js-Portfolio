'use client';

export default function TechMarquee({ tech }: { tech: string[] }) {
  return (
    <div className="overflow-hidden border-y border-white/10 py-6">
      <div className="animate-marquee whitespace-nowrap flex gap-12 text-gray-400 text-sm">
        {tech.concat(tech).map((item, i) => (
          <span className="font-mono" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
