import { ButtonLink } from "@/components/button-link";
import { CollectionBrowser } from "@/components/collection-browser";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Collection",
  description:
    "Browse all 7,777 Always Tired NFTs, search tokens and traits, and explore the collection behind the SleepyHead community.",
};

const holderRoles = [
  "Voting on donation destinations when holder voting is ready",
  "Participating in awareness campaigns",
  "Helping source research organizations or advocacy groups",
  "Using NFTs as SleepyHead community badges",
  "Joining $COFFEE conversations as it is reviewed",
  "Creating art, posts, or resources that point back to ME/CFS awareness",
  "Helping guide the direction of the project",
];

export default function CollectionPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Explore the Collection</p>
        <h1>Explore the Collection</h1>
        <p>
          Browse all 7,777 Always Tired NFTs: the tired faces, weird traits,
          dark humour, and exhausted little characters that started this whole
          thing.
        </p>
        <p>
          The collection is still the heart of the community. Search tokens,
          explore traits, open listings, and reconnect with the art that made
          the SleepyHeads stay.
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
              <p className="eyebrow">The art is the identity</p>
              <h2 className="section-title">More than profile pictures.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                The Always Tired characters are strange, exhausted, funny,
                emotional, and painfully relatable. That is what makes the
                collection work.
              </p>
              <p>
                In this chapter, the NFTs are community symbols. They are
                conversation starters. They are badges for a group trying to
                raise awareness around a misunderstood illness.
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
              <p className="eyebrow">Collecting with context</p>
              <h2 className="section-title">You do not need to collect to care.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Collecting an Always Tired NFT is one way to support the
                community and become part of the SleepyHead voice.
              </p>
              <p>
                When royalties are honoured, up to 10% of sales can flow
                directly to the public donation wallet. This depends on how a
                sale is listed and whether royalties are honoured by the
                marketplace.
              </p>
              <p>
                You do not need to own an NFT to donate, learn, or share ME/CFS
                resources. But holders will help shape official community
                decisions as the community takeover continues.
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
                Trait Offers are active for Always Tired NFTs, giving collectors
                a cleaner way to target specific looks, traits, and characters
                across the collection.
              </p>
              <p>
                Whether someone is hunting a specific trait, building a themed
                set, or just looking for the perfect tired friend, Trait Offers
                make collection activity easier and more intentional.
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
              Every Always Tired NFT is more than a collectible. It is a seat in
              the SleepyHead community and a voice in where we go next.
            </p>
          </div>
          <div className="copy-panel reveal">
            <ul className="feature-list">
              {holderRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p>
              Nothing here should be treated as a promise of financial value.
              The focus is participation, awareness, and community direction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
