import { FC } from "react";
import Link from "next/link";
import { RightArrow } from "@/svg/RightArrow";

const careersData = [{ value: "Our Culture", path: "/culture" }];

export const MainNavMenuCatalystCarrers: FC = () => {
  return (
    <ul className="border-b-2 border-b-slate-200 md:border-0">
      {careersData.map((item, index) => (
        <div
          key={index}
          className="group flex py-2 cursor-pointer items-center"
        >
          <li>
            <Link href={item.path}>{item.value}</Link>
          </li>

          <RightArrow className="ml-2 mt-1 opacity-0 md:group-hover:opacity-100 duration-300 ease-in-out" />
        </div>
      ))}
    </ul>
  );
};
