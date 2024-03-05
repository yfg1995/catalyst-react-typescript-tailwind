import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SegmentPathProvider } from "@/context/SegmentPathContext";
import { Main } from "../components/Main/Main";

// const inter = Inter({ subsets: ["latin"] });

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Catalyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth antialiased", barlow.variable)}
    >
      <body className="flex min-h-screen flex-col font-barlow">
        <SegmentPathProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </SegmentPathProvider>
      </body>
    </html>
  );
}
