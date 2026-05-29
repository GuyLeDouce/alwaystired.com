import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>Always Tired NFTs. The Tired Still Remain.</span>
        <div className="footer-links">
          <Link href="/collection">Collection</Link>
          <Link href="/donate">Community Fund</Link>
          <a href={siteConfig.links.openSea} rel="noreferrer" target="_blank">
            OpenSea
          </a>
          <a
            href={siteConfig.links.etherscanContract}
            rel="noreferrer"
            target="_blank"
          >
            Contract
          </a>
        </div>
      </div>
    </footer>
  );
}
