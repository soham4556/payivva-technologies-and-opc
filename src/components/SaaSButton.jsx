import { Link } from 'react-router-dom';
import './styles/SaaSButton.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SaaSButton = ({ children, to, variant = 'primary', className = '' }) => {
  const classNames = `saas-btn saas-btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classNames}>
        <span className="saas-btn-text">{children}</span>
        <span className="saas-btn-arrow"><ArrowIcon /></span>
      </Link>
    );
  }

  return (
    <button className={classNames}>
      <span className="saas-btn-text">{children}</span>
      <span className="saas-btn-arrow"><ArrowIcon /></span>
    </button>
  );
};

export default SaaSButton;
