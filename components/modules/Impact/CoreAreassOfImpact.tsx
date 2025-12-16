import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { coreAreasOfImpact } from "@/constants/data/impact/coreAreasOfImpact";

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

      <div className="flex flex-wrap justify-center gap-4">
        {coreAreasOfImpact.map((item, index) => (
          <Card
            key={index}
            className="shadow-none border border-[#dbe6df] gap-0 w-full md:w-[calc(25%-12px)]"
          >
            <CardHeader>
              <CardTitle className="text-black/80 text-sm font-semibold space-y-2">
                <item.icon className="w-6 h-6 text-brand mb-3" />
                <p className="font-bold">{item.title}</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-black/60 text-sm">
              {item.content}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
