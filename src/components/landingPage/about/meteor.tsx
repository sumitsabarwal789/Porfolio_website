import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { useRouter } from "next/navigation";

interface Values {
  heading: string;
  description: string;
}

export function MeteorsDemo({ heading, description }: Values) {
  const router = useRouter();
  return (
    <div className="">
      <div className="relative w-full max-w-xl h-[249px]">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl " />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-lg font-bold text-white">
            {heading}
          </h1>

          <p className="relative z-50 mb-4 text-sm font-normal text-slate-500">
            {description}
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="rounded-lg border border-gray-500 hover:border-gray-700 px-4 py-1 text-sm text-gray-300"
          >
            Contact
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
