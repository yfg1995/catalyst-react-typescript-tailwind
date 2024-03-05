import { useState, FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { DownArrow } from "@/svg/DownArrow";
import { AnimationCollapsedMotion } from "@/components/FramerMotion/AnimationCollapsedMotion";

export interface IDropdownAccordion extends PropsWithChildren {
  title: string;
  className?: string;
  classNameMenu?: string;
  link?: string;
}

export const DropdownAccordion: FC<IDropdownAccordion> = ({
  title,
  className,
  classNameMenu,
  link = "/",
  children,
}) => {
  const [isOpen, setisOpen] = useState(false);

  const handleOnClick = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <div className="relative cursor-pointer w-full" onClick={handleOnClick}>
      <div
        className={cn(
          "flex items-center w-full justify-between py-[15px]",
          className
        )}
      >
        <Link className={cn("text-[22px] -tracking-[0.22px]")} href={link}>
          {title}
        </Link>

        <DownArrow
          svgClassName={cn(
            "h-6 w-6",
            isOpen ? "rotate-180 translate-y-[2px]" : ""
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <AnimationCollapsedMotion
            duration={0.5}
            className={cn(
              "overflow-hidden w-full border-b-slate-400",
              classNameMenu
            )}
          >
            {children}
          </AnimationCollapsedMotion>
        )}
      </AnimatePresence>
    </div>
  );
};
