import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Clean | Bond Clean Specialist",
  description: "Finalize your booking request with Bond Clean Specialist.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/booking",
  },
};

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
