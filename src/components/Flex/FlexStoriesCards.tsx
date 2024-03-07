import { FC } from "react";
import { InView } from "../FramerMotion/InView";
import { CardIconImg } from "../CardIconImg";
import { Container } from "../Container";
import { DecorBgSection } from "../DecorBgSection";
import { TitleContentCenter } from "../TitleContentCenter";

export interface IFlexStoriesCards {}

export const flexStoriesData = [
  {
    title: "Phase III rare disease rescue",
    description:
      "A small biotech with limited internal capacity outsourced a Phase III clinical program in patients with a rare, life-threatening necrotizing soft-tissue infection for which no therapy currently exists. The study was to be conducted with 60 U.S. sites with the objective of enrolling 290 patients.",
    imgSrc: "/images/card-icon.png",
    path: "/",
  },
  {
    title: "Flexible data management for a growing portfolio of studies",
    description:
      "A small biopharma client with a large pipeline of 25 to 30 studies across Phase I and II studies needed to enhance their in-house biometrics capabilities using additional data management service support.",
    imgSrc: "/images/card-icon.png",
    path: "/",
  },
];

export const FlexStoriesCards: FC<IFlexStoriesCards> = () => {
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
              title={flexStoriesData[0].title}
              description={flexStoriesData[0].description}
              imgSrc={flexStoriesData[0].imgSrc}
              path={flexStoriesData[0].path}
              iconImgClassName="mb-2"
              btnTitle="Read Case Study"
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
              title={flexStoriesData[1].title}
              description={flexStoriesData[1].description}
              imgSrc={flexStoriesData[1].imgSrc}
              path={flexStoriesData[1].path}
              iconImgClassName="mb-2"
              btnTitle="Read Case Study"
              btnLeftDot
            />
          </InView>
        </div>
      </Container>
    </DecorBgSection>
  );
};
