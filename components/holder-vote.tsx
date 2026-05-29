const phases = [
  {
    title: "Nomination phase",
    body: "The community can propose ME/CFS-aligned research groups, advocacy organizations, patient support initiatives, and education efforts.",
  },
  {
    title: "Community review",
    body: "Suggested recipients should be checked for legitimacy, transparency, mission fit, public reputation, and alignment with the cause.",
  },
  {
    title: "Holder vote",
    body: "Always Tired NFT holders help decide where support should go once a donation campaign is ready for distribution.",
  },
  {
    title: "Donation proof",
    body: "Transaction records, vote results, and any available donation confirmations should be posted publicly.",
  },
];

export function HolderVote() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Holder-led donation process</p>
          <h2 className="section-title">The destination should be decided in public.</h2>
          <p className="section-lede">
            Always Tired holders can help source donation destinations, review
            options, vote on where funds should go, and make the final result
            visible. The goal is support with receipts, not vague goodwill.
          </p>
        </div>
        <div className="grid four">
          {phases.map((phase) => (
            <div className="vote-card reveal" key={phase.title}>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
