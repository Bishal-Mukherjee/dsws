import Image from "next/image";
import { Medal, Trees, Users, TrendingUp } from "lucide-react";
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
