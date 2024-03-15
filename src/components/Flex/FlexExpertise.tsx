"use client";

import { FC, useEffect, useRef, useState } from "react";
import { CarouselStatisticsCard } from "../CarouselStatisticsCard";
import { Container } from "../Container";
import { TitleContentCols } from "../TitleContentCols";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

export interface IFlexExpertise {}

const expertiseData = [
  {
    number: 18,
    suffix: "+",
    description: "years serving clients",
  },
  {
    number: 88,
    suffix: "%",
    description: "staff retention rate",
  },
  {
    number: 1000,
    suffix: "+",
    description: "experienced, dedicated global employees",
  },
  {
    number: 1100,
    suffix: "+",
    description: "multi-therapeutic clinical trials",
  },
];

export const FlexExpertise: FC<IFlexExpertise> = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const updateDimensions = () => {
      if (targetRef.current) {
        setContainerWidth(targetRef.current.offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const updateX = () => {
      x.set(`-${window.innerWidth * 0.32}px`);
    };
    updateX();
    window.addEventListener("resize", updateX);
    return () => window.removeEventListener("resize", updateX);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["-120%", `-${window.innerWidth * 0.32}px`]
  );

  return (
    <section
      ref={targetRef}
      className="2xl:py-[170px] xl:py-[140px] w-full h-[300vh]"
    >
      <div className="sticky top-0 z-50 h-screen overflow-hidden">
        <Container>
          <TitleContentCols
            classNameTitle="!text-[45px] !-tracking-[0.45] max-w-[50%] w-full"
            titleFirstRow="Access Our Expertise"
            description="Catalyst Flex supports clients across multiple therapeutic areas with clinical operations, data management, biostatistics, safety and medical writing. With more than 180 clients, we have many successes to share."
            btnTitle="Read More"
          />

          <div className="flex items-center">
            <div className="relative max-w-[450px] w-full aspect-square overflow-hidden">
              <Image
                className="rounded-lg object-cover w-full"
                src="/images/flex-expertise-carousel.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 100vw, 100%"
                priority
              />
            </div>

            <motion.div style={{ x }} className="flex gap-x-5">
              <CarouselStatisticsCard card={expertiseData} />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};
