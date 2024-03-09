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
    number: "150+",
    description: "full-service oncology projects",
  },
  {
    number: "18+",
    description: "years of experience with oncology trials",
  },
  {
    number: "5+",
    description: "years of oncology experience per core team member",
  },
  {
    number: "1,000+",
    description: "staff across the globe in 25+ countries",
  },
];

export const OncologyTherapyStudies: FC<IOncologyTherapyStudies> = () => {
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
          titleFirstRow="Accelerate Oncology Therapy"
          titleSecondRow="Studies"
          description="Catalyst Oncology is a specialty oncology CRO devoting time, energy, and capital to supporting biotechs in bringing next-generation and novel cancer therapies to patients."
          btnTitle="Read More"
        />

        <div className="relative max-w-[450px] w-full h-[510px] aspect-square">
          <Image
            className="rounded-lg object-cover w-full"
            src="/images/oncology-therapy-studies-carousel.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 100vw, 100%"
            priority
          />
        </div>

        <motion.div style={{ x }} className="flex gap-x-5 absolute top-1/2">
          <CarouselStatisticsCard card={therapyStudiesStatisticsData} />
        </motion.div>
      </Container>
    </section>
  );
};
