import { CroServices } from "@/components/OncologyCro/CroServices/CroServices";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Cro Services" };

export default function CroServicesPage() {
  return <CroServices />;
}
