import { CroMedicalConsulting } from "@/components/OncologyCro/CroMedicalConsulting/CroMedicalConsulting";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "CRO Medical Consulting" };

export default function CroMedicalConsultingPage() {
  return <CroMedicalConsulting />;
}
