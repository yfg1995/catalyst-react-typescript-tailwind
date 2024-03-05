import { FC } from "react";
import { DecorBgSection } from "../DecorBgSection";
import { Heading } from "../Heading";
import { InView } from "../FramerMotion/InView";
import { CardIconImg } from "../CardIconImg";
import { Container } from "../Container";

export interface IOncologyLatestInsights {}

export const oncologyLatestInsightsData = [
  {
    title: "Immuno-Oncology Case Study",
    description:
      "Oncology clinical research is complex, demanding, and continually evolving. We work with biotechs to bring effective next-generation immuno-oncology (IO) therapies therapies to proof-of-concept and then to market as fast as possible because every second counts for patients living with cancer.",
    imgSrc: "/images/latest-insights.png",
    path: "/",
  },
  {
    title: "Hematology-Oncology Case Study",
    description:
      "Clinical trials in hematologic malignancies are complicated and require a higher level of expertise in your CRO partner. We help bring effective therapies to proof-of-concept and then to market as fast as possible because every second counts for those with blood cancer.",
    imgSrc: "/images/latest-insights.png",
    path: "/",
  },
];

export const OncologyLatestInsights: FC<IOncologyLatestInsights> = () => {
  return (
    <DecorBgSection rightCircle>
      <Container>
        <InView className="text-center mb-[70px] text-white">
          <Heading title="Discover the Latest Insights" />
        </InView>

        <div className="flex gap-x-5 [&>*]:max-w-[50%]">
          <InView
            duration={0.7}
            delay={0.25}
            classNameWrap="relative h-auto w-full"
            className="h-full"
          >
            <CardIconImg
              title={oncologyLatestInsightsData[0].title}
              description={oncologyLatestInsightsData[0].description}
              imgSrc={oncologyLatestInsightsData[0].imgSrc}
              path={oncologyLatestInsightsData[0].path}
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
              title={oncologyLatestInsightsData[1].title}
              description={oncologyLatestInsightsData[1].description}
              imgSrc={oncologyLatestInsightsData[1].imgSrc}
              path={oncologyLatestInsightsData[1].path}
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
