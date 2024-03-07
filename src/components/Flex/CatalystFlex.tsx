import { FC } from "react";
import { FlexPersonalizedServices } from "./FlexPersonalizedServices";
import { FlexHero } from "./FlexHero";
import { FlexTestimonials } from "./FlexTestimonials";
import { FlexExpertise } from "./FlexExpertise";

export interface ICatalystFlex {}

export const CatalystFlex: FC<ICatalystFlex> = () => {
  return (
    <>
      <FlexHero />
      <FlexTestimonials />
      <FlexPersonalizedServices />
      <FlexExpertise />
    </>
  );
};
