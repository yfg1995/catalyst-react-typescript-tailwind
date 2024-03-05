"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { FC, PropsWithChildren, useRef } from "react";

export interface ICarouselHorizontalScroll extends PropsWithChildren {}

export const CarouselHorizontalScroll: FC<ICarouselHorizontalScroll> = ({
  children,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targetRef} className="h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-x-5 absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
