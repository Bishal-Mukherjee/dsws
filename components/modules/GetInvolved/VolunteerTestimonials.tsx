import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { VolunteerDialog } from "@/components/common";

const testimonials = [
  {
    quote:
      "Volunteering with DSWS has been an incredibly rewarding experience. Seeing the direct impact of my work on the community is something I'll cherish forever.",
    name: "Sarah L.",
    role: "Education Tutor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP_0Qt8wPDyZzpWo-_OZsWR5Nu6n6twK77TFYWZsn_Nz_uL1mjiODals0oACxF6YFc7qG4vYlCzc5mfP0V4PPlUKNKeVpwdI_HkMz2zPsl6mgKYvgWuB_u_i89fPFXZCEIpAmwQhmFVAgbcTX7ndJXAWc9BnIYPk9aUeHoxfcDipOhEajAo6Y_GqyrukBXSPaUdRxSSikrSpbkkqdjqUS2Af58OLOO_OcfqQBlvlioO0Kspdb4H3f9Bj9uico-i9BT1H2QdykUGMYd",
  },
  {
    quote:
      "The sense of community here is amazing. I've not only helped others but also grown so much as a person and made lifelong friends.",
    name: "Michael B.",
    role: "Community Health Advocate",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA06E67ziMFIyrwosgqxzYbEL3ewe51bUHVEQdCueKhR5SRziVzZQBhYpHxOrJ28H8t1FfEVwzpp0IPRuuGxErmFy_Gzw0Dqq_zeMeVfW3zd6zfjgN237Liv3kRpnaQ-jjnI8xHQ2MXTOB4R69t515oEQAGpN4dyUcZMjpH_QDP78vlWOD7_U0CKVLzTdSr0SLdm_pBDT0ePS8-g2Awc0eGR3qJVm2eI9CTONlHJikaoZxIO_Q1UuHhv88VI2mI4OZlfAkG7p8o3y3O",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <Card className="border border-border shadow-none p-6">
      <CardContent className="p-0 space-y-4">
        <p className="text-muted-foreground italic text-sm leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-foreground text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function VolunteerTestimonials() {
  return (
    <section className="mx-auto space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">
          Voices of Our Volunteers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>

      <section id="apply-for-volunteer">
        <div className="bg-brand/20 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black/80 dark:text-white">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your time and skills can change lives. Join our team of dedicated
              volunteers and be a part of something bigger than yourself.
            </p>
            <VolunteerDialog>
              <Button variant="primary" className="px-8 py-6 mt-4">
                Apply to be a Volunteer
              </Button>
            </VolunteerDialog>
          </div>
        </div>
      </section>
    </section>
  );
}
