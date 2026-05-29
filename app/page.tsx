import { ButtonLink } from "@/components/button-link";
import { Hero } from "@/components/hero";
import { siteConfig } from "@/lib/site-config";

const sleepyHeadCards = [
  {
    title: "Learn",
    body: "Read and share credible ME/CFS information before speaking for the mission.",
  },
  {
    title: "Share",
    body: "Help keep awareness visible across social platforms and communities.",
  },
  {
    title: "Support",
    body: "Suggest credible donation destinations, resources, or awareness opportunities.",
  },
  {
    title: "Play",
    body: "Join community games, raffles, poker, and events that keep the SleepyHeads active.",
  },
  {
    title: "Vote",
    body: "Holders will help decide where donation funds go once the holder voting system is ready.",
  },
  {
    title: "Stay",
    body: "Keep showing up, even when things move slowly.",
  },
];

const realFeatures = [
  {
    title: "Collection viewer",
    body: "Browse the full 7,777 token collection, search traits, and reconnect with the tired faces that started it all.",
  },
  {
    title: "Trait Offers",
    body: "Trait Offers are live, giving collectors a cleaner way to interact with the collection without market hype.",
  },
  {
    title: "Donation tracking",
    body: "The public wallet, ETH balance, approximate USD value, and first visible goal are displayed openly.",
  },
  {
    title: "Official links",
    body: "The site now keeps collection, Discord, X, OpenSea, contract, donation wallet, and ME/CFS resource links in one place.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Project story</p>
            <h2 className="section-title">Always Tired Never Left</h2>
          </div>
          <div className="grid two">
            <div className="copy-panel reveal">
              <p>Always Tired was not abandoned by the SleepyHeads.</p>
              <p>
                The original founder, Simon / Sethi1337, stepped away. From the
                outside, the project looked stagnant. But inside the community,
                people kept it alive.
              </p>
              <ul className="feature-list compact">
                <li>Games continued.</li>
                <li>Events continued.</li>
                <li>$COFFEE raffles continued.</li>
                <li>NFT donations kept prize pools moving.</li>
                <li>Mods and active holders kept showing up when nobody knew if it would ever matter.</li>
              </ul>
            </div>
            <div className="copy-panel reveal">
              <p>
                Guy LeDouce, @GuyLeDouceNFT, was one of those holders. He
                stayed, helped where he could, and kept believing the project
                still had something worth saving.
              </p>
              <p>
                Now the operational keys have finally been released to Guy: the
                donation wallet, contract/deployer access, Discord, website, and
                social accounts.
              </p>
              <p>This is not Guy taking over as a founder.</p>
              <p>
                This is the SleepyHeads taking stewardship of the project they
                never left.
              </p>
              <p className="statement">
                Guy holds the keys. The community holds the direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">The story behind the tired</p>
            <h2 className="section-title">Why ME/CFS was always the mission.</h2>
          </div>
          <div className="copy-panel reveal">
            <p>
              Always Tired was never just a collection of exhausted characters.
              The art was created by Frederik, a hardworking engineer who loved
              being active. He played sports, ran, and especially loved tennis.
            </p>
            <p>
              In early 2020, Frederik was diagnosed with ME/CFS. His life
              changed quickly. Within weeks, he lost his job. Soon after, he
              lost the energy to play tennis, run, or take part in the sports
              that had been such a big part of his life.
            </p>
            <p>
              Then even going outside became difficult. Then getting out of bed
              became a task.
            </p>
            <p>
              That story is the foundation of Always Tired. ME/CFS awareness was
              never a trend added later. It was always the heart of the project.
            </p>
            <p>
              The mission was supposed to be awareness, support, and donation.
              That mission was not followed through the way it should have been
              before. Now the SleepyHeads are trying to do it properly.
            </p>
            <div className="actions">
              <ButtonLink className="primary" href="/mission">
                Read Frederik&apos;s Story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Built for the tired</p>
            <h2 className="section-title">
              ME/CFS awareness is not a side mission.
            </h2>
            <p className="section-lede">
              It is the reason Always Tired exists.
            </p>
          </div>
          <div className="grid two">
            <div className="copy-panel reveal">
              <p>
                ME/CFS, also known as Myalgic Encephalomyelitis / Chronic
                Fatigue Syndrome, is a serious, chronic, complex illness that
                can affect the nervous system, immune system, autonomic system,
                sleep, cognition, and the body&apos;s ability to recover after
                exertion.
              </p>
              <p>
                For many people, it is not &quot;just being tired.&quot; It can
                mean waking up exhausted, crashing after basic activity,
                struggling with brain fog, pain, dizziness, unrefreshing sleep,
                light and sound sensitivity, and losing access to the life they
                used to know.
              </p>
            </div>
            <div className="copy-panel reveal">
              <p>Always Tired NFTs cannot treat ME/CFS.</p>
              <p>A website cannot cure anyone.</p>
              <p>A community cannot replace doctors, research, or care.</p>
              <p>
                But a community can help keep the conversation visible. We can
                share credible resources. We can support awareness. We can raise
                funds transparently. We can help more people understand that
                this illness is real, serious, and too often dismissed.
              </p>
              <p className="fine-print">
                Always Tired NFTs is a community-led awareness project. We are
                not a medical organization, and this website does not provide
                medical advice, diagnosis, or treatment. Anyone dealing with
                symptoms should speak with a qualified healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">SleepyHeads</p>
            <h2 className="section-title">The SleepyHeads kept showing up.</h2>
            <p className="section-lede">
              The SleepyHeads are the reason Always Tired still exists.
            </p>
          </div>
          <div className="copy-panel reveal">
            <p>
              Some are collectors. Some care deeply about ME/CFS. Some are here
              for the art, games, raffles, dark humour, and weird little
              community moments. Most are probably some mix of all of it.
            </p>
            <p>
              Holding an Always Tired NFT gives you a voice in the community. It
              does not make you a doctor. It does not make you an expert. It
              does not make you better than anyone else who cares.
            </p>
            <p>
              You do not need to own an NFT to learn, donate, care, or join the
              conversation. But holders will guide the official votes.
            </p>
          </div>
          <div className="grid three spaced">
            {sleepyHeadCards.map((card) => (
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
              <p className="eyebrow">Royalties and transparency</p>
              <h2 className="section-title">
                Activity can finally support the mission transparently.
              </h2>
            </div>
            <div className="copy-panel reveal">
              <p>
                For a long time, Always Tired stayed alive mostly through the
                people who refused to leave. The community kept playing,
                donating prizes, running raffles, and showing up, but the
                collection was not being pushed publicly because royalties were
                not flowing where they should have.
              </p>
              <p>
                Now that the keys have been released and royalties can point
                toward the public donation wallet, activity around the
                collection can finally support the mission transparently.
              </p>
              <p>
                Depending on how a sale is listed and whether royalties are
                honoured by the marketplace, up to 10% can flow directly to the
                public donation wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="eyebrow">Real now</p>
            <h2 className="section-title">Build what is real now.</h2>
          </div>
          <div className="grid four">
            {realFeatures.map((item) => (
              <div className="card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid two">
            <div className="copy-panel reveal">
              <p className="eyebrow">The Coffee Is Still Brewing</p>
              <h2 className="section-title">$COFFEE is being reviewed carefully.</h2>
            </div>
            <div className="copy-panel reveal">
              <p>$COFFEE has always been part of the SleepyHead experience.</p>
              <p>
                It is an off-chain Discord token tied to DRIP, earned through
                holding, games, poker, and community participation. Until now,
                it has mostly been used for raffle tickets and monthly NFT prize
                moments.
              </p>
              <p>
                As part of the community takeover, $COFFEE will be reviewed
                carefully. Something needs to change. That does not mean forced
                mechanics, financial promises, or fake value.
              </p>
              <p>
                It means taking time to ask what role $COFFEE should actually
                play for a community built around awareness, games, collecting,
                and participation.
              </p>
              <p className="statement">No promises yet. The coffee is still brewing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta reveal">
        <p className="eyebrow">Still Tired. Still Here.</p>
        <h2>May Be TIRED, But We&apos;re Not ASLEEP.</h2>
        <p className="section-lede">
          Always Tired was built from real exhaustion. The story was mishandled.
          The mission was left unfinished. The public side went stagnant.
        </p>
        <p className="section-lede">
          But the SleepyHeads stayed. Now the keys are finally where they need
          to be, the donation wallet is public, the collection has a voice
          again, and the community gets to help decide what comes next.
        </p>
        <p className="section-lede">
          This is Web3. Nothing here comes with certain success. We will not
          pretend otherwise.
        </p>
        <p className="statement">
          Still tired. Still here. Still not giving up. The Tired Still Remain.
        </p>
        <div className="actions">
          <ButtonLink className="primary" href="/mission">
            Learn About ME/CFS
          </ButtonLink>
          <ButtonLink href="/collection">View Collection</ButtonLink>
          <ButtonLink href="/donate">Donate</ButtonLink>
          <ButtonLink external href={siteConfig.links.discord}>
            Join Discord
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
