import { FC } from "react";
import { MainNavMenuCatalyst } from "./MainNavMenuCatalyst";
import { MainNavMenuCatalystCarrers } from "./MainNavMenuCatalystCareers";
import Link from "next/link";
import { Button } from "../Button";
import { MainNavMenuOncology } from "./MainNavMenuOncology";
import { MainNavFullMenuOncology } from "./MainNavFullMenuOncology";
import { MainNavFullMenuFlex } from "./MainNavFullMenuFlex";
import { DropdownAccordion } from "../Dropdown/DropdownAccordion";
import { AnimatePresence } from "framer-motion";
import { useSegmentPath } from "@/context/SegmentPathContext";
import { AnimationCollapsedMotion } from "../FramerMotion/AnimationCollapsedMotion";

export interface IMainNavDropdownMobile {}

export const MainNavDropdownMobile: FC<IMainNavDropdownMobile> = () => {
  const { firstSegment, homepage } = useSegmentPath();

  return (
    <AnimatePresence>
      <AnimationCollapsedMotion
        duration={0.5}
        className="absolute top-full left-0 translate-x-0 bg-[#FFFEFC] z-50 w-full"
      >
        <div className="flex flex-col items-start w-full p-[50px]">
          {homepage && (
            <>
              <DropdownAccordion title="About Catalyst CR" link="/about-us">
                <MainNavMenuCatalyst />
              </DropdownAccordion>

              <DropdownAccordion title="Careers" link="/careers">
                <MainNavMenuCatalystCarrers />
              </DropdownAccordion>

              <Link href="/contact-us" className="mt-6">
                <Button
                  title="Contact Us"
                  className="font-semibold hover:bg-[var(--clr-gold)]"
                />
              </Link>
            </>
          )}

          {firstSegment === "oncology-cro" && (
            <>
              <DropdownAccordion
                title="Full Service CRO"
                link="/oncology-cro/cro-services"
              >
                <MainNavMenuOncology />
              </DropdownAccordion>

              <Link
                href="/oncology-cro/cro-medical-consulting"
                className="text-[22px] py-[15px]"
              >
                Consulting
              </Link>

              <DropdownAccordion
                title="Development Phase"
                link="/oncology-cro/development-phase"
              >
                <MainNavFullMenuOncology />
              </DropdownAccordion>

              <Link
                href="/oncology-cro/oncology-insights"
                className="text-[22px] py-[15px]"
              >
                Insights
              </Link>

              <Link href="/oncology-cro/contact-oncology" className="mt-6">
                <Button
                  title="Contact Us"
                  className="font-semibold hover:bg-[var(--clr-cyan)]"
                />
              </Link>
            </>
          )}

          {firstSegment === "catalyst-flex" && (
            <>
              <DropdownAccordion
                title="Fuctional Services"
                link="/catalyst-flex/functional-expertise"
              >
                <MainNavFullMenuFlex />
              </DropdownAccordion>

              <Link
                href="/catalyst-flex/partners-technology"
                className="text-[22px] py-[15px]"
              >
                Partners &amp; Technology
              </Link>

              <Link
                href="/catalyst-flex/flex-insights"
                className="text-[22px] py-[15px]"
              >
                Insights
              </Link>

              <Link href="/catalyst-flex/contact-flex" className="mt-6">
                <Button
                  title="Contact Us"
                  className="font-semibold hover:bg-[var(--clr-green)]"
                />
              </Link>
            </>
          )}
        </div>
      </AnimationCollapsedMotion>
    </AnimatePresence>
  );
};
