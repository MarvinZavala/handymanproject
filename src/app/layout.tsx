import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Twin Handyman & Plumbing | Professional Plumbing Services Bay Area",
  description: "Expert plumbing services in San Leandro, Oakland, and Bay Area. 24/7 emergency service, free estimates. Licensed, bonded, insured. Call (510) 926-7272",
  keywords: "plumbing, handyman, San Leandro, Oakland, Bay Area, emergency plumbing, water heater, drain cleaning",
  authors: [{ name: "Twin Handyman & Plumbing" }],
  icons: {
    icon: "/handymanlogo.png",
    shortcut: "/handymanlogo.png",
    apple: "/handymanlogo.png",
  },
  openGraph: {
    title: "Twin Handyman & Plumbing | Professional Plumbing Services",
    description: "Expert plumbing services in Bay Area. 24/7 emergency service, free estimates.",
    type: "website",
    locale: "en_US",
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
      </body>
    </html>
  );
}
