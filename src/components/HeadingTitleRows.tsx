import { FC } from "react";
import { InView } from "./FramerMotion/InView";
import { cn } from "@/lib/utils";

export interface IHeadingTitleRows {
  firstRow: string;
  secondRow?: string;
  thirdRow?: string;
  className?: string;
}

export const HeadingTitleRows: FC<IHeadingTitleRows> = ({
  firstRow,
  secondRow,
  thirdRow,
  className,
}) => {
  return (
    <div
      className={cn(
        "[&>*]:overflow-hidden text-[55px] leading-[1.25] -tracking-[0.55px] mb-3",
        className
      )}
    >
      <InView>{firstRow}</InView>

      <InView delay={0.2}>{secondRow}</InView>

      <InView delay={0.3}>{thirdRow}</InView>
    </div>
  );
};
