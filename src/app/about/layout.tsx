import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bond Clean Specialist",
  description: "Learn more about Your Trusted Local Cleaning Partner in Gold Coast. Our uniformed, trained, and insured team treats every property with the utmost respect.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
