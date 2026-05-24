import { useMemo, useState } from 'react';
import { Check, Copy, Code2, FileText, Search, ServerCog } from 'lucide-react';
import './styles/Documentation.css';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'api', label: 'API Patterns' },
  { id: 'deploy', label: 'Deployment' },
];

const docs = [
  {
    id: 'overview',
    icon: FileText,
    title: 'Platform Overview',
    description: 'A short guide to how PAYIVVA structures delivery, environments, and handoff points.',
    code: `project/
  src/
  api/
  docs/
  infra/`,
  },
  {
    id: 'quick-start',
    icon: Code2,
    title: 'Quick Start',
    description: 'Use this baseline when you need a clean handoff for a new build or release cycle.',
    code: `npm install
npm run dev
npm run build`,
  },
  {
    id: 'api',
    icon: ServerCog,
    title: 'API Patterns',
    description: 'Standard request and response structures for fast, maintainable integrations.',
    code: `POST /api/leads
{
  "name": "Acme Co",
  "source": "landing-page"
}`,
  },
  {
    id: 'deploy',
    icon: Check,
    title: 'Deployment Notes',
    description: 'Release practices that keep environments stable while shipping updates quickly.',
    code: `1. Validate build output
2. Review environment variables
3. Publish release`,
  },
];

const Documentation = () => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState('');

  const filteredDocs = useMemo(() => {
    const lower = query.toLowerCase();
    return docs.filter((doc) => doc.title.toLowerCase().includes(lower) || doc.description.toLowerCase().includes(lower));
  }, [query]);

  const copyCode = async (text, id) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    window.setTimeout(() => setCopied(''), 1200);
  };

  return (
    <div className="docs-page-wrapper">
      <div className="premium-edge-section docs-header">
        <div className="docs-hero">
          <span className="resource-kicker">DOCUMENTATION</span>
          <h1>Build Notes, API References, and Delivery Rules</h1>
          <p>
            A focused documentation hub for internal teams and client handoffs, with searchable guidance and reusable
            patterns.
          </p>
        </div>

        <div className="docs-searchbar">
          <Search size={16} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search docs..." />
        </div>
      </div>

      <div className="premium-edge-section docs-main-layout">
        <div className="docs-shell">
          <aside className="docs-sidebar">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="docs-side-link">
                {section.label}
              </a>
            ))}
          </aside>

          <div className="docs-content">
            {filteredDocs.map((doc) => {
              const Icon = doc.icon;
              return (
                <section key={doc.id} id={doc.id} className="docs-card">
                  <div className="docs-card-head">
                    <div className="docs-card-icon"><Icon size={18} /></div>
                    <div>
                      <h2>{doc.title}</h2>
                      <p>{doc.description}</p>
                    </div>
                  </div>
                  <pre className="docs-code-block"><code>{doc.code}</code></pre>
                  <button className="docs-copy-btn" onClick={() => copyCode(doc.code, doc.id)}>
                    {copied === doc.id ? 'Copied' : 'Copy snippet'} {copied === doc.id ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
