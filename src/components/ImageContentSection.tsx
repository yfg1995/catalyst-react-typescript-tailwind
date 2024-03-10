import { FC, PropsWithChildren } from "react";
import { Container } from "./Container";
import { InView } from "./FramerMotion/InView";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "./Section";

export interface IImageContentSection extends PropsWithChildren {
  imgSrc: string;
  classNameContent?: string;
  classNameImgWrap?: string;
}

export const ImageContentSection: FC<IImageContentSection> = ({
  imgSrc,
  classNameContent,
  classNameImgWrap,
  children,
}) => {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-x-20">
          <InView
            animateFrom="left"
            className={cn(
              "relative w-full aspect-square overflow-hidden",
              classNameImgWrap
            )}
          >
            <Image
              className="rounded-lg object-cover w-full"
              src={imgSrc}
              alt=""
              fill
              sizes="(min-width: 768px) 100vw, 100%"
              priority
            />
          </InView>

          <div className={cn("flex flex-col justify-center", classNameContent)}>
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
};
