import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}
