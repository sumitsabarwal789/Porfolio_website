"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx"; // Optional: For cleaner class merging

type SpotlightProps = {
  className?: string;
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: string;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  className = "",
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = "100vh",
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={clsx(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
    >
      {["left-0", "right-0"].map((position, index) => (
        <motion.div
          key={position}
          animate={{ x: [0, index === 0 ? xOffset : -xOffset, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className={`absolute top-0 ${position} w-screen h-screen z-40 pointer-events-none`}
        >
          {[gradientFirst, gradientSecond, gradientThird].map(
            (gradient, idx) => (
              <div
                key={idx}
                style={{
                  transform: `translateY(${translateY}px) rotate(${
                    index === 0 ? "-45deg" : "45deg"
                  })`,
                  background: gradient,
                  width: `${idx === 0 ? width : smallWidth}px`,
                  height,
                }}
                className={`absolute top-0 ${position}`}
              />
            )
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
