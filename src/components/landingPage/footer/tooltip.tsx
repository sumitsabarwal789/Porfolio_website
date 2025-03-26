"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "GitHub",
    image: "/github.webp",
    href: "https://github.com/sumitsabarwal789?tab=repositories",
  },
  {
    id: 2,
    name: "Instagram",
    image:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/C5CC/production/_89663605_instagram_logo_976.jpg",
    href: "https://www.instagram.com/_sumit_sabarwal_?igsh=eTF5YzN3ZGx5MnY%3D&utm_source=qr",
  },
  {
    id: 3,
    name: "Gmail",
    image: "/gmail.jpg",
    href: "https://github.com/sumitsabarwal789?tab=repositories",
  },
  {
    id: 4,
    name: "Only Fans",
    image: "/onlyf.webp",
    href: "/onlyf",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
