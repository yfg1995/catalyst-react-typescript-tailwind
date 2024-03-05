import { Home } from "@/components/Home/Home";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Catalyst" };

export default function HomePage() {
  return <Home />;
}
