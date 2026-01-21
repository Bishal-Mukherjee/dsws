import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/constants/data/about/teamMembers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="flex flex-col gap-0 items-center text-center p-4 py-8 rounded-xl border border-[#dbe6df] shadow-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            {member.image && (
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE_BUCKET}${member.image}`}
                alt={`Portrait of ${member.name}`}
                width={128}
                height={128}
                className="h-32 w-32 rounded-full object-cover bg-center mb-4 border-3 border-brand/50"
              />
            )}

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

      <section className="bg-brand/20 rounded-xl p-8 text-center mt-12">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-black/80 dark:text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em]">
            Join Us in Making a Difference
          </h2>
          <p className="text-black/80 dark:text-gray-200 text-base font-normal leading-normal max-w-xl">
            Your support can help us reach more communities and create lasting
            change. Whether you donate or volunteer, you are a vital part of our
            mission.
          </p>
          <Link href={"/get-involved"}>
            <Button
              variant={"outline"}
              className="px-10 py-6 bg-transparent border-black text-md hover:bg-black/5"
            >
              Get Involved
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
}
