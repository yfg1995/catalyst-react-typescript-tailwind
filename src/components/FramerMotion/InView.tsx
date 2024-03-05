"use client";

import { FC, PropsWithChildren, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IInView extends PropsWithChildren {
  className?: string;
  classNameWrap?: string;
  once?: boolean;
  animateFrom?: "top" | "bottom" | "left" | "right";
  offset?: string;
  amount?: "some" | "all" | number;
  duration?: number;
  delay?: number;
  ease?: "easeInOut" | "easeIn" | "easeOut" | "linear";
}

export const InView: FC<IInView> = ({
  className,
  classNameWrap,
  once = true,
  amount,
  animateFrom = "bottom",
  offset = 100,
  duration = 1,
  delay,
  ease = "easeInOut",
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount,
  });

  const X =
    animateFrom === "left"
      ? `-${offset}px`
      : animateFrom === "right"
      ? `${offset}px`
      : "0px";

  const Y =
    animateFrom === "top"
      ? `-${offset}px`
      : animateFrom === "bottom"
      ? `${offset}px`
      : "0px";

  return (
    <div className={cn("h-full", classNameWrap)} ref={ref}>
      <motion.div
        className={className}
        initial={{
          opacity: 0,
          x: animateFrom ? X : offset,
          y: animateFrom ? Y : offset,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? "0px" : X,
          y: isInView ? "0px" : Y,
        }}
        transition={{ duration, ease, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
