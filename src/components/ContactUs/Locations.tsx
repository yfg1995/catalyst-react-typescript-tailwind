import { FC } from "react";
import { Container } from "../Container";
import { Tabs } from "../Tabs";
import { Heading } from "../Heading";
import { LocationsTabUS } from "./LocationsTabUS";
import { LocationsTabEU } from "./LocationsTabEU";
import { LocationsTabIN } from "./LocationsTabIN";
import { LocationsTabAU } from "./LocationsTabAU";
import { Section } from "../Section";

const locationsTabs = [
  {
    id: "1",
    title: "united states",
    content: <LocationsTabUS />,
  },
  {
    id: "2",
    title: "europe",
    content: <LocationsTabEU />,
  },
  {
    id: "3",
    title: "india",
    content: <LocationsTabIN />,
  },
  {
    id: "4",
    title: "australia",
    content: <LocationsTabAU />,
  },
];

export interface ILocations {
  title: string;
}

export const Locations: FC<ILocations> = ({ title }) => {
  return (
    <Section className="bg-[#FFFEFC]">
      <Container>
        <Heading title={title} className="text-center mb-10" />

        <Tabs tabs={locationsTabs} />
      </Container>
    </Section>
  );
};
