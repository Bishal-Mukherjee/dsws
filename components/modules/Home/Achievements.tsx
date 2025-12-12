import Image from "next/image";
import { Medal, Trees, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const achievements = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeU4BUXwk9Wp9--qUB0xvtmua2XeJzaF87dhHn2gSO9GpeL75CB6sylNhyQkWqRhWu-1LRpaksDbDXTyTM70jCeOAvf7qLMo8u-qzN65cVYprnBHcKqcWm0AS_bQNNdqup-MrCE6SO60Lzj_zNGbWeJaSCqCGHi4s6rQ9YXpylKdZMy1e6BfhjHqHkuetvtQlX3Wb59Vi2wAMmC7z8Lyl8Xb6OwjEyvdD2Dx-QtuP2akeDjzrqBhVjOnupcifpQlVc2C2q12zLs39x",
    icon: <Medal />,
    iconColor: "text-yellow-900",
    iconBg: "bg-yellow-400",
    title: "National Recognition",
    description:
      "Anoyara Khatun received Nari Shakti Puraskar from President of India (2017)",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIP1K_KSiybIPVDaZRBiSk4MXGwqbvGet5IIvIT6CLRATJFXxJFwQ-mA8SLFLHTgDFcfhY-oWInw-45w1W76ZlRu7255m4aG-s9GR_ewJse5GhB9d-35aDO1xouHKpl3L070eDiQWbLYJcCEM4M-izh6UZ5MgvGN9eFmeFUyGfI-3I0B-Wu69BiHybcDw0E17JgLoLCauR-Wm3qhxulxEWWKHBXJD33s-sa20DCUlMPVkoyVZmvIupOIE6TTNFePee9YNsTuwYb0n-",
    icon: <Trees />,
    iconColor: "text-green-900",
    iconBg: "bg-green-500",
    title: "12 Lakh Trees Planted",
    description: "Mangrove saplings planted in Sundarban by women artisans",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFxTXffwTHVp0l7KQ17McTQsqWYfi52yM9DCYRd84wjZDSwrmaCjWqJSI_LcmRjaxXDp-pzc1j6HIeLDNG6AFIUP5Cuy66k60o91wE_T-JpqWSu8wuD2YfhPzg2etlGjWtDR4j-u3imdCQFrjX47e_BOMeT-P3MlciUtEJ0npe9mxS1_9UAqof78Xzu8cKk4E1N1EhKy4NnaTdTEUS8shYGmvhbee2mkvpM9N5uWt-I0IcqeA6LJvIsyU-J-wloWBj50WPRwUZl_Cv",
    icon: <Users />,
    iconColor: "text-cyan-900",
    iconBg: "bg-cyan-500",
    title: "775+ Women Artisans",
    description: "Engaged in handicrafts, agriculture, knitting & accessories",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDoHP0MjNJ7rXbrlnBDgNt8c7G4cNcZTIqXhSqbIJW1GaK5967pLjGR5f_834cSSYmWGdRsyCKtHomuJCIcZ7NGRIXGsDRt-Bz7lG2iObvFtg4KdGAIEncYL8TIv115wZm5KVbUkCU06ZANRUPuJV2_LQWUI9DM-O8TeSDkpikImuFrKXMUQA1RS1FaVak92PL0vWt8FW-GbCOQDzsj4620yhsE2wJw2Jq9F1ueNLtwucO8WYtW9u8qnU-ffKccIjk1JLoRXyOY_OGy",
    icon: <TrendingUp />,
    iconColor: "text-orange-900",
    iconBg: "bg-orange-500",
    title: "Financial Growth",
    description: "Turnover reaching ₹1.53 Cr in 2019-20",
  },
];

export function Achievements() {
  return (
    <section className="mt-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black/80">Our Achievements</h2>
        <p className="text-[#61896f] dark:text-white/60">
          Milestones that mark our journey of impact
        </p>
      </div>

      <div className="mb-8 rounded-2xl bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-400/50 shadow-md shadow-yellow-200/50 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/20 rounded-full -ml-12 -mb-12"></div>

        <div className="relative flex items-center gap-6 justify-center flex-wrap md:flex-nowrap">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-100 to-orange-400 flex items-center justify-center">
            <Award className="h-8 w-8 text-yellow-900" strokeWidth={2.5} />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-700 via-orange-600 to-yellow-700 bg-clip-text text-transparent mb-1">
              Nari Shakti Puraskar Winner 2017
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-600">
              Prestigious national award conferred by the President of India for
              women's empowerment
            </p>
          </div>

          <div className="flex-shrink-0 px-4 py-2 bg-yellow-400/30 border border-yellow-500/50 rounded-full">
            <span className="text-xs font-bold text-yellow-800 uppercase tracking-wider">
              National Honor
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
              className="w-full h-32 object-cover rounded-xl mb-4"
            />

            <div className="w-full rounded-lg flex justify-center items-center">
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center -mt-14 border-4 border-white dark:border-background-dark",
                  achievement.iconBg
                )}
              >
                <span className={cn(achievement.iconColor)}>
                  {achievement.icon}
                </span>
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
