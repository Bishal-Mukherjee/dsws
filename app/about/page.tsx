import { HeroSection } from "@/components/modules/About/HeroSection";
import { AboutUs } from "@/components/modules/About/AboutUs";
import { VisionAndMission } from "@/components/modules/About/VisionAndMission";
import { MediaShowcase } from "@/components/modules/About/MediaShowcase";
import { OurHistory } from "@/components/modules/About/OurHistory";
import { MeetOurTeam } from "@/components/modules/About/MeetOurTeam,";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <HeroSection />
      <AboutUs />
      <VisionAndMission />
      <MediaShowcase />
      <OurHistory />
      <MeetOurTeam />
    </div>
  );
}
