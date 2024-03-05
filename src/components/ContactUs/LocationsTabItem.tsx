"use client";

import Link from "next/link";
import { FC } from "react";
import { InView } from "../FramerMotion/InView";
import { useSegmentPath } from "@/context/SegmentPathContext";

export interface ILocationsTabItem {
  title?: string;
  phone?: string;
  cityState: string;
  address: string;
  animationDelay?: number;
}

export const LocationsTabItem: FC<ILocationsTabItem> = ({
  cityState,
  address,
  title,
  phone,
  animationDelay,
}) => {
  const { firstSegment } = useSegmentPath();

  const borderColor =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-gold)";

  return (
    <div className="max-w-[50%] w-full px-2.5">
      <InView
        duration={0.5}
        delay={animationDelay}
        className="flex flex-col justify-center items-start shadow-normal bg-[#FFFEFC] rounded-[30px] h-full py-[40px] px-[20px]"
      >
        <div
          className="uppercase pb-1 leading-[1.5] font-medium border-b-2 tracking-[2px]"
          style={{ borderColor: borderColor }}
        >
          {title}
        </div>

        <div className="text-[22px] leading-[1.25] my-2.5 -tracking-[0.22px]">
          {cityState}
        </div>

        <div className="mb-2.5">{address}</div>

        <Link href="/" className="font-semibold underline">
          {phone}
        </Link>
      </InView>
    </div>
  );
};
