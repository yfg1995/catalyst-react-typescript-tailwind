import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "../Container";
import Link from "next/link";
import { CatalystSvg } from "@/svg/CatalystSvg";
import { OncologySvg } from "@/svg/OncologySvg";
import { FlexSvg } from "@/svg/FlexSvg";
import { useSegmentPath } from "@/context/SegmentPathContext";

export const TopNavbar: FC = () => {
  const { firstSegment, homepage } = useSegmentPath();

  return (
    <div className="bg-[var(--bg-primary)] text-white w-full relative top-0 z-50">
      <Container className="py-0">
        <div className="flex items-center justify-end">
          <div className="flex items-center [&>*]:px-4 [&>*]:py-1 [&>*]:max-w-[160px] [&>*]:w-full">
            <Link href="/" className={cn(homepage ? "bg-white" : "")}>
              <CatalystSvg
                lettersFill={cn(homepage ? "#00586F" : "white")}
                leftPath={cn(homepage ? "#FFFEFC" : "#00586F")}
                middlePath={cn(homepage ? "#FEC52E" : "white")}
                rightPath={cn(homepage ? "#EB6852" : "white")}
              />
            </Link>

            <Link
              href="/oncology-cro"
              className={cn(firstSegment === "oncology-cro" ? "bg-white" : "")}
            >
              <OncologySvg
                lettersFill={cn(
                  firstSegment === "oncology-cro" ? "#00586F" : "white"
                )}
                svgFill={cn(
                  firstSegment === "oncology-cro" ? "#00586F" : "#FFFEFC"
                )}
              />
            </Link>

            <Link
              href="/catalyst-flex"
              className={cn(firstSegment === "catalyst-flex" ? "bg-white" : "")}
            >
              <FlexSvg
                lettersFill={cn(
                  firstSegment === "catalyst-flex" ? "#00586F" : "white"
                )}
                rightPath={cn(
                  firstSegment === "catalyst-flex" ? "#b4ce4e" : "white"
                )}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
