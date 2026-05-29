import { DonationTracker } from "@/components/donation-tracker";
import { HolderVote } from "@/components/holder-vote";

export const metadata = {
  title: "Donate",
  description:
    "A transparent Always Tired NFTs public donation wallet and $5,000 USD in ETH community fund tracker.",
};

export default function DonatePage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Community Fund</p>
        <h1>A transparent public wallet.</h1>
        <p>
          The goal is to raise the equivalent of $5,000 USD in ETH. Once the
          goal is reached, Always Tired NFT holders will vote on where the
          donation should be distributed.
        </p>
      </section>
      <DonationTracker />
      <HolderVote />
    </>
  );
}
