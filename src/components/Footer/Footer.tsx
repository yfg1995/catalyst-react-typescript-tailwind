"use client";

import { FC } from "react";
import { Container } from "../Container";
import Link from "next/link";
import { FbSvgIcon } from "@/svg/FbSvgIcon";
import { XSvgIcon } from "@/svg/XSvgIcon";
import { LinkedSvgIcon } from "@/svg/LinkedSvgIcon";
import { useSegmentPath } from "@/context/SegmentPathContext";

export const Footer: FC = () => {
  const { firstSegment, homepage } = useSegmentPath();

  const fullYear = new Date().getFullYear();

  const footerLogo =
    firstSegment === "oncology-cro"
      ? "/images/oncology-img.png"
      : firstSegment === "catalyst-flex"
      ? "/images/flex-img.png"
      : "/images/catalyst-img.png";

  return (
    <footer>
      <div className="py-12">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={
                firstSegment === "catalyst-flex" ? "max-w-36" : "max-w-48"
              }
            >
              <img
                className="w-full h-full"
                src={footerLogo}
                alt=""
                loading="lazy"
              />
            </Link>

            {homepage && (
              <div className="flex gap-x-4">
                <Link className="hover:underline" href="/about-us">
                  About Us
                </Link>

                <Link className="hover:underline" href="/contact-us">
                  Contact Us
                </Link>
              </div>
            )}

            {firstSegment === "oncology-cro" && (
              <div className="flex gap-x-4">
                <Link
                  className="hover:underline"
                  href="/oncology-cro/cro-services"
                >
                  Full Service CRO
                </Link>

                <Link
                  className="hover:underline"
                  href="/oncology-cro/cro-medical-consulting"
                >
                  Consulting
                </Link>

                <Link className="hover:underline" href="/careers">
                  Careers
                </Link>

                <Link className="hover:underline" href="/contact-us">
                  Contact Us
                </Link>
              </div>
            )}

            {firstSegment === "catalyst-flex" && (
              <div className="flex gap-x-4">
                <Link
                  className="hover:underline"
                  href="/catalyst-flex/functional-expertise"
                >
                  Functional Services
                </Link>

                <Link className="hover:underline" href="/careers">
                  Careers
                </Link>

                <Link className="hover:underline" href="/contact-us">
                  Contact Us
                </Link>
              </div>
            )}

            <div className="flex items-center gap-x-8 [&>*]:duration-300 [&>*]:ease-in-out">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                className="hover:scale-[1.3]"
              >
                <FbSvgIcon />
              </Link>

              <Link
                href="https://www.twitter.com"
                target="_blank"
                className="hover:scale-[1.3]"
              >
                <XSvgIcon />
              </Link>

              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="hover:scale-[1.3]"
              >
                <LinkedSvgIcon />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[var(--bg-primary)] py-4">
        <Container>
          <div className="flex items-center justify-between py-2.5 text-white">
            <div className="text-xs">
              &copy; {fullYear} Catalyst Clinical Research. All rights reserved.
            </div>

            <div className="flex items-center gap-4 text-sm [&>*]:underline [&>*]:transition">
              <Link
                className="hover:font-semibold text-white"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link className="hover:font-semibold text-white" href="/">
                Site by Djole
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
