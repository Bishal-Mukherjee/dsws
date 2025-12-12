import { Button } from "@/components/ui/button";
import { ContributionDialog, VolunteerDialog } from "@/components/common";

export function PartOfTheChange() {
  return (
    <section>
      <div className="w-full bg-brand/20 grid grid-cols-1 md:grid-cols-2 p-12 rounded-2xl gap-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Be a Part of the Change</h2>
          <p>
            Your contribution can create ripples of change. Join us in our
            mission to build a better tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <ContributionDialog>
            <Button variant={"primary"} className="py-6 text-md">
              Donate Now
            </Button>
          </ContributionDialog>
          <VolunteerDialog>
            <Button
              variant={"outline"}
              className="w-full py-6 bg-transparent border-black text-md hover:bg-black/5"
            >
              Volunteer With Us
            </Button>
          </VolunteerDialog>
        </div>
      </div>
    </section>
  );
}
