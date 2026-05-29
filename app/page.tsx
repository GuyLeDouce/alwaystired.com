import { ButtonLink } from "@/components/button-link";
import { Hero } from "@/components/hero";
import { siteConfig } from "@/lib/site-config";

const foundationCards = [
  {
    title: "Website completed",
    body: "The new Always Tired NFTs website is live as the official home for the community revival, collection information, donation tracking, awareness direction, and verified links.",
  },
  {
    title: "Collection viewer completed",
    body: "The full collection viewer makes it easier to browse the 7,777 NFTs, search traits, and reconnect with the art.",
  },
  {
    title: "Trait Offers completed",
    body: "Trait Offers are now active, helping bring more collector movement, targeted buying, and marketplace activity back to the collection.",
  },
  {
    title: "Donation wallet live",
    body: "The public donation wallet gives the community a transparent way to track funds and build toward meaningful support.",
  },
  {
    title: "Community direction established",
    body: "The project now has a clearer purpose: ME/CFS awareness, holder-led decisions, transparent donation sourcing, and a stronger role for the existing ecosystem.",
  },
];

const awarenessGoals = [
  "Turning holders into ME/CFS awareness ambassadors.",
  "Using the website as a hub for education, updates, donation tracking, and community decisions.",
  "Helping the community research and suggest the best places to donate.",
  "Creating transparent votes so holders help decide where support goes.",
  "Using $COFFEE for more than raffles.",
  "Building simple tools, campaigns, and incentives that reward awareness, participation, and contribution.",
  "Creating an ecosystem where the collection has culture, purpose, and movement again.",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Community-led revival</p>
            <h2 className="section-title">Not just a comeback. A new purpose.</h2>
          </div>
          <div className="grid two">
            <div className="copy-panel reveal">
              <p>
                Always Tired NFTs is entering a new chapter with more clarity
                than ever before.
              </p>
              <p>
                This is not about pretending the project was always active. It
                was not. This is not about promising a giant roadmap to create
                hype. It does not need that either.
              </p>
            </div>
            <div className="copy-panel reveal">
              <p>
                This is about taking what already exists: the art, the holders,
                the community, the $COFFEE token, the website, the public
                donation wallet, Trait Offers, and the attention around the
                project, and aiming it toward something that matters.
              </p>
              <p>
                Always Tired is now being shaped into a holder-led awareness
                ecosystem where collectors are not just passive owners. They are
                potential advocates, fundraisers, educators, voters, and
                ambassadors for ME/CFS awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">ME/CFS awareness</p>
            <h2 className="section-title">
              Because &quot;tired&quot; does not begin to explain it.
            </h2>
          </div>
          <div className="grid two">
            <div className="copy-panel reveal">
              <p>
                ME/CFS, short for Myalgic Encephalomyelitis/Chronic Fatigue
                Syndrome, is a serious, chronic, complex illness that can deeply
                affect a person&apos;s ability to function.
              </p>
              <p>
                One of the defining symptoms is post-exertional malaise, often
                called PEM. This means symptoms can worsen after physical,
                mental, emotional, or social effort that may have been
                manageable before illness. For many people, the crash can last
                for days or weeks.
              </p>
            </div>
            <div className="copy-panel reveal">
              <p>
                ME/CFS is not laziness. It is not normal tiredness. It is not
                something people can simply push through.
              </p>
              <p>
                And that is why this project matters. Always Tired can use its
                name, art, humour, and Web3 culture to start better
                conversations about an illness that is still widely
                misunderstood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Holder ambassadors</p>
            <h2 className="section-title">Holders as ambassadors.</h2>
            <p className="section-lede">
              Always Tired NFT holders are not just collectors in this new
              chapter. They are the people who can help carry the message.
            </p>
          </div>
          <div className="copy-panel reveal">
            <p>
              The vision is to turn the holder base into a loose but active
              network of ME/CFS awareness ambassadors. That can mean sharing
              educational posts, helping source trusted donation destinations,
              participating in holder votes, suggesting research organizations,
              creating awareness art, supporting campaigns, or simply helping
              more people understand that ME/CFS is real.
            </p>
            <p>
              No one is expected to become a medical expert. No one is expected
              to speak over patients, caregivers, doctors, or researchers.
            </p>
            <p className="statement">Listen. Learn. Share. Support. Vote. Build.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Already live</p>
            <h2 className="section-title">The foundation is already live.</h2>
          </div>
          <div className="grid three">
            {foundationCards.map((card) => (
              <div className="card reveal" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Active awareness</p>
            <h2 className="section-title">From tired art to active awareness.</h2>
            <p className="section-lede">
              The long-term vision is to make Always Tired NFTs a small but
              meaningful awareness engine.
            </p>
          </div>
          <div className="copy-panel reveal">
            <ul className="feature-list">
              {awarenessGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
            <p>
              This will not happen all at once. It should not be rushed or
              overpromised. But the path is now clearer than it has been in a
              long time.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">$COFFEE future utility</p>
              <h2 className="section-title">$COFFEE should mean more.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Always Tired already has $COFFEE, but the vision is to make it
                more important inside the ecosystem than just a token used for
                raffles.
              </p>
              <p>
                $COFFEE has the potential to become a community participation
                layer connected to awareness actions, holder activity, creator
                contributions, donation campaigns, event participation, and
                future utility.
              </p>
              <p>
                More details will come later, but the direction is simple:
                $COFFEE should reward the people helping keep the project awake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">May be tired, but we are not asleep</p>
        <h2>May be tired, but we are not asleep.</h2>
        <p className="section-lede">
          Always Tired is back with a completed website, active Trait Offers, a
          public donation wallet, a stronger mission, and a community that can
          help shape what comes next.
        </p>
        <p className="section-lede">The next chapter belongs to the holders.</p>
        <div className="actions">
          <ButtonLink className="primary" href="/collection">
            Explore the Collection
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.traitOffers}>
            View Trait Offers
          </ButtonLink>
          <ButtonLink href="/discord">Join the Community</ButtonLink>
        </div>
      </section>
    </>
  );
}
