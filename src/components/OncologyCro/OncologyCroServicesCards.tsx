import { FC } from "react";
import { InView } from "../FramerMotion/InView";
import { CardIconImg } from "../CardIconImg";
import { Container } from "../Container";
import { DecorBgSection } from "../DecorBgSection";
import { TitleContentCenter } from "../TitleContentCenter";

export interface IOncologyCroServicesCards {}

export const oncologyServicesData = [
  {
    title: "Full-service oncology services for cancer clinical research",
    description:
      "With our exclusive biotech focus and next-gen and novel oncology experience, Catalyst Oncology supports early- to mid-phase drug development across a range of both solid and hematologic indications. We understand the nuances of complex study designs, hematologic oncology (hem/onc), novel endpoints, and integrated technologies.",
    imgSrc: "/images/card-icon.png",
    path: "/oncology-cro/cro-services",
  },
  {
    title: "Oncology clinic research organization consultants",
    description:
      "Flexible solutions across phases, indications, and drug class and an expert-driven approach to lowering clinical research and clinical trial burdens. Clinical research organization consulting services include drug development strategy workshops.",
    imgSrc: "/images/card-icon.png",
    path: "/oncology-cro/cro-medical-consulting",
  },
];

export const OncologyCroServicesCards: FC<IOncologyCroServicesCards> = () => {
  return (
    <DecorBgSection>
      <Container>
        <TitleContentCenter
          title="Advance next-generation, novel oncology therapies"
          description="Working exclusively with biotech companies, Catalyst Oncology's
          flexible processes and approach allow us to listen first, align goals,
          and proactively execute plans. We focus on supporting complex clinical
          trials to help with drug development."
        />

        <div className="flex gap-x-5 [&>*]:max-w-[50%]">
          <InView
            duration={0.7}
            delay={0.25}
            classNameWrap="relative h-auto w-full"
            className="h-full"
          >
            <CardIconImg
              title={oncologyServicesData[0].title}
              description={oncologyServicesData[0].description}
              imgSrc={oncologyServicesData[0].imgSrc}
              path={oncologyServicesData[0].path}
              iconImgClassName="mb-2"
              btnTitle="Learn More"
              btnLeftDot
            />
          </InView>

          <InView
            duration={0.7}
            delay={0.35}
            classNameWrap="relative h-auto w-full"
            className="h-full"
          >
            <CardIconImg
              title={oncologyServicesData[1].title}
              description={oncologyServicesData[1].description}
              imgSrc={oncologyServicesData[1].imgSrc}
              path={oncologyServicesData[1].path}
              iconImgClassName="mb-2"
              btnTitle="Learn More"
              btnLeftDot
            />
          </InView>
        </div>
      </Container>
    </DecorBgSection>
  );
};
