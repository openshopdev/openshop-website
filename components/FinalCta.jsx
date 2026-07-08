import { ShoppingBag } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="final-cta" id="connect">
      <div>
        <h2>Start with your store.</h2>
        <p>
          Connect Shopify and watch OpenShop clear the busywork: fulfillment,
          refunds, email, and creative, handled.
        </p>
      </div>
      <a href="https://github.com/openshopdev/openshop/releases/latest" target="_blank" rel="noopener noreferrer" className="primary-button">
        <ShoppingBag size={24} strokeWidth={2.2} aria-hidden="true" />
        Install now
      </a>
    </section>
  );
}
