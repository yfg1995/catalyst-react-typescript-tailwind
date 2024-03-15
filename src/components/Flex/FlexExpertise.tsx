"use client";

import { FC, useRef } from "react";
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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${window.innerWidth * 0.4}px`]
  );

  return (
    <section
      ref={targetRef}
      className="2xl:py-[170px] xl:py-[140px] w-full overflow-hidden h-[200vh]"
    >
      <div className="sticky top-0 z-50 h-screen overflow-hidden">
        <Container>
          <TitleContentCols
            classNameTitle="!text-[45px] !-tracking-[0.45] max-w-[50%] w-full"
            titleFirstRow="Access Our Expertise"
            description="Catalyst Flex supports clients across multiple therapeutic areas with clinical operations, data management, biostatistics, safety and medical writing. With more than 180 clients, we have many successes to share."
            btnTitle="Read More"
          />

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
        </Container>
      </div>
    </section>
  );
};
