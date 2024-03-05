import { OncologyResearch } from "./OncologyResearch";
import { OncologyCroHero } from "./OncologyCroHero";
import { OncologyCroServicesCards } from "./OncologyCroServicesCards";
import { OncologyCroTestimonials } from "./OncologyCroTestimonials";
import { OncologyLatestInsights } from "./OncologyLatestInsights";
import { OncologyTherapyStudies } from "./OncologyTherapyStudies";

export function OncologyCro() {
  return (
    <>
      <OncologyTherapyStudies />
      <OncologyCroHero />
      <OncologyCroServicesCards />
      <OncologyResearch />
      <OncologyCroTestimonials />
      <OncologyLatestInsights />
    </>
  );
}
