import { Code2, ShoppingBag, Store } from 'lucide-react';

const cards = [
  {
    icon: Code2,
    title: 'Open MCP layer',
    text: 'Start with the open source Shopify tool layer and connect it to the AI client you already use.',
  },
  {
    icon: Store,
    title: 'Agent workspace',
    text: 'Add the OpenShop operator when you want memory, approvals, creative output, and repeatable workflows in one place.',
  },
];

export default function PricingTeaser() {
  return (
    <section className="pricing-teaser" id="pricing">
      <div className="section-heading">
        <p className="section-kicker">Start simple</p>
        <h2>Start free, scale when you are ready.</h2>
        <p>The MCP layer is open source. The agent is free to start.</p>
      </div>

      <div className="pricing-cards">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article className="pricing-card" key={card.title}>
              <div className="pricing-icon">
                <Icon size={24} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>

      <div className="section-actions">
        <a href="#connect" className="primary-button">
          <ShoppingBag size={22} strokeWidth={2.1} aria-hidden="true" />
          Connect Shopify
        </a>
      </div>
    </section>
  );
}
