import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Links",
  description:
    "Official Always Tired NFT links, collection tools, donation wallet, marketplace pages, and trusted ME/CFS learning resources.",
};

const projectLinks = [
  {
    title: "Website",
    body: "The official Always Tired NFTs home",
    action: "Open",
    href: siteConfig.siteUrl,
  },
  {
    title: "Collection Viewer",
    body: "Browse all 7,777 NFTs, search traits, and view characters",
    action: "Browse",
    href: "/collection",
    internal: true,
  },
  {
    title: "OpenSea Collection",
    body: "View the Always Tired NFTs collection on OpenSea",
    action: "Open",
    href: siteConfig.links.openSea,
  },
  {
    title: "Trait Offers",
    body: "Trait Offers are active for targeted collection activity",
    action: "View",
    href: siteConfig.links.traitOffers,
  },
  {
    title: "Discord",
    body: "Join the community revival and holder discussions",
    action: "Join",
    href: siteConfig.links.discord,
  },
  {
    title: "X / Twitter",
    body: "Follow updates, awareness posts, and public project notes",
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

const resourceLinks = [
  {
    title: "CDC ME/CFS Information",
    body: "A clear introduction to ME/CFS symptoms, post-exertional malaise, diagnosis basics, and clinical information.",
    href: "https://www.cdc.gov/me-cfs/",
  },
  {
    title: "NIH ME/CFS Research",
    body: "Research-focused information describing ME/CFS as a serious, chronic, complex systemic disease.",
    href: "https://www.nih.gov/advancing-mecfs-research",
  },
  {
    title: "Open Medicine Foundation",
    body: "A research organization funding collaborative work into ME/CFS, Long COVID, and related chronic complex diseases.",
    href: "https://www.omf.ngo/",
  },
  {
    title: "Solve M.E.",
    body: "A nonprofit focused on research, advocacy, and education for ME/CFS, Long COVID, and post-infection diseases.",
    href: "https://solvecfs.org/",
  },
  {
    title: "MEAction",
    body: "A patient-led advocacy movement working to build recognition, education, and action around ME/CFS.",
    href: "https://www.meaction.net/",
  },
];

export default function LinksPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Official links and resources</p>
        <h1>Official links and trusted resources.</h1>
        <p>
          Find the official Always Tired NFT links, collection tools, donation
          wallet, marketplace pages, and helpful ME/CFS learning resources.
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

            <div>
              <div className="section-head reveal">
                <p className="eyebrow">ME/CFS learning resources</p>
                <h2 className="section-title">Learn before you speak for the mission.</h2>
              </div>
              <div className="grid">
                {resourceLinks.map((link) => (
                  <a
                    className="link-card reveal"
                    href={link.href}
                    key={link.title}
                    rel="noreferrer"
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
