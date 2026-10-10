import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/seo/JsonLd";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1D41",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Plumber in San Leandro & Oakland | 24/7 Emergency | Twin Handyman & Plumbing",
    template: "%s | Twin Handyman & Plumbing",
  },
  description: "Licensed, bonded & insured plumbers serving San Leandro, Oakland and the Bay Area. 24/7 emergency plumbing, water heaters, drain cleaning, repiping & sewer laterals. Free estimates – call (510) 926-7272.",
  applicationName: "Twin Handyman & Plumbing",
  authors: [{ name: "Twin Handyman & Plumbing" }],
  category: "Plumbing",
  alternates: { canonical: "/" },
  icons: {
    icon: "/handymanlogo.png",
    apple: "/handymanlogo.png",
  },
  openGraph: {
    title: "Twin Handyman & Plumbing | Bay Area Plumber, 24/7 Emergency Service",
    description: "Licensed plumbers in San Leandro, Oakland and the Bay Area. 24/7 emergency service and free estimates.",
    url: "/",
    siteName: "Twin Handyman & Plumbing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BottomNavbar />
        <Toaster />
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
