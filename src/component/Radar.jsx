// Radar.jsx
"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Circle Component
const Circle = ({ className, idx, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10  -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-neutral-200",
        className
      )}
    />
  );
};

// IconContainer Component
// IconContainer Component
const IconContainer = ({ icon, text, link, delay }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: delay || 0 }}
        className={twMerge("relative z-50 flex flex-col items-center justify-center space-y-2")}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl">
            {icon}
          </div>
        </a>
        <div className="hidden rounded-md px-2 py-1 md:block">
          <div className="text-center text-xs font-bold text-slate-400">
            {text || `Web Development`}
          </div>
        </div>
      </motion.div>
    );
  };
  
// Radar Component
// Radar Component
// Radar Component
const Radar = ({ className, iconData }) => {
    const circles = new Array(8).fill(1);
  
    return (
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        {/* Radar Visual */}
        <div className={twMerge("relative flex h-20 w-20 items-center justify-center rounded-full", className)}>
          <div
            style={{ transformOrigin: "right center" }}
            className="absolute right-1/2 top-1/2 z-40 flex h-[5px] overflow-hidden animate-radar-spin w-[400px] items-end justify-center bg-transparent"
          >
            <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent" />
          </div>
          {circles.map((circle, idx) => (
            <Circle
              style={{
                height: `${(idx + 1) * 5}rem`,
                width: `${(idx + 1) * 5}rem`,
                border: `1px solid rgba(71, 85, 105, ${1 - (idx + 1) * 0.1})`,
              }}
              key={`motion-${idx}`}
              idx={idx}
            />
          ))}
        </div>
  
        {/* Display Icon Data */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            {iconData.slice(0, 3).map((icon, idx) => (
              <IconContainer key={idx} text={icon.text} link={icon.link} icon={icon.icon} delay={icon.delay} />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            {iconData.slice(3, 5).map((icon, idx) => (
              <IconContainer key={idx} text={icon.text} link={icon.link} icon={icon.icon} delay={icon.delay} />
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            {iconData.slice(5, 7).map((icon, idx) => (
              <IconContainer key={idx} text={icon.text} link={icon.link} icon={icon.icon} delay={icon.delay} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    );
  };
  
  

export default Radar;
