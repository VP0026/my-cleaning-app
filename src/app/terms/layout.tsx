import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Bond Clean Specialist",
  description: "Terms of Service for Bond Clean Specialist. Read our policies, refund terms, access rules, and bond refund guarantee details.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/terms",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
