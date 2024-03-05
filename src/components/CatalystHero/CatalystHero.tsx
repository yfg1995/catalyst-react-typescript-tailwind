import { FC } from "react";
import { Container } from "../Container";
import { CardIconImg } from "../CardIconImg";
import { InView } from "../FramerMotion/InView";
import { motion } from "framer-motion";

export const catalystHeroData = [
  {
    title:
      "Full-Service Oncology Clinical Research for Your Cancer Drug Development",
    description: `Catalyst Oncology, an exceptional clinical research organization with an
              extensive site network and experienced global teams, exclusively focuses
              on supporting innovative biotech companies. Our team brings exceptional
              results to next-generation studies.`,
    imgSrc: "/images/oncology-img.png",
    path: "/oncology-cro",
  },
  {
    title: "Flexible and Scalable FSP to Strengthen Your Clinical Trials",
    description:
      "Catalyst Flex is a multi-therapeutic functional solution provider with expertise in clinical operations, data management, biostatistics, safety and medical writing. We leverage experienced clinical research professionals to partner and address your study needs.",
    imgSrc: "/images/flex-img.png",
    path: "/catalyst-flex",
  },
];

export const CatalystHero: FC = () => {
  return (
    <section className="relative rounded-bl-[45px] overflow-hidden rounded-br-[45px] bg-[var(--bg-primary)] xl:py-44 w-full">
      <Container>
        <motion.div
          initial={{ x: "-50%", y: "-50%" }}
          animate={{ x: "-135%", y: "-90%" }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute top-[45%] left-[45%] aspect-square w-[clamp(544px,40.47vw,777px)]"
        >
          <div className="h-full w-full rounded-full border-[clamp(80px,8.85vw,170px)] border-[var(--clr-cyan)]" />
        </motion.div>

        <motion.div
          initial={{ x: "-50%", y: "-50%" }}
          animate={{ x: "33%", y: "-7%" }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute top-[55%] left-[55%] aspect-square w-[clamp(544px,40.47vw,777px)]"
        >
          <div className="h-full w-full rounded-full border-[clamp(80px,8.85vw,170px)] border-[var(--clr-green)]" />
        </motion.div>

        <div className="flex gap-x-5 [&>*]:max-w-[50%]">
          <InView
            delay={1}
            duration={1.1}
            classNameWrap="relative h-auto w-full"
            className="h-full"
          >
            <CardIconImg
              title={catalystHeroData[0].title}
              description={catalystHeroData[0].description}
              imgSrc={catalystHeroData[0].imgSrc}
              path={catalystHeroData[0].path}
              iconImgClassName="max-w-40"
              btnClassName="!border-[var(--clr-cyan)]"
              SvgWrapperClassName="!bg-[var(--clr-cyan)]"
              btnTitle="Learn About Catalyst Oncology"
              btnRightArrow
            />
          </InView>

          <InView
            delay={1.1}
            duration={1.2}
            classNameWrap="relative h-auto w-full"
            className="h-full"
          >
            <CardIconImg
              title={catalystHeroData[1].title}
              description={catalystHeroData[1].description}
              imgSrc={catalystHeroData[1].imgSrc}
              path={catalystHeroData[1].path}
              iconImgClassName="max-w-32"
              btnClassName="!border-[var(--clr-green)]"
              SvgWrapperClassName="!bg-[var(--clr-green)]"
              btnTitle="Learn About Catalyst Flex"
              btnRightArrow
            />
          </InView>
        </div>
      </Container>
    </section>
  );
};
