"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileInView={{
        backgroundSize: "100% 100%",
      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
