import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bond Clean Specialist",
  description: "Get a free quote for bond, carpet, or spring cleaning on the Gold Coast. Contact Bond Clean Specialist via our form, phone, or email. We're ready to help!",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
