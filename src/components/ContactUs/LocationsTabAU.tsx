import { FC } from "react";
import { LocationsTabItem } from "./LocationsTabItem";

export interface ILocationsTabAU {}

const locationsAUInfoData = [
  {
    cityState: "Melbourne, Australia",
    address:
      "Office 105, Level 10, 222 Exhibition St, Melbourne, Victoria 3000",
  },
];

export const LocationsTabAU: FC<ILocationsTabAU> = () => {
  return (
    <>
      {locationsAUInfoData.map((item, index) => (
        <LocationsTabItem
          key={index}
          cityState={item.cityState}
          address={item.address}
          animationDelay={index * 0.1}
        />
      ))}
    </>
  );
};
