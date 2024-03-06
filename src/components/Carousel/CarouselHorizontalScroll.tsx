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
        <motion.div style={{ x }}>{children}</motion.div>
      </div>
    </section>
  );
};
