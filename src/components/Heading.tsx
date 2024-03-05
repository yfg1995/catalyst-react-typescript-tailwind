import { cn } from "@/lib/utils";
import { FC } from "react";

export interface IHeading {
  title: string;
  className?: string;
}

export const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <h2
      className={cn(
        "text-[45px] mb-4 leading-[1.25] -tracking-[0.45px]",
        className
      )}
    >
      {title}
    </h2>
  );
};
