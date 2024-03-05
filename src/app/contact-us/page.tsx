import { ContactUs } from "@/components/ContactUs/ContactUs";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function () {
  return <ContactUs />;
}
