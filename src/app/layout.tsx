import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bond Cleaning Gold Coast & Brisbane | Bond Clean Specialist",
  description: "Top-rated end of lease bond cleaning, spring cleaning, and pest control service/flea treatment across the Gold Coast and Brisbane. 100% bond back guarantee.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au",
  },
  icons: {
    icon: "/logos/JBC-logo-JB-with-full-name-noBG.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}



