import HeroSection from "@/components/Backend/HeroSection";
import ProcessSection from "@/components/Backend/ProcessSection";
import CapabilitiesSection from "@/components/Backend/CapabilitiesSection";
import TechStackSection from "@/components/Backend/TechStackSection";
import EducationSection from "@/components/Backend/EducationSection";
import FaqSection from "@/components/Backend/FaqSection";

export default function BackendOfferPage() {
  return (
    <div className="min-h-screen bg-transparent w-full selection:bg-[#8ddd8d] selection:text-black">
      <HeroSection id="hero" />
      <ProcessSection id="process" />
      <CapabilitiesSection id="capabilities" />
        <EducationSection id="education" />
      <TechStackSection id="tech-stack" />
      <FaqSection id="faq" />
    </div>
  );
}