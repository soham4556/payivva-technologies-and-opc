import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="container" style={{ textAlign: 'left' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>Page not found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          The page you’re looking for doesn’t exist. Use the navigation or go back to the homepage.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
