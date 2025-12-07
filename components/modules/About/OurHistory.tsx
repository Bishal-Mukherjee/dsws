import { Flag, GraduationCap, Lightbulb, Users } from "lucide-react";

const milestones = [
  {
    icon: Flag,
    title: "Foundation of DSWS",
    year: "2005",
  },
  {
    icon: GraduationCap,
    title: "First Educational Center Opened",
    year: "2008",
  },
  {
    icon: Lightbulb,
    title: "Women Empowerment Program Launch",
    year: "2012",
  },
  {
    icon: Users,
    title: "Reached 10,000+ Beneficiaries",
    year: "2020",
  },
];

export function OurHistory() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 my-auto">
          <h2 className="text-4xl font-bold text-foreground">Our History</h2>
          <p className="text-muted-foreground leading-relaxed">
            From a small group of passionate individuals to a society impacting
            thousands, our journey has been one of dedication and growth. Here
            are some of our key milestones.
          </p>
        </div>

        <div className="space-y-6 relative">
          <div className="w-0.5 h-[300px] md:h-[250px] bg-gray-200 absolute left-6 top-0" />
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={index} className="flex items-start gap-4 relative">
                <div className="shrink-0 bg-gray-50">
                  <div className="w-12 h-12 rounded-lg text-brand flex items-center justify-center relative z-50">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
