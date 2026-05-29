const phases = [
  {
    title: "Community suggestions",
    body: "SleepyHeads and supporters bring possible ME/CFS-related donation destinations into Discord for discussion.",
  },
  {
    title: "SleepyHead review",
    body: "The community checks legitimacy, transparency, mission fit, public reputation, and whether the destination can receive funds properly.",
  },
  {
    title: "Holder vote",
    body: "A holder vote opens once the voting system is ready and a donation cycle is ready for distribution.",
  },
  {
    title: "Public proof",
    body: "Funds are sent, transaction records are shared, and any available confirmation is posted publicly.",
  },
];

export function HolderVote() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Holder-guided support</p>
          <h2 className="section-title">The destination should be decided in public.</h2>
          <p className="section-lede">
            Always Tired should not randomly pick donation destinations behind
            closed doors. The better process is simple: suggest, review, vote,
            send, show proof, and begin again.
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
