"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { useSegmentPath } from "@/context/SegmentPathContext";

export interface IOncologyFlexHeroBgCircles {}

export const OncologyFlexHeroBgCircles: FC<IOncologyFlexHeroBgCircles> = () => {
  const { firstSegment } = useSegmentPath();

  const borderClrCircle =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-gold)";

  return (
    <>
      <motion.div
        initial={{ x: "-100%", y: "-100%" }}
        animate={{ x: "-50%", y: "-50%" }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[316px] aspect-square"
      >
        <div
          className="h-full w-full rounded-full border-[50px]"
          style={{ borderColor: borderClrCircle }}
        />
      </motion.div>

      <motion.div
        initial={{ x: "0%", y: "0%" }}
        animate={{ x: "-50%", y: "-50%" }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.1 }}
        className="absolute top-full left-full w-[1450px] aspect-square"
      >
        <div
          className="h-full w-full rounded-full border-[170px]"
          style={{ borderColor: borderClrCircle }}
        />
      </motion.div>
    </>
  );
};
