import {
  Check,
  Mail,
  PackageCheck,
  Pencil,
  RefreshCcw,
  ShoppingBag,
} from 'lucide-react';

const workflowTasks = [
  { label: 'Fulfillment', count: 7, icon: PackageCheck, delay: '-0.2s' },
  { label: 'Refund', count: 3, icon: RefreshCcw, delay: '-2.2s' },
  { label: 'Email', count: 12, icon: Mail, delay: '-4.2s' },
  { label: 'Design', count: 5, icon: Pencil, delay: '-6.2s' },
];

function TaskCard({ task, phase }) {
  const Icon = task.icon;
  const complete = phase === 'complete';

  return (
    <div
      className={`task-card task-card-${phase}`}
      style={{ '--workflow-delay': task.delay }}
    >
      <span className="task-badge">{complete ? 0 : task.count}</span>
      <Icon className="task-card-icon" size={31} strokeWidth={1.6} aria-hidden="true" />
      {complete && <Check className="task-check" size={18} strokeWidth={2.5} aria-hidden="true" />}
      <span className="task-label">{task.label}</span>
    </div>
  );
}

function TaskFlow({ task }) {
  return (
    <>
      <TaskCard task={task} phase="incoming" />
      <TaskCard task={task} phase="complete" />
    </>
  );
}

function Sparkle({ className }) {
  return (
    <span className={`sparkle ${className || ''}`} aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 1.8c1.15 5.5 2.85 7.2 8.4 8.45-5.55 1.2-7.25 2.9-8.4 8.45-1.2-5.55-2.9-7.25-8.45-8.45C9.1 9 10.8 7.3 12 1.8Z" />
      </svg>
    </span>
  );
}

function AgentCat() {
  return (
    <div className="agent-cat">
      <span className="laptop-glow" aria-hidden="true" />
      <img src="/agent-cat.png" alt="" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="product">
      <div className="hero-copy">
        <h1>
          Let <span>OpenShop</span>
          <br />
          handle the busywork.
        </h1>
        <p>
          OpenShop is an AI operator for Shopify stores. It watches your store,
          catches what needs attention, and handles repetitive tasks so you can
          focus on growth.
        </p>
        <div className="hero-actions">
          <a href="#connect" className="primary-button">
            <ShoppingBag size={24} strokeWidth={2.2} aria-hidden="true" />
            Connect Shopify
          </a>
          <a href="#watch" className="text-button">
            See what it can do
            <span aria-hidden="true">›</span>
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <svg className="flow-line" viewBox="0 0 1440 330" preserveAspectRatio="none">
          <path
            className="flow-path flow-path-incoming"
            d="M0 92 C110 112 150 66 225 140 C295 210 370 145 455 190 C535 232 542 302 660 272"
          />
          <path
            className="flow-path flow-path-outgoing"
            d="M660 272 C748 250 782 310 865 285 C934 263 960 220 1035 230 C1147 246 1120 120 1235 140 C1325 155 1338 95 1440 125"
          />
          <path
            className="flow-path flow-path-trace"
            d="M0 92 C110 112 150 66 225 140 C295 210 370 145 455 190 C535 232 542 302 660 272 C748 250 782 310 865 285 C934 263 960 220 1035 230 C1147 246 1120 120 1235 140 C1325 155 1338 95 1440 125"
          />
        </svg>

        <Sparkle className="sparkle-process" />
        <Sparkle className="sparkle-complete" />

        {workflowTasks.map((task) => (
          <TaskFlow key={task.label} task={task} />
        ))}

        <AgentCat />
      </div>
    </section>
  );
}
