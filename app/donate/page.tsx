import { DonationTracker } from "@/components/donation-tracker";
import { HolderVote } from "@/components/holder-vote";

export const metadata = {
  title: "Donate",
  description:
    "The Always Tired NFTs community fund: a public Ethereum wallet, visible donation goal, and holder-led ME/CFS donation decisions.",
};

const processCards = [
  {
    title: "Funds are collected publicly",
    body: "ETH donations go directly to the public Ethereum wallet. Anyone can verify incoming and outgoing transactions on-chain.",
  },
  {
    title: "SleepyHeads source destinations",
    body: "The community can suggest research groups, advocacy organizations, education efforts, patient support initiatives, or other ME/CFS-aligned destinations.",
  },
  {
    title: "Suggestions are reviewed",
    body: "Before any vote, the community should look at legitimacy, transparency, mission fit, public reputation, and whether the destination can receive funds properly.",
  },
  {
    title: "Holders vote",
    body: "Holders will make the official decision through a future holder-only voting system on the website.",
  },
  {
    title: "Proof is shared",
    body: "After funds are sent, transaction proof and any available donation confirmation should be posted publicly.",
  },
];

const categories = [
  {
    title: "Research",
    body: "Groups funding or conducting serious ME/CFS research.",
  },
  {
    title: "Advocacy",
    body: "Organizations helping people with ME/CFS be seen, heard, and supported.",
  },
  {
    title: "Education",
    body: "Trusted resources that help the public understand ME/CFS more clearly.",
  },
  {
    title: "Patient Support",
    body: "Efforts that provide practical help, visibility, or support to patients and families.",
  },
  {
    title: "Community Suggestions",
    body: "SleepyHeads and supporters can bring credible options forward for discussion.",
  },
];

const donationNotes = [
  "Send ETH on Ethereum mainnet only.",
  "Always confirm the full wallet address before sending.",
  "Transactions are public and irreversible.",
  "The ETH/USD value shown is approximate and may change with market price.",
  "The site does not connect wallets for donations.",
  "The site does not ask users to sign anything to donate.",
  "The site does not provide tax advice.",
  "Donations are not stated to be tax deductible unless officially confirmed.",
];

export default function DonatePage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Community Fund</p>
        <h1>A public wallet. A visible goal. A holder-led decision.</h1>
        <p>
          The Always Tired community fund is designed to be simple and
          transparent. The goal is not just to raise funds. The goal is to raise
          funds carefully.
        </p>
        <p>
          The current goal is $5,000 USD worth of ETH. This is a starting point
          chosen to give the community something clear to work toward. Future
          goals, donation cycles, and distribution plans may change through
          holder discussion.
        </p>
      </section>

      <DonationTracker />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Simple. Public. Holder-led.</p>
            <h2 className="section-title">No hidden wallets. No vague promises.</h2>
            <p className="section-lede">
              The community raises it. The community reviews it. The holders decide.
            </p>
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
              <p className="eyebrow">Donation destinations</p>
              <h2 className="section-title">The community decides where support goes.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Finding the right place to send support matters. Always Tired
                does not want to rush donations into the first available option
                just to say something was done.
              </p>
              <p>
                The goal is to find credible ME/CFS-related organizations,
                researchers, advocates, education efforts, or support
                initiatives that align with the mission and can receive funds
                properly.
              </p>
              <p>
                Crypto donations are not always simple, and not every
                organization can accept them. If you know a credible
                ME/CFS-related destination that may be a good fit, bring it to
                the discussion in Discord.
              </p>
            </div>
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

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Donate carefully</p>
              <h2 className="section-title">Only send funds if you understand what you are doing.</h2>
            </div>
            <div className="copy-panel reveal">
              <ul className="feature-list">
                {donationNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <p>
                The donation wallet exists so the community can build support
                transparently, but each person is responsible for their own
                decision to donate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="copy-panel reveal">
            <p className="eyebrow">Other ways to support</p>
            <h2 className="section-title">Prize support belongs in Discord first.</h2>
            <p>
              Direct financial donations should be ETH sent to the public
              donation wallet. The community may also accept NFT donations,
              whitelist opportunities, or prize contributions for games,
              raffles, sweep campaigns, and community events.
            </p>
            <p>
              If you want to support that way, open a ticket in Discord and
              discuss it with the team. Do not send NFTs or assets without
              speaking with the team first.
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">The Tired Still Remain</p>
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
