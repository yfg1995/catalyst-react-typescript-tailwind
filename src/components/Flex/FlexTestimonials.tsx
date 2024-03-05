"use client";

import { FC } from "react";
import { Quote } from "@/svg/Quote";
import { Container } from "../Container";
import { InView } from "../FramerMotion/InView";
import { motion } from "framer-motion";
import { Section } from "../Section";
import { CarouselDefault } from "../Carousel/CarouselDefault";

export interface IFlexTestimonials {}

const flexTestimonialsSliderData = [
  {
    description:
      "Catalyst Flex properly identified the resource we needed, aligned with our very short turnaround timing, and was available to support us.",
  },
  {
    description:
      "Catalyst Flex has been instrumental in streamlining our clinical research programs. Their expertise and dedication have significantly improved our efficiency and outcomes.",
  },
];
export const contentSlide: string[] = flexTestimonialsSliderData.map(
  (text) => text.description
);

export const FlexTestimonials: FC<IFlexTestimonials> = () => {
  return (
    <Section className="xl:py-[300px]">
      <Container>
        <motion.div
          initial={{ x: "-120%", y: "-50%" }}
          animate={{ x: "-50%", y: "-50%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.35 }}
          className="absolute top-1/2 left-0 border-[142px] border-[var(--clr-light-green)] rounded-full aspect-[1/1] h-full"
        />

        <div className="relative flex  gap-x-20">
          <div className="flex gap-x-4">
            <InView animateFrom="right">
              <Quote fill="var(--clr-gold)" />
            </InView>

            <InView delay={0.15} animateFrom="right">
              <Quote fill="var(--clr-gold)" />
            </InView>
          </div>

          <InView animateFrom="right" delay={0.25}>
            <CarouselDefault
              slides={contentSlide}
              pagination
              classNameSlide="w-full text-[30px] leading-[1.25] -tracking-[0.3px]"
              classNamePagination="justify-start"
            />
          </InView>
        </div>
      </Container>
    </Section>
  );
};
