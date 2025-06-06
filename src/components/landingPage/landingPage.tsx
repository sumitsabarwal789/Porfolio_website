"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Button from "../ui/button";
import { LampDemo } from "./lamp";
import { CardsSection } from "./cardSection";
import { SpotlightNewDemo } from "./about/spotlightbg";
import { BentoGridThirdDemo } from "./about/bento";
import Footer from "./footer/footer";

export function LandingPage() {
  return (
    <>
      <div className="w-screen mx-auto rounded-md h-[40rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex flex-col items-center justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Code, learn, innovate, repeat!
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Every great software starts as an idea. Keep coding, learning, and
            building—the world runs on your solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button text="Projects" />
          </div>
        </Vortex>
      </div>

      <div className="projects lg:mt-36" id="projects">
        <LampDemo />
        <div className="flex flex-col lg:flex-row justify-center mx-2 lg:space-x-8">
          <CardsSection
            img="/PMC.png"
            heading="PrintMyCase.com"
            description="Capture your favourite memories with your own one-of-one phone case. PrintMyCase allows you to protect your memories, not just your phone case."
            url="https://print-my-case.vercel.app/"
          />
          <CardsSection
            img="/DOC.jpg"
            heading="DocBook.com"
            description="Busy? No Problem. Our business is transforming healthcare accessibility by offering seamless online doctor consultations."
            url="https://docbook-frontend-bkvm.onrender.com"
          />
        </div>
      </div>

      <section className="mt-20">
        <BentoGridThirdDemo />
        <SpotlightNewDemo />
        <Footer />
      </section>
    </>
  );
}
