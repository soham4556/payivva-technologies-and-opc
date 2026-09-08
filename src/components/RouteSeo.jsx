import { useLocation } from 'react-router-dom';
import SEO from '../seo/SEO';
import { getSeoForLocation } from '../seo/routes';

export default function RouteSeo() {
  const location = useLocation();
  const seo = getSeoForLocation({ pathname: location.pathname });

  return <SEO {...seo} />;
}
