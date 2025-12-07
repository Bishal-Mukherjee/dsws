import { HeroSection } from "@/components/modules/Home/HeroSection";
import { WorkAndImpact } from "@/components/modules/Home/WorkAndImpact";
import { Journey } from "@/components/modules/Home/Journey";
import { PartnersAndSupporters } from "@/components/modules/Home/PartnersAndSuporters";
import { OurValues } from "@/components/modules/Home/OurValues";
import { Achievements } from "@/components/modules/Home/Achievements";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <HeroSection />
      <WorkAndImpact />
      <Journey />
      <Achievements />
      <OurValues />
      <PartnersAndSupporters />
    </div>
  );
}
