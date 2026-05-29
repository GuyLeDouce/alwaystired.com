import { ButtonLink } from "@/components/button-link";
import { CollectionBrowser } from "@/components/collection-browser";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Collection",
  description:
    "Browse all 7,777 Always Tired NFTs, search traits, view characters, and reconnect with the collection behind the ME/CFS awareness revival.",
};

const holderRoles = [
  "Voting on donation destinations",
  "Participating in awareness campaigns",
  "Helping source research organizations or advocacy groups",
  "Using NFTs as ambassador badges",
  "Participating in $COFFEE-related systems",
  "Receiving future community recognition or rewards",
  "Helping guide the direction of the project",
];

export default function CollectionPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Always Tired NFTs</p>
        <h1>Browse the tired. Find your ambassador.</h1>
        <p>
          Explore all 7,777 Always Tired NFTs, search traits, view characters,
          and reconnect with the collection that now represents a bigger
          awareness mission.
        </p>
        <p>
          Each Always Tired NFT is part of the revived collection and the
          growing community mission around ME/CFS awareness.
        </p>
        <p>
          Collectors can use this page to browse the full set, search specific
          traits, look up tokens, and discover characters across the collection.
        </p>
        <div className="actions">
          <ButtonLink external href={siteConfig.links.traitOffers}>
            View Trait Offers
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.openSea}>
            OpenSea Collection
          </ButtonLink>
        </div>
      </section>

      <CollectionBrowser />

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">The collection identity</p>
              <h2 className="section-title">The art is the identity.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                The Always Tired characters are strange, exhausted, funny,
                emotional, and painfully relatable. That is what makes the
                collection work.
              </p>
              <p>
                In this new chapter, the NFTs are more than profile pictures.
                They are community symbols. They are conversation starters. They
                are ambassador badges for a project trying to raise awareness
                around misunderstood illness.
              </p>
              <p>
                Holding one does not automatically mean someone has ME/CFS or
                speaks for patients. It means they are part of a community
                trying to bring more attention, support, and honesty to the
                topic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Trait Offers are live</p>
              <h2 className="section-title">Collectors can target the tired they want.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Trait Offers are now active for Always Tired NFTs, giving
                collectors a better way to target specific looks, traits, and
                characters across the collection.
              </p>
              <p>
                This helps bring more movement back to the marketplace and gives
                holders another reason to explore what they own.
              </p>
              <p>
                Whether someone is hunting rare traits, building a themed set,
                or just looking for the perfect tired friend, Trait Offers make
                collection activity easier and more intentional.
              </p>
              <div className="actions">
                <ButtonLink className="primary" external href={siteConfig.links.traitOffers}>
                  View Trait Offers
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Holder participation</p>
            <h2 className="section-title">What holding can mean moving forward.</h2>
            <p className="section-lede">
              The future vision is for Always Tired holders to have a
              meaningful role in the ecosystem.
            </p>
          </div>
          <div className="copy-panel reveal">
            <ul className="feature-list">
              {holderRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p>
              Nothing here should be treated as a guaranteed financial benefit.
              The focus is participation, awareness, and community utility.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
