import { cn } from "@/lib/utils";
import Image from "next/image";
import { journeyMilestones } from "@/constants/data/home/journeyMilestones";

export function Journey() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
          Our Journey
        </h2>
        <p className="text-[#61896f] dark:text-white/60">
          Tracing our path from a humble beginning to a beacon of hope.
        </p>
      </div>

      <div className="relative py-6">
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-[#dbe6df] dark:bg-white/10 md:-translate-x-1/2" />

        <div className="space-y-6">
          {journeyMilestones.map((milestone, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start"
            >
              <div className="md:hidden flex gap-6 w-full">
                <div className="relative shrink-0">
                  <div className="size-4 rounded-full bg-[#54ec63] border-4 border-white mt-4 ml-[25px]" />
                </div>

                <div className="flex-1 pb-8 -mt-1.5 ml-[-15px]">
                  <div className="p-6 py-4 rounded-xl border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark">
                    <p className="text-[#54ec63] font-bold">{milestone.year}</p>
                    <h3 className="text-lg font-bold text-black/80 dark:text-white mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#61896f] dark:text-white/60 mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:w-full md:items-start">
                <div
                  className={cn("w-1/2", {
                    "pr-8 text-right": milestone.alignRight,
                    "order-2 pl-8": !milestone.alignRight,
                  })}
                >
                  <div className="p-6 py-4 -mt-1.5 rounded-xl border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark">
                    <p className="text-[#54ec63] font-bold">{milestone.year}</p>
                    <h3 className="text-lg font-bold text-black/80 dark:text-white mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#61896f] dark:text-white/60 mt-2">
                      {milestone.description}
                    </p>

                    {milestone.images && milestone.images.length > 0 && (
                      <div
                        className={`mt-4 grid ${
                          milestone.images.length === 1
                            ? "grid-cols-1"
                            : "grid-cols-2"
                        } gap-2`}
                      >
                        {milestone.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={cn(
                              "relative w-full rounded-lg overflow-hidden",
                              {
                                "aspect-video": milestone.images.length === 1,
                                "aspect-square": milestone.images.length > 1,
                              }
                            )}
                          >
                            <Image
                              src={img}
                              alt={`${milestone.title} image ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute left-1/2 top-4 size-4 rounded-full bg-[#54ec63] border-4 border-white -translate-x-1/2" />

                <div
                  className={cn("w-1/2", {
                    "pr-8": !milestone.alignRight,
                    "order-2 pl-8": milestone.alignRight,
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
