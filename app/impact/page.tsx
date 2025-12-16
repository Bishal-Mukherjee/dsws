import { HeroSection } from "@/components/modules/Impact/HeroSection";
import { ImpactInNumbers } from "@/components/modules/Impact/ImpactInNumbers";
import { CoreAreasOfImpact } from "@/components/modules/Impact/CoreAreassOfImpact";
import { StoriesOfHope } from "@/components/modules/Impact/StoriesOfImpact";

export default function Impact() {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <HeroSection />
      <ImpactInNumbers />
      <CoreAreasOfImpact />
      <StoriesOfHope showPartOfTheChange />
    </div>
  );
}
