import { ButtonLink } from "@/components/button-link";
import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Community",
  description:
    "Always Tired NFTs community-led revival: holder ambassadors, ME/CFS awareness, transparent donations, and public participation.",
};

const ambassadorActions = [
  "Sharing educational content",
  "Helping correct misunderstandings about ME/CFS",
  "Supporting donation drives",
  "Submitting possible donation destinations",
  "Voting on where funds go",
  "Creating art or memes that point back to awareness",
  "Bringing new people into the conversation",
  "Representing the project with care",
];

const communityWork = [
  "Suggesting ME/CFS organizations or research facilities",
  "Sharing patient advocacy resources",
  "Helping decide donation destinations",
  "Creating awareness posts",
  "Participating in holder votes",
  "Supporting collection activity through Trait Offers",
  "Helping explain the project to new people",
  "Joining Discord discussions around $COFFEE, future utility, and awareness initiatives",
];

const loop = [
  {
    title: "Awareness brings attention.",
    body: "Content, art, posts, and community activity help more people learn about ME/CFS.",
  },
  {
    title: "Attention brings support.",
    body: "Support can come through donations, collector activity, partnerships, community campaigns, and outside interest.",
  },
  {
    title: "Support becomes action.",
    body: "Holders help source and vote on where donations should go.",
  },
  {
    title: "Action becomes proof.",
    body: "Donation results, transaction records, and updates are shared publicly.",
  },
  {
    title: "Proof builds trust.",
    body: "Trust gives the project a stronger foundation for the next campaign.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Holder ambassadors</p>
        <h1>The community is the project now.</h1>
        <p>
          Always Tired NFTs is being rebuilt around the people who stayed, the
          people who care, and the people willing to help turn a tired
          collection into an active awareness movement.
        </p>
        <p>
          The website is complete. Trait Offers are active. The donation wallet
          is public. The mission is clearer.
        </p>
        <p>Now the next step is community participation.</p>
      </section>

      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #777" id="777" priority />
          </div>
          <div className="stack">
            <div className="copy-panel reveal">
              <h2 className="section-title">Not passive holders. Active ambassadors.</h2>
              <p>
                Community-led does not mean chaos. It means the project should
                grow through visible discussion, holder input, shared
                responsibility, and transparent decision-making.
              </p>
              <p>
                Always Tired NFT holders will be encouraged to help shape the
                direction of the project, especially around donation sourcing
                and awareness campaigns.
              </p>
              <ul className="feature-list">
                {communityWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                The project does not need everyone to do everything. It needs
                enough people doing something.
              </p>
            </div>

            <div className="copy-panel reveal">
              <h2 className="section-title">Every holder can help carry the message.</h2>
              <p>
                The vision is for Always Tired NFT holders to become
                recognizable ambassadors for ME/CFS awareness.
              </p>
              <p>
                That does not mean every holder has to constantly post, donate,
                or run campaigns. It means holding an Always Tired NFT can
                become connected to a bigger purpose.
              </p>
              <ul className="feature-list">
                {ambassadorActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Always Tired should be weird, fun, emotional, and human, but it
                should also be respectful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">How support becomes action</p>
            <h2 className="section-title">A better structure for doing good.</h2>
            <p className="section-lede">
              The project&apos;s future should be built around a simple loop.
            </p>
          </div>
          <div className="grid three">
            {loop.map((step) => (
              <div className="card reveal" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
          <p className="section-lede spaced reveal">That loop is the real vision.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Build in public</p>
              <h2 className="section-title">The rebuild happens in public.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Discord is where holders can discuss ideas, suggest donation
                destinations, help shape $COFFEE utility, coordinate awareness
                pushes, and participate in future votes.
              </p>
              <p>
                This is where the community can ask hard questions, offer better
                ideas, and help keep the project honest.
              </p>
              <p>
                If Always Tired is going to become something meaningful, it
                needs the people who care to be part of the conversation.
              </p>
              <div className="actions">
                <ButtonLink className="primary" href="/discord">
                  Join the Discord
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
        <p className="eyebrow">May be tired, but we are not asleep</p>
        <h2>Join the tired side of the fight.</h2>
        <p className="section-lede">
          You do not need to be loud to matter. You do not need to be an expert
          to help.
        </p>
        <p className="section-lede">You just need to care enough to stay involved.</p>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join the Community
          </ButtonLink>
          <ButtonLink href="/mission">Read the Mission</ButtonLink>
        </div>
      </section>
    </>
  );
}
