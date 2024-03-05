import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "../Container";
import { MainNavButtonMobile } from "./MainNavButtonMobile";
import { MainNavLinksDesktop } from "./MainNavLinksDesktop";
import { useSegmentPath } from "@/context/SegmentPathContext";

export const MainNavbar: FC = () => {
  const { firstSegment } = useSegmentPath();

  const navbarLogo =
    firstSegment === "oncology-cro"
      ? "/images/oncology-img.png"
      : firstSegment === "catalyst-flex"
      ? "/images/flex-img.png"
      : "/images/catalyst-img.png";

  const logoLink =
    firstSegment === "oncology-cro"
      ? "/oncology-cro"
      : firstSegment === "catalyst-flex"
      ? "/catalyst-flex"
      : "/";

  const [isDesktopView, setIsDesktopView] = useState(true);

  const handleResize = () => {
    setIsDesktopView(window.innerWidth > 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-white flex items-center h-[80px] relative z-50">
      <Container className="py-0 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            href={logoLink}
            className={
              firstSegment === "catalyst-flex" ? "max-w-32" : "max-w-44"
            }
          >
            <img className="w-full h-full" src={navbarLogo} alt="" />
          </Link>

          {isDesktopView ? <MainNavLinksDesktop /> : <MainNavButtonMobile />}
        </div>
      </Container>
    </div>
  );
};
