import type { Metadata } from "next";
import { Work_Sans, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const seasons = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-seasons",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://familytraveltours.example.com"),
  title: {
    default: "Family Travel and Tours | Victoria Falls, Zimbabwe",
    template: "%s | Family Travel and Tours",
  },
  description:
    "Family Travel and Tours is a Victoria Falls-based travel company creating memorable travel experiences across Zimbabwe and Southern Africa. Together We Explore. Together We Create Memories.",
  keywords: [
    "Victoria Falls",
    "Zimbabwe travel",
    "family travel",
    "safari",
    "tours",
    "Zambezi",
    "Hwange",
    "Chobe",
  ],
  authors: [{ name: "Family Travel and Tours" }],
  openGraph: {
    title: "Family Travel and Tours | Victoria Falls, Zimbabwe",
    description:
      "Together We Explore. Together We Create Memories. Family Travel and Tours is based in Victoria Falls, Zimbabwe.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${seasons.variable}`}>
      <body>
        <SmoothScroll>
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
