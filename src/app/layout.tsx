import type { Metadata } from "next";
import { Work_Sans, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import { COMPANY } from "@/lib/data";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | Victoria Falls, Zimbabwe`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Family Travel and Tours is a Victoria Falls-based travel company creating memorable travel experiences across Zimbabwe and Southern Africa. Together We Explore. Together We Create Memories.",
  keywords: [
    "Victoria Falls travel",
    "Victoria Falls tours",
    "Zimbabwe safaris",
    "family travel Zimbabwe",
    "family holidays",
    "Victoria Falls accommodation",
    "Hwange safari",
    "Zambezi sunset cruise",
    "Southern Africa tours",
    "tailor-made holidays",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "travel",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Victoria Falls, Zimbabwe`,
    description:
      "Together We Explore. Together We Create Memories. Family Travel and Tours is based in Victoria Falls, Zimbabwe, offering tours, safaris, experiences and accommodation across Zimbabwe and Southern Africa.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Victoria Falls, Zimbabwe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Victoria Falls, Zimbabwe`,
    description:
      "Victoria Falls-based travel company offering tours, safaris, experiences and accommodation across Zimbabwe and Southern Africa.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description:
    "Family Travel and Tours is a Victoria Falls-based travel company offering tours, safaris, experiences, transfers and accommodation across Zimbabwe and Southern Africa.",
  telephone: COMPANY.phones[0],
  email: COMPANY.email,
  priceRange: "$$",
  currenciesAccepted: "USD, ZWL",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9216 Mkhosana",
    addressLocality: "Victoria Falls",
    addressRegion: "Matabeleland North",
    addressCountry: "ZW",
  },
  areaServed: ["Zimbabwe", "Botswana", "Zambia", "Southern Africa"],
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.phones[0],
      contactType: "customer service",
      areaServed: "WW",
      availableLanguage: ["English"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Family Travel and Tours - Victoria Falls, Zimbabwe. Tours, safaris, experiences, transfers and accommodation.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${seasons.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <SmoothScroll>
          {children}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}