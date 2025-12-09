import { HeroSection } from "@/components/modules/Programs/HeroSection";
import { JoinUs } from "@/components/modules/Programs/JoinUs";
import { ProgramsGrid } from "@/components/modules/Programs/ProgramsGrid";

export default function Programs() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-20">
      <HeroSection />
      <ProgramsGrid />
      <JoinUs />
    </div>
  );
}
