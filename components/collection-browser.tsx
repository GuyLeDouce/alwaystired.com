"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { siteConfig } from "@/lib/site-config";

type NftAttribute = {
  trait_type: string;
  value: string;
};

type CollectionNft = {
  id: string;
  name: string;
  description: string;
  image: string;
  edition: number;
  attributes: NftAttribute[];
};

const pageSize = 72;

function getSearchText(nft: CollectionNft) {
  return [
    nft.id,
    nft.name,
    nft.description,
    ...nft.attributes.flatMap((attribute) => [
      attribute.trait_type,
      attribute.value,
    ]),
  ]
    .join(" ")
    .toLowerCase();
}

function getOpenSeaAssetUrl(id: string) {
  return `https://opensea.io/assets/ethereum/${siteConfig.contractAddress}/${id}`;
}

export function CollectionBrowser() {
  const [collection, setCollection] = useState<CollectionNft[]>([]);
  const [query, setQuery] = useState("");
  const [traitType, setTraitType] = useState("All traits");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadCollection() {
      try {
        const response = await fetch("/assets/collection.json");

        if (!response.ok) {
          throw new Error("Collection manifest unavailable");
        }

        const data = (await response.json()) as CollectionNft[];

        if (!cancelled) {
          setCollection(data);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    loadCollection();

    return () => {
      cancelled = true;
    };
  }, []);

  const traitTypes = useMemo(() => {
    const types = new Set<string>();

    for (const nft of collection) {
      for (const attribute of nft.attributes) {
        types.add(attribute.trait_type);
      }
    }

    return ["All traits", ...Array.from(types).sort((a, b) => a.localeCompare(b))];
  }, [collection]);

  const filteredCollection = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return collection.filter((nft) => {
      const matchesTrait =
        traitType === "All traits" ||
        nft.attributes.some((attribute) => attribute.trait_type === traitType);
      const matchesQuery = cleanQuery.length === 0 || getSearchText(nft).includes(cleanQuery);

      return matchesTrait && matchesQuery;
    });
  }, [collection, query, traitType]);

  const visibleNfts = filteredCollection.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCollection.length;

  return (
    <section className="section collection-section">
      <div className="container">
        <div className="collection-controls reveal">
          <div>
            <span className="kicker">Metadata browser</span>
            <h2>View the collection.</h2>
            <p>
              Browse all 7,777 Always Tired NFTs from the local metadata set,
              including token images, names, editions, and traits.
            </p>
          </div>
          <div className="collection-control-grid">
            <label>
              <span>Search</span>
              <input
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(pageSize);
                }}
                placeholder="Token #, name, trait..."
                type="search"
                value={query}
              />
            </label>
            <label>
              <span>Trait group</span>
              <select
                onChange={(event) => {
                  setTraitType(event.target.value);
                  setVisibleCount(pageSize);
                }}
                value={traitType}
              >
                {traitTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="collection-status reveal" role="status">
          {status === "loading" && "Loading collection metadata..."}
          {status === "error" &&
            "Collection metadata could not be loaded. The rest of the site is still available."}
          {status === "ready" &&
            `Showing ${visibleNfts.length.toLocaleString()} of ${filteredCollection.length.toLocaleString()} NFTs`}
        </div>

        {status === "ready" && (
          <>
            <div className="collection-grid" aria-label="Always Tired NFT collection">
              {visibleNfts.map((nft) => (
                <a
                  className="collection-card reveal"
                  href={getOpenSeaAssetUrl(nft.id)}
                  key={nft.id}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="collection-image">
                    <Image
                      alt={nft.name}
                      height={700}
                      loading="lazy"
                      sizes="(max-width: 660px) 50vw, (max-width: 980px) 25vw, 190px"
                      src={nft.image}
                      unoptimized
                      width={700}
                    />
                  </div>
                  <div className="collection-card-body">
                    <div>
                      <strong>{nft.name}</strong>
                      <span>#{nft.edition}</span>
                    </div>
                    <ul aria-label={`${nft.name} traits`}>
                      {nft.attributes.slice(0, 4).map((attribute) => (
                        <li key={`${attribute.trait_type}-${attribute.value}`}>
                          <span>{attribute.trait_type}</span>
                          <b>{attribute.value}</b>
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>

            {hasMore && (
              <div className="collection-more">
                <button
                  className="button primary"
                  onClick={() => setVisibleCount((current) => current + pageSize)}
                  type="button"
                >
                  Load more NFTs
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
