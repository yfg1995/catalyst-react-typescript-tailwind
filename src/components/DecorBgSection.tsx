"use client";

import { FC, PropsWithChildren } from "react";
import { ScrollComponent } from "./ScrollComponent";
import { cn } from "@/lib/utils";
import { Section } from "./Section";

export interface IDecorBgSection extends PropsWithChildren {
  rightCircle?: boolean;
}

export const DecorBgSection: FC<IDecorBgSection> = ({
  children,
  rightCircle = false,
}) => {
  return (
    <Section
      className={cn(
        "bg-[var(--clr-light-blue)]",
        rightCircle ? "rounded-tr-[120px]" : "rounded-tl-[120px]"
      )}
    >
      <div
        className={cn(
          "absolute top-auto bottom-[171px] aspect-[2767/3604] w-[144%] overflow-hidden",
          rightCircle ? "left-0" : "right-0"
        )}
      >
        <div
          className={cn(
            "bg-[var(--bg-primary)] absolute aspect-[1] w-full h-full rounded-full bottom-0",
            rightCircle ? "left-0" : "right-0"
          )}
        />
      </div>

      <ScrollComponent
        className={cn(
          "absolute top-full w-[1320px] aspect-[2] h-auto bottom-0",
          rightCircle ? "circle-br right-0" : "circle-bl left-0"
        )}
      >
        <div
          className={cn(
            "bg-[var(--clr-cyan)] rounded-full aspect-[1] absolute bottom-auto w-full",
            rightCircle ? "right-0" : "left-0"
          )}
        />
      </ScrollComponent>

      {children}
    </Section>
  );
};
