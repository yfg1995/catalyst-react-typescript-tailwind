import { FC, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { LeftArrow } from "@/svg/LeftArrow";
import { RightArrow } from "@/svg/RightArrow";
import { useSegmentPath } from "@/context/SegmentPathContext";

interface ICarouselDefault {
  slides: string[];
  pagination?: boolean;
  classNameSlide?: string;
  classNameWrap?: string;
  classNamePagination?: string;
}

export const CarouselDefault: FC<ICarouselDefault> = ({
  slides,
  classNameSlide,
  classNameWrap,
  classNamePagination,
  pagination = false,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { firstSegment } = useSegmentPath();

  const borderColor =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-gold)";

  const bgHoverColor =
    firstSegment === "oncology-cro"
      ? "hover:bg-[var(--clr-cyan)]"
      : firstSegment === "catalyst-flex"
      ? "hover:bg-[var(--clr-green)]"
      : "hover:bg-[var(--clr-gold)]";

  useEffect(() => {
    if (emblaApi) {
      const updateIndex = () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentIndex(index);
      };

      emblaApi.on("select", updateIndex);
      updateIndex();

      return () => {
        emblaApi.off("select", updateIndex);
      };
    }
  }, [emblaApi]);

  const goToPrevSlide = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const goToNextSlide = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div
      className={cn("overflow-hidden touch-pan-y", classNameWrap)}
      ref={emblaRef}
    >
      <div className="w-full flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={classNameSlide}
            style={{ flex: "0 0 100%" }}
          >
            {slide}
          </div>
        ))}
      </div>

      {pagination && (
        <div
          className={cn(
            "flex items-center justify-center gap-4 mt-[50px]",
            classNamePagination
          )}
        >
          <button
            onClick={goToPrevSlide}
            className={cn(
              "rounded-full border-2 p-3.5",
              bgHoverColor,
              currentIndex === 0
                ? "pointer-events-none !border-inherit !bg-inherit"
                : "cursor-pointer"
            )}
            style={{ borderColor: borderColor }}
          >
            <LeftArrow />
          </button>

          <button
            onClick={goToNextSlide}
            className={cn(
              "rounded-full border-2 p-3.5",
              bgHoverColor,
              currentIndex === slides.length - 1
                ? "pointer-events-none !border-inherit !bg-inherit"
                : "cursor-pointer"
            )}
            style={{ borderColor: borderColor }}
          >
            <RightArrow className="pt-[1px]" />
          </button>
        </div>
      )}
    </div>
  );
};
