import { FC } from "react";
import { FlexPersonalizedServices } from "./FlexPersonalizedServices";
import { FlexHero } from "./FlexHero";
import { FlexTestimonials } from "./FlexTestimonials";
import { FlexExpertise } from "./FlexExpertise";
import { FlexStoriesCards } from "./FlexStoriesCards";
import { FlexServicesCards } from "./FlexServicesCards";

export interface ICatalystFlex {}

export const CatalystFlex: FC<ICatalystFlex> = () => {
  return (
    <>
      <FlexHero />
      <FlexServicesCards />
      <FlexTestimonials />
      <FlexPersonalizedServices />
      <FlexExpertise />
      <FlexStoriesCards />
    </>
  );
};
