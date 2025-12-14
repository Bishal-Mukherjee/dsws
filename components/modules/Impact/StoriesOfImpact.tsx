"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/constants/data/impact/testimonials";
import { PartOfTheChange } from "@/components/modules/Impact/PartOfTheChange";

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

      <div className="relative w-full overflow-hidden min-h-[280px]">
        <Card className="max-w-4xl mx-auto border-none shadow-none bg-transparent mt-8">
          <CardContent className="flex flex-col items-center gap-4 px-12 py-6">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#61896f]/10 dark:bg-[#61896f]/20">
              <span className="text-sm font-medium text-center text-[#61896f] dark:text-gray-300">
                {currentTestimonial.project}
              </span>
            </div>
            <blockquote className="max-w-xl text-lg italic text-[#111813] dark:text-white text-center">
              &quot;{currentTestimonial.quote}&quot;
            </blockquote>
            <p className="font-bold text-[#111813] dark:text-white text-center">
              {currentTestimonial.name}&nbsp;
              <span className="font-normal text-[#61896f] dark:text-gray-400">
                -&nbsp;{currentTestimonial.role}
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
