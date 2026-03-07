import { Card } from "@/components/ui/card";
import { Focus, Wrench, Award, Shield } from "lucide-react";
import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="flex flex-col items-center gap-10 md:gap-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-md font-bold tracking-widest uppercase">
          About Us
        </h2>
        <p className="text-[#61896f] dark:text-gray-400 text-base font-normal leading-normal max-w-3xl mx-auto">
          Dhagagia Social Welfare Society (DSWS) was established in 1994,
          dedicated to promoting social justice and empowering marginalized
          communities across West Bengal.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        <div className="relative w-full h-[400px]">
          <Image
            fill
            className="rounded-xl object-cover bg-center"
            alt="A group of children participating in a DSWS event, holding signs and smiling."
            src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}/media/gallery/isi7jusinqt6iqa0w28f.jpg`}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-6">
            <div className="text-brand mt-1">
              <Focus />
            </div>
            <div>
              <h3 className="text-black/80 dark:text-white text-lg font-bold leading-tight">
                Our Focus
              </h3>
              <p className="text-[#61896f] dark:text-gray-400 text-base font-normal leading-normal">
                Working with poor and marginalized sections, especially women
                and children, focusing on their rights and livelihood security.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="text-brand mt-1">
              <Wrench />
            </div>
            <div>
              <h3 className="text-black/80 dark:text-white text-lg font-bold leading-tight">
                Our Approach
              </h3>
              <p className="text-[#61896f] dark:text-gray-400 text-base font-normal leading-normal">
                Promoting participatory development, sustainable practices, and
                community-driven solutions for lasting social change.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card className="w-full p-8 px-0 bg-transparent dark:bg-gray-900 border-none shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="flex flex-col items-center gap-1 md:col-span-2 justify-center mb-4">
            <div className="p-2 rounded-lg">
              <Award className="w-10 h-10 text-yellow-500" />
            </div>
            <h2 className="text-primary text-xl font-bold">
              Legal Registrations
            </h2>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-100">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <p className="text-[#61896f] dark:text-gray-400 text-base">
              West Bengal Society Registration Act XXVI of 1961
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-100">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <p className="text-[#61896f] dark:text-gray-400 text-base">
              Ministry of Corporate Affairs, Govt. of India
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-100">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <p className="text-[#61896f] dark:text-gray-400 text-base">
              Foreign Contribution (Regulation) Act, 1976
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-100">
            <Shield className="w-5 h-5 text-primary mt-0.5" />
            <p className="text-[#61896f] dark:text-gray-400 text-base">
              Section 12AA and 80G of the Income Tax Act, 1961
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};
