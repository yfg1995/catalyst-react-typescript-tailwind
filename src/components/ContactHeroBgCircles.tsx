"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { useSegmentPath } from "@/context/SegmentPathContext";

export interface IContactHeroBgCircles {}

export const ContactHeroBgCircles: FC<IContactHeroBgCircles> = () => {
  const { firstSegment } = useSegmentPath();

  const borderClrLeftCircle =
    firstSegment === "oncology-cro"
      ? "var(--clr-salmon)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-gold)"
      : "var(--clr-gold)";

  const borderClrRightCircle =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-salmon)";

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.65 }}
        className="absolute top-0 left-0 w-[316px] -translate-x-1/2 -translate-y-1/2 aspect-square"
      >
        <div
          className="h-full w-full rounded-full border-[50px]"
          style={{ borderColor: borderClrLeftCircle }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.85 }}
        className="absolute top-full left-full w-[430px] -translate-x-1/2 -translate-y-1/2 aspect-square"
      >
        <div
          className="h-full w-full rounded-full border-[50px]"
          style={{ borderColor: borderClrRightCircle }}
        />
      </motion.div>
    </>
  );
};
