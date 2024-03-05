"use client";

import { ButtonHTMLAttributes, FC, useState } from "react";
import { cn } from "@/lib/utils";
import { RightArrow } from "@/svg/RightArrow";
import { useSegmentPath } from "@/context/SegmentPathContext";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  classNameSvg?: string;
  SvgWrapperClassName?: string;
  rightArrow?: boolean;
  leftDot?: boolean;
  activeLink?: string;
  btnIsHovered?: boolean;
}

export const Button: FC<IButton> = ({
  title,
  onClick,
  className,
  classNameSvg,
  SvgWrapperClassName,
  rightArrow = false,
  leftDot = false,
  btnIsHovered,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { firstSegment } = useSegmentPath();

  const borderColor =
    firstSegment === "oncology-cro"
      ? "border-[var(--clr-cyan)]"
      : firstSegment === "catalyst-flex"
      ? "border-[var(--clr-green)]"
      : "border-[var(--clr-gold)]";

  const bgColor =
    firstSegment === "oncology-cro"
      ? "bg-[var(--clr-cyan)]"
      : firstSegment === "catalyst-flex"
      ? "bg-[var(--clr-green)]"
      : "bg-[var(--clr-gold)]";

  return (
    <button
      className={cn(
        "relative flex cursor-pointer select-none items-center justify-center rounded-full border-2 px-5 py-2 leading-normal font-medium duration-300 ease-in-out",
        className,
        leftDot ? "border-transparent pl-0" : borderColor,
        leftDot && (btnIsHovered || isHovered) ? cn("pl-5", borderColor) : ""
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {leftDot && (
        <div
          className={cn(
            "mr-2 mt-[2px] h-3 w-3 rounded-full duration-300 ease-in-out",
            bgColor
          )}
        />
      )}

      {title}

      {rightArrow && (
        <RightArrow
          className={cn(
            "ml-1 mt-1 rounded-full p-1.5 duration-300 ease-in-out",
            isHovered ? cn("ml-2.5", SvgWrapperClassName, bgColor) : ""
          )}
          classNameSvg={classNameSvg}
        />
      )}
    </button>
  );
};
