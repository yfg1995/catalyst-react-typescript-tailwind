"use client";

import { FC } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Locations } from "@/components/ContactUs/Locations";
import { OncologyContactFormHeader } from "./OncologyContactFormHeader";
import { OncolologyContactHero } from "./OncologyContactHero";
import { ContactFormContainer } from "@/components/ContactFormContainer";

export interface IContactOncology {}

export const ContactOncology: FC<IContactOncology> = () => {
  return (
    <>
      <OncolologyContactHero />

      <section className="bg-[var(--clr-light-blue)] xl:pb-[170px]">
        <ContactFormContainer>
          <OncologyContactFormHeader />
          <ContactForm />
        </ContactFormContainer>
      </section>

      <Locations title="For your Catalyst Oncology questions" />
    </>
  );
};
