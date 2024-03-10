import { FC } from "react";
import { Section } from "../Section";
import { OncologyFlexHeroBgCircles } from "../OncologyFlexHeroBgCircles";
import { Container } from "../Container";
import { HeadingTitleRows } from "../HeadingTitleRows";
import { InView } from "../FramerMotion/InView";
import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";

export interface IOncologyCroHero {}

export const OncologyCroHero: FC<IOncologyCroHero> = () => {
  return (
    <Section>
      <OncologyFlexHeroBgCircles />

      <Container>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center items-start">
            <HeadingTitleRows
              firstRow="Specialty Oncology"
              secondRow="CRO with Services"
              thirdRow="Designed to Inspire"
            />

            <InView classNameWrap="h-auto">
              Catalyst Oncology's people, clients, and partners paired with
              cancer drug expertise and cutting-edge technology enable us to be
              a specialty oncology CRO that helps bring cancer therapies to
              patients.
            </InView>

            <InView>
              <Link href="/oncology-cro/contact-oncology">
                <Button title="Contact Us" className="mt-6" rightArrow />
              </Link>
            </InView>
          </div>

          <InView
            animateFrom="right"
            className="relative max-w-[640px] w-full h-[455px] aspect-[1.41] right-[-130px] rounded-[20px] overflow-hidden"
          >
            <Image
              className="object-cover w-full"
              src="/images/oncology-hero.jpg"
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
