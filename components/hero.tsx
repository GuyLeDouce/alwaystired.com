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
        <p className="eyebrow">Always Tired NFTs</p>
        <h1>The Tired Still Remain.</h1>
        <p className="lede">
          Always Tired never actually left.
        </p>
        <p className="lede">
          The original founder stepped away. From the outside, the project
          looked stagnant. But the SleepyHeads kept showing up through games,
          raffles, donated prizes, $COFFEE, dark humour, and community.
        </p>
        <p className="lede">
          Now the keys are finally in the hands of the people still here.
        </p>
        <div className="stack compact-stack">
          <p className="statement small">Not a relaunch.</p>
          <p className="statement small">Not a comeback.</p>
          <p className="statement small">A community takeover.</p>
        </div>
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
        </div>
        <p className="fine-print">
          The community holds the keys now.
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
