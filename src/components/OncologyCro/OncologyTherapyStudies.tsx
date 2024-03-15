"use client";

import { FC, useRef } from "react";
import { CarouselStatisticsCard } from "../CarouselStatisticsCard";
import { Container } from "../Container";
import { TitleContentCols } from "../TitleContentCols";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

export interface IOncologyTherapyStudies {}

const therapyStudiesStatisticsData = [
  {
    number: 150,
    suffix: "+",
    description: "full-service oncology projects",
  },
  {
    number: 18,
    suffix: "+",
    description: "years of experience with oncology trials",
  },
  {
    number: 5,
    suffix: "+",
    description: "years of oncology experience per core team member",
  },
  {
    number: 1000,
    suffix: "+",
    description: "staff across the globe in 25+ countries",
  },
];

export const OncologyTherapyStudies: FC<IOncologyTherapyStudies> = () => {
  const targetRef = useRef<HTMLElement>(null);
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
      className="2xl:py-[170px] xl:py-[140px] w-full h-[200vh]"
    >
      <div className="sticky top-0 z-50 h-screen overflow-hidden">
        <Container>
          <TitleContentCols
            classNameTitle="!text-[45px] !-tracking-[0.45] max-w-[50%] w-full"
            titleFirstRow="Accelerate Oncology Therapy"
            titleSecondRow="Studies"
            description="Catalyst Oncology is a specialty oncology CRO devoting time, energy, and capital to supporting biotechs in bringing next-generation and novel cancer therapies to patients."
            btnTitle="Read More"
          />

          <div className="flex items-center">
            <div className="relative max-w-[450px] w-full aspect-square overflow-hidden">
              <Image
                className="rounded-lg object-cover w-full"
                src="/images/oncology-therapy-studies-carousel.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 100vw, 100%"
                priority
              />
            </div>

            <motion.div style={{ x }} className="flex gap-x-5">
              <CarouselStatisticsCard card={therapyStudiesStatisticsData} />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};
