export default function Logo({ compact = false }) {
  return (
    <a className="brand" href="/" aria-label="OpenShop home">
      <span className="brand-mark" aria-hidden="true">
        <img src="/openshop-logo.png" alt="" />
      </span>
      {!compact && <span className="brand-word">OpenShop</span>}
    </a>
  );
}
