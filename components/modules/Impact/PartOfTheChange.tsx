import { Button } from "@/components/ui/button";

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
          <Button variant={"primary"} className="py-6 text-md">
            Donate Now
          </Button>
          <Button
            variant={"outline"}
            className="py-6 bg-transparent border-black text-md"
          >
            Volunteer With Us
          </Button>
        </div>
      </div>
    </section>
  );
}
