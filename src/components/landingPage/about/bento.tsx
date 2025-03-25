"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "./globe";

export function BentoGridThirdDemo() {
  return (
    <>
      <h1 className="text-4xl md:text-7xl font-bold text-center mt-10 mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Technolgies I know
      </h1>
      <BentoGrid className="max-w-4xl mx-5 md:mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const SkeletonOne = () => {
  return (
    <>
      <section className="p-1">
        <h1 className=" font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-lg">
          Part 1
        </h1>
        <ul className="Flex flex-col items-start text-neutral-400 text-sm space-y-1">
          <span className="text-base my-1"> Technologies:</span>
          <li>
            <span className="px-1">&#x2022;</span>HTML, CSS, JS
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>React, Redux, Zustand
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Typescript
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Python, c++, JAVA - basics
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>MongoDB, PostgresQL, MySql
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Zod for input validation
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Mono Repo , Turbo Repo
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Docker
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Cloudflare Workers
          </li>
        </ul>
      </section>
    </>
  );
};
const SkeletonTwo = () => {
  return (
    <>
      <section className="p-1">
        <h1 className=" font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-lg">
          Part 2
        </h1>
        <ul className="Flex flex-col items-start text-neutral-400 text-sm space-y-1">
          <span className="text-base my-1"> Technologies:</span>
          <li>
            <span className="px-1">&#x2022;</span>Next JS
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Tailwind CSS, Bootstrap
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>UI - Aceternity
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Websockets
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Redis, Pubsubs, CI/CD
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Open API
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Web RTC, GRPC
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>kubernetes, Kafka
          </li>
          <li>
            {" "}
            <span className="px-1">&#x2022;</span>Zapier
          </li>
        </ul>
      </section>
    </>
  );
};

const SkeletonThree = () => {
  return (
    <div className="h-32 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent ">
      <Globe className="absolute  " />
    </div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border  flex flex-col items-center justify-center"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkRhv626uQIvdYA4chtARycRIOP_aV1-2kNlFfy3KMnPOt74dmkxsRhEgTAujj9k7vYo&usqp=CAU"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">
          The only relationship drama you need
        </p>
        <p className="border border-red-500 bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          PostgreSQL
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 border rounded-2xl  p-4 bg-black border-white/[0.1]  flex flex-col items-center justify-center">
        <img
          src="https://www.drupal.org/files/project-images/screenshot_361.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">
          Because writing CSS should be breezy
        </p>
        <p className="border border-green-500 bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Tailwind
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
      >
        <img
          src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-400 mt-4">
          Re-rendering made dramatic
        </p>
        <p className="border border-orange-500 bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          React
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/[0.2] p-2  items-start space-x-2 bg-black"
      >
        <img
          src="https://i0.wp.com/mkaion.com/wp-content/uploads/2017/07/shutterstock_128647328.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-400">
          What’s your tech stack, and what technologies have you been working
          with lately?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-black"
      >
        <p className="text-xs text-neutral-400">Secret Sauce 😉</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Based in India",
    description: (
      <span className="text-sm  text-neutral-400">
        You can hire me from anywhere around the world to work remotely.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-400" />,
  },
  {
    title: "Recommendation",
    description: (
      <span className="text-sm text-neutral-400">
        JS, TS, React, Vite, Tailwind, Zustand—speed meets style!
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-400" />,
  },

  {
    title: "Do you know ?",
    description: (
      <span className="text-sm  text-neutral-400">
        I process, create, and make the magic happen.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-400" />,
  },
];
