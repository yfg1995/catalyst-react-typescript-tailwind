import Link from "next/link";
import { FC } from "react";

export interface IOncologyContactFormHeader {}

export const OncologyContactFormHeader: FC<IOncologyContactFormHeader> = () => {
  return (
    <div className="mb-10 max-w-[625px] w-full">
      <div className="text-[38px] leading-[1.4] -tracking-[0.38px] mb-2.5">
        Contact us
      </div>

      <p className="mb-5">
        Let us know how Catalyst can help you shape the future of oncology
        research. Complete the form below and we'll get back to you shortly.
      </p>

      <div>
        Please use the{" "}
        <Link
          href="/catalyst-flex/contact-flex"
          className="underline font-semibold"
        >
          Catalyst Flex
        </Link>{" "}
        form for your functional service provider questions or the{" "}
        <Link href="/contact-us" className="underline font-semibold">
          Catalyst Clinical Research
        </Link>{" "}
        form for general inquiries.
      </div>
    </div>
  );
};
