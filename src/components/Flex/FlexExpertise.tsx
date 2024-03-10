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
    number: "18+",
    description: "years serving clients",
  },
  {
    number: "88%",
    description: "staff retention rate",
  },
  {
    number: "1,000+",
    description: "experienced, dedicated global employees",
  },
  {
    number: "1,100+",
    description: "multi-therapeutic clinical trials",
  },
];

export const FlexExpertise: FC<IFlexExpertise> = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-100%"]);

  return (
    <section
      ref={targetRef}
      className="2xl:py-[170px] xl:py-[140px] w-full overflow-hidden h-[200vh]"
    >
      <Container className="sticky top-0 z-50">
        <TitleContentCols
          classNameTitle="!text-[45px] !-tracking-[0.45] max-w-[50%] w-full"
          titleFirstRow="Access Our Expertise"
          description="Catalyst Flex supports clients across multiple therapeutic areas with clinical operations, data management, biostatistics, safety and medical writing. With more than 180 clients, we have many successes to share."
          btnTitle="Read More"
        />

        <div className="relative max-w-[450px] w-full h-[510px] aspect-square overflow-hidden">
          <Image
            className="rounded-lg object-cover w-full"
            src="/images/flex-expertise-carousel.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 100vw, 100%"
            priority
          />
        </div>

        <motion.div style={{ x }} className="flex gap-x-5 absolute top-1/2">
          <CarouselStatisticsCard card={expertiseData} />
        </motion.div>
      </Container>
    </section>
  );
};
