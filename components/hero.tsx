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
          Always Tired NFTs are waking back up — not with fake hype, but with
          community, transparency, and a real reason to keep building.
        </p>
        <div className="actions">
          <ButtonLink className="primary" href="/discord">
            Join the Discord
          </ButtonLink>
          <ButtonLink external href={siteConfig.links.openSea}>
            View on OpenSea
          </ButtonLink>
          <ButtonLink className="coffee" external href={siteConfig.links.x}>
            Follow on X
          </ButtonLink>
        </div>
      </div>

      <RotatingHeroGallery />
    </section>
  );
}
