import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" rounded-lg shadow-sm bg-black">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-base  sm:text-center text-neutral-400 flex justify-center">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              SumitSingh™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
