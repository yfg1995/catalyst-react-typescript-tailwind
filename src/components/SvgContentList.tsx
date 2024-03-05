import { cn } from "@/lib/utils";
import { SvgContent } from "@/svg/SvgContent";
import { FC } from "react";

export interface ISvgContentList {
  description: string;
  className?: string;
  classNameContent?: string;
}

export const SvgContentList: FC<ISvgContentList> = ({
  description,
  className,
  classNameContent,
}) => {
  return (
    <div className={cn("flex", className)}>
      <SvgContent className="mt-1 max-w-[20px] w-full" />

      <div
        className={cn(
          "text-[22px] leading-[1.25] -tracking-[0.22px] ml-4",
          classNameContent
        )}
      >
        {description}
      </div>
    </div>
  );
};
