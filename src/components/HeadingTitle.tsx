import { cn } from "@/lib/utils";
import { FC } from "react";

export interface IHeadingTitle {
  title: string;
  className?: string;
}

export const HeadingTitle: FC<IHeadingTitle> = ({ title, className }) => {
  return (
    <h1
      className={cn("text-[55px] leading-[1.25] -tracking-[0.55px]", className)}
    >
      {title}
    </h1>
  );
};
