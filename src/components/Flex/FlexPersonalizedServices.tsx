import { FC } from "react";
import { Container } from "../Container";
import { CardImage } from "../CardImage";
import { Section } from "../Section";
import { InView } from "../FramerMotion/InView";
import { TitleContentCols } from "../TitleContentCols";

export interface IFlexPersonalizedServices {}

export const flexClinicalResearchServicesData = [
  {
    title: "Functional service provider for your clinical operations needs",
    description:
      "Flexible functional solutions provide enhanced clinical operations capabilities. Catalyst Flex engages clinical research professionals across therapeutic areas with 15 to 20 years of experience in project management, site management, and clinical monitoring and oversight. In addition to more common clinical operations services Catalyst Flex teams offer expertise and established processes for project governance and risk management fit with your needs.",
    imgSrc: "/images/flex-card-image1.jpg",
    path: "/",
  },
  {
    title: "Biostatistics and programming support for clinical research",
    description:
      "Catalyst Flex's functional service model with our biostatistics and programming experts helps to increase efficiency and strategic oversight from design through submission. We offer innovative trial design and consultancy for clients and provide statistical and programming support from design through to regulatory submission.",
    imgSrc: "/images/flex-card-image1.jpg",
    path: "/",
  },
  {
    title: "High-quality data management ",
    description:
      "Catalyst Flex certified teams optimize regulatory submissions and clinical development plans to deliver results. While we are an accredited Medidata partner, our teams are also certified study builders in multiple platforms, such as Rave, TrialKit, and Merative. Our staff's experience is an average of more than 10 years with 50% having over 15 years.",
    imgSrc: "/images/flex-card-image1.jpg",
    path: "/",
  },
];

export const FlexPersonalizedServices: FC<IFlexPersonalizedServices> = () => {
  return (
    <Section className="bg-[var(--clr-light-green)]">
      <Container>
        <TitleContentCols
          classNameTitle="!text-[45px] !-tracking-[0.45] max-w-[50%] w-full"
          titleFirstRow="Personalized clinical research"
          titleSecondRow="services to enable your"
          titleThirdRow="programs"
          description="Catalyst Flex individuals and teams are dedicated to succeeding across multiple therapeutic area studies with customizable solutions."
          btnTitle="Find Out More"
        />

        <div className="flex flex-wrap gap-x-10 gap-y-20 mt-20">
          {flexClinicalResearchServicesData.map((item, index) => (
            <InView
              key={index}
              delay={index * 0.05}
              className="h-full"
              classNameWrap="h-auto"
            >
              <CardImage
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                path={item.path}
                btnTitle="Find Out More"
                btnLeftDot
              />
            </InView>
          ))}
        </div>
      </Container>
    </Section>
  );
};
