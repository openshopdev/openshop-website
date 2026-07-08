'use client';

import { BarChart3, Image, Mail, PackageCheck, RefreshCcw } from 'lucide-react';
import { useState } from 'react';

const useCases = [
  {
    label: 'Fulfillment',
    icon: PackageCheck,
    title: 'OpenShop for Fulfillment',
    body: "Orders age, trackings go missing, customers ask where their package is. OpenShop watches unfulfilled orders and clears the backlog before it becomes a support queue.",
    artifact: 'Backlog scan',
    rows: ['Find orders older than 48 hours', 'Draft customer update', 'Create fulfillment checklist'],
  },
  {
    label: 'Support & Refunds',
    icon: RefreshCcw,
    title: 'OpenShop for Support',
    body: "Say what happened, OpenShop checks the order, decides if it is actually your mistake, and handles the refund and the reply in your voice.",
    artifact: 'Refund review',
    rows: ['Verify packing slip mismatch', 'Prepare refund for approval', 'Write customer reply'],
  },
  {
    label: 'Marketing & Email',
    icon: Mail,
    title: 'OpenShop for Marketing',
    body: 'From a flash sale setup to a customer win-back segment, OpenShop drafts the discount, the page, and the email. You approve, it ships.',
    artifact: 'Campaign draft',
    rows: ['Build win-back segment', 'Draft offer and email', 'Queue launch checklist'],
  },
  {
    label: 'Design & Creative',
    icon: Image,
    title: 'OpenShop for Creative',
    body: 'New product, new photos, new copy. OpenShop generates product images and descriptions so the listing is ready the same day the stock is.',
    artifact: 'Listing kit',
    rows: ['Generate product image brief', 'Draft PDP copy', 'Export campaign assets'],
  },
  {
    label: 'Inventory & Reporting',
    icon: BarChart3,
    title: 'OpenShop for Operators',
    body: "OpenShop checks inventory against sales velocity, flags reorders before you're out, and compiles the end-of-month report while you sleep.",
    artifact: 'Operator brief',
    rows: ['Flag stockout risk', 'Compare sales velocity', 'Prepare monthly summary'],
  },
];

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useCases[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="use-cases-section" id="use-cases">
      <div className="section-heading">
        <p className="section-kicker">Daily store work</p>
        <h2>Made for the way you sell.</h2>
      </div>

      <div className="use-case-tabs" role="tablist" aria-label="OpenShop use cases">
        {useCases.map((item, index) => {
          const Icon = item.icon;
          const selected = index === activeIndex;

          return (
            <button
              aria-controls="use-case-panel"
              aria-selected={selected}
              className={`use-case-tab${selected ? ' is-active' : ''}`}
              id={`use-case-tab-${index}`}
              key={item.label}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`use-case-tab-${activeIndex}`}
        className="use-case-panel"
        id="use-case-panel"
        role="tabpanel"
      >
        <article className="use-case-copy">
          <div className="use-case-icon">
            <ActiveIcon size={28} strokeWidth={1.8} aria-hidden="true" />
          </div>
          <h3>{active.title}</h3>
          <p>{active.body}</p>
        </article>

        <article className="artifact-preview">
          <div className="artifact-header">
            <span>{active.artifact}</span>
            <strong>Ready for review</strong>
          </div>
          <div className="artifact-rows">
            {active.rows.map((row, index) => (
              <div className="artifact-row" key={row}>
                <span>{index + 1}</span>
                <p>{row}</p>
                <strong>{index === active.rows.length - 1 ? 'Drafted' : 'Done'}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
