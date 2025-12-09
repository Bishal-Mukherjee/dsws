import { HeroSection } from "@/components/modules/GetInvolved/HeroSection";
import { VolunteerOpportunities } from "@/components/modules/GetInvolved/VolunteerOpportunities";
import { VolunteerTestimonials } from "@/components/modules/GetInvolved/VolunteerTestimonials";

export default function GetInvolved() {
  return (
    <div className="max-w-6xl mx-auto space-y-20">
      <HeroSection />
      <VolunteerOpportunities />
      <VolunteerTestimonials />
    </div>
  );
}
