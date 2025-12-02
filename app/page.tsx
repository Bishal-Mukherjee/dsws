import { HomeBanner } from "@/components/modules/Home/HomeBanner";
import { WorkAndImpact } from "@/components/modules/Home/WorkAndImpact";
import { Journey } from "@/components/modules/Home/Journey";
import { PartnersAndSupporters } from "@/components/modules/Home/PartnersAndSuporters";
import { OurValues } from "@/components/modules/Home/OurValues";
import { Achievements } from "@/components/modules/Home/Achievements";

export default function Home() {
  return (
    <div className="flex-1 w-full space-y-20">
      <HomeBanner />
      <WorkAndImpact />
      <Journey />
      <Achievements />
      <OurValues />
      <PartnersAndSupporters />
    </div>
  );
}
