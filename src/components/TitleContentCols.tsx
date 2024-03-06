import { FC } from "react";
import { Button } from "./Button";
import { HeadingTitleRows } from "./HeadingTitleRows";
import { InView } from "./FramerMotion/InView";
import { cn } from "@/lib/utils";

export interface ITitleContentCols {
  titleFirstRow: string;
  titleSecondRow: string;
  titleThirdRow?: string;
  description: string;
  btnTitle: string;
  className?: string;
  classNameTitle?: string;
}

export const TitleContentCols: FC<ITitleContentCols> = ({
  titleFirstRow,
  titleSecondRow,
  titleThirdRow,
  description,
  btnTitle,
  className,
  classNameTitle,
}) => {
  return (
    <div className={cn("flex justify-between items-center mb-20", className)}>
      <HeadingTitleRows
        className={classNameTitle}
        firstRow={titleFirstRow}
        secondRow={titleSecondRow}
        thirdRow={titleThirdRow}
      />

      <InView>
        <p>{description}</p>

        <Button title={btnTitle} rightArrow className="mt-4" />
      </InView>
    </div>
  );
};
