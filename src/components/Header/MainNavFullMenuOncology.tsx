import { FC } from "react";
import { Container } from "../Container";
import { TitleDescriptionSvg } from "../TitleDescriptionSvg";
import { MenuImgContent } from "../MenuImgContent";
import { AnimationOpacityMotion } from "../FramerMotion/AnimationOpacityMotion";

const developmentPhaseData = [
  {
    title: "Preclinical",
    description:
      "Preclinical and clinical research planning helps you bring forward the best emerging science to improve cancer diagnosis and treatment.",
    path: "/",
  },
  {
    title: "Early Phase Research",
    description:
      "Catalyst Oncology, an oncology clinical research organization, works with innovative biotechs on a range of early phase study designs and therapies.",
    path: "/",
  },
  {
    title: "Late Phase Research",
    description:
      "Catalyst Oncology helps move oncology therapies through the complex and dynamic clinical trial environment with workable solutions, best-in-class technologies, and a data-centric approach.",
    path: "/",
  },
];

const developmentPhaseImgData = [
  {
    title: "Immuno-Oncology",
    description: "Helping to bring immunotherapies to cancer patients in need",
    imgSrc: "/images/cell-image.png",
    path: "/",
  },
];

export const MainNavFullMenuOncology: FC = () => {
  return (
    <div className="w-full pt-10 pb-16 border-b-2 border-b-slate-200 md:border-0 mb-[20px]">
      <Container>
        <AnimationOpacityMotion className="flex justify-between flex-col gap-y-[80px] md:flex-row md:gap-14">
          <TitleDescriptionSvg options={developmentPhaseData} />

          <MenuImgContent options={developmentPhaseImgData} />
        </AnimationOpacityMotion>
      </Container>
    </div>
  );
};
