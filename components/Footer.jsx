import Logo from './Logo';

const groups = [
  {
    title: 'Product',
    links: [
      ['Chat', '#features'],
      ['Tasks', '#features'],
      ['Studio', '#features'],
      ['Skills', '#features'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Use cases', '#use-cases'],
      ['Open MCP', '#ai'],
      ['Model choice', '#model-choice'],
      ['Demo', '#watch'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#company'],
      ['Connect', '#connect'],
      ['Pricing', '#pricing'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="company">
      <div className="footer-brand">
        <Logo />
        <span>Your Shopify store, on autopilot.</span>
      </div>

      <div className="footer-links">
        {groups.map((group) => (
          <div key={group.title}>
            <strong>{group.title}</strong>
            {group.links.map(([label, href]) => (
              <a href={href} key={label}>{label}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
