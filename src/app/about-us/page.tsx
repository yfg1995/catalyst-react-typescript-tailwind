import { AboutUs } from "@/components/AboutUs/AboutUs";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

export default function AboutUsPage() {
  return <AboutUs />;
}
