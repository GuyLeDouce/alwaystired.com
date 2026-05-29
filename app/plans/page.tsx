import { ButtonLink } from "@/components/button-link";
import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Plans",
  description:
    "Visible next steps for Always Tired NFTs: website polish, collection viewer, Trait Offers, donation transparency, ME/CFS resources, $COFFEE review, and community accountability.",
};

const nextSteps = [
  {
    title: "Website Polish",
    body: "Keep improving the website as the home base for the collection, ME/CFS resources, donation tracking, project links, and community information.",
  },
  {
    title: "Collection Viewer",
    body: "Preserve and improve the collection browsing experience so people can explore tokens, traits, and the full Always Tired collection.",
  },
  {
    title: "Trait Offers",
    body: "Trait Offers are already complete and can continue helping collectors interact with the collection in a cleaner way.",
  },
  {
    title: "Donation Transparency",
    body: "Track the public wallet, show donation progress clearly, explain where funds may go, and post proof when funds are distributed.",
  },
  {
    title: "Holder Voting",
    body: "Build a holder-only website section in the future so SleepyHeads can vote on donation destinations and major community decisions.",
  },
  {
    title: "ME/CFS Resources",
    body: "Add better educational resources and make the site a useful starting point for learning about ME/CFS.",
  },
  {
    title: "Stories From The Tired",
    body: "Create a respectful place for real stories from people living with ME/CFS, loved ones, caregivers, and SleepyHeads who want to share.",
  },
  {
    title: "$COFFEE Review",
    body: "Review the role of $COFFEE carefully so it can serve the community better without fake promises or forced mechanics.",
  },
  {
    title: "Community Events",
    body: "Continue the games, raffles, poker, and Discord activity that helped keep Always Tired alive.",
  },
  {
    title: "Public Accountability",
    body: "Keep decisions, funds, and direction as visible as possible.",
  },
];

const awarenessTools = [
  "Emotional awareness graphics",
  "Short educational posts",
  "Holder-created content",
  "Threads explaining ME/CFS and PEM",
  "Donation campaign updates",
  "Community art events",
  "Spaces or interviews with advocates, caregivers, or researchers",
  "Simple resource pages for people who want to learn",
];

const possibleDirections = [
  "Holder voting portal",
  "Donation nomination forms",
  "Verified ambassador roles",
  "$COFFEE recognition for awareness participation",
  "ME/CFS resource hub",
  "Community art campaigns",
  "Monthly awareness pushes",
  "Advocacy group conversations",
  "Research spotlight posts",
  "Transparent donation reports",
  "Collector recognition tied to participation",
  "Trait-based community events",
];

export default function PlansPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Visible next steps</p>
        <h1>What we&apos;re working on.</h1>
        <p>
          This is not a list of hype promises. It is a visible look at what the
          SleepyHeads are improving, discussing, and building toward.
        </p>
        <p>
          No fake deadlines. No pretending Web3 is easy. Just the work in front
          of us.
        </p>
      </section>

      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #1000" id="1000" priority />
          </div>
          <div>
            <div className="section-head reveal">
              <p className="eyebrow">Built and active</p>
              <h2 className="section-title">The foundation is real.</h2>
              <p className="section-lede">
                The website is live. The collection viewer is finished. Trait
                Offers are active. The donation wallet is public.
              </p>
            </div>
            <div className="grid two">
              {nextSteps.map((item) => (
                <div className="card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Community takeover</p>
              <h2 className="section-title">From stewardship to movement.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                The next phase is about creating systems that help the community
                do more than talk.
              </p>
              <p>
                That can include awareness events, donation drives, holder
                votes, creator campaigns, educational posts, Discord tools, and
                better ways to recognize people helping the mission.
              </p>
              <p>
                This should be built carefully. Some ideas will work. Some will
                change. Some will need holder feedback before they become real.
              </p>
              <p>No empty promises. No fake hype. Just transparency, awareness, and community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">The Coffee Is Still Brewing</p>
            <h2 className="section-title">$COFFEE is under review.</h2>
            <p className="section-lede">
              $COFFEE has always been part of the SleepyHead experience, but it
              needs to be reviewed carefully as the community takeover continues.
            </p>
          </div>
          <div className="copy-panel reveal">
            <p>
              $COFFEE is an off-chain Discord token tied to DRIP. It is earned
              passively by holding Always Tired NFTs, claimed by holders, earned
              through ME/CFS Warriors games in Discord, earned through ClubGG
              poker and top 5 poker placements, and used mainly to buy raffle
              tickets for monthly NFT prizes.
            </p>
            <p>
              It is not money. It is not on-chain. It is not an investment. It
              has no monetary value.
            </p>
            <p>
              Something needs to change, but that does not mean forced
              mechanics, financial promises, or fake value. It means taking time
              to ask what role $COFFEE should actually play for a community
              built around awareness, games, collecting, and participation.
            </p>
            <p className="statement">No promises yet. The coffee is still brewing.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Holder-guided support</p>
              <h2 className="section-title">Holders help decide where support goes.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Always Tired should not randomly pick donation destinations
                behind closed doors. The better model is holder-led sourcing and
                voting.
              </p>
              <p>
                The community can suggest possible organizations, research
                facilities, advocacy groups, and support initiatives. Those
                options can be discussed, reviewed, and narrowed down. Then
                holders can vote on where funds should go.
              </p>
              <p>
                This gives the donation process more legitimacy and makes
                holders part of the mission instead of spectators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Education and culture</p>
            <h2 className="section-title">Education, art, and community can work together.</h2>
            <p className="section-lede">
              Always Tired can raise awareness in ways that feel natural to the
              project.
            </p>
          </div>
          <div className="copy-panel reveal">
            <ul className="feature-list">
              {awarenessTools.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              This lets the project stay true to its art and culture while also
              being useful.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Possible directions</p>
            <h2 className="section-title">What could be possible.</h2>
            <p className="section-lede">
              These are possible directions, not confirmed promises.
            </p>
          </div>
          <div className="grid three">
            {possibleDirections.map((item) => (
              <div className="card reveal" key={item}>
                <h3>{item}</h3>
                <p>
                  A possible future direction that would need community feedback,
                  careful design, and clear communication before becoming real.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">The Tired Still Remain</p>
        <h2>This is how the tired wake up.</h2>
        <p className="section-lede">
          Always Tired does not need fake hype. It needs clear purpose, visible
          action, community trust, and holders who care enough to help shape
          what comes next.
        </p>
        <p className="section-lede">The foundation is built. Now the mission can grow.</p>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join Discord
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.traitOffers}>
            View Trait Offers
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
