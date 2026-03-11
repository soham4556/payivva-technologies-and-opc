import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Individual Service Pages
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const SEOOptimization = lazy(() => import("./pages/services/SEOOptimization"));
const SocialMediaMarketing = lazy(() => import("./pages/services/SocialMediaMarketing"));
const GoogleFacebookAds = lazy(() => import("./pages/services/GoogleFacebookAds"));
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
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />

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
    </Router>
  );
}

export default App;
