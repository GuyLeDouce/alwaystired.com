const phases = [
  {
    title: "Nomination phase",
    body: "The community can propose possible ME/CFS-aligned donation destinations after the goal is reached.",
  },
  {
    title: "Holder vote",
    body: "Always Tired NFT holders will be able to vote on where the donation should go.",
  },
  {
    title: "Public result",
    body: "The final vote result and chosen destination will be shared publicly.",
  },
  {
    title: "Donation proof",
    body: "Distribution proof should be posted so the community can verify what happened.",
  },
];

export function HolderVote() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Holder Vote Coming After Goal</p>
          <h2 className="section-title">The destination will be decided in public.</h2>
          <p className="section-lede">
            When the wallet reaches the $5,000 USD goal, Always Tired NFT
            holders will be able to vote on where the donation should go. The
            voting options, results, and final distribution decision will be
            shared publicly.
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
