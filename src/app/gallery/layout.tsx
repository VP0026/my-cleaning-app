import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Bond Clean Specialist",
  description: "View our gallery of past cleaning jobs and see the quality of our work firsthand.",
  keywords: "Bond Clean Specialist,Bond Cleaning Gold Coast,End of Lease Cleaning Gold Coast,Exit Cleaning Gold Coast,Carpet Steam Cleaning Gold Coast,Deep Cleaning Gold Coast",
  alternates: {
    canonical: "https://bondclean.au/gallery",
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
