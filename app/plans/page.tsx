import { ButtonLink } from "@/components/button-link";
import { NftImage } from "@/components/nft-image";

export const metadata = {
  title: "Plans",
  description: "Public next steps for the Always Tired NFTs community-led revival.",
};

const items = [
  ["Now", "Website relaunch", "Restore an official home with verified links, collection context, ME/CFS awareness framing, and a stronger brand presentation."],
  ["Next", "Marketplace cleanup", "Improve how the collection appears across marketplaces and reduce confusion around contract, links, and collection identity."],
  ["Community", "Trait offers and holder votes", "Use trait-focused activity and holder input to make decisions feel participatory instead of top-down."],
  ["Rewards", "Community rewards", "Explore simple ways to recognize participation, creative contributions, and holder involvement without overpromising utility."],
  ["Awareness", "Donation transparency", "Discuss ME/CFS donation efforts with public reporting, clear recipients, and visible receipts when possible."],
  ["Later", "Contract or migration discussion", "If technical limitations create real problems, the community can evaluate whether a contract or migration discussion is needed."],
] as const;

export default function PlansPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">What comes next</p>
        <h1>A rebuild with visible steps.</h1>
        <p>
          This is a practical public plan, not a promise machine. Each step
          should be discussed with holders and updated as the community learns
          what is realistic.
        </p>
      </section>
      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #1000" id="1000" priority />
          </div>
          <div className="timeline">
            {items.map(([phase, title, body]) => (
              <div className="timeline-item reveal" key={title}>
                <strong>{phase}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="final-cta reveal">
        <p className="eyebrow">The tired still remain</p>
        <h2>Help decide what this becomes.</h2>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join the Discord
          </ButtonLink>
          <ButtonLink href="/donate">View the Fund</ButtonLink>
        </div>
      </section>
    </>
  );
}
