import { GraduationCap, User, RefreshCcw, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    title: "Education",
    content:
      "Providing quality education and resources to children, ensuring a brighter future for the next generation.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Women Empowerment",
    content:
      "Equipping women with skills, financial literacy, and confidence to become independent leaders.",
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Rural Development",
    content:
      "Improving infrastructure, providing access to clean water, and promoting sustainable agriculture.",
    icon: <RefreshCcw className="w-6 h-6" />,
  },
  {
    title: "Social Welfare",
    content:
      "Running health camps, awareness programs, and providing essential support to vulnerable groups.",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
];

export function CoreAreasOfImpact() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold">
          Our Core Areas of Impact
        </h2>
        <p className="text-black/60 dark:text-gray-300 mt-2">
          We focus on key areas to create sustainable and holistic development
          within the communities we serve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            className="shadow-none border border-[#dbe6df] gap-0"
          >
            <CardHeader>
              <CardTitle className="text-black/80 text-sm font-semibold space-y-2">
                <div className="text-brand">{item.icon}</div>
                <p className="font-bold">{item.title}</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-black/80 text-sm">
              {item.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
