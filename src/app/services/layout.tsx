import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Bond Clean Specialist",
  description: "Professional cleaning and maintenance services on the Gold Coast including bond cleaning, carpet steam cleaning, pest control service/flea treatment, painting, and more.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/services",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
