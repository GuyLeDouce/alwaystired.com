import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Always Tired NFTs | The Tired Still Remain",
    template: "%s | Always Tired NFTs",
  },
  description:
    "Always Tired NFTs is entering a community-led revival era for holders, community, and future ME/CFS awareness efforts.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Always Tired NFTs",
    description:
      "The Tired Still Remain. A community-led revival for holders, transparency, and ME/CFS awareness.",
    url: siteConfig.siteUrl,
    siteName: "Always Tired NFTs",
    images: [
      {
        url: "/assets/nfts/1000.jpg",
        width: 1600,
        height: 1600,
        alt: "Always Tired NFT #1000",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Always Tired NFTs",
    description:
      "The Tired Still Remain. A community-led revival for holders and ME/CFS awareness.",
    images: ["/assets/nfts/1000.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
