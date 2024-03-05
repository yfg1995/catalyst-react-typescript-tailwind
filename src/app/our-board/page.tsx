import { OurBoard } from "@/components/Home/OurBoard/OurBoard";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Our Board" };

export default function OurBoardPage() {
  return <OurBoard />;
}
