import Image from "next/image";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { achievements } from "@/constants/data/home/achievements";

export function Achievements() {
  return (
    <section className="mt-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black/80">Our Achievements</h2>
        <p className="text-[#61896f] dark:text-white/60">
          Milestones that mark our journey of impact
        </p>
      </div>

      <div className="mb-8 rounded-2xl bg-linear-to-r from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-400/50 shadow-md shadow-yellow-200/50 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/20 rounded-full -ml-12 -mb-12"></div>

        <div className="relative flex flex-col items-center gap-6">
          {/* Award Image */}
          <div className="w-full">
            <Image
              src="/images/award.jpg"
              alt="Nari Shakti Puraskar Award Ceremony"
              width={1200}
              height={400}
              className="w-full object-contain rounded-xl border-2 border-yellow-400/30"
            />
          </div>

          {/* Content */}
          <div className="flex items-center gap-4 flex-wrap md:flex-nowrap justify-center">
            <div className="shrink-0 w-16 h-16 rounded-full bg-linear-to-br from-yellow-100 to-orange-400 flex items-center justify-center">
              <Award className="h-8 w-8 text-yellow-900" strokeWidth={2.5} />
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold bg-linear-to-r from-yellow-700 via-orange-600 to-yellow-700 bg-clip-text text-transparent mb-1">
                Nari Shakti Puraskar Winner 2017
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-600">
                Anoyara Khatun received <b>She Award (2016)</b> and{" "}
                <b>Nari Shakti Puraskar (2017)</b>
              </p>
            </div>

            <div className="shrink-0 px-4 py-2 bg-yellow-400/30 border border-yellow-500/50 rounded-full">
              <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">
                National Honor
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-none text-center p-3 pb-8 gap-2"
          >
            <Image
              src={achievement.image}
              alt={achievement.title}
              width={1200}
              height={384}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <div className="w-full rounded-lg flex justify-center items-center">
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center -mt-14 border-4 border-white dark:border-background-dark",
                  achievement.iconBg
                )}
              >
                <achievement.icon className={cn(achievement.iconColor)} />
              </div>
            </div>

            <CardHeader className="w-full">
              <CardTitle className="font-bold text-[#22c55e]">
                {achievement.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-white/70 text-sm">
              {achievement.description}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-linear-to-r from-orange-50 via-orange-100 to-white border border-orange-300 shadow-sm p-4 space-y-1">
        <p className="text-lg font-semibold text-orange-700">
          International Recognition
        </p>
        <p className="text-sm text-gray-600 dark:text-white/70">
          Visit by Mr. Timothy J. Roemer, U.S. Ambassador to India, to learn
          about DSWS work
        </p>
      </div>
    </section>
  );
}
