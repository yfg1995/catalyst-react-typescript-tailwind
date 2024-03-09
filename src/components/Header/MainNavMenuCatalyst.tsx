import Link from "next/link";
import { FC } from "react";
import { RightArrow } from "@/svg/RightArrow";
import { AnimationOpacityMotion } from "../FramerMotion/AnimationOpacityMotion";
import { AnimatePresence } from "framer-motion";

const aboutCatalystData = [
  {
    value: "Our Purpose",
    path: "/our-purpose",
  },
  {
    value: "Our People",
    path: "/our-people",
  },
  {
    value: "Our Board",
    path: "/our-board",
  },
  {
    value: "Our Partners",
    path: "/our-partners",
  },
  {
    value: "News",
    path: "/news-blog",
  },
];

export const MainNavMenuCatalyst: FC = () => {
  return (
    <ul className="border-b-2 border-b-slate-200 md:border-0">
      <AnimatePresence>
        {aboutCatalystData.map((item, index) => (
          <div
            key={index}
            className="group flex py-2 cursor-pointer items-center"
          >
            <AnimationOpacityMotion delay={index * 0.06}>
              <Link href={item.path}>{item.value}</Link>
            </AnimationOpacityMotion>

            <RightArrow className="ml-2 mt-1 opacity-0 md:group-hover:opacity-100 duration-300 ease-in-out" />
          </div>
        ))}
      </AnimatePresence>
    </ul>
  );
};
