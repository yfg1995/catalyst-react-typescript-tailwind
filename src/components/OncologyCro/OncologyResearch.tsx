"use client";

import { FC } from "react";
import { ImageContentSection } from "../ImageContentSection";
import { InView } from "../FramerMotion/InView";
import { SvgContentList } from "../SvgContentList";
import { Heading } from "../Heading";

const oncologyResearchData = [
  {
    description: "Exclusively focused on working with biotech companies",
  },
  {
    description: "Data-centric, cross-functional oncology experience",
  },
  {
    description: "Flexible, creative solutions for your cancer trial",
  },
];

export const OncologyResearch: FC = () => {
  return (
    <ImageContentSection
      imgSrc="/images/oncology-img-content.png"
      classNameImgWrap="max-w-[575px] h-[635px]"
    >
      <InView animateFrom="right">
        <Heading
          title="Discover our differentiators that make us the right choice for your
          research"
        />

        <p>
          Catalyst Oncology embodies flexibility to provide a range of solutions
          whether you need some contract resources, a single function, or
          full-service CRO support. Catalyst Oncology inspires people to design
          and deliver better clinical trials.
        </p>

        <div className="flex justify-center items-center mt-[40px] bg-[var(--clr-light-blue)] p-[50px] rounded-[30px]">
          <div className="divide-y divide-[var(--clr-cyan)] divide-opacity-30">
            {oncologyResearchData.map((item, index) => (
              <SvgContentList
                key={index}
                description={item.description}
                className="py-4"
              />
            ))}
          </div>
        </div>
      </InView>
    </ImageContentSection>
  );
};
