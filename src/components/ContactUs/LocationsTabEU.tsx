import { FC } from "react";
import { LocationsTabItem } from "./LocationsTabItem";

export interface ILocationsTabEU {}

const locationsEUInfoData = [
  {
    cityState: "United Kingdom",
    address: "Alderley Park, Block 11, Alderley Edge, SK10 4ZF, UK",
    phone: "+44 1625 810 241",
  },
  {
    cityState: "The Netherlands",
    address: "Schiphol Boulevard 359, 1118 BJ Schiphol, The Netherlands",
  },
];

export const LocationsTabEU: FC<ILocationsTabEU> = () => {
  return (
    <>
      {locationsEUInfoData.map((item, index) => (
        <LocationsTabItem
          key={index}
          cityState={item.cityState}
          address={item.address}
          phone={item.phone}
          animationDelay={index * 0.1}
        />
      ))}
    </>
  );
};
