import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Eye, Handshake, Leaf, Shield, Users } from "lucide-react";

const values = [
  {
    title: "Learning Organization",
    icon: <BadgeCheck />,
    description: "Continuous learning and adaptation",
  },
  {
    title: "Transparency",
    icon: <Eye />,
    description: "Open & transparent decision making",
  },
  {
    title: "Social Justice",
    icon: <Handshake />,
    description: "Mutual cooperation & social justice",
  },
  {
    title: "Environmental Care",
    icon: <Leaf />,
    description: "Environment-friendly actions",
  },
  {
    title: "Accountability",
    icon: <Shield />,
    description: "Accountable to communities we serve",
  },
  {
    title: "Women Empowerment",
    icon: <Users />,
    description: "Equal participation of women in decisions",
  },
];

export function OurValues() {
  return (
    <section>
      <div className="bg-[#dff7e6] w-full p-4 py-6 rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black/80">Our Values</h2>
          <p className="text-[#61896f] dark:text-white/60 mt-2">
            The principles guiding everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((v) => (
            <Card
              key={v.title}
              className="p-6 flex flex-col items-center text-center shadow-none border-none bg-transparent"
            >
              <div className="p-3 rounded-full text-black/80 bg-[#13ec5b]">
                {v.icon}
              </div>

              <CardContent className="p-0">
                <h3 className="text-lg font-bold mb-2 text-black/80">
                  {v.title}
                </h3>
                <p className="text-sm text-[#61896f] dark:text-white/80">
                  {v.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
