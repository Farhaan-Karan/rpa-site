import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { BackToTop } from "@/components/motion/back-to-top";
import { Preloader } from "@/components/motion/preloader";
import { siteConfig } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rajasthan Pickleball Association — The Home of Pickleball in Rajasthan",
    template: "%s · Rajasthan Pickleball Association",
  },
  description:
    "The official governing body for pickleball in Rajasthan. Growing the sport through community, competition, development and excellence across Jaipur, Jodhpur, Udaipur, Kota, Ajmer and Bikaner.",
  keywords: [
    "Rajasthan Pickleball Association",
    "RPA",
    "pickleball Rajasthan",
    "pickleball Jaipur",
    "pickleball tournaments India",
    "pickleball courts",
    "pickleball rankings",
  ],
  authors: [{ name: "Rajasthan Pickleball Association" }],
  openGraph: {
    title: "Rajasthan Pickleball Association",
    description:
      "The official home of pickleball in Rajasthan — community, competition, development and excellence.",
    url: siteConfig.url,
    siteName: "Rajasthan Pickleball Association",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan Pickleball Association",
    description: "The official home of pickleball in Rajasthan.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Rajasthan Pickleball Association",
  alternateName: "RPA",
  sport: "Pickleball",
  url: siteConfig.url,
  areaServed: "Rajasthan, India",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    addressLocality: "Jaipur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${caveat.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
