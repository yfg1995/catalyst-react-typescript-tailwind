import { FC } from "react";
import { LocationsTabItem } from "./LocationsTabItem";

export interface ILocationsTabIN {}

const locationsINInfoData = [
  {
    cityState: "Trivandrum, India",
    address:
      "Second Floor, Nila Building, Technopark Campus, Thiruvananthapuram , Kerala 695581",
  },
  {
    cityState: "Kochi, India",
    address:
      "8B Tower 1, Transasia, Cyber Park Infopark, Phase 2, Kochi, Kerala 682303",
  },
];

export const LocationsTabIN: FC<ILocationsTabIN> = () => {
  return (
    <>
      {locationsINInfoData.map((item, index) => (
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
