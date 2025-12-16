import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const impactStats = [
  {
    value: "10,000",
    label: "Children Educated",
  },
  {
    value: "5000",
    label: "Women Empowered",
  },
  {
    value: "150",
    label: "Villages Supported",
  },
  {
    value: "50,000",
    label: "Lives Touched",
  },
];

export function ImpactInNumbers() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
          Our Impact in Numbers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {impactStats.map((stat, index) => (
          <Card
            key={index}
            className="shadow-none border border-[#dbe6df] gap-2"
          >
            <CardHeader>
              <CardTitle className="text-black/80 text-xl font-semibold">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-brand font-bold text-3xl">
              {stat.value}+
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
