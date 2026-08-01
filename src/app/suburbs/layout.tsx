import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Bond Clean Specialist",
  description: "We provide professional cleaning services across Gold Coast and Brisbane. Check out our service areas.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/suburbs",
  },
};

export default function SuburbsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
