import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RouteSeo from './components/RouteSeo';
import './App.css';

// Lazy load page views for performance optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Admin = lazy(() => import('./pages/Admin'));

// Lazy load legal sections
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Security = lazy(() => import('./pages/Security'));
const Legal = lazy(() => import('./pages/Legal'));
const AIConsultingStrategy = lazy(() => import('./pages/AI_Consulting_Strategy'));
const MachineLearningSolutions = lazy(() => import('./pages/Machine_Learning_Solutions'));
const ComputerVisionNLP = lazy(() => import('./pages/Computer_Vision_NLP'));
const GenerativeAILLM = lazy(() => import('./pages/Generative_AI_LLM'));
const SoftwareDevelopment = lazy(() => import('./pages/Software_Development'));
const AppDevelopment = lazy(() => import('./pages/App_Development'));
const WebsiteDevelopment = lazy(() => import('./pages/Website_Development'));
const DigitalMarketing = lazy(() => import('./pages/Digital_Marketing'));
const IndustryPage = lazy(() => import('./pages/IndustryPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Sleek dark glowing loading spinner for lazy fallback
const PageLoader = () => (
  <div style={{
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-primary)',
    color: '#ffffff',
    flexDirection: 'column',
    gap: '1rem'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(6, 182, 212, 0.1)',
      borderTop: '3px solid var(--color-teal)',
      borderRadius: '50%',
      animation: 'spin-slow 1.5s linear infinite'
    }}></div>
    <span style={{
      fontFamily: 'var(--font-headings)',
      fontSize: '0.9rem',
      letterSpacing: '0.1em',
      color: 'var(--text-secondary)'
    }}>LOADING SYSTEM...</span>
  </div>
);

function AppContent() {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>

        {/* Route-level SEO (title, meta, canonical, JSON-LD) */}
        <RouteSeo />
        
        {/* Navigation Shell */}
        {!isAdminRoute && <Navbar />}

        {/* Dynamic Route Container */}
        <main id="main" style={{ flex: 1, paddingTop: isAdminRoute ? 0 : 'var(--navbar-height)', position: 'relative', zIndex: 1 }}>
          <div className={isAdminRoute ? 'bg-grid admin-bg-grid' : 'bg-grid'}></div>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Primary Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/documentation" element={<Documentation />} />

              {/* Admin Panel */}
              <Route path="/admin" element={<Admin />} />

              {/* Legal Routes */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/security" element={<Security />} />
              <Route path="/legal" element={<Legal />} />

              {/* Service Detail Routes */}
              <Route path="/services/ai-consulting-strategy" element={<AIConsultingStrategy />} />
              <Route path="/services/machine-learning-solutions" element={<MachineLearningSolutions />} />
              <Route path="/services/computer-vision-nlp" element={<ComputerVisionNLP />} />
              <Route path="/services/generative-ai-llm" element={<GenerativeAILLM />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

              {/* Industry Detail Routes */}
              <Route path="/industries/:slug" element={<IndustryPage />} />

              {/* Explicit 404 route (useful for crawlers/tools) */}
              <Route path="/404" element={<NotFound />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        {!isAdminRoute && <Footer />}
        
      </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
