import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export interface ISection extends PropsWithChildren {
  className?: string;
}

export const Section: FC<ISection> = ({ className, children }) => {
  return (
    <section
      className={cn(
        "relative 2xl:py-[170px] xl:py-[140px] w-full overflow-hidden",
        className
      )}
    >
      {children}
    </section>
  );
};
