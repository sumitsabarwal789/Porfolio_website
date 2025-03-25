"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { MeteorsDemo } from "./meteor";
import { CodeBlockDemo } from "./codeblock";

export function SpotlightNewDemo() {
  return (
    <>
      <h1 className="text-4xl md:text-7xl font-bold text-center mt-12 mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        About Me
      </h1>
      <div className="relative h-full w-full flex md:flex-col lg:flex-row items-center justify-between bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden px-20 space-x-5 md:space-y-6 lg:space-y-0 py-10">
        {/* Spotlight effect covering the entire section */}
        <Spotlight className="absolute inset-0" />

        {/* Code Block on Medium Screens & Up */}
        <div className="hidden md:inline">
          <CodeBlockDemo />
        </div>

        {/* Meteor Effects */}
        <div className="flex flex-col md:flex-row lg:flex-col space-y-2 md:space-y-0 lg:space-y-2 md:space-x-6 lg:space-x-0">
          <MeteorsDemo />
          <MeteorsDemo />
        </div>
      </div>
    </>
  );
}
