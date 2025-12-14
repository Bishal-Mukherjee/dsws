import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { programs } from "@/constants/data/programs/programs";

export function ProgramsGrid() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {programs.map((program, index) => (
          <Card
            key={index}
            className="group overflow-hidden shadow-none transition-shadow duration-300 p-0 gap-2"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4 space-y-4 pb-6">
              <h3 className="text-xl font-bold text-foreground">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
              <Button
                variant="link"
                className="p-0 h-auto font-semibold text-brand hover:text-brand/80 group/btn"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
