import { FC } from "react";
import { Container } from "../Container";
import { TitleDescriptionSvg } from "../TitleDescriptionSvg";
import { MenuImgContent } from "../MenuImgContent";

const functionalServicesData = [
  {
    title: "Clinical Operations",
    description:
      "Our flexible project management supports your clinical research successes",
    path: "/",
  },
  {
    title: "Biostatistics & Programming",
    description: "We offer innovative trial design and consultancy for clients",
    path: "/",
  },
  {
    title: "Data Management",
    description: "Our teams are knowledgeable across multiple platforms",
    path: "/",
  },
  {
    title: "Medical Writing",
    description:
      "Achieve high-quality regulatory, safety, and scientific communications ",
    path: "/",
  },
  {
    title: "Medical Safety",
    description:
      "Our medical and safety monitoring teams bring extensive experience and clinical expertise to your study",
    path: "/",
  },
];

const functionalServicesImgData = [
  {
    title: "Phase III Rare Disease Rescue",
    description: "Catalyst Flex Assists Biotech for Research Program",
    imgSrc: "/images/carousel-img1.png",
    path: "/",
  },
];

export const MainNavFullMenuFlex: FC = () => {
  return (
    <div className="w-full pt-10 pb-16 border-b-2 border-b-slate-200 md:border-0 mb-[20px]">
      <Container className="flex justify-between flex-col gap-y-[80px] md:flex-row md:gap-14">
        <TitleDescriptionSvg options={functionalServicesData} />

        <MenuImgContent options={functionalServicesImgData} />
      </Container>
    </div>
  );
};
