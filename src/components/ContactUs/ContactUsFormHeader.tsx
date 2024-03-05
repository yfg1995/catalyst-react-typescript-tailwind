import Link from "next/link";
import { FC } from "react";

export interface IContactUsFormHeader {}

export const ContactUsFormHeader: FC<IContactUsFormHeader> = () => {
  return (
    <div className="mb-10 max-w-[625px] w-full">
      <div className="text-[38px] leading-[1.4] -tracking-[0.38px] mb-2.5">
        General Questions
      </div>

      <p className="mb-5">
        Let us know how Catalyst can support your development programs with
        general inquiries. Complete the form below, and we'll get back to you
        shortly.
      </p>

      <div>
        For service-specific questions, please use the{" "}
        <Link
          href="/oncology-cro/contact-oncology"
          className="underline font-semibold"
        >
          Catalyst Oncology
        </Link>{" "}
        or{" "}
        <Link
          href="/catalyst-flex/contact-flex"
          className="underline font-semibold"
        >
          Catalyst Flex
        </Link>{" "}
        forms.
      </div>
    </div>
  );
};
