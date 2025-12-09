import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Education for All",
    description:
      "Providing access to quality education and learning resources for underprivileged children.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOU2_av-RtbzksCm-8S-mtOunBO4KTX8sWlC5aMMjnVkNsCxjCnj_3_KTWkz_LSEp5-GN1Y81zCvZDGxKAB1ijiErSQVs4KdTtFALJjnO0PrpCMuKrDx635IMyiUVsaVPx403Uar6TEoq_78wS66Qu5Ko3acmdXtK_Co4JwN5gVZN5HWNRNQQOHHtilGo8QiAYYVrD1MYopwt3xGaYnr1vWXdKotd5hQiTqezRSe04A8PXeGuSgbrwH87I4nAvS1co70ntLcKSMJEP",
    link: "/programs/education",
  },
  {
    title: "Women Empowerment",
    description:
      "Empowering women with skills, confidence, and opportunities for economic independence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmy0Qa58juFW-RUimRPkHcLPdm9X9-FlP_rIcp4KQRmsMd4-S3b2y0lr9zdVQQg75bSa3jcky8CWDRULI-sSLs-pSp89e9pROwTW3Fo8o748Use_l-cZt3zYoupjmXZDr5bYMpq8B15LXcvaco6uiiMth9RuMB2oLsdaNjXitVTF9PYGGExwTFPIMhKKxl22jYPnvbUNeYuSOmBda7zbCRppmWYU_tTsQx1BaMLy7DTp0rGWJ0SfjoAjxgOxeDjGJd7Pg38_sRejFQ",
    link: "/programs/women-empowerment",
  },
  {
    title: "Rural Development",
    description:
      "Implementing sustainable projects to improve infrastructure and livelihoods in rural areas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9b2foQVtPlUjI6JTwX_CAFT9lR6tGSJffU7SDY5y-RiU1siCxW-7QNgbcDWCTgAIhZ4ejU0ksH98xD9CQM6s3USng8yEv6KZ0lh_LNeiSo57PkGic5one1QewJkOcuYRmoGNmCcTVCe4jOTctDqQlKXy_KmMi9Jrw29jR4wqHAKH4Yu1bKYaqGfhqwGlCfTsV1n0WykrfknV5bx5YvUEhOIcOeNPoy7-SUJJciPL_jmofmobMGS3rNVs27o6iAcctgtw4Ce56JpwE",
    link: "/programs/rural-development",
  },
  {
    title: "Social Welfare",
    description:
      "Offering essential support and services to the most vulnerable members of our community.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcIeM9MR9Gy9izUIIRy2psDjBMRbMvdnmMClEy5cAH2-XdMiSuBZ1eMrNS1EeZ8rBpf6Nr7VI67DgYsW0HsZ99PfE56yqxkezdosEjcjBAjhFLu7MSW-tc5gnMvjiN_1NUENJPhT-Ij3Mc_jcE3ViON3RN3fbJEyrt8Uqxk7dik0DO3HLqC1CQBGDIw7EH5g-Oe0llJ0WwBdrU-bPnRJEF823420byGEA2EnEuh4VhK5TXdkmhjsyR14kkK7xejXUCd6xkiOng8HZa",
    link: "/programs/social-welfare",
  },
];

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
