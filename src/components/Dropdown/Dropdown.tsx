import { FC, PropsWithChildren, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { DownArrow } from "@/svg/DownArrow";
import { AnimationCollapsedMotion } from "../FramerMotion/AnimationCollapsedMotion";
import { useDropdownActiveState } from "@/zustand/useDropdownActiveState";

export interface IDropdown extends PropsWithChildren {
  title: string;
  className?: string;
  classNameMenu?: string;
  classNameMenuTitle?: string;
  classNameArrowBtn?: string;
  isMenuFull?: boolean;
  link?: string;
}

export const Dropdown: FC<IDropdown> = ({
  title,
  className,
  classNameMenu,
  classNameMenuTitle,
  classNameArrowBtn,
  isMenuFull,
  link = "/",
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const setIsHoveredDropdown = useDropdownActiveState(
    (state) => state.setIsHovered
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsHoveredDropdown(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredDropdown(false);
  };

  return (
    <div
      className={cn("cursor-pointer", isMenuFull ? "" : "relative")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("flex items-center", className)}>
        <Link className={cn("py-[28px] mr-1", classNameMenuTitle)} href={link}>
          {title}
        </Link>
        <DownArrow
          svgClassName={cn(
            "h-6 w-6",
            classNameArrowBtn,
            isHovered ? "rotate-180 translate-y-[2px]" : ""
          )}
        />
        <AnimatePresence>
          {isHovered && (
            <AnimationCollapsedMotion
              className={cn(
                "absolute top-full bg-white z-50 font-medium py-2",
                isMenuFull
                  ? "left-0 translate-x-0 w-full cursor-default"
                  : "w-[300px] left-1/2 -translate-x-1/2 px-10",
                classNameMenu
              )}
            >
              {children}
            </AnimationCollapsedMotion>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
