import { FC } from "react";
import { CarouselStatisticsCard } from "../CarouselStatisticsCard";
import { CarouselHorizontalScroll } from "../Carousel/CarouselHorizontalScroll";
import { Container } from "../Container";
import { Section } from "../Section";
import { TitleContentCols } from "../TitleContentCols";

export interface IOncologyTherapyStudies {}

const therapyStudiesStatisticsData = [
  {
    number: 150,
    description: "full-service oncology projects",
  },
  {
    number: 18,
    description: "years of experience with oncology trials",
  },
  {
    number: 5,
    description: "years of oncology experience per core team member",
  },
  {
    number: 1000,
    description: "staff across the globe in 25+ countries",
  },
];

export const OncologyTherapyStudies: FC<IOncologyTherapyStudies> = () => {
  return (
    <Section>
      <Container>
        <TitleContentCols
          classNameTitle="!text-[45px] !-tracking-[0.45] max-w-[50%] w-full"
          titleFirstRow="Accelerate Oncology Therapy"
          titleSecondRow="Studies"
          description="Catalyst Oncology is a specialty oncology CRO devoting time, energy, and capital to supporting biotechs in bringing next-generation and novel cancer therapies to patients."
          btnTitle="Read More"
        />
      </Container>

      <CarouselHorizontalScroll>
        <CarouselStatisticsCard card={therapyStudiesStatisticsData} />
      </CarouselHorizontalScroll>
    </Section>
  );
};
