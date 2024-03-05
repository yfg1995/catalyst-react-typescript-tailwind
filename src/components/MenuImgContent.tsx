"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type TMenuImgContent = {
  title: string;
  description: string;
  imgSrc: string;
  path: string;
};

interface IMenuImgContent {
  options: TMenuImgContent[];
  classNameWrap?: string;
}

export const MenuImgContent: FC<IMenuImgContent> = ({
  options,
  classNameWrap,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={cn("w-full", classNameWrap)}>
      <div className="mb-4 text-[22px]">Case Study</div>

      {options.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="flex items-center gap-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-full max-w-[230px]">
            <img
              className="rounded-lg"
              src={item.imgSrc}
              alt=""
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-3">{item.title}</div>
            <div className="mb-3 font-semibold">{item.description}</div>

            <Button
              title="Read more"
              className="mt-auto"
              btnIsHovered={isHovered}
              leftDot={true}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
