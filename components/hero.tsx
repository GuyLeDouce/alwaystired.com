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
        <p className="eyebrow">Still tired. Still here.</p>
        <h1>The Tired Still Remain.</h1>
        <p className="lede">
          Always Tired NFTs never actually left. The old founder stepped away.
          The public side went stagnant. But the SleepyHeads kept showing up
          through games, raffles, donations, dark humour, and community.
        </p>
        <p className="lede">
          Now the keys are finally in the hands of the people still here. Not a
          restart. Not fake hype. A community takeover.
        </p>
        <p className="statement">May Be TIRED, But We&apos;re Not ASLEEP.</p>
        <div className="stat-strip inline-stats" aria-label="Project facts">
          <div>
            <strong>7,777</strong>
            <span>Supply</span>
          </div>
          <div>
            <strong>ETH</strong>
            <span>Collection</span>
          </div>
          <div>
            <strong>ME/CFS</strong>
            <span>Awareness</span>
          </div>
          <div>
            <strong>Public</strong>
            <span>Donation Wallet</span>
          </div>
        </div>
        <p className="fine-print">
          Guy holds the keys. The community holds the direction.
        </p>
        <div className="actions">
          <ButtonLink className="primary" href="/mission">
            Learn About ME/CFS
          </ButtonLink>
          <ButtonLink href="/collection">View Collection</ButtonLink>
          <ButtonLink href="/donate">Donate / View Fund</ButtonLink>
          <ButtonLink external href={siteConfig.links.discord}>
            Join Discord
          </ButtonLink>
        </div>
      </div>

      <RotatingHeroGallery />
    </section>
  );
}
