import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GraduationCap,
  Lightbulb,
  HeartPulse,
  CheckCircle2,
} from "lucide-react";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Teach a Child",
    description:
      "Become an education tutor and help children from underprivileged backgrounds unlock their full potential.",
  },
  {
    icon: Lightbulb,
    title: "Empower Women",
    description:
      "Mentor women in skill-building workshops, helping them achieve financial independence and confidence.",
  },
  {
    icon: HeartPulse,
    title: "Community Health",
    description:
      "Join our health advocates in raising awareness and providing essential health services in rural areas.",
  },
];

const steps = [
  {
    step: "1",
    title: "Fill Out The Form",
    description:
      "Submit our simple online application to tell us about yourself and your interests.",
  },
  {
    step: "2",
    title: "Interview & Screening",
    description:
      "We'll have a short chat to get to know you better and find the perfect role for you.",
  },
  {
    step: "3",
    title: "Onboarding & Training",
    description:
      "Receive all the necessary training and support to start making a difference with confidence.",
  },
];

const requirements = [
  "Must be 18 years or older.",
  "Minimum commitment of 4 hours per week.",
  "A passion for social change and community work.",
  "Willingness to learn and collaborate with a diverse team.",
];

function OpportunityCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="border border-border shadow-none gap-1">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-2">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-lg font-bold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}

export function VolunteerOpportunities() {
  return (
    <section className="mx-auto space-y-16">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Volunteer Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={index}
              icon={opportunity.icon}
              title={opportunity.title}
              description={opportunity.description}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Volunteer Requirements
          </h2>
          <div className="space-y-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
