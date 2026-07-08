const steps = [
  {
    number: '01',
    title: 'Connect Shopify',
    text: 'Install the desktop app and connect your store. OpenShop reads the live store through approved Shopify access.',
  },
  {
    number: '02',
    title: 'Give it a job',
    text: 'Ask in plain English: fix SEO, write a product page, check low stock, or build a campaign.',
  },
  {
    number: '03',
    title: 'Approve the result',
    text: 'The agent shows the work, diffs, and tool calls. Nothing goes live until you say yes.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how">
      <div className="section-heading align-left">
        <p className="section-kicker">Approval loop</p>
        <h2>The agent can act, but you stay in control.</h2>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
