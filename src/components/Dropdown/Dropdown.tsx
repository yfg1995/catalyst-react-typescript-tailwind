import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { DownArrow } from "@/svg/DownArrow";
import useDropdownActiveState from "@/hooks/useDropdownActiveState";
import { AnimationCollapsedMotion } from "../FramerMotion/AnimationCollapsedMotion";

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
  const [isHoveredDropdown, setIsHoveredDropdown] = useDropdownActiveState();

  return (
    <div
      className={cn("cursor-pointer", isMenuFull ? "" : "relative")}
      onMouseEnter={() => setIsHoveredDropdown(true)}
      onMouseLeave={() => setIsHoveredDropdown(false)}
    >
      <div className={cn("flex items-center", className)}>
        <Link className={cn("py-[28px] mr-1", classNameMenuTitle)} href={link}>
          {title}
        </Link>

        <DownArrow
          svgClassName={cn(
            "h-6 w-6",
            classNameArrowBtn,
            isHoveredDropdown ? "rotate-180 translate-y-[2px]" : ""
          )}
        />

        <AnimatePresence>
          {isHoveredDropdown && (
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
