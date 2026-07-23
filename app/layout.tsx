import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studyoduvak.com"),

  title: {
    default: "Stüdyo Duvak | Ankara Fotoğraf Stüdyosu",
    template: "%s | Stüdyo Duvak",
  },

  description:
    "Ankara Beşevler'de düğün, mezuniyet, vesikalık, biyometrik, aile ve profesyonel stüdyo çekimleri. 40 yılı aşkın deneyimle Stüdyo Duvak.",

  keywords: [
    "Ankara fotoğrafçı",
    "Ankara fotoğraf stüdyosu",
    "Mezuniyet fotoğrafı",
    "Düğün fotoğrafçısı",
    "Vesikalık",
    "Biyometrik fotoğraf",
    "Stüdyo çekimi",
    "Aile fotoğrafı",
    "Stüdyo Duvak",
  ],

  authors: [{ name: "Stüdyo Duvak" }],

  creator: "Stüdyo Duvak",

  publisher: "Stüdyo Duvak",

  alternates: {
    canonical: "https://studyoduvak.com",
  },

  openGraph: {
    title: "Stüdyo Duvak | Ankara Fotoğraf Stüdyosu",
    description:
      "Mezuniyet, düğün, vesikalık, biyometrik ve profesyonel stüdyo çekimleri.",
    url: "https://studyoduvak.com",
    siteName: "Stüdyo Duvak",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Stüdyo Duvak",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stüdyo Duvak",
    description: "Ankara'nın profesyonel fotoğraf stüdyosu.",
    images: ["/images/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    name: "Stüdyo Duvak",
    image: "https://studyoduvak.com/images/hero.jpg",
    url: "https://studyoduvak.com",
    telephone: "+90 532 262 83 33",
    email: "studyoduvak@hotmail.com",
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mebusevleri, Dögol Cd. No:51/6",
      addressLocality: "Çankaya",
      addressRegion: "Ankara",
      postalCode: "06570",
      addressCountry: "TR",
    },
    openingHours: [
      "Mo-Fr 09:00-18:30",
      "Sa 10:00-15:30",
    ],
  };

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}