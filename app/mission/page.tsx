import { NftImage } from "@/components/nft-image";

export const metadata = {
  title: "Mission",
  description:
    "Always Tired NFTs mission: ME/CFS awareness, transparent donations, holder ambassadors, and careful community action.",
};

const principles = [
  {
    title: "Respect lived experience",
    body: "People living with ME/CFS, Long COVID, and related illnesses should never be talked over or used as marketing props.",
  },
  {
    title: "No medical claims",
    body: "Always Tired will not offer medical advice, treatment guidance, cures, or diagnosis.",
  },
  {
    title: "Transparency first",
    body: "Donation efforts should be public, traceable, and explained clearly.",
  },
  {
    title: "Holder-led decisions",
    body: "The community should help source, discuss, and vote on donation destinations.",
  },
  {
    title: "Purpose without fake promises",
    body: "This project can do real good, but it should never pretend to be bigger than it is.",
  },
];

const resources = [
  {
    title: "CDC ME/CFS Information",
    body: "A clear introduction to ME/CFS symptoms, post-exertional malaise, diagnosis basics, and clinical information.",
    href: "https://www.cdc.gov/me-cfs/",
  },
  {
    title: "NIH ME/CFS Research",
    body: "Research-focused information describing ME/CFS as a serious, chronic, complex systemic disease.",
    href: "https://www.nih.gov/advancing-mecfs-research",
  },
  {
    title: "Open Medicine Foundation",
    body: "A research organization funding collaborative work into ME/CFS, Long COVID, and related chronic complex diseases.",
    href: "https://www.omf.ngo/",
  },
  {
    title: "Solve M.E.",
    body: "A nonprofit focused on research, advocacy, and education for ME/CFS, Long COVID, and post-infection diseases.",
    href: "https://solvecfs.org/",
  },
  {
    title: "MEAction",
    body: "A patient-led advocacy movement working to build recognition, education, and action around ME/CFS.",
    href: "https://www.meaction.net/",
  },
];

export default function MissionPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">ME/CFS awareness</p>
        <h1>Awareness with purpose.</h1>
        <p>
          Always Tired NFTs exists to help make ME/CFS more visible, support
          transparent donation efforts, and give holders a meaningful role in
          spreading awareness.
        </p>
        <p>
          The project uses art, community, and Web3 tools to point attention
          toward something real: millions of people live with conditions that
          are poorly understood, often invisible, and too easily dismissed.
        </p>
        <p>
          Always Tired cannot diagnose, treat, or cure ME/CFS. It can, however,
          help more people pay attention.
        </p>
      </section>

      <section className="section">
        <div className="container page-grid">
          <div className="side-image reveal">
            <NftImage alt="Always Tired NFT #1" id="1" priority />
          </div>
          <div className="stack">
            <div className="copy-panel reveal">
              <h2 className="section-title">ME/CFS is not ordinary tiredness.</h2>
              <p>
                Myalgic Encephalomyelitis/Chronic Fatigue Syndrome is a serious
                chronic illness that can affect the nervous system, immune
                system, autonomic function, energy production, sleep, cognition,
                and daily activity.
              </p>
              <p>
                Common symptoms can include severe fatigue, reduced ability to
                function, unrefreshing sleep, cognitive difficulty often
                described as brain fog, dizziness or orthostatic intolerance,
                pain, and post-exertional malaise.
              </p>
              <p>
                For many people, the hardest part is not just the illness
                itself. It is being doubted, minimized, or told they are
                &quot;just tired.&quot;
              </p>
              <p>
                Always Tired was never created as a medical organization, but
                the name and art now carry an opportunity: to help explain that
                tiredness can mean something much deeper.
              </p>
            </div>

            <div className="copy-panel reveal">
              <h2 className="section-title">The crash people do not see.</h2>
              <p>
                Post-exertional malaise, or PEM, is one of the most important
                symptoms of ME/CFS.
              </p>
              <p>
                PEM happens when symptoms worsen after activity that may seem
                small to others. That activity can be physical, mental,
                emotional, or social. It can be something as simple as a
                conversation, a shower, a short walk, work, stress, or an
                appointment.
              </p>
              <p>
                People with ME/CFS often describe it as a crash, relapse, or
                collapse. This is why &quot;push through it&quot; can be harmful advice.
              </p>
              <p>
                For many people with ME/CFS, energy is not just low. It is
                limited, unpredictable, and costly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Community action</p>
            <h2 className="section-title">
              A community can make invisible illness harder to ignore.
            </h2>
          </div>
          <div className="copy-panel reveal">
            <p>
              Always Tired NFTs already speaks the language of exhaustion. The
              art is tired. The name is tired. The culture is tired.
            </p>
            <p>
              Now the project can use that identity more intentionally. The goal
              is not to turn illness into a gimmick. The goal is to use a
              recognizable Web3 collection to create awareness, support
              education, and help direct donations toward people and
              organizations doing meaningful work.
            </p>
            <ul className="feature-list">
              <li>Awareness campaigns</li>
              <li>Educational posts</li>
              <li>Community-made art</li>
              <li>Donation drives</li>
              <li>Holder votes</li>
              <li>Research into trusted organizations</li>
              <li>Support for ME/CFS, Long COVID, and related post-infectious disease research</li>
              <li>Caregiver and patient resource sharing</li>
            </ul>
            <p>
              The project should stay careful, respectful, and transparent. But
              it should not stay silent.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">Holder ambassadors</p>
              <h2 className="section-title">The holders are the voice of the revival.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                Always Tired holders can become ambassadors for ME/CFS awareness
                by helping spread accurate information, sharing resources,
                creating content, supporting donation campaigns, and
                participating in decisions about where funds should go.
              </p>
              <p>
                Being an ambassador does not mean pretending to be a doctor. It
                means helping people care.
              </p>
              <ul className="feature-list compact">
                <li>It means sharing that ME/CFS is real.</li>
                <li>It means helping others understand PEM.</li>
                <li>It means listening to people with lived experience.</li>
                <li>It means supporting research and patient advocacy.</li>
                <li>It means helping the community choose donation destinations carefully instead of randomly.</li>
              </ul>
              <p>
                Most importantly, it means proving that an NFT community can do
                more than chase attention for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Our principles</p>
            <h2 className="section-title">Purpose without fake promises.</h2>
          </div>
          <div className="grid three">
            {principles.map((principle) => (
              <div className="card reveal" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Trusted sources</p>
            <h2 className="section-title">Learn from trusted sources.</h2>
          </div>
          <div className="grid">
            {resources.map((resource) => (
              <a
                className="link-card reveal"
                href={resource.href}
                key={resource.title}
                rel="noreferrer"
                target="_blank"
              >
                <div>
                  <strong>{resource.title}</strong>
                  <br />
                  <span>{resource.body}</span>
                </div>
                <span>Open</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
