import { BottomGradient } from "@/components/Form";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" rounded-lg shadow-sm bg-black md:mx-5">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row justify-center md:justify-between space-y-2 md:space-y-0">
          <div className="flex md:hidden space-x-5 justify-center">
            <a href="https://github.com/sumitsabarwal789?tab=repositories">
              <IconBrandGithub className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />

            <a href="https://www.instagram.com/_sumit_sabarwal_?igsh=eTF5YzN3ZGx5MnY%3D&utm_source=qr">
              <IconBrandInstagram className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />

            <a href="https://github.com/sumitsabarwal789?tab=repositories">
              <IconBrandGoogle className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />

            <a href="https://github.com/sumitsabarwal789?tab=repositories">
              <IconBrandOnlyfans className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />
          </div>
          <div className="text-base  sm:text-center text-neutral-400 flex justify-center">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              SumitSingh™
            </a>
            . All Rights Reserved.
          </div>
          <div className="hidden md:flex space-x-5 justify-center">
            <a href="https://github.com/sumitsabarwal789?tab=repositories">
              <IconBrandGithub className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />

            <a href="https://www.instagram.com/_sumit_sabarwal_?igsh=eTF5YzN3ZGx5MnY%3D&utm_source=qr">
              <IconBrandInstagram className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />

            <a href="https://github.com/sumitsabarwal789?tab=repositories">
              <IconBrandGoogle className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />

            <a href="https://github.com/sumitsabarwal789?tab=repositories">
              <IconBrandOnlyfans className="h-6 w-6 text-neutral-400 hover:scale-110 hover:text-slate-600" />
            </a>
            <BottomGradient />
          </div>
        </div>
      </footer>
    </>
  );
}
