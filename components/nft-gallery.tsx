"use client";

import { useEffect, useState } from "react";

import { NftImage } from "@/components/nft-image";
import { galleryNfts, siteConfig } from "@/lib/site-config";

const visibleCount = 12;

function shuffleNfts<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

export function NftGallery() {
  const [nfts, setNfts] = useState(galleryNfts);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setNfts(shuffleNfts(galleryNfts));
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOffset((current) => (current + 4) % nfts.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [nfts.length]);

  const visibleNfts = Array.from(
    { length: Math.min(visibleCount, nfts.length) },
    (_, index) => nfts[(offset + index) % nfts.length],
  );

  function showPrevious() {
    setOffset((current) => (current - 4 + nfts.length) % nfts.length);
  }

  function showNext() {
    setOffset((current) => (current + 4) % nfts.length);
  }

  return (
    <div className="nft-carousel-shell">
      <div className="carousel-toolbar">
        <div>
          <span className="kicker">Rotating collection view</span>
          <p>Refresh or use the controls to see a different mix from the collection.</p>
        </div>
        <div className="carousel-controls" aria-label="NFT gallery controls">
          <button aria-label="Show previous NFTs" className="icon-button carousel-button" onClick={showPrevious} type="button">
            <span aria-hidden="true">‹</span>
          </button>
          <button aria-label="Show next NFTs" className="icon-button carousel-button" onClick={showNext} type="button">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
      <div className="nft-wall" aria-label="Rotating Always Tired NFT gallery">
        {visibleNfts.map((nft) => (
          <a
            className="nft-tile"
            href={siteConfig.links.openSea}
            key={`${nft.id}-${offset}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <NftImage
              alt={nft.alt}
              id={nft.id}
              sizes="(max-width: 660px) 90vw, (max-width: 980px) 30vw, 190px"
            />
            <span>#{nft.id}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
