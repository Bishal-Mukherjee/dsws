"use client";

import {
  organizationMedia,
  showcaseImages,
} from "@/constants/data/about/multimedia";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, Clock } from "lucide-react";
import { useState } from "react";

export function MediaShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full space-y-16 flex flex-col items-center justify-center">
      {organizationMedia.map((section) => (
        <div key={section.id} className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {section.subtitle}
              </p>
            )}
          </div>

          {/* Media Items Grid */}
          <div>
            {section.items.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden shadow-none max-w-2xl p-0"
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {activeVideo === `${section.id}-${index}` ? (
                    <iframe
                      src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}${item.source}`}
                      title={item.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      {/* Thumbnail with Play Button Overlay */}
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setActiveVideo(`${section.id}-${index}`)}
                      >
                        {/* Thumbnail image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}${item.thumbnail}`}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Dark overlay for play button legibility */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white shadow-lg">
                            <Play className="w-8 h-8 text-brand fill-brand ml-1" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        {item.duration && (
                          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <CardContent className="px-6 pb-4 space-y-3">
                  {/* Type Badge */}
                  <div className="flex items-center gap-2">
                    {item.type && (
                      <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
                        {item.type
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    )}

                    {item.date && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* ── Photo Gallery ── */}
      <div className="w-full space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Moments captured from our programs and community events
          </p>
        </div>

        {/* 2-col on md+, single col on sm — orphan item auto-centres */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {showcaseImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-md w-full md:w-[calc(50%-12px)]"
            >
              {/* Image */}
              <div className="relative aspect-[5/3] overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  //   src={image.src}
                  src={`${process.env.NEXT_PUBLIC_AWS_S3_URL}${image.src}`}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <span className="text-white font-semibold text-sm">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
