import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RESOURCE_LINKS = {
  '/blog': [
    { label: 'Explore AI consulting', to: '/services/ai-consulting-strategy' },
    { label: 'Read case studies', to: '/resources/case-studies' },
    { label: 'Review delivery documentation', to: '/resources/documentation' },
  ],
  '/resources/case-studies': [
    { label: 'AI consulting and strategy', to: '/services/ai-consulting-strategy' },
    { label: 'Generative AI and LLM systems', to: '/services/generative-ai-llm' },
    { label: 'Explore industry solutions', to: '/industries/manufacturing-industrial-iot' },
  ],
  '/resources/documentation': [
    { label: 'Software engineering services', to: '/services/software-development' },
    { label: 'Cloud and cybersecurity systems', to: '/industries/cybersecurity-cloud-systems' },
    { label: 'Review security practices', to: '/security' },
  ],
};

export default function ResourceLinks({ pathname }) {
  const links = RESOURCE_LINKS[pathname];

  if (!links) return null;

  return (
    <nav className="resource-links-section container" aria-label="Related PAYIVVA resources">
      <p className="resource-links-kicker">CONTINUE EXPLORING</p>
      <div className="resource-links-grid">
        {links.map((link) => (
          <Link className="resource-link-card" to={link.to} key={link.to}>
            <span>{link.label}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
