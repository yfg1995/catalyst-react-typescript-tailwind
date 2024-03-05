import { FC } from "react";
import { ContactHeroBgCircles } from "../ContactHeroBgCircles";
import { TitleContentCenter } from "../TitleContentCenter";
import { Section } from "../Section";

export interface IContactUsHero {}

export const ContactUsHero: FC<IContactUsHero> = ({}) => {
  return (
    <Section className="bg-[var(--bg-primary)] text-center text-white">
      <ContactHeroBgCircles />

      <TitleContentCenter
        title="Get in Touch"
        description="If you have any questions or inquiries, please feel free to contact
          us."
      />
    </Section>
  );
};
