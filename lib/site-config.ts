export const siteConfig = {
  name: "Always Tired NFTs",
  tagline: "The Tired Still Remain.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alwaystirednfts.com",
  supply: "7,777",
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
    donationTitle: "A Public Wallet for Real Support",
    donationDescription:
      "The Always Tired community fund is designed to be simple and transparent: a public Ethereum wallet, a visible first goal, and a holder-led decision about where support goes.",
  },
};

export const meCfsResources = [
  {
    title: "CDC ME/CFS Overview",
    body: "A plain-language overview of ME/CFS symptoms, diagnosis, and patient information.",
    href: "https://www.cdc.gov/me-cfs/about/index.html",
  },
  {
    title: "NIH ME/CFS Research",
    body: "Information on federal research efforts and scientific understanding of ME/CFS.",
    href: "https://www.nih.gov/advancing-mecfs-research",
  },
  {
    title: "NIH About ME/CFS",
    body: "A deeper look at ME/CFS as a serious, chronic, complex, systemic disease.",
    href: "https://www.nih.gov/advancing-mecfs-research/about-mecfs",
  },
  {
    title: "National ME/FM Action Network",
    body: "Canadian advocacy and support resources for ME/CFS and fibromyalgia communities.",
    href: "https://www.mefmaction.com/",
  },
  {
    title: "MEAction",
    body: "Global advocacy, education, and patient-led action for people living with ME.",
    href: "https://www.meaction.net/",
  },
  {
    title: "Open Medicine Foundation Canada",
    body: "Canadian research fundraising and education supporting collaborative ME/CFS research.",
    href: "https://www.omfcanada.ngo/",
  },
];

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
