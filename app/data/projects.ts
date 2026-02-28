import { title } from "process";

export type Project = {
  id: number;
  slug: string;
  title: string;
  shortdesc: string;
  img: string;
  prevlink: string;
  githubLink?: string;
  tags: string[];

  // Used ONLY in case study pages
  desc?: string;
  coreFeatures?: string[];
  technologiesUsed?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "hiparks",
    title: "HiParks – Corporate Website",
    shortdesc:
      "Developed the official HiParks corporate website with responsive UI and SEOoptimized structure.Showcased industrial park solutions, locations, and sustainability content for enterprise users",
    img: "/projects/hipark.png",
    prevlink: "https://www.hiparks.com/",
    // githubLink: "https://github.com/sk-kaif/primeattire",
    tags: ["Next.js", "SaaS", "Motion"],
  },
  {
    id: 4,
    slug: "kshInfra",
    title: "KSH Infra – Corporate Website",
    shortdesc:
      "Developed the official KSH Infra corporate website with responsive UI and SEOoptimized structure.Showcased industrial park solutions, locations, and sustainability content for enterprise users",
    img: "/projects/ksh.png",
    prevlink: "https://www.kshinfra.com/",
    tags: ["Next.js ", "Tailwind CSS", "Shadcn UI"],
  },

  {
    id: 3,
    slug: "webfoliox",
    title: "WebfolioX – Interactive Portfolio",
    shortdesc:
      "Modern portfolio with smooth animations and responsive layouts.",
    img: "/projects/pro1.png",
    prevlink: "https://webfoliox.vercel.app",
    githubLink: "https://github.com/sk-kaif/webfoliox",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },

  {
    id: 5,
    slug: "advancemovie",
    title: "Advance Movie",
    shortdesc:
      "Developed a fully functional Movie app with TMDB APi using React.js, creating a user-friendly interface that mimics the popular movie and TV show",
    img: "/projects/Allmovix.png",
    prevlink: "https://advance-movie-app-reactjs.vercel.app/",
    githubLink: "https://github.com/sk-kaif/AdvanceMovieApp-Reactjs",
    tags: ["React.js", "TMDB API", "Redux Toolkit"],
  },

  {
    id: 6,
    slug: "battery-ecommerce",
    title: "Battery Ecommerce",
    shortdesc:
      "An online battery retail platform featuring a wide range of automotive batteries with brand filters, capacity options and warranty selections to help customers find the right power solution.",
    img: "/projects/batteryBoss.png",
    prevlink: "https://battery-b.vercel.app/shop",

    githubLink: "https://github.com/sk-kaif/batteryB",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },

  {
    id: 7,
    slug: "abms-service",
    title: "ABMS Service",
    shortdesc:
      "A global governance, risk management and compliance (GRC) consulting firm offering ISO consultation, digital transformation and accredited training services to help organisations mitigate risk and achieve strategic goals.",
    img: "/projects/abms-seven.png",
    prevlink: "https://abms-seven.vercel.app/",

    githubLink: "https://github.com/sk-kaif/abms",
    tags: ["React.js", "TMDB API", "Redux Toolkit"],
  },
];
