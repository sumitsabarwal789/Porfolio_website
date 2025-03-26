"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full min-w-[22rem] md:min-w-[28rem]  bg-black p-4 rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-400 ">Want to hire me</h2>
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2  md:space-y-0 ">
          <LabelInputContainer className="mb-4 space-y-3">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 space-y-3">
            <Label htmlFor="firstname">Your Message</Label>
            <Input
              id="firstname"
              placeholder="Write your message"
              type="text"
            />
          </LabelInputContainer>
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex space-x-5 justify-center">
          <IconBrandGithub className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-indigo-400" />
          <BottomGradient />
          <IconBrandGoogle className="h-6 w-6  text-neutral-400 hover:scale-110 hover:text-indigo-400" />
          <BottomGradient />
          <IconBrandOnlyfans className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-indigo-400" />
          <BottomGradient />
          <IconBrandInstagram className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-indigo-400" />
          <BottomGradient />
        </div>
      </form>
    </div>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
