import { CollectionBrowser } from "@/components/collection-browser";

export const metadata = {
  title: "Collection",
  description:
    "Browse all 7,777 Always Tired NFTs from the official metadata set, including artwork and traits.",
};

export default function CollectionPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Always Tired NFTs</p>
        <h1>The full collection.</h1>
        <p>
          A public browser for the Always Tired NFTs metadata set. Search by
          token number, name, or trait, then open any NFT on OpenSea.
        </p>
      </section>
      <CollectionBrowser />
    </>
  );
}
