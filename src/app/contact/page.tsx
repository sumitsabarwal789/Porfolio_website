"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { SignupFormDemo } from "@/components/Form";

export default function Contact() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg mt-1">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className={cn(" text-white relative z-20 ")}>
        <h1 className="text-4xl  font-bold text-center  mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Send Message
        </h1>
        <div className="">
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
}
