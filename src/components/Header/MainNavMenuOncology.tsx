import Link from "next/link";
import { FC } from "react";
import { RightArrow } from "@/svg/RightArrow";

const fullServiceCroData = [
  {
    value: "Full Service CRO",
    path: "/oncology-cro/full-service-cro",
  },
  {
    value: "Clinical Analytics",
    path: "/oncology-cro/clinical-analytics",
  },
  {
    value: "Site Network",
    path: "/oncology-cro/site-network",
  },
];

export const MainNavMenuOncology: FC = () => {
  return (
    <ul className="border-b-2 border-b-slate-200 md:border-0">
      {fullServiceCroData.map((item, index) => (
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
