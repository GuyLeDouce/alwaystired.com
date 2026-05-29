export const siteConfig = {
  name: "Always Tired NFTs",
  tagline: "The Tired Still Remain.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alwaystirednfts.com",
  links: {
    discord: "https://discord.gg/xheBXt48pR",
    openSea: "https://opensea.io/collection/always-tired-official",
    traitOffers: "https://opensea.io/collection/always-tired-official/offers",
    x: "https://x.com/alwaystirednfts",
    etherscanContract:
      "https://etherscan.io/address/0x3ccbd9c381742c04d81332b5db461951672f6a99",
  },
  contractAddress: "0x3ccbd9c381742c04d81332b5db461951672f6a99",
  donation: {
    donationWallet:
      process.env.NEXT_PUBLIC_DONATION_WALLET ??
      "0xce2b924F55470381E072a6379D46f89093B7f7Ea",
    donationGoalUsd: 5000,
    etherscanBaseUrl: "https://etherscan.io",
    donationTitle: "A Public Wallet For Real Support",
    donationDescription:
      "Always Tired NFTs is building a transparent ETH donation effort where holders help source, discuss, and vote on the best places to support ME/CFS awareness, research, advocacy, and patient-centered work.",
  },
};

const nftIds = [
  "1",
  "10",
  "43",
  "77",
  "100",
  "123",
  "222",
  "333",
  "404",
  "555",
  "666",
  "777",
  "888",
  "999",
  "1000",
  "1111",
  "1234",
  "1313",
  "1777",
  "2022",
  "2222",
  "2345",
  "3000",
  "3333",
  "3456",
  "4000",
  "4242",
  "4444",
  "5000",
  "5555",
  "6000",
  "6666",
  "7000",
  "7777",
].map((id) => ({ id, alt: `Always Tired NFT #${id}` }));

export const featuredNfts = nftIds.slice(0, 12);

export const galleryNfts = nftIds;
