import { OurPeople } from "@/components/Home/OurPeople/OurPeople";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Our People" };

export default function OurPeoplePage() {
  return <OurPeople />;
}
