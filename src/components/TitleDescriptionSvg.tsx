import { FC } from "react";
import Link from "next/link";
import { DropdownContentSvg } from "@/svg/DropdownContentSvg";
import { RightArrow } from "@/svg/RightArrow";
import { useSegmentPath } from "@/context/SegmentPathContext";

type TOption = {
  title: string;
  description: string;
  path: string;
};

interface ITitleDescriptionSvg {
  options: TOption[];
}

export const TitleDescriptionSvg: FC<ITitleDescriptionSvg> = ({ options }) => {
  const { firstSegment } = useSegmentPath();

  const svgColor =
    firstSegment === "oncology-cro"
      ? "fill-[var(--clr-cyan)]"
      : firstSegment === "catalyst-flex"
      ? "fill-[var(--clr-green)]"
      : "fill-[var(--clr-gold)]";

  return (
    <div className="flex flex-col gap-y-8 w-full">
      {options.map((item, index) => (
        <div key={index} className="group flex gap-x-3">
          <DropdownContentSvg
            svgClassName="max-w-[50px] w-full"
            pathClassName={svgColor}
          />

          <Link
            href={item.path}
            className="flex flex-col items-start gap-y-1.5"
          >
            <div className="flex items-center">
              <div>{item.title}</div>

              <RightArrow
                className="ml-2.5 mt-1 opacity-0 md:group-hover:opacity-100 duration-300 ease-in-out"
                classNameSvg="fill-[var(--bg-primary)]"
              />
            </div>

            <span>{item.description}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
