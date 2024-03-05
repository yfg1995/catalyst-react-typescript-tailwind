import { ContactHeroBgCircles } from "@/components/ContactHeroBgCircles";
import { Section } from "@/components/Section";
import { TitleContentCenter } from "@/components/TitleContentCenter";
import { FC } from "react";

export interface IFlexContactHero {}

export const FlexContactHero: FC<IFlexContactHero> = ({}) => {
  return (
    <Section className="bg-[var(--bg-primary)] text-center text-white">
      <ContactHeroBgCircles />

      <TitleContentCenter
        title="Let Us Help"
        description="Whether you need biostatistics, programming, medical writing, or data
          management, Catalyst Flex is here as a functional service provider to
          support your research goals. Let us be your strategic partner in
          advancing your goals in clinical trials research."
      />
    </Section>
  );
};
