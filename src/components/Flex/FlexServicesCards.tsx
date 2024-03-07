import { FC } from "react";
import { InView } from "../FramerMotion/InView";
import { CardIconImg } from "../CardIconImg";
import { Container } from "../Container";
import { DecorBgSection } from "../DecorBgSection";
import { TitleContentCenter } from "../TitleContentCenter";

export interface IFlexServicesCards {}

export const flexServicesData = [
  {
    title: "Solutions and dedicated teams to serve research development",
    description:
      "Catalyst Flex offers support across multiple therapeutic areas to help drive collaboration for a study to succeed. We start with listening to and learning about your specific needs and then customize the people, processes, and/or technology, collaborating and committing to meeting your needs. With access to an extensive network of staff across the globe, we deliver a global or local solution.",
    imgSrc: "/images/card-icon.png",
    path: "/",
  },
  {
    title: "Broad spectrum of global, strategic experience",
    description:
      "Catalyst Flex clinical solutions and offerings help to achieve high-quality, cost-effective results. We are committed to operational excellence. We have successfully delivered for more than 180 clients on over 900 trials across functional areas. Experts lead client projects in the functional areas of clinical operations, data management, biostatistics and programming, safety, and medical writing.",
    imgSrc: "/images/card-icon.png",
    path: "/",
  },
];

export const FlexServicesCards: FC<IFlexServicesCards> = () => {
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
              title={flexServicesData[0].title}
              description={flexServicesData[0].description}
              imgSrc={flexServicesData[0].imgSrc}
              path={flexServicesData[0].path}
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
              title={flexServicesData[1].title}
              description={flexServicesData[1].description}
              imgSrc={flexServicesData[1].imgSrc}
              path={flexServicesData[1].path}
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
