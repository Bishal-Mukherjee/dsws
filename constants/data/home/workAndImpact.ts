import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  GraduationCap,
  Venus,
  House,
  Hospital,
  LucideProps,
} from "lucide-react";

interface WorkItem {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

export const workItems: WorkItem[] = [
  {
    title: "Child Education & Protection",
    description:
      "Keeping vulnerable children in school through support, care, and learning spaces.",
    icon: GraduationCap,
  },
  {
    title: "Women's Empowerment & Livelihoods",
    description:
      "Strengthening livelihoods and leadership through self-help groups and skills.",
    icon: Venus,
  },
  {
    title: "Climate Resilience & Rural Livelihoods",
    description:
      "Building climate-resilient livelihoods across agriculture and natural resources.",
    icon: House,
  },
  {
    title: "Health, Sanitation & Emergency Response",
    description:
      "Improving health, hygiene, and access to essential services in remote areas.",
    icon: Hospital,
  },
];

export const impactStats: ImpactStat[] = [
  {
    value: "10,000+",
    label: "Children Reintegrated into Schools",
  },
  {
    value: "5M+",
    label: "Mangrove Trees Planted",
  },
  {
    value: "2,000+",
    label: "Women Enabled with Sustainable Livelihoods",
  },
  {
    value: "200+",
    label: "Villages Reached Across the Sundarbans",
  },
  {
    value: "20,000+",
    label: "Children Rescued and Rehabilitated",
  },
  {
    value: "50+",
    label: "Farmers Using Solar Irrigation for Climate-Smart Agriculture",
  },
];
