import { ButtonLink } from "@/components/button-link";
import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Community",
  description:
    "The Always Tired NFTs community-led revival: holders, transparency, and a real place to rebuild.",
};

export default function CommunityPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Community takeover</p>
        <h1>The holders kept the lights on.</h1>
        <p>
          Always Tired NFTs is entering a holder-centered era built around
          transparency, realistic planning, and a shared reason to keep showing
          up.
        </p>
      </section>
      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #777" id="777" priority />
          </div>
          <div className="grid">
            <div className="copy-panel reveal">
              <h2 className="section-title">Quiet does not mean gone.</h2>
              <p>
                The project was too quiet for too long. This community revival
                starts by saying that plainly. The people still here deserve a
                cleaner home, official links, and a place where next steps can be
                discussed without pretending the past did not happen.
              </p>
            </div>
            <div className="grid two">
              {["Holder voice", "Open planning", "Better links", "Shared culture"].map(
                (title) => (
                  <div className="card reveal" key={title}>
                    <h3>{title}</h3>
                    <p>
                      A healthier project culture means clearer decisions,
                      visible tradeoffs, and a place for tired people to show up.
                    </p>
                  </div>
                ),
              )}
            </div>
            <div className="actions">
              <ButtonLink className="primary" href="/discord">
                Join the Discord
              </ButtonLink>
              <ButtonLink external href={siteConfig.links.openSea}>
                View Collection
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
