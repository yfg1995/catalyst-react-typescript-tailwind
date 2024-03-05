import { Preclinical } from "@/components/OncologyCro/Preclinical/Preclinical";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Preclinical" };

export default function PreclinicalPage() {
  return <Preclinical />;
}
