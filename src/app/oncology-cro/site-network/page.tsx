import { SiteNetwork } from "@/components/OncologyCro/SiteNetwork/SiteNetwork";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Site Network" };

export default function SiteNetworkPage() {
  return <SiteNetwork />;
}
