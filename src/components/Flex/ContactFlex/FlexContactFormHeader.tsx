import Link from "next/link";
import { FC } from "react";

export interface IFlexContactFormHeader {}

export const FlexContactFormHeader: FC<IFlexContactFormHeader> = () => {
  return (
    <div className="mb-10 max-w-[625px] w-full">
      <div className="text-[38px] leading-[1.4] -tracking-[0.38px] mb-2.5">
        Contact us
      </div>

      <p className="mb-5">
        Let us know how Catalyst Flex can support your drug development as a
        functional service provider. Complete the form below and we'll get back
        to you shortly.
      </p>

      <div>
        Please use the{" "}
        <Link
          href="/oncology-cro/contact-oncology"
          className="underline font-semibold"
        >
          Catalyst Oncology
        </Link>{" "}
        form for your questions about our full-service clinical research
        organization or fill in the{" "}
        <Link href="/contact-us" className="underline font-semibold">
          Catalyst Clinical Research
        </Link>{" "}
        form for general inquiries.
      </div>
    </div>
  );
};
