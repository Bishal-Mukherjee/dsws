import { JSX } from "react";
import { GraduationCap, Venus, House, Hospital } from "lucide-react";

interface WorkItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    title: "Child Education",
    description:
      "Providing quality education and resources to underprivileged children.",
    icon: <GraduationCap />,
  },
  {
    title: "Women's Empowerment",
    description:
      "Fostering independence through skill development and support programs.",
    icon: <Venus />,
  },
  {
    title: "Rural Development",
    description:
      "Implementing sustainable projects to improve village infrastructure.",
    icon: <House />,
  },
  {
    title: "Health & Sanitation",
    description:
      "Promoting wellness and hygiene through community health initiatives.",
    icon: <Hospital />,
  },
];

interface ImpactStat {
  value: string;
  label: string;
}

const impactStats: ImpactStat[] = [
  {
    value: "10,000+",
    label: "Lives Touched",
  },
  {
    value: "50+",
    label: "Villages Supported",
  },
  {
    value: "200+",
    label: "Skill Programs Conducted",
  },
];

export function WorkAndImpact() {
  return (
    <section className="space-y-12">
      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
          Our Work
        </h2>
        <p className="text-[#61896f] dark:text-white/60">
          We are committed to uplifting communities through a multi-faceted
          approach.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-1 gap-4 rounded-xl border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark p-6 flex-col text-center items-center"
          >
            <div className="p-3 rounded-full bg-[#ddfbe0] text-primary">
              <span className="text-3xl text-[#54ec63]">{item.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-black/80 dark:text-white text-lg font-bold leading-tight">
                {item.title}
              </h3>
              <p className="text-[#61896f] dark:text-white/60 text-sm font-normal leading-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <h2 className="text-black/80 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
          Our Impact in Numbers
        </h2>
      </div>

      <div className="flex flex-wrap gap-6">
        {impactStats.map((stat, index) => (
          <div
            key={index}
            className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe6df] dark:border-white/10 bg-white dark:bg-background-dark text-center"
          >
            <p className="text-black/80 dark:text-white tracking-light text-4xl font-bold leading-tight">
              {stat.value}
            </p>
            <p className="text-[#61896f] dark:text-white/60 text-base font-medium leading-normal">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
