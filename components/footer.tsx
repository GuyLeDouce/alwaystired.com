import Link from "next/link";
import { meCfsResources, siteConfig } from "@/lib/site-config";

export function Footer() {
  const walletUrl = `${siteConfig.donation.etherscanBaseUrl}/address/${siteConfig.donation.donationWallet}`;

  return (
    <footer className="site-footer">
      <div className="footer-inner footer-grid">
        <div className="footer-mission">
          <strong>Always Tired NFTs</strong>
          <p>
            A community-led Ethereum NFT collection rebuilding around ME/CFS
            awareness, public donation transparency, and SleepyHead stewardship.
          </p>
          <p className="statement small">The Tired Still Remain.</p>
          <p className="fine-print">
            Donation wallet:{" "}
            <a href={walletUrl} rel="noopener noreferrer" target="_blank">
              {siteConfig.donation.donationWallet}
            </a>
          </p>
        </div>

        <div className="footer-column">
          <strong>Project</strong>
          <div className="footer-links vertical">
            <Link href="/collection">Collection</Link>
            <Link href="/mission">Mission</Link>
            <Link href="/donate">Community Fund</Link>
            <Link href="/community">SleepyHeads</Link>
            <Link href="/plans">Visible Next Steps</Link>
          </div>
        </div>

        <div className="footer-column">
          <strong>Official</strong>
          <div className="footer-links vertical">
            <a href={siteConfig.links.discord} rel="noopener noreferrer" target="_blank">
              Discord
            </a>
            <a href={siteConfig.links.openSea} rel="noopener noreferrer" target="_blank">
              OpenSea
            </a>
            <a href={siteConfig.links.x} rel="noopener noreferrer" target="_blank">
              X / Twitter
            </a>
            <a href={siteConfig.links.etherscanContract} rel="noopener noreferrer" target="_blank">
              Contract
            </a>
            <a href={walletUrl} rel="noopener noreferrer" target="_blank">
              Donation Wallet
            </a>
          </div>
        </div>

        <div className="footer-column">
          <strong>ME/CFS Resources</strong>
          <div className="footer-links vertical">
            {meCfsResources.slice(0, 4).map((resource) => (
              <a
                href={resource.href}
                key={resource.title}
                rel="noopener noreferrer"
                target="_blank"
              >
                {resource.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-disclaimer">
        Always Tired NFTs is a community-led NFT project supporting awareness
        and donation efforts around ME/CFS. This website is for educational and
        community purposes only and does not provide medical advice, diagnosis,
        treatment, financial advice, or tax advice. Always Tired is not a
        medical organization. NFT ownership does not guarantee financial value.
        $COFFEE has no monetary value. Donations are not stated to be
        tax-deductible.
      </div>
    </footer>
  );
}
