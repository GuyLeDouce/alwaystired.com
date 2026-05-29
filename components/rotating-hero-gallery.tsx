"use client";

import { useEffect, useState } from "react";

import { NftImage } from "@/components/nft-image";
import { featuredNfts, siteConfig } from "@/lib/site-config";

function shuffleNfts<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function RotatingHeroGallery() {
  const [nfts, setNfts] = useState(featuredNfts);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setNfts(shuffleNfts(featuredNfts));
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOffset((current) => (current + 1) % nfts.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, [nfts.length]);

  const visibleNfts = [0, 1, 2, 3].map((slot) => nfts[(offset + slot) % nfts.length]);

  return (
    <div className="hero-gallery reveal" aria-label="Rotating Always Tired NFT artwork collage">
      {visibleNfts.map((nft, index) => (
        <a
          className={["feature-card", index === 0 ? "big" : `small-${["a", "b", "c"][index - 1]}`].join(" ")}
          href={siteConfig.links.openSea}
          key={`${nft.id}-${index}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <NftImage
            alt={nft.alt}
            id={nft.id}
            priority={index === 0}
            sizes={
              index === 0
                ? "(max-width: 980px) 70vw, 450px"
                : "(max-width: 980px) 42vw, 260px"
            }
          />
          <span className="hero-token-label">#{nft.id}</span>
        </a>
      ))}
      <div className="stat-strip" aria-label="Collection facts">
        <div>
          <strong>7,777</strong>
          <span>Supply</span>
        </div>
        <div>
          <strong>ETH</strong>
          <span>Network</span>
        </div>
        <div>
          <strong>ME/CFS</strong>
          <span>Awareness</span>
        </div>
      </div>
    </div>
  );
}
