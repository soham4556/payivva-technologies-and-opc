import { useLocation } from 'react-router-dom';
import SEO from '../seo/SEO';
import { getSeoForLocation } from '../seo/routes';

export default function RouteSeo() {
  const location = useLocation();
  const seo = getSeoForLocation({ pathname: location.pathname });

  // If the SEO resolver falls back (no explicit route match), default to noindex.
  // This prevents indexing of unknown/crawled query paths in an SPA.
  const shouldNoIndex = seo?.canonical === location.pathname;
  const robots = shouldNoIndex ? 'noindex,follow' : seo?.robots;

  return <SEO {...seo} robots={robots} />;
}
