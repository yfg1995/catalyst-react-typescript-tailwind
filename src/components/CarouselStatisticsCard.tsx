"use client";

import { useSegmentPath } from "@/context/SegmentPathContext";
import { formatNumberWithCommas } from "@/lib/utils";
import { FC } from "react";

type TCarouselStatisticsCard = {
  number: number;
  description: string;
};

export interface ICarouselStatisticsCard {
  card: TCarouselStatisticsCard[];
}

export const CarouselStatisticsCard: FC<ICarouselStatisticsCard> = ({
  card,
}) => {
  const { firstSegment } = useSegmentPath();

  const bgColor =
    firstSegment === "oncology-cro"
      ? "var(--clr-light-blue)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-light-green)"
      : "var(--clr-light-gold)";

  return (
    <>
      {card.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[30px] max-w-[330px] w-full py-[50px] px-[20px] h-auto text-center select-none"
          style={{ background: bgColor, flex: "0 0 100%" }}
        >
          <div className="text-[50px] leading-[1.25] -tracking-[0.5px] mb-[10px]">
            {formatNumberWithCommas(item.number)}&#43;
          </div>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
};
