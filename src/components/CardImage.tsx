"use client";

import { FC, useState } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSegmentPath } from "@/context/SegmentPathContext";

export interface ICardImage {
  title: string;
  description: string;
  imgSrc: string;
  path: string;
  btnTitle: string;
  btnLeftDot?: boolean;
  btnRightArrow?: boolean;
  imgClassName?: string;
  btnClassName?: string;
  SvgWrapperClassName?: string;
}

export const CardImage: FC<ICardImage> = ({
  title,
  description,
  imgSrc,
  btnTitle,
  btnLeftDot,
  btnRightArrow,
  btnClassName,
  SvgWrapperClassName,
  path,
}) => {
  const { firstSegment } = useSegmentPath();
  const [isHovered, setIsHovered] = useState(false);

  const borderColor =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-gold)";

  return (
    <Link
      href={path}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex h-full flex-col items-start rounded-[20px] shadow-normal bg-white px-[clamp(48px,2.5vw,24px)] pb-[clamp(20px,2.6vw,50px)] pt-[clamp(40px,3.65vw,70px)] max-w-[550px] w-full"
    >
      <div
        className="absolute top-0 -translate-y-[30%] rounded-full border-4 overflow-hidden max-w-[100px] w-full duration-300 ease-in-out group-hover:scale-110"
        style={{ borderColor: borderColor }}
      >
        <img className="w-full" src={imgSrc} alt="" loading="lazy" />
      </div>

      <div className="my-6 text-[clamp(24px,2.08vw,40px)] leading-tight tracking-tight">
        {title}
      </div>

      <div className="mb-8 tracking-[-0.16px]">{description}</div>

      <Button
        title={btnTitle}
        className={cn("mt-auto", btnClassName)}
        SvgWrapperClassName={SvgWrapperClassName}
        rightArrow={btnRightArrow}
        leftDot={btnLeftDot}
        btnIsHovered={isHovered}
      />
    </Link>
  );
};
