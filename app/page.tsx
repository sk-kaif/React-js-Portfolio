import AboutSection from "./components/AboutSection";

import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import HowIBuild from "./components/HowIBuild";
import HowItWorksSection from "./components/HowItWorksSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ProofSection from "./components/ProofSection";
import ServicesSection from "./components/ServicesSection";
import WhyWorkSection from "./components/WhyWorkSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <HowIBuild />
      <ProofSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyWorkSection />
      <FAQSection />
    </>
  );
}
