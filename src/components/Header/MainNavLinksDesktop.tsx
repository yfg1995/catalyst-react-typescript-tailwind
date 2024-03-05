import { FC } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { Button } from "../Button";
import { MainNavMenuCatalyst } from "./MainNavMenuCatalyst";
import { MainNavMenuCatalystCarrers } from "./MainNavMenuCatalystCareers";
import { MainNavMenuOncology } from "./MainNavMenuOncology";
import { MainNavFullMenuOncology } from "./MainNavFullMenuOncology";
import { MainNavFullMenuFlex } from "./MainNavFullMenuFlex";
import Link from "next/link";
import { useSegmentPath } from "@/context/SegmentPathContext";

export interface IMainNavLinksDesktop {}

export const MainNavLinksDesktop: FC<IMainNavLinksDesktop> = () => {
  const { firstSegment, homepage } = useSegmentPath();

  return (
    <div className="flex h-full items-center gap-x-6 font-semibold">
      {homepage && (
        <>
          <Dropdown title="About Catalyst CR" link="/about-us">
            <MainNavMenuCatalyst />
          </Dropdown>

          <Dropdown title="Careers" link="/careers">
            <MainNavMenuCatalystCarrers />
          </Dropdown>

          <Link href="/contact-us">
            <Button
              title="Contact Us"
              className="font-semibold hover:bg-[var(--clr-gold)]"
            />
          </Link>
        </>
      )}

      {firstSegment === "oncology-cro" && (
        <>
          <Dropdown title="Full Service CRO" link="/oncology-cro/cro-services">
            <MainNavMenuOncology />
          </Dropdown>

          <Link href="/oncology-cro/cro-medical-consulting">Consulting</Link>

          <Dropdown
            title="Development Phase"
            link="/oncology-cro/development-phase"
            isMenuFull
          >
            <MainNavFullMenuOncology />
          </Dropdown>

          <Link href="/oncology-cro/oncology-insights">Insights</Link>

          <Link href="/oncology-cro/contact-oncology">
            <Button
              title="Contact Us"
              className="font-semibold hover:bg-[var(--clr-cyan)]"
            />
          </Link>
        </>
      )}

      {firstSegment === "catalyst-flex" && (
        <>
          <Dropdown
            title="Fuctional Services"
            link="/catalyst-flex/functional-expertise"
            isMenuFull
          >
            <MainNavFullMenuFlex />
          </Dropdown>

          <Link href="/catalyst-flex/partners-technology">
            Partners &amp; Technology
          </Link>

          <Link href="/catalyst-flex/flex-insights">Insights</Link>

          <Link href="/catalyst-flex/contact-flex">
            <Button
              title="Contact Us"
              className="font-semibold hover:bg-[var(--clr-green)]"
            />
          </Link>
        </>
      )}
    </div>
  );
};
