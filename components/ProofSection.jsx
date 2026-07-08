const facts = [
  ['142 tools', 'Across 28 Shopify categories'],
  ['184 tests', 'Built around a checked MCP layer'],
  ['Open source', 'Use the MCP layer from any compatible client'],
  ['Basic+', 'Works with approved access on every Shopify plan'],
];

export default function ProofSection() {
  return (
    <section className="proof-section" id="proof">
      <div className="proof-copy">
        <p className="section-kicker">Facts before logos</p>
        <h2>Trust the layer before the testimonials exist.</h2>
        <p>
          Until there are approved merchant quotes and customer logos, the home
          page should lead with sourced product facts instead of invented proof.
        </p>
      </div>

      <div className="fact-grid" aria-label="OpenShop product facts">
        {facts.map(([value, label]) => (
          <div className="fact-card" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
