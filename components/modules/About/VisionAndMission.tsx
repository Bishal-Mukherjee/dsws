import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Goal } from "lucide-react";
import { cn } from "@/lib/utils";

const visionMission = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Our Vision",
    description:
      "To work towards promoting social justice, equity, and harmony in the society.",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: <Goal className="w-6 h-6" />,
    title: "Our Mission",
    description:
      "To work with the poor and marginalized sections, especially women and children, focusing on their rights and livelihood security.",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
  },
];

export function VisionAndMission() {
  return (
    <section>
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-black/80 text-3xl font-bold leading-tight sm:text-4xl max-w-3xl mx-auto">
          Our Vision & Mission
        </h1>
        <p className="text-[#61896f] dark:text-gray-400 max-w-2xl mx-auto">
          We are dedicated to creating lasting change through our core
          principles, which guide every action we take.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visionMission.map((item, index) => (
          <Card
            key={index}
            className="border border-[#dbe6df] shadow-none gap-1"
          >
            <CardHeader>
              <CardTitle className="text-black/80 flex flex-col items-center text-lg font-bold">
                <div
                  className={cn(
                    "rounded-full p-3 mb-2 w-12 h-12 bg-brand/10 text-brand flex items-center justify-center"
                  )}
                >
                  {item.icon}
                </div>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#61896f] text-center">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
