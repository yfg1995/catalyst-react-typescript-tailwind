import { OncologyInsights } from "@/components/OncologyCro/OncologyInsights/OncologyInsights";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Oncology Insights" };

export default function OncologyInsightsPage() {
  return <OncologyInsights />;
}
