import { BrainCircuit, Cpu, DatabaseZap, LockKeyhole, Network, ShoppingBag } from 'lucide-react';

const models = ['Claude', 'GPT', 'Gemini', 'Ollama'];

export default function ModelChoice() {
  return (
    <section className="model-choice-section" id="model-choice">
      <div className="model-diagram" aria-hidden="true">
        <div className="model-core">
          <ShoppingBag size={30} strokeWidth={1.9} />
          <span>OpenShop store logic</span>
        </div>
        <div className="model-ring">
          {models.map((model) => (
            <span key={model}>{model}</span>
          ))}
        </div>
      </div>

      <div className="model-copy">
        <p className="section-kicker">Bring your own AI</p>
        <h2>The model can change. The operator stays the same.</h2>
        <p>
          Run OpenShop through Claude, GPT, Gemini, or a local model with
          Ollama. The approvals, skills, memory, and Shopify tools stay in one
          place.
        </p>

        <div className="model-points">
          <div>
            <BrainCircuit size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>Choose the AI surface</span>
          </div>
          <div>
            <DatabaseZap size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>Keep store context</span>
          </div>
          <div>
            <LockKeyhole size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>Approve before publish</span>
          </div>
          <div>
            <Network size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>Reuse the same skills</span>
          </div>
          <div>
            <Cpu size={22} strokeWidth={1.8} aria-hidden="true" />
            <span>Run local when needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
