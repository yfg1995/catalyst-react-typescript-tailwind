import { FC } from "react";
import { LocationsTabItem } from "./LocationsTabItem";

export interface ILocationsTabUS {}

const locationsUSInfoData = [
  {
    title: "corporate hq",
    cityState: "Wilmington, North Carolina",
    address: "2528 Independence Blvd, Suite 100, Wilmington, NC 28412",
    phone: "+1.919.648.0668",
  },
  {
    cityState: "Raleigh, North Carolina",
    address: "8041 Arco Corporate Drive, Suite 100, Raleigh, NC 27617",
  },
  {
    cityState: "Clinton, Connecticut",
    address: "6 Post Office Square, Clinton, CT 06413",
  },
  {
    cityState: "Waltham, Massachusetts",
    address: "303 Wyman Street, Suite 300, Waltham, MA 02451",
  },
];

export const LocationsTabUS: FC<ILocationsTabUS> = () => {
  return (
    <>
      {locationsUSInfoData.map((item, index) => (
        <LocationsTabItem
          key={index}
          title={item.title}
          cityState={item.cityState}
          address={item.address}
          phone={item.phone}
          animationDelay={index * 0.1}
        />
      ))}
    </>
  );
};
