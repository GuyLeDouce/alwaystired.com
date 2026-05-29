import { ButtonLink } from "@/components/button-link";
import { DonationTracker } from "@/components/donation-tracker";
import { Hero } from "@/components/hero";
import { HolderVote } from "@/components/holder-vote";
import { NftGallery } from "@/components/nft-gallery";
import { siteConfig } from "@/lib/site-config";

const nextSteps = [
  "Website relaunch",
  "Marketplace cleanup",
  "Trait offers",
  "Holder votes",
  "Community rewards",
  "Donation transparency",
  "Possible contract/migration discussion",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">The Silence Is Over</p>
            <h2 className="section-title">The project was quiet. The holders were not.</h2>
          </div>
          <div className="grid two">
            <div className="copy-panel reveal">
              <p>
                Always Tired went still for too long, but the real holders,
                collectors, and tired friends never fully left. This rebuild is
                about acknowledging that quiet period honestly and giving the
                community a clean place to gather again.
              </p>
            </div>
            <div className="copy-panel reveal">
              <p>
                The new site is not a hype-grab relaunch. It is a public
                starting point for better communication, clearer links,
                marketplace cleanup, holder conversations, and a more serious
                ME/CFS awareness direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Community Takeover</p>
            <h2 className="section-title">Holders first. Decisions in the open.</h2>
            <p className="section-lede">
              This era is about rebuilding properly: holder voices, public
              planning, realistic expectations, and transparent next steps.
            </p>
          </div>
          <NftGallery />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Built For The Tired</p>
            <h2 className="section-title">ME/CFS awareness deserves care, not slogans.</h2>
          </div>
          <div className="grid three">
            <div className="card reveal">
              <span className="kicker">Awareness</span>
              <h3>Invisible illness is real.</h3>
              <p>
                ME/CFS can be life-altering and misunderstood. Always Tired can
                use its art and community space to help more people listen,
                learn, and take invisible illness seriously.
              </p>
            </div>
            <div className="card reveal">
              <span className="kicker">Careful wording</span>
              <h3>No medical claims.</h3>
              <p>
                The project will not pretend art can treat illness. The goal is
                to support awareness and future donation efforts where possible,
                with clarity about what is happening and why.
              </p>
            </div>
            <div className="card reveal">
              <span className="kicker">Transparency</span>
              <h3>Receipts matter.</h3>
              <p>
                Any future donation effort should be visible, traceable, and
                explained plainly so holders understand the plan before the
                community asks anyone to trust it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DonationTracker />
      <HolderVote />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">What Comes Next</p>
            <h2 className="section-title">A rebuild with visible steps.</h2>
          </div>
          <div className="grid three">
            {nextSteps.map((step) => (
              <div className="card reveal" key={step}>
                <h3>{step}</h3>
                <p>
                  A public, practical step in the revival plan, shaped by
                  holder discussion and updated as the community rebuilds.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">May be tired, but we are not asleep</p>
        <h2>The coffee is brewing. Come wake up with us.</h2>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join the Discord
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.openSea}>
            View on OpenSea
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
