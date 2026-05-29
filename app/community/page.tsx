import { ButtonLink } from "@/components/button-link";
import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Community",
  description:
    "The SleepyHeads community behind Always Tired NFTs: stewardship, games, $COFFEE, ME/CFS awareness, donations, and holder-guided decisions.",
};

const communityActions = [
  "Join Discord",
  "Play games",
  "Earn $COFFEE",
  "Join raffles",
  "Suggest donation destinations",
  "Share ME/CFS resources",
  "Donate NFTs or prize opportunities",
  "Vote as a holder when voting becomes available",
];

const holderActions = [
  {
    title: "Holder Voice",
    body: "Always Tired holders will help guide official community decisions, including future donation votes and major direction choices.",
  },
  {
    title: "Open Discussion",
    body: "Non-holders can still join the conversation, suggest donation destinations, share resources, and support the mission.",
  },
  {
    title: "Games & $COFFEE",
    body: "The SleepyHeads kept the project alive through Discord games, ClubGG poker, $COFFEE raffles, donated NFTs, and community events.",
  },
  {
    title: "Awareness Ambassadors",
    body: "Holders can help share credible ME/CFS resources, create awareness content, and keep the illness visible without speaking over patients or experts.",
  },
  {
    title: "Community Stewardship",
    body: "The donation wallet, contract/deployer access, Discord, website, and X account are in community hands.",
  },
  {
    title: "Other Ways to Support",
    body: "NFT donations, whitelist opportunities, and prize contributions may be used for games, raffles, sweep campaigns, and community events. Open a Discord ticket and discuss it with the team first.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">The SleepyHeads</p>
        <h1>The community is the project now.</h1>
        <p>
          The SleepyHeads are the reason Always Tired still exists. They stayed
          when the public side went stagnant, kept the games moving, donated
          prizes, joined raffles, kept $COFFEE alive, shared the art, and
          refused to let the project disappear.
        </p>
        <p>
          Now that the operational keys are finally in community hands, the
          SleepyHeads are not just watching what happens next. They are helping
          decide it.
        </p>
      </section>

      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #777" id="777" priority />
          </div>
          <div className="stack">
            <div className="copy-panel reveal">
              <p className="eyebrow">Still tired. Still here.</p>
              <h2 className="section-title">The SleepyHeads kept showing up.</h2>
              <p>
                Some are collectors. Some care deeply about ME/CFS. Some are
                here for the art, games, raffles, dark humour, and strange
                community moments. Most are probably some mix of all of it.
              </p>
              <p>
                Holding an Always Tired NFT gives you a voice in the community.
                It does not make you a doctor. It does not make you an expert.
                It does not make you better than anyone else who cares.
              </p>
              <p>
                It does make you part of the group that will guide official
                community decisions as the project moves forward.
              </p>
              <p>
                You do not need to own an NFT to learn, donate, care, or join
                the conversation. But holders will guide the official votes.
              </p>
            </div>

            <div className="copy-panel reveal">
              <p className="eyebrow">Community stewardship</p>
              <h2 className="section-title">The community holds the keys now.</h2>
              <p>
                Always Tired was never gone. It was carried by the SleepyHeads
                who kept showing up when there was no spotlight, no clear
                direction, and no guarantee that anything would change.
              </p>
              <p>
                Now the project finally has the access and transparency it
                needed.
              </p>
              <p>
                The donation wallet, contract/deployer access, Discord, website,
                and X account are in community hands.
              </p>
              <p>This is not a new founder era.</p>
              <p className="statement">
                This is the SleepyHeads taking care of what they refused to let
                disappear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">What SleepyHeads can do</p>
            <h2 className="section-title">Not passive holders. Active stewards.</h2>
            <p className="section-lede">
              They stayed when the public side went stagnant. They played the
              games. They donated prizes. They joined raffles. They kept
              $COFFEE moving. They shared the art. They refused to let the
              project disappear.
            </p>
            <p className="section-lede">
              Now that the keys are finally in community hands, the SleepyHeads
              are not just watching what happens next. They are helping decide
              it.
            </p>
          </div>
          <div className="grid three">
            {holderActions.map((action) => (
              <div className="card reveal" key={action.title}>
                <h3>{action.title}</h3>
                <p>{action.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Community actions</p>
              <h2 className="section-title">Enough people doing something.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Always Tired does not need everyone to do everything. It needs
                enough people doing something useful, honest, and visible.
              </p>
              <ul className="feature-list">
                {communityActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                The community should stay weird, funny, emotional, and human.
                It should also stay respectful around ME/CFS and the people
                living with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Discord</p>
              <h2 className="section-title">The work happens where SleepyHeads gather.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Discord is where holders can discuss ideas, suggest donation
                destinations, join games, follow $COFFEE conversations, bring
                up better ideas, and help keep the project honest.
              </p>
              <p>
                It is also the place to open a ticket if you want to donate NFTs,
                whitelist opportunities, or prize contributions for games,
                raffles, sweep campaigns, and community events.
              </p>
              <p>Do not send NFTs or assets without speaking with the team first.</p>
              <div className="actions">
                <ButtonLink className="primary" href="/discord">
                  Join the SleepyHeads
                </ButtonLink>
                <ButtonLink external href={siteConfig.links.traitOffers}>
                  View Trait Offers
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">May Be TIRED, But We&apos;re Not ASLEEP</p>
        <h2>Join the tired side of the fight.</h2>
        <p className="section-lede">
          You do not need to be loud to matter. You do not need to be an expert
          to help.
        </p>
        <p className="section-lede">You just need to care enough to stay involved.</p>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join Discord
          </ButtonLink>
          <ButtonLink href="/mission">Learn About ME/CFS</ButtonLink>
        </div>
      </section>
    </>
  );
}
