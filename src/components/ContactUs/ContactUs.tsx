import { FC } from "react";
import { ContactForm } from "../ContactForm";
import { Locations } from "./Locations";
import { ContactUsHero } from "./ContactUsHero";
import { ContactUsFormHeader } from "./ContactUsFormHeader";
import { ContactFormContainer } from "../ContactFormContainer";

export interface IContactUs {}

export const ContactUs: FC<IContactUs> = () => {
  return (
    <>
      <ContactUsHero />

      <section className="bg-[var(--clr-light-gold)] xl:pb-[170px]">
        <ContactFormContainer>
          <ContactUsFormHeader />
          <ContactForm />
        </ContactFormContainer>
      </section>

      <Locations title="Locations" />
    </>
  );
};
