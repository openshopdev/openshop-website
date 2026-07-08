import {
  BarChart3,
  Files,
  Image,
  Library,
  ListChecks,
  MessageSquareText,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: MessageSquareText,
    title: 'Chat',
    text: 'Hand off a task in plain language and watch OpenShop plan, run tools, and report back.',
  },
  {
    icon: ListChecks,
    title: 'Tasks',
    text: 'Every job the agent is running or has finished, in one queue. Nothing happens off-screen.',
  },
  {
    icon: Image,
    title: 'Studio',
    text: 'Creative work lands here: product photography, descriptions, campaign assets, and visual drafts.',
  },
  {
    icon: Files,
    title: 'Artifacts',
    text: 'The real outputs: reports, images, drafts, and store updates ready to review and ship.',
  },
  {
    icon: BarChart3,
    title: 'Intel',
    text: 'Store patterns and performance read back in plain language, not a raw dashboard.',
  },
  {
    icon: Library,
    title: 'Skills',
    text: 'The workflow library OpenShop knows how to run: readable, extendable, and reusable.',
  },
];

export default function FeatureSection() {
  return (
    <section className="feature-section" id="features">
      <div className="section-heading">
        <p className="section-kicker">One agent. Every surface.</p>
        <h2>Chat is home. The work lands everywhere it should.</h2>
        <p>
          You watch the agent work in chat. Everything else surfaces what it
          produced for review, approval, and reuse.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
