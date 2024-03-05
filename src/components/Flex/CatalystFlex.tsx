import { FC } from "react";
import { FlexPersonalizedServices } from "./FlexPersonalizedServices";
import { FlexHero } from "./FlexHero";
import { FlexTestimonials } from "./FlexTestimonials";

export interface ICatalystFlex {}

export const CatalystFlex: FC<ICatalystFlex> = () => {
  return (
    <>
      <FlexHero />
      <FlexTestimonials />
      <FlexPersonalizedServices />
    </>
  );
};
