"use client";

import { FC } from "react";
import { Quote } from "@/svg/Quote";
import { Container } from "../Container";
import { InView } from "../FramerMotion/InView";
import { motion } from "framer-motion";
import { Section } from "../Section";

export interface IOncologyCroTestimonials {}

export const OncologyCroTestimonials: FC<IOncologyCroTestimonials> = () => {
  return (
    <Section className="xl:py-[300px]">
      <Container>
        <motion.div
          initial={{ x: "-120%", y: "-50%" }}
          animate={{ x: "-50%", y: "-50%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-1/2 left-0 bg-[var(--clr-light-light-gold)] border-[142px] border-[var(--clr-light-blue)] rounded-full aspect-[1/1] h-full"
        />

        <div className="relative flex gap-x-20">
          <div className="flex gap-x-4">
            <InView animateFrom="right">
              <Quote fill="var(--clr-salmon)" />
            </InView>

            <InView delay={0.1} animateFrom="right">
              <Quote fill="var(--clr-salmon)" />
            </InView>
          </div>

          <InView
            animateFrom="right"
            delay={0.2}
            className="text-[30px] leading-[1.25] -tracking-[0.3px] mb-[50px]"
          >
            “What makes a difference in this industry is how organizations stand
            behind their work. Catalyst has been hugely successful because of
            their integrity and commitment to their customers. No matter how big
            or small the project, they are your partner and that is why I
            continue to work with them.”
          </InView>
        </div>
      </Container>
    </Section>
  );
};
