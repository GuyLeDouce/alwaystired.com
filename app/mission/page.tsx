import { DonationTracker } from "@/components/donation-tracker";
import { HolderVote } from "@/components/holder-vote";
import { NftImage } from "@/components/nft-image";

export const metadata = {
  title: "Mission",
  description:
    "The Always Tired NFTs mission: community, transparency, and careful ME/CFS awareness.",
};

export default function MissionPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Built for the tired</p>
        <h1>Awareness with care.</h1>
        <p>
          Always Tired NFTs can help make invisible illness more visible while
          staying honest about what the project can and cannot claim.
        </p>
      </section>
      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #1" id="1" priority />
          </div>
          <div className="grid">
            <div className="copy-panel reveal">
              <h2 className="section-title">ME/CFS awareness matters.</h2>
              <p>
                ME/CFS is often misunderstood, dismissed, or reduced to ordinary
                tiredness. This project uses the language of being tired, but the
                awareness direction should respect the difference between a meme
                and a serious chronic illness.
              </p>
              <p>
                The goal is to support awareness and future donation efforts
                where possible. Any future donation effort should be discussed
                clearly, tracked transparently, and never framed as a medical
                claim.
              </p>
            </div>
            <div className="grid three">
              <div className="card reveal">
                <span className="kicker">Respect</span>
                <h3>People first</h3>
                <p>Use the platform to listen, learn, and avoid flattening lived experience into slogans.</p>
              </div>
              <div className="card reveal">
                <span className="kicker">Clarity</span>
                <h3>No overpromising</h3>
                <p>Awareness work should be careful, plainspoken, and transparent about limitations.</p>
              </div>
              <div className="card reveal">
                <span className="kicker">Action</span>
                <h3>Future reporting</h3>
                <p>If donations happen, the community should see the destination, timing, and receipts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DonationTracker compact />
      <HolderVote />
    </>
  );
}
