import { FC } from "react";
import { InView } from "./FramerMotion/InView";
import { Heading } from "./Heading";

export interface ITitleContentCenter {
  title: string;
  description: string;
}

export const TitleContentCenter: FC<ITitleContentCenter> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center flex flex-col mx-auto text-white max-w-[775px] w-full mb-[20px]">
      <InView classNameWrap="overflow-hidden">
        <Heading title={title} />
      </InView>

      <InView classNameWrap="overflow-hidden" delay={0.1}>
        <p className="max-w-[650px] w-full mt-4 mx-auto">{description}</p>
      </InView>
    </div>
  );
};
