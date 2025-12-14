"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartOfTheChange } from "@/components/modules/Impact/PartOfTheChange";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rina Devi",
    role: "Entrepreneur",
    quote:
      "DSWS gave me the skills and confidence to start my own tailoring business. I am now financially independent and can support my family. It has changed my life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLrHi7poReHnw0U91nBDmFs1z49tHeleHGWQ71JKexltTjC0wF_bu_pQRt7WK1AHqYL88fAGx16G6ZZmi3HtDz-H9NVWk1jgkdC7LEVDcHmd_qBrvIZKBUQy07T6pHoS-s0GokOSSkcvaQhQCyBW9-2nAYucbjUxqs2quVc1xjLDn9C2GhW--P4d0CqiCHdBnWHWBNlFFN9CZMPe1RjIgs8U0UtcqU1FrbMekb_1pnpCBrNEUFHNlgssgVx9XvsWQkABEc4ydY3lt",
  },
  {
    name: "Amit Kumar",
    role: "Farmer",
    quote:
      "Thanks to DSWS, I learned modern farming techniques that have doubled my crop yield. My family and I are now living a better life.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLrHi7poReHnw0U91nBDmFs1z49tHeleHGWQ71JKexltTjC0wF_bu_pQRt7WK1AHqYL88fAGx16G6ZZmi3HtDz-H9NVWk1jgkdC7LEVDcHmd_qBrvIZKBUQy07T6pHoS-s0GokOSSkcvaQhQCyBW9-2nAYucbjUxqs2quVc1xjLDn9C2GhW--P4d0CqiCHdBnWHWBNlFFN9CZMPe1RjIgs8U0UtcqU1FrbMekb_1pnpCBrNEUFHNlgssgVx9XvsWQkABEc4ydY3lt",
  },
  {
    name: "Sita Sharma",
    role: "Teacher",
    quote:
      "The training programs by DSWS have helped me become a better educator. I can now make a bigger impact on my students' lives.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLrHi7poReHnw0U91nBDmFs1z49tHeleHGWQ71JKexltTjC0wF_bu_pQRt7WK1AHqYL88fAGx16G6ZZmi3HtDz-H9NVWk1jgkdC7LEVDcHmd_qBrvIZKBUQy07T6pHoS-s0GokOSSkcvaQhQCyBW9-2nAYucbjUxqs2quVc1xjLDn9C2GhW--P4d0CqiCHdBnWHWBNlFFN9CZMPe1RjIgs8U0UtcqU1FrbMekb_1pnpCBrNEUFHNlgssgVx9XvsWQkABEc4ydY3lt",
  },
  {
    name: "Rajesh Singh",
    role: "Shop Owner",
    quote:
      "With the support of DSWS, I was able to expand my small shop into a thriving business. I am forever grateful for their guidance.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLrHi7poReHnw0U91nBDmFs1z49tHeleHGWQ71JKexltTjC0wF_bu_pQRt7WK1AHqYL88fAGx16G6ZZmi3HtDz-H9NVWk1jgkdC7LEVDcHmd_qBrvIZKBUQy07T6pHoS-s0GokOSSkcvaQhQCyBW9-2nAYucbjUxqs2quVc1xjLDn9C2GhW--P4d0CqiCHdBnWHWBNlFFN9CZMPe1RjIgs8U0UtcqU1FrbMekb_1pnpCBrNEUFHNlgssgVx9XvsWQkABEc4ydY3lt",
  },
  {
    name: "Pooja Verma",
    role: "Social Worker",
    quote:
      "DSWS has empowered me to bring positive change to my community. Together, we are making a difference in people's lives.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLrHi7poReHnw0U91nBDmFs1z49tHeleHGWQ71JKexltTjC0wF_bu_pQRt7WK1AHqYL88fAGx16G6ZZmi3HtDz-H9NVWk1jgkdC7LEVDcHmd_qBrvIZKBUQy07T6pHoS-s0GokOSSkcvaQhQCyBW9-2nAYucbjUxqs2quVc1xjLDn9C2GhW--P4d0CqiCHdBnWHWBNlFFN9CZMPe1RjIgs8U0UtcqU1FrbMekb_1pnpCBrNEUFHNlgssgVx9XvsWQkABEc4ydY3lt",
  },
  {
    name: "Anil Mehta",
    role: "Student",
    quote:
      "The scholarship I received from DSWS has allowed me to pursue my education without financial worries. I am now closer to achieving my dreams.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXLrHi7poReHnw0U91nBDmFs1z49tHeleHGWQ71JKexltTjC0wF_bu_pQRt7WK1AHqYL88fAGx16G6ZZmi3HtDz-H9NVWk1jgkdC7LEVDcHmd_qBrvIZKBUQy07T6pHoS-s0GokOSSkcvaQhQCyBW9-2nAYucbjUxqs2quVc1xjLDn9C2GhW--P4d0CqiCHdBnWHWBNlFFN9CZMPe1RjIgs8U0UtcqU1FrbMekb_1pnpCBrNEUFHNlgssgVx9XvsWQkABEc4ydY3lt",
  },
];

export function StoriesOfHope({ showPartOfTheChange = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-[#111813] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-3">
          Stories of Hope
        </h2>
        <p className="text-[#61896f] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl mx-auto">
          Hear directly from the people whose lives have been changed through
          your support and our dedicated work.
        </p>
      </div>

      <div className="relative w-full overflow-hidden min-h-[350px]">
        <Card className="max-w-4xl mx-auto border-none shadow-none bg-transparent">
          <CardContent className="flex flex-col items-center gap-4 px-12 py-6">
            <div className="relative h-24 w-24">
              <Image
                src={currentTestimonial.image}
                alt={`Portrait of ${currentTestimonial.name}`}
                className="rounded-full object-cover"
                fill
                sizes="96px"
              />
            </div>
            <blockquote className="max-w-xl text-lg italic text-[#111813] dark:text-white text-center">
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>
            <p className="font-bold text-[#111813] dark:text-white">
              {currentTestimonial.name}{" "}
              <span className="font-normal text-[#61896f] dark:text-gray-400">
                - {currentTestimonial.role}
              </span>
            </p>
          </CardContent>
        </Card>

        {testimonials.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="rounded-full hover:bg-black/10 dark:hover:bg-white/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="rounded-full hover:bg-black/10 dark:hover:bg-white/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </>
        )}
      </div>

      {showPartOfTheChange && <PartOfTheChange />}
    </section>
  );
}
