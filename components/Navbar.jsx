import { Menu } from 'lucide-react';
import Logo from './Logo';

const items = [
  { label: 'Product', href: '#product' },
  { label: 'Demo', href: '#watch' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Logo />

        <div className="nav-links" aria-label="Primary">
          {items.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="https://github.com/openshopdev/openshop/releases/latest" target="_blank" rel="noopener noreferrer" className="nav-cta">Install now</a>

        <details className="mobile-nav">
          <summary className="nav-menu-button" aria-label="Open menu">
            <Menu size={22} aria-hidden="true" />
          </summary>

          <div className="mobile-panel">
            {items.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="https://github.com/openshopdev/openshop/releases/latest" target="_blank" rel="noopener noreferrer" className="mobile-cta">
              Install now
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
