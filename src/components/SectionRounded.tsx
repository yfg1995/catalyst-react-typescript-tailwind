import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export interface ISectionRounded extends PropsWithChildren {
  sectionClassName?: string;
  bgClassName?: string;
}

export const SectionRounded: FC<ISectionRounded> = ({
  children,
  sectionClassName,
  bgClassName,
}) => {
  return (
    <section className={cn("relative", sectionClassName)}>
      <div
        className={cn(
          "absolute left-0 top-0 min-h-[610px] w-full rounded-tl-[120px] bg-[var(--bg-primary)]",
          bgClassName
        )}
      />
      {children}
    </section>
  );
};
