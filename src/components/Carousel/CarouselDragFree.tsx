import {
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { LeftArrow } from "@/svg/LeftArrow";
import { RightArrow } from "@/svg/RightArrow";
import { useSegmentPath } from "@/context/SegmentPathContext";

interface ICarouselDragFree
  extends PropsWithChildren<{
    children: ReactNode[];
  }> {
  slides: string[];
  pagination?: boolean;
  className?: string;
  classNameWrap?: string;
  classNamePagination?: string;
  // options?: EmblaOptionsType;
}

export const CarouselDragFree: FC<ICarouselDragFree> = ({
  slides,
  children,
  className,
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
      className={cn(
        "overflow-hidden py-[clamp(0px,2.08vw,40px)] touch-pan-y",
        classNameWrap
      )}
      ref={emblaRef}
    >
      <div className={cn("flex gap-x-8 py-10", className)}>{children}</div>

      {pagination && (
        <div
          className={cn(
            "flex items-center justify-center gap-4",
            classNamePagination
          )}
        >
          <button
            onClick={goToPrevSlide}
            className={cn(
              "rounded-full border-2 p-3.5",
              bgHoverColor,
              currentIndex === 0
                ? "pointer-events-none !border-inherit hover:!bg-inherit"
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
                ? "pointer-events-none !border-inherit hover:!bg-inherit"
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
