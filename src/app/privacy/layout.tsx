import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bond Clean Specialist",
  description: "Privacy Policy for Bond Clean Specialist. Learn how we collect, use, and safeguard your personal information.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
