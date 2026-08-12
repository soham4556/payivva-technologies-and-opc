import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles, Server, Factory, BookOpen, Layers } from 'lucide-react';
import industriesData from '../data/industries';
import './styles/SearchModal.css';

const searchableItems = [
  // Services
  {
    id: 's-1',
    title: 'AI Consulting & Strategy',
    category: 'Services',
    desc: 'Enterprise AI system roadmapping and strategic AI integration',
    path: '/services/ai-consulting-strategy',
    icon: Sparkles,
  },
  {
    id: 's-2',
    title: 'Machine Learning Solutions',
    category: 'Services',
    desc: 'Predictive analytics engines and custom ML pipeline deployment',
    path: '/services/machine-learning-solutions',
    icon: Sparkles,
  },
  {
    id: 's-3',
    title: 'Computer Vision & NLP',
    category: 'Services',
    desc: 'OCR, semantic text analysis, object detection, and visual inspection',
    path: '/services/computer-vision-nlp',
    icon: Sparkles,
  },
  {
    id: 's-4',
    title: 'Generative AI & LLM',
    category: 'Services',
    desc: 'Custom GPT models, multi-agent frameworks, and RAG knowledge systems',
    path: '/services/generative-ai-llm',
    icon: Sparkles,
  },
  {
    id: 's-5',
    title: 'Software Development',
    category: 'Services',
    desc: 'Custom enterprise software platforms, API integrations, and cloud backend',
    path: '/services/software-development',
    icon: Server,
  },
  {
    id: 's-6',
    title: 'App Development',
    category: 'Services',
    desc: 'Next-generation iOS & Android native & cross-platform apps',
    path: '/services/app-development',
    icon: Server,
  },
  {
    id: 's-7',
    title: 'Website Development',
    category: 'Services',
    desc: 'High-performance web platforms, Next.js, Vite & modern UI solutions',
    path: '/services/website-development',
    icon: Server,
  },
  {
    id: 's-8',
    title: 'Digital Marketing',
    category: 'Services',
    desc: 'SEO strategy, growth marketing, content authority, and brand reach',
    path: '/services/digital-marketing',
    icon: Server,
  },

  // Industries (from industriesData)
  ...industriesData.map((ind) => ({
    id: `ind-${ind.slug}`,
    title: ind.title,
    category: 'Industries',
    desc: ind.heroDesc || ind.desc1,
    path: `/industries/${ind.slug}`,
    icon: Factory,
  })),

  // Resources & Company
  {
    id: 'r-1',
    title: 'Case Studies & Success Stories',
    category: 'Resources',
    desc: 'Real-world digital transformation case studies and client results',
    path: '/resources/case-studies',
    icon: BookOpen,
  },
  {
    id: 'r-2',
    title: 'Documentation & Technical Specs',
    category: 'Resources',
    desc: 'System architecture blueprints, developer guides, and API specs',
    path: '/resources/documentation',
    icon: BookOpen,
  },
  {
    id: 'r-3',
    title: 'Insights Blog & Articles',
    category: 'Resources',
    desc: 'Latest articles on Generative AI, Cloud Lakehouse, and IoT',
    path: '/blog',
    icon: BookOpen,
  },
  {
    id: 'c-1',
    title: 'About PAYIVVA Technologies',
    category: 'Company',
    desc: 'Learn about our mission, technology stack, and leadership team',
    path: '/about',
    icon: Layers,
  },
  {
    id: 'c-2',
    title: 'Careers at PAYIVVA',
    category: 'Company',
    desc: 'Join our team of AI engineers, software developers, and architects',
    path: '/careers',
    icon: Layers,
  },
  {
    id: 'c-3',
    title: 'Contact Us & Free Consultation',
    category: 'Company',
    desc: 'Reach out to our technical team for project proposals and quotes',
    path: '/contact',
    icon: Layers,
  },
];

const quickChips = [
  'Generative AI',
  'Machine Learning',
  'Manufacturing',
  'Software Development',
  'Case Studies',
  'Contact Us',
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResults = searchableItems.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());

    const matchesFilter = selectedFilter === 'All' || item.category === selectedFilter;

    return matchesQuery && matchesFilter;
  });

  const handleSelectResult = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Search Header Input */}
        <div className="search-modal-header">
          <Search size={22} className="search-icon-muted" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search services, solutions, industries, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
          <button className="search-close-btn" onClick={onClose} aria-label="Close search">
            <span className="search-esc-key">ESC</span>
          </button>
        </div>

        {/* Filter Categories Bar */}
        <div className="search-filter-bar">
          {['All', 'Services', 'Industries', 'Resources', 'Company'].map((filter) => (
            <button
              key={filter}
              className={`search-filter-chip ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Results Body */}
        <div className="search-modal-body">
          {query.trim() === '' ? (
            <div className="search-empty-state">
              <div className="quick-search-section">
                <span className="quick-search-label">Popular Searches:</span>
                <div className="quick-chips-wrapper">
                  {quickChips.map((chip) => (
                    <button
                      key={chip}
                      className="quick-chip-btn"
                      onClick={() => setQuery(chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="featured-search-suggestions">
                <span className="quick-search-label">Featured Quick Links:</span>
                <div className="suggestions-grid">
                  {searchableItems.slice(0, 4).map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="suggestion-card"
                        onClick={() => handleSelectResult(item.path)}
                      >
                        <div className="suggestion-icon">
                          <IconComponent size={18} />
                        </div>
                        <div className="suggestion-content">
                          <span className="suggestion-title">{item.title}</span>
                          <span className="suggestion-cat">{item.category}</span>
                        </div>
                        <ArrowRight size={14} className="suggestion-arrow" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : filteredResults.length > 0 ? (
            <div className="search-results-list">
              {filteredResults.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => handleSelectResult(item.path)}
                  >
                    <div className="result-item-left">
                      <div className="result-icon-box">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div className="result-title-row">
                          <span className="result-item-title">{item.title}</span>
                          <span className="result-category-badge">{item.category}</span>
                        </div>
                        <p className="result-item-desc">{item.desc}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="result-item-arrow" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="search-no-results">
              <p className="no-results-text">No matching solutions found for &quot;{query}&quot;</p>
              <p className="no-results-sub">Try searching for Generative AI, Cloud, Manufacturing, or Services.</p>
            </div>
          )}
        </div>

        {/* Modal Footer Key Guide */}
        <div className="search-modal-footer">
          <div className="key-guide-item">
            <kbd className="key-cap">ESC</kbd> <span>to close</span>
          </div>
          <div className="key-guide-item">
            <kbd className="key-cap">↵</kbd> <span>to select</span>
          </div>
          <span className="footer-brand-tag">PAYIVVA Technologies Spotlight Search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
