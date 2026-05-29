import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Links",
  description:
    "Official Always Tired NFTs links: OpenSea, Discord, X, donation wallet, and Etherscan contract.",
};

const links = [
  {
    title: "Collection Browser",
    body: "View all 7,777 NFTs from the metadata set",
    action: "Browse",
    href: "/collection",
    internal: true,
  },
  {
    title: "OpenSea",
    body: "View the Always Tired NFTs collection",
    action: "Open",
    href: siteConfig.links.openSea,
  },
  {
    title: "Discord",
    body: "Join the community rebuild",
    action: "Join",
    href: siteConfig.links.discord,
  },
  {
    title: "X / Twitter",
    body: "Follow updates and public posts",
    action: "Follow",
    href: siteConfig.links.x,
  },
  {
    title: "Donation Wallet",
    body: siteConfig.donation.donationWallet,
    action: "Verify",
    href: `${siteConfig.donation.etherscanBaseUrl}/address/${siteConfig.donation.donationWallet}`,
  },
  {
    title: "Etherscan Contract",
    body: siteConfig.contractAddress,
    action: "Verify",
    href: siteConfig.links.etherscanContract,
  },
];

export default function LinksPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Verified paths</p>
        <h1>Official links.</h1>
        <p>
          Use these links for the current community revival, collection activity,
          donation wallet, and contract verification.
        </p>
      </section>
      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #7777" id="7777" priority />
          </div>
          <div className="grid">
            {links.map((link) => (
              <a
                className="link-card reveal"
                href={link.href}
                key={link.title}
                rel={link.internal ? undefined : "noreferrer"}
                target={link.internal ? undefined : "_blank"}
              >
                <div>
                  <strong>{link.title}</strong>
                  <br />
                  <span>{link.body}</span>
                </div>
                <span>{link.action}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
