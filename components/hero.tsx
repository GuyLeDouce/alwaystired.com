import { ButtonLink } from "@/components/button-link";
import { RotatingHeroGallery } from "@/components/rotating-hero-gallery";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero">
      <div className="reveal">
        <div className="logo-type" aria-label="Always Tired NFTs">
          <span className="always">Always</span>
          <span className="tired">Tired</span>
          <span className="nfts">NFTs</span>
        </div>
        <p className="eyebrow">Community-led revival era</p>
        <h1>The Tired Still Remain.</h1>
        <p className="lede">
          Always Tired NFTs is a community-led revival built around ME/CFS
          awareness, holder participation, transparent donations, and the belief
          that tired does not mean finished.
        </p>
        <p className="lede">
          This project began as a collection of 7,777 exhausted little
          characters. Today, it is becoming something more useful: a public home
          for awareness, action, and community-driven support.
        </p>
        <div className="actions">
          <ButtonLink className="primary" href="/collection">
            Explore the Collection
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.traitOffers}>
            View Trait Offers
          </ButtonLink>
          <ButtonLink href="/discord">Join the Community</ButtonLink>
          <ButtonLink className="coffee" href="/donate">
            Donate ETH
          </ButtonLink>
        </div>
      </div>

      <RotatingHeroGallery />
    </section>
  );
}
