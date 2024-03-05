import { FC } from "react";
import { Button } from "../Button";
import { LogoSvg } from "@/svg/LogoSvg";
import { InView } from "../FramerMotion/InView";
import { ImageContentSection } from "../ImageContentSection";
import { Heading } from "../Heading";

export const CatalystResearch: FC = () => {
  return (
    <ImageContentSection
      imgSrc="/images/catalyst-clinical-research.png"
      classNameImgWrap="max-w-[450px] h-[512px]"
    >
      <>
        <InView
          delay={0.1}
          className="flex items-center"
          classNameWrap="overflow-hidden"
        >
          <LogoSvg className="mt-2" />
          <div className="border-b-2 border-[var(--clr-gold)] tracking-[2px] pb-1 leading-[150%] uppercase">
            why catalyst?
          </div>
        </InView>

        <InView delay={0.2} classNameWrap="overflow-hidden">
          <Heading title="Why Catalyst Clinical Research?" />
        </InView>

        <InView delay={0.3} className="flex flex-col gap-y-4 mb-8">
          <p>
            You need someone to listen to your needs. You need a catalyst for
            your drug development needs.
          </p>

          <p>
            Catalyst provides highly customizable clinical trial and drug
            development solutions to the global biotechnology and
            biopharmaceutical industries through our Catalyst Oncology and
            Catalyst Flex. Through these two solutions, Catalyst offers a
            full-service oncology CRO and multi-therapeutic functional service
            provider services.
          </p>

          <p>With Catalyst, you can always count on us. We are a catalyst.</p>
        </InView>

        <InView delay={0.4} className="flex items-center gap-4 mt-auto">
          <Button
            title="Learn About Catalyst Clinical Research"
            rightArrow={true}
          />

          <Button title="Contact Us" leftDot={true} />
        </InView>
      </>
    </ImageContentSection>
  );
};
