import { DonationTracker } from "@/components/donation-tracker";
import { HolderVote } from "@/components/holder-vote";

export const metadata = {
  title: "Donate",
  description:
    "A transparent Always Tired NFTs public donation wallet with holder-sourced donation destinations and holder voting.",
};

const processCards = [
  {
    title: "Funds are collected publicly",
    body: "The donation wallet is visible on-chain, allowing anyone to verify incoming and outgoing transactions.",
  },
  {
    title: "Holders help source donation destinations",
    body: "The community can suggest research facilities, nonprofit organizations, advocacy groups, patient support initiatives, or other ME/CFS-aligned causes.",
  },
  {
    title: "Suggested recipients are reviewed",
    body: "Before any vote, the community should look at legitimacy, transparency, mission fit, public reputation, and alignment with ME/CFS awareness or support.",
  },
  {
    title: "Holders vote",
    body: "Always Tired NFT holders help decide where the donation should go.",
  },
  {
    title: "Proof is shared",
    body: "Once funds are sent, the result should be posted publicly with transaction proof and any available donation confirmation.",
  },
];

const categories = [
  {
    title: "ME/CFS research",
    body: "Groups funding biological research, diagnostics, treatment exploration, and clinical studies.",
  },
  {
    title: "Long COVID and post-infectious disease research",
    body: "ME/CFS and Long COVID have important symptom overlap, and some research organizations study both areas.",
  },
  {
    title: "Patient advocacy",
    body: "Organizations helping patients be heard by governments, doctors, institutions, and the public.",
  },
  {
    title: "Caregiver and patient resources",
    body: "Groups providing practical support, education, or community resources for people affected by ME/CFS.",
  },
  {
    title: "Awareness campaigns",
    body: "Efforts that help explain ME/CFS to the general public in a clear and respectful way.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Transparent donation wallet</p>
        <h1>A public wallet for real support.</h1>
        <p>
          Always Tired NFTs is building a transparent donation effort where
          holders help source, discuss, and vote on the best places to support.
        </p>
        <p>
          The goal is not just to raise funds. The goal is to raise funds
          carefully.
        </p>
        <p>
          The community will work together to identify ME/CFS research groups,
          advocacy organizations, patient support initiatives, and related
          causes that may be worth supporting. Once donation goals are reached,
          holders can help decide where funds should go.
        </p>
      </section>

      <DonationTracker />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Simple. Public. Holder-led.</p>
            <h2 className="section-title">Support with receipts.</h2>
          </div>
          <div className="grid three">
            {processCards.map((card) => (
              <div className="card reveal" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Careful donations</p>
              <h2 className="section-title">The destination matters as much as the donation.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Not every good cause is the right fit for every campaign.
                Always Tired holders should work together to find donation
                destinations that make sense for the mission.
              </p>
              <p>
                This may include organizations focused on ME/CFS research, Long
                COVID overlap, post-infectious disease research, patient
                advocacy, caregiver support, or education.
              </p>
              <p>
                The goal is not to rush the money out the door. The goal is to
                make the donation count.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="copy-panel reveal">
            <p className="eyebrow">Donate carefully</p>
            <h2 className="section-title">Only send funds if you understand what you are doing.</h2>
            <p>
              This website does not provide financial advice, tax advice, or
              medical advice.
            </p>
            <p>
              Always verify the wallet address before sending ETH. Crypto
              transactions are permanent and cannot be reversed.
            </p>
            <p>
              The donation wallet exists so the community can build support
              transparently, but each person is responsible for their own
              decision to donate.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Potential donation categories</p>
            <h2 className="section-title">Help identify the right places.</h2>
          </div>
          <div className="grid three">
            {categories.map((category) => (
              <div className="card reveal" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HolderVote />

      <section className="final-cta reveal">
        <p className="eyebrow">Holder-sourced donation destinations</p>
        <h2>Help us support the right places.</h2>
        <p className="section-lede">
          Donate if you can. Suggest trusted organizations. Join the discussion.
          Help holders decide where support can do the most good.
        </p>
        <p className="section-lede">
          This is not just about raising ETH. It is about proving the community
          can move with care.
        </p>
      </section>
    </>
  );
}
