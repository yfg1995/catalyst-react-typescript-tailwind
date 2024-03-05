import { NewsBlog } from "@/components/Home/News/News";
import { type Metadata } from "next";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return <NewsBlog />;
}
