import { NftImage } from "@/components/nft-image";
import { meCfsResources } from "@/lib/site-config";

export const metadata = {
  title: "Mission",
  description:
    "Always Tired NFTs mission: ME/CFS awareness, Frederik's story, SleepyHead stewardship, transparent donations, and careful community action.",
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
    body: "The SleepyHeads should help source, discuss, and vote on donation destinations.",
  },
  {
    title: "No empty promises",
    body: "We cannot promise success. But we can promise we are not giving up.",
  },
];

const storyCards = [
  "The athlete who cannot train anymore",
  "The partner learning what post-exertional malaise means",
  "The worker who looks fine but cannot get through the day",
  "The friend who disappears because rest is no longer enough",
];

export default function MissionPage() {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">Built for the tired</p>
        <h1>ME/CFS awareness is the reason Always Tired exists.</h1>
        <p>
          Always Tired NFTs exists to help make ME/CFS more visible, support
          transparent donation efforts, and give SleepyHeads a meaningful role
          in spreading awareness.
        </p>
        <p>
          The project uses art, community, and Web3 tools to point attention
          toward something real: people living with serious illnesses that are
          often poorly understood, invisible from the outside, and too easily
          dismissed.
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
              <h2 className="section-title">Frederik&apos;s story.</h2>
              <p>
                Always Tired was never just a collection of exhausted
                characters. The art was created by Frederik, a hardworking
                engineer who loved being active. He played sports, ran, and
                especially loved tennis.
              </p>
              <p>
                In early 2020, Frederik was diagnosed with ME/CFS. His life
                changed quickly. Within weeks, he lost his job. Soon after, he
                lost the energy to play tennis, run, or take part in the sports
                that had been such a big part of his life.
              </p>
              <p>
                Then even going outside became difficult. Then getting out of
                bed became a task. Frederik eventually received help and was
                placed in an institution where he could receive care. During
                that time, he was put in a wheelchair.
              </p>
              <p>
                The last word shared from him was that things were still
                extremely difficult. There was still no clear path to healing,
                no cure, and no simple treatment for what he was suffering
                through.
              </p>
              <p>
                That story is the foundation of Always Tired. ME/CFS awareness
                was never a trend added later. It was always the heart of the
                project.
              </p>
            </div>

            <div className="copy-panel reveal">
              <h2 className="section-title">ME/CFS is not ordinary tiredness.</h2>
              <p>
                Myalgic Encephalomyelitis / Chronic Fatigue Syndrome is a
                serious, chronic, complex illness that can affect the nervous
                system, immune system, autonomic system, sleep, cognition, and
                the body&apos;s ability to recover after exertion.
              </p>
              <p>
                Common symptoms can include severe fatigue, reduced ability to
                function, unrefreshing sleep, cognitive difficulty often
                described as brain fog, dizziness or orthostatic intolerance,
                pain, sensory sensitivity, and post-exertional malaise.
              </p>
              <p>
                For many people, the hardest part is not just the illness
                itself. It is being doubted, minimized, or told they are
                &quot;just tired.&quot;
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
                collapse. This is why &quot;push through it&quot; can be harmful
                advice.
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
            <p className="eyebrow">What a community can do</p>
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
              The goal is not to turn illness into a gimmick. The goal is to use
              a recognizable Web3 collection to create awareness, support
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
          <div className="section-head reveal">
            <p className="eyebrow">Stories from the tired</p>
            <h2 className="section-title">ME/CFS is not an abstract cause.</h2>
            <p className="section-lede">
              It affects real people, real families, real careers, real
              friendships, and real lives.
            </p>
          </div>
          <div className="copy-panel reveal">
            <p>
              Always Tired began with Frederik&apos;s story, but he is not the
              only one. Over time, this space can hold stories from SleepyHeads,
              loved ones, caregivers, and people living with ME/CFS who want to
              share what &quot;tired&quot; really means.
            </p>
            <p className="fine-print">
              These reflections are representative examples inspired by common
              ME/CFS experiences. Real community stories may be added later with
              permission.
            </p>
          </div>
          <div className="grid four spaced">
            {storyCards.map((title) => (
              <div className="card reveal" key={title}>
                <h3>{title}</h3>
                <p>
                  A future story space for lived experience, shared only with
                  consent and handled with care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Our principles</p>
            <h2 className="section-title">No empty promises. No fake hype.</h2>
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
            <p className="eyebrow">Learn more about ME/CFS</p>
            <h2 className="section-title">Start with credible resources.</h2>
            <p className="section-lede">
              If Always Tired does anything well, it should help more people
              understand what ME/CFS actually is. These resources are starting
              points for learning, not medical advice.
            </p>
          </div>
          <div className="grid">
            {meCfsResources.map((resource) => (
              <a
                aria-label={`Open ${resource.title} in a new tab`}
                className="link-card reveal"
                href={resource.href}
                key={resource.title}
                rel="noopener noreferrer"
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
