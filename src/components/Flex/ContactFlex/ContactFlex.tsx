import { FC } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Locations } from "@/components/ContactUs/Locations";
import { FlexContactHero } from "./FlexContactHero";
import { ContactFormContainer } from "@/components/ContactFormContainer";
import { FlexContactFormHeader } from "./FlexContactFormHeader";

export interface IContactFlex {}

export const ContactFlex: FC<IContactFlex> = () => {
  return (
    <>
      <FlexContactHero />

      <section className="bg-[var(--clr-light-gold)] xl:pb-[170px]">
        <ContactFormContainer>
          <FlexContactFormHeader />
          <ContactForm />
        </ContactFormContainer>
      </section>

      <Locations title="For Catalyst Flex inquiries" />
    </>
  );
};
