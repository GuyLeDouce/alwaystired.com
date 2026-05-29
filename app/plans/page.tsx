import { ButtonLink } from "@/components/button-link";
import { NftImage } from "@/components/nft-image";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Plans",
  description:
    "The Always Tired NFTs vision: completed foundations, ME/CFS awareness, $COFFEE future utility, holder voting, and transparent community action.",
};

const foundations = [
  {
    title: "Website completed",
    body: "The project now has a central public hub for collection browsing, donation tracking, mission information, links, and updates.",
  },
  {
    title: "Trait Offers completed",
    body: "Trait Offers are live, helping bring new marketplace activity and collector focus to the collection.",
  },
  {
    title: "Donation structure started",
    body: "A public wallet gives the community a transparent place to begin building support.",
  },
  {
    title: "ME/CFS mission clarified",
    body: "The project now has a clear awareness direction and a reason to exist beyond collection nostalgia.",
  },
  {
    title: "Holder role defined",
    body: "Always Tired holders are being positioned as ambassadors, voters, researchers, contributors, and supporters.",
  },
];

const coffeeDirections = [
  "Rewards for awareness posts",
  "Recognition for holders who help source donation destinations",
  "Creator rewards for ME/CFS awareness content",
  "Participation rewards for Discord events",
  "Voting or reputation layers",
  "Community challenges",
  "Campaign-based incentives",
  "Integration with holder activity",
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
  "$COFFEE rewards for awareness participation",
  "ME/CFS resource hub",
  "Community art campaigns",
  "Monthly awareness pushes",
  "Partnerships with advocacy groups",
  "Research spotlight posts",
  "Transparent donation reports",
  "Collector incentives tied to participation",
  "Trait-based community events",
];

export default function PlansPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Vision</p>
        <h1>The foundation is complete. Now the vision expands.</h1>
        <p>
          The website is live. The collection viewer is finished. Trait Offers
          are active. The donation wallet is public.
        </p>
        <p>
          The next phase is about participation, awareness, $COFFEE utility, and
          transparent community action.
        </p>
      </section>

      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #1000" id="1000" priority />
          </div>
          <div>
            <div className="section-head reveal">
              <p className="eyebrow">Completed foundations</p>
              <h2 className="section-title">Completed foundations. Clearer direction.</h2>
            </div>
            <div className="grid two">
              {foundations.map((item) => (
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
              <p className="eyebrow">Next phase</p>
              <h2 className="section-title">From revival to movement.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                The next phase is about creating systems that help the community
                do more than talk.
              </p>
              <p>
                That can include awareness events, donation drives, holder
                votes, creator campaigns, educational posts, $COFFEE incentives,
                Discord tools, and better ways to recognize people helping the
                mission.
              </p>
              <p>
                This should be built carefully. Some ideas will work. Some will
                change. Some will need holder feedback before they become real.
              </p>
              <p>The goal is not to overpromise. The goal is to move with purpose.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">$COFFEE future utility</p>
            <h2 className="section-title">$COFFEE should become part of the mission.</h2>
            <p className="section-lede">
              $COFFEE already exists in the Always Tired ecosystem, but its
              future role should become more meaningful than raffles alone.
            </p>
          </div>
          <div className="copy-panel reveal">
            <p>
              The vision is to explore how $COFFEE can support participation,
              awareness, contribution, and community activity.
            </p>
            <ul className="feature-list">
              {coffeeDirections.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Nothing is final yet, and more details will come later. But the
              direction is clear: $COFFEE should help power the people doing the
              work.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Holder-led support</p>
              <h2 className="section-title">Holders help decide where support goes.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Always Tired should not randomly pick donation destinations
                behind closed doors.
              </p>
              <p>The better model is holder-led sourcing and voting.</p>
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
              These are possible directions, not guaranteed promises.
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
        <p className="eyebrow">The tired still remain</p>
        <h2>This is how the tired wake up.</h2>
        <p className="section-lede">
          Always Tired does not need fake hype. It needs clear purpose, visible
          action, community trust, and holders who care enough to help shape
          what comes next.
        </p>
        <p className="section-lede">The foundation is built. Now the mission can grow.</p>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join the Discord
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.traitOffers}>
            View Trait Offers
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
