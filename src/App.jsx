import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AIChatbotWidget from "./components/AIChatbotWidget";

// Pages
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
// Case studies page removed
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Legal = lazy(() => import("./pages/Legal"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Security = lazy(() => import("./pages/Security"));

// Individual Service Pages
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const SEOOptimization = lazy(() => import("./pages/services/SEOOptimization"));
const SocialMediaMarketing = lazy(
  () => import("./pages/services/SocialMediaMarketing"),
);
const GoogleFacebookAds = lazy(
  () => import("./pages/services/GoogleFacebookAds"),
);
const BrandPromotion = lazy(() => import("./pages/services/BrandPromotion"));
const LeadGeneration = lazy(() => import("./pages/services/LeadGeneration"));

function App() {
  return (
    <Router>
      <Helmet>
        <title>PAYIVVA Technologies | Inspiring Innovations</title>
        <meta
          name="description"
          content="PAYIVVA Technologies helps businesses scale digitally using innovative marketing and technology solutions."
        />
      </Helmet>
      <ScrollToTop />
      <div className="min-h-screen app-shell text-white">
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<div className="min-h-screen bg-[#0f172a]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/security" element={<Security />} />

              {/* Individual Service Routes */}
              <Route
                path="/services/web-development"
                element={<WebDevelopment />}
              />
              <Route
                path="/services/seo-optimization"
                element={<SEOOptimization />}
              />
              <Route
                path="/services/social-media-marketing"
                element={<SocialMediaMarketing />}
              />
              <Route
                path="/services/google-facebook-ads"
                element={<GoogleFacebookAds />}
              />
              <Route
                path="/services/brand-promotion"
                element={<BrandPromotion />}
              />
              <Route
                path="/services/lead-generation"
                element={<LeadGeneration />}
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <AIChatbotWidget />
    </Router>
  );
}

export default App;
