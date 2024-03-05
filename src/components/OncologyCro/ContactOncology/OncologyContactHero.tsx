import { ContactHeroBgCircles } from "@/components/ContactHeroBgCircles";
import { Section } from "@/components/Section";
import { TitleContentCenter } from "@/components/TitleContentCenter";
import { FC } from "react";

export interface IOncolologyContactHero {}

export const OncolologyContactHero: FC<IOncolologyContactHero> = ({}) => {
  return (
    <Section className="bg-[var(--bg-primary)] text-center text-white">
      <ContactHeroBgCircles />

      <TitleContentCenter
        title="Let Us Help"
        description="Whether you need specialized analytics, streamlined site interactions,
          a consultancy, or a full-service clinical research organization, our
          dedicated team is ready to support your success. Let us help you
          navigate the complexities of oncology studies, so you can focus on
          advancing science and improving patient outcomes."
      />
    </Section>
  );
};
