import { FC } from "react";
import { Section } from "../Section";
import { OncologyFlexHeroBgCircles } from "../OncologyFlexHeroBgCircles";
import { Container } from "../Container";
import { HeadingTitleRows } from "../HeadingTitleRows";
import { InView } from "../FramerMotion/InView";
import Link from "next/link";
import { Button } from "../Button";
import Image from "next/image";

export interface IFlexHero {}

export const FlexHero: FC<IFlexHero> = () => {
  return (
    <Section>
      <OncologyFlexHeroBgCircles />

      <Container>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center items-start">
            <HeadingTitleRows
              firstRow="Functional Service"
              secondRow="Provider for Innovative"
              thirdRow="Healthcare Solutions"
            />
            <InView classNameWrap="h-auto">
              Clinical trials need customizable clinical research support that
              leverages broad functional service and therapeutic area expertise.
              Catalyst Flex is a multi-therapeutic functional solution expert
              ready to support your clinical research needs.
            </InView>

            <InView>
              <Link href="/catalyst-flex/contact-flex">
                <Button
                  title="Contact Us About Catalyst Flex"
                  className="mt-6"
                  rightArrow
                />
              </Link>
            </InView>
          </div>

          <InView
            animateFrom="right"
            className="relative max-w-[640px] w-full h-[455px] aspect-[1.41] right-[-130px] overflow-hidden"
          >
            <Image
              className="object-cover w-full rounded-[20px]"
              src="/images/flex-hero.png"
              alt=""
              fill
              sizes="(min-width: 768px) 100vw, 100%"
              priority
            />
          </InView>
        </div>
      </Container>
    </Section>
  );
};
