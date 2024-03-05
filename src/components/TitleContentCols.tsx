import { FC } from "react";
import { Button } from "./Button";
import { HeadingTitleRows } from "./HeadingTitleRows";
import { InView } from "./FramerMotion/InView";

export interface ITitleContentCols {
  titleFirstRow: string;
  titleSecondRow: string;
  titleThirdRow?: string;
  description: string;
  btnTitle: string;
  classNameTitle?: string;
}

export const TitleContentCols: FC<ITitleContentCols> = ({
  titleFirstRow,
  titleSecondRow,
  titleThirdRow,
  description,
  btnTitle,
  classNameTitle,
}) => {
  return (
    <div className="flex justify-between items-center">
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
