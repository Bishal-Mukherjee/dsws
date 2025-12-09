import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ContributionDialog } from "@/components/common";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & President",
    description:
      "With over 20 years of experience in social work, Jane's vision is the driving force behind DSWS.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP_0Qt8wPDyZzpWo-_OZsWR5Nu6n6twK77TFYWZsn_Nz_uL1mjiODals0oACxF6YFc7qG4vYlCzc5mfP0V4PPlUKNKeVpwdI_HkMz2zPsl6mgKYvgWuB_u_i89fPFXZCEIpAmwQhmFVAgbcTX7ndJXAWc9BnIYPk9aUeHoxfcDipOhEajAo6Y_GqyrukBXSPaUdRxSSikrSpbkkqdjqUS2Af58OLOO_OcfqQBlvlioO0Kspdb4H3f9Bj9uico-i9BT1H2QdykUGMYd",
  },
  {
    name: "John Smith",
    role: "Director of Operations",
    description:
      "John ensures our projects run smoothly and efficiently, maximizing our impact on the ground.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALb8Y2_upFijFGI7wFP3ROr0mVEGOTihU5nkuJOTTy7K0a94Iiy_eIz6y187FDthIDVcGtHUBwoECK_ZbyVT1SYWOtlv8w77l4bRbaJJXaoW32U3QEDGD5Vd3lF7yxC7N6IGeGC-88R4FvDbqDPd1VhK83uVxs44bFpt9jtAX0NieeKAHEqh6vfZ7AuZRInJufJJN4KRMqZhewbEhPeb3Uw6nS4lUc1RvSWYxkIpxl_Gaka-wtzD39qqeIvZVjfI0W9qzHPmrBwXMk",
  },
  {
    name: "Emily Jones",
    role: "Program Manager",
    description:
      "Emily designs and oversees our educational and empowerment programs with dedication.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBO2iPK8hFIZDIe63p1iz4ZpmFtymsa2Kyz_LBEKX0e14KpjIP9nfYUmaHOKOFPfCACXgrhVq7HX2i0ud7x1oY0gN9n4WJLiUnnmidtGmpWam60kU-naDq8NRoJ8kk-DhmliCNjfJMnF0Hs50OFVEIFq9gA1uZfw-xAmwgFZIIR29ib21gAQyl55wZtyaQPemX-bc-gTFRs71BnRzmt637liC5QoQcLiMT0o58ud9X-uoHzYafPsZlunxosEi4tkCG_ERLXO6KKqAN1",
  },
  {
    name: "Michael Brown",
    role: "Community Outreach",
    description:
      "Michael is the bridge between DSWS and the communities we serve, building trust and relationships.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA06E67ziMFIyrwosgqxzYbEL3ewe51bUHVEQdCueKhR5SRziVzZQBhYpHxOrJ28H8t1FfEVwzpp0IPRuuGxErmFy_Gzw0Dqq_zeMeVfW3zd6zfjgN237Liv3kRpnaQ-jjnI8xHQ2MXTOB4R69t515oEQAGpN4dyUcZMjpH_QDP78vlWOD7_U0CKVLzTdSr0SLdm_pBDT0ePS8-g2Awc0eGR3qJVm2eI9CTONlHJikaoZxIO_Q1UuHhv88VI2mI4OZlfAkG7p8o3y3O",
  },
  {
    name: "Sarah Ahmed",
    role: "Health Coordinator",
    description:
      "A dedicated healthcare professional, Sarah leads our health initiatives and medical camps.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA06E67ziMFIyrwosgqxzYbEL3ewe51bUHVEQdCueKhR5SRziVzZQBhYpHxOrJ28H8t1FfEVwzpp0IPRuuGxErmFy_Gzw0Dqq_zeMeVfW3zd6zfjgN237Liv3kRpnaQ-jjnI8xHQ2MXTOB4R69t515oEQAGpN4dyUcZMjpH_QDP78vlWOD7_U0CKVLzTdSr0SLdm_pBDT0ePS8-g2Awc0eGR3qJVm2eI9CTONlHJikaoZxIO_Q1UuHhv88VI2mI4OZlfAkG7p8o3y3O",
  },
  {
    name: "David Chen",
    role: "Finance Officer",
    description:
      "David manages our finances with transparency and integrity, ensuring every donation counts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA06E67ziMFIyrwosgqxzYbEL3ewe51bUHVEQdCueKhR5SRziVzZQBhYpHxOrJ28H8t1FfEVwzpp0IPRuuGxErmFy_Gzw0Dqq_zeMeVfW3zd6zfjgN237Liv3kRpnaQ-jjnI8xHQ2MXTOB4R69t515oEQAGpN4dyUcZMjpH_QDP78vlWOD7_U0CKVLzTdSr0SLdm_pBDT0ePS8-g2Awc0eGR3qJVm2eI9CTONlHJikaoZxIO_Q1UuHhv88VI2mI4OZlfAkG7p8o3y3O",
  },
];

export function MeetOurTeam() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">
          Meet Our Team
        </h2>
        <p className="text-[#61896f] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto mt-2">
          We are a group of dedicated individuals passionate about making a
          difference. Our team&apos;s diverse skills and unwavering commitment
          drive our mission forward.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="flex flex-col gap-0 items-center text-center p-4 py-8 rounded-xl border border-[#dbe6df] shadow-none"
          >
            <Image
              src={member.image}
              alt={`Portrait of ${member.name}`}
              width={128}
              height={128}
              className="rounded-full object-cover mb-4 border-3 border-brand/50"
            />
            <CardHeader className="w-full">
              <CardTitle className="text-lg font-bold text-black/80 dark:text-white">
                {member.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm text-[#61896f] dark:text-gray-400 -mt-2">
              <p>{member.role}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {member.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-brand/20 rounded-xl p-8 md:p-12 text-center mt-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-black/80 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
            Join Us in Making a Difference
          </h2>
          <p className="text-black/80 dark:text-gray-200 text-base font-normal leading-normal max-w-xl">
            Your support can help us reach more communities and create lasting
            change. Whether you donate or volunteer, you are a vital part of our
            mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <ContributionDialog>
              <Button variant={"primary"} className="border px-7 py-5">
                Donate Now
              </Button>
            </ContributionDialog>
            <Link href={"/get-involved"}>
              <Button
                variant={"outline"}
                className="px-7 py-5 bg-transparent border-black text-md hover:bg-black/5"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
