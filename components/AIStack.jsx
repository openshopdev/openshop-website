import { Bot, BrainCircuit, Code2, MessageSquare, Monitor, ShoppingBag, TerminalSquare } from 'lucide-react';

const clients = [
  { label: 'Claude Desktop', icon: Monitor },
  { label: 'Claude Code', icon: TerminalSquare },
  { label: 'ChatGPT', icon: MessageSquare },
  { label: 'Cursor', icon: Code2 },
  { label: 'Windsurf', icon: BrainCircuit },
  { label: 'OpenShop dashboard', icon: Bot },
];

export default function AIStack() {
  return (
    <section className="ai-stack-section" id="ai">
      <div className="ai-stack-copy">
        <p className="section-kicker">Open MCP layer</p>
        <h2>Runs on the AI you already use.</h2>
        <p>
          OpenShop is built on an open MCP server: 142 Shopify tools any AI can
          call, with the same store logic wherever the request starts.
        </p>
        <div className="inline-actions">
          <a href="#watch" className="text-button">
            See it in action
            <span aria-hidden="true">›</span>
          </a>
          <a href="https://github.com/openshopdev/openshop/releases/latest" target="_blank" rel="noopener noreferrer" className="text-button muted-link">
            Install now
            <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>

      <div className="client-cloud" aria-label="AI clients OpenShop can run with">
        {clients.map((client) => {
          const Icon = client.icon;

          return (
            <div className="client-chip" key={client.label}>
              <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
              <span>{client.label}</span>
            </div>
          );
        })}
      </div>

      <div className="ai-stack-card" aria-hidden="true">
        <div className="stack-window">
          <div className="stack-toolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="stack-lines">
            <span className="is-wide" />
            <span />
            <span className="is-short" />
          </div>
          <div className="stack-command">
            <ShoppingBag size={20} strokeWidth={1.9} />
            <span>shopify.orders.refund_and_reply</span>
          </div>
        </div>
      </div>
    </section>
  );
}
