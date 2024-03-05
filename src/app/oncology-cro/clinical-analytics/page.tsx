import { ClinicalAnalytics } from "@/components/OncologyCro/ClinicalAnalytics/ClinicalAnalytics";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Clinical Analytics" };

export default function ClinicalAnalyticsPage() {
  return <ClinicalAnalytics />;
}
