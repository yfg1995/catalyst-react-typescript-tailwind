import { FC } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ICardIconImg {
  title: string;
  description: string;
  imgSrc: string;
  path: string;
  btnTitle: string;
  btnLeftDot?: boolean;
  btnRightArrow?: boolean;
  iconImgClassName?: string;
  btnClassName?: string;
  SvgWrapperClassName?: string;
}

export const CardIconImg: FC<ICardIconImg> = ({
  title,
  description,
  imgSrc,
  path,
  btnTitle,
  btnLeftDot,
  btnRightArrow,
  btnClassName,
  SvgWrapperClassName,
  iconImgClassName,
}) => {
  return (
    <div className="flex h-full flex-col items-start rounded-[20px] bg-white px-[clamp(48px,2.5vw,24px)] py-[clamp(40px,3.65vw,70px)]">
      <div className={cn("mb-8", iconImgClassName)}>
        <img className="w-full h-auto" src={imgSrc} alt="" loading="lazy" />
      </div>

      <div className="mb-4 text-[clamp(24px,2.08vw,40px)] leading-tight tracking-tight">
        {title}
      </div>

      <div className="mb-8 tracking-[-0.16px]">{description}</div>

      <Link href={path} className="mt-auto">
        <Button
          title={btnTitle}
          className={btnClassName}
          SvgWrapperClassName={SvgWrapperClassName}
          rightArrow={btnRightArrow}
          leftDot={btnLeftDot}
        />
      </Link>
    </div>
  );
};
