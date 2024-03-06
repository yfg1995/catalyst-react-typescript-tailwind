import { FC } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { CarouselDragFree } from "../Carousel/CarouselDragFree";
import { InView } from "../FramerMotion/InView";
import { SectionRounded } from "../SectionRounded";
import Link from "next/link";
import Image from "next/image";

export interface ILatestReleases {}

export const catalystSliderData = [
  {
    title: "Phase III Rare Disease Study",
    imgSrc: "/images/carousel-img1.png",
    path: "/",
  },
  {
    title: "Flexible Data Management for Growing Portfolio",
    imgSrc: "/images/carousel-img2.png",
    path: "/",
  },
  {
    title: "Highlights of ESMO 2023: The year of ADCs",
    imgSrc: "/images/carousel-img3.png",
    path: "/",
  },
  {
    title:
      "Medidata Announces Multi-Year Partnership Expansion with Catalyst for Oncology Trial Delivery",
    imgSrc: "/images/carousel-img4.png",
    path: "/",
  },
  {
    title: "Agile Protocol Development",
    imgSrc: "/images/carousel-img5.png",
    path: "/",
  },
];
export const images: string[] = catalystSliderData.map((image) => image.imgSrc);

export const LatestReleases: FC<ILatestReleases> = () => {
  return (
    <SectionRounded sectionClassName="py-32">
      <Container>
        <div className="relative flex flex-col items-center justify-center text-center text-white">
          <InView
            className="mb-1 text-[clamp(28px,1.98vw,38px)] leading-[1.4] tracking-[-0.38px]"
            classNameWrap="overflow-hidden"
          >
            Stay Informed with Catalyst
          </InView>

          <InView
            delay={0.1}
            className="text-[clamp(14px,0.94vw,18px)]"
            classNameWrap="overflow-hidden"
          >
            Get the latest news and press releases from Catalyst Clinical
            Research
          </InView>

          <InView delay={0.2} classNameWrap="overflow-hidden">
            <Link href="/">
              <Button
                title="View All"
                rightArrow={true}
                className="mt-8 text-white"
                classNameSvg="fill-white"
              />
            </Link>
          </InView>
        </div>
      </Container>

      <CarouselDragFree
        pagination
        slides={images}
        classNameWrap="pr-10"
        className="lg:pl-[250px] xl:pl-[350px] 2xl:pl-[450px]"
      >
        {catalystSliderData.map((slide, index) => (
          <InView
            key={index}
            delay={index * 0.05}
            duration={0.5}
            className="group rounded-3xl bg-white shadow-normal h-full"
            classNameWrap="h-auto"
          >
            <Link
              href={slide.path}
              className="flex flex-col items-start p-[clamp(24px,2.08vw,40px)] h-full"
            >
              <div className="relative w-full h-[300px] aspect-[1.67] mb-6">
                <Image
                  className="rounded-lg"
                  src={slide.imgSrc}
                  alt="News and press"
                  fill
                  priority
                  sizes="(min-width: 768px) 100vw, 500px"
                />
              </div>

              <div className="mb-6 text-[clamp(20px,1.56vw,30px)] leading-[clamp(28px,1.88vw,36px)]">
                <span>{slide.title}</span>
              </div>

              <Button
                title="Read More"
                leftDot={true}
                className="mt-auto group-hover:border-[var(--clr-gold)] group-hover:pl-5"
              />
            </Link>
          </InView>
        ))}
      </CarouselDragFree>
    </SectionRounded>
  );
};
