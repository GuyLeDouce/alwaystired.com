import { NftImage } from "@/components/nft-image";
import { meCfsResources, siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Links",
  description:
    "Official Always Tired NFT links, collection tools, donation wallet, OpenSea, Etherscan, and ME/CFS learning resources.",
};

const projectLinks = [
  {
    title: "Website",
    body: "The official Always Tired NFTs home.",
    action: "Open",
    href: siteConfig.siteUrl,
  },
  {
    title: "Collection Viewer",
    body: "Browse all 7,777 NFTs, search tokens, and explore traits.",
    action: "Browse",
    href: "/collection",
    internal: true,
  },
  {
    title: "OpenSea Collection",
    body: "View the Always Tired NFTs collection on OpenSea.",
    action: "Open",
    href: siteConfig.links.openSea,
  },
  {
    title: "Trait Offers",
    body: "Trait Offers are active for targeted collection activity.",
    action: "View",
    href: siteConfig.links.traitOffers,
  },
  {
    title: "Discord",
    body: "Join the SleepyHeads and community discussions.",
    action: "Join",
    href: "https://alwaystirednfts.com/discord",
  },
  {
    title: "X / Twitter",
    body: "Follow @alwaystirednfts for official updates.",
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
        <p className="eyebrow">Official links and trusted resources</p>
        <h1>Official links and trusted resources.</h1>
        <p>
          Find the official Always Tired NFT links, collection tools, donation
          wallet, marketplace pages, and helpful ME/CFS learning resources.
        </p>
        <p>
          External ME/CFS links are educational starting points, not official
          Always Tired partners unless stated separately.
        </p>
      </section>

      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #7777" id="7777" priority />
          </div>
          <div className="stack">
            <div>
              <div className="section-head reveal">
                <p className="eyebrow">Official project links</p>
                <h2 className="section-title">Always use verified paths.</h2>
              </div>
              <div className="grid">
                {projectLinks.map((link) => (
                  <a
                    aria-label={`${link.title}: ${link.body}`}
                    className="link-card reveal"
                    href={link.href}
                    key={link.title}
                    rel={link.internal ? undefined : "noopener noreferrer"}
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

            <div>
              <div className="section-head reveal">
                <p className="eyebrow">ME/CFS learning resources</p>
                <h2 className="section-title">Learn before you speak for the mission.</h2>
                <p className="section-lede">
                  These resources are starting points for learning, not medical
                  advice.
                </p>
              </div>
              <div className="grid">
                {meCfsResources.map((link) => (
                  <a
                    aria-label={`Open ${link.title} in a new tab`}
                    className="link-card reveal"
                    href={link.href}
                    key={link.title}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div>
                      <strong>{link.title}</strong>
                      <br />
                      <span>{link.body}</span>
                    </div>
                    <span>Open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
