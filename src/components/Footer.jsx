import { Link, useLocation } from 'react-router-dom';
import { Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';
import SaaSButton from './SaaSButton';
import './styles/Footer.css';

const LinkedInIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LinkedinIcon = LinkedInIcon;

const ArrowRightIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" style={{ marginLeft: '6px' }}>
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

  const Footer = () => {
  return (
    <section className="combined-footer-wrapper animate-fade-in">
      <div className="container cta-banner-container-direct">
        <div className="cta-banner-wrapper">
          <div className="cta-watermark-text">PAYIVVA</div>
          <div className="cta-banner-content">
            <div className="specialization-tag-line">
              <span className="specialization-tag" style={{ color: '#ffffff', opacity: 0.9 }}>GET STARTED</span>
              <span className="tag-horizontal-line" style={{ background: '#ffffff', opacity: 0.8 }}></span>
            </div>
            <h2 className="cta-banner-title">
              Let's Make Something<br />Great Together
            </h2>
            <div className="cta-buttons-row">
              <SaaSButton to="/services" variant="primary">Discover More</SaaSButton>
              <SaaSButton to="/contact" variant="ghost">Contact Us</SaaSButton>
            </div>
          </div>
          <div className="cta-banner-visual">
            <img src="/project_img/men.png" alt="PAYIVVA Specialist" className="cta-person-img" />
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-brand-column">
          <div className="footer-logo">
            <img src="/logo.png" alt="PAYIVVA Logo" className="footer-logo-img" />
            <span className="footer-brand-text">PAYIVVA</span>
          </div>
          <p className="footer-desc">
            Empowering industries with AI-driven tools tailored for success, unlocking new business potential. We pioneer applied AI solutions to build the intelligent enterprises of tomorrow.
          </p>
          <div className="footer-social-links">
            <a href="#" className="social-icon-btn"><TwitterIcon size={14} /></a>
            <a href="#" className="social-icon-btn"><InstagramIcon size={14} /></a>
            <a href="#" className="social-icon-btn"><LinkedinIcon size={14} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Company</h4>
          <ul className="footer-links-list">
            <li className="footer-link-item"><Link to="/about">About Us</Link></li>
            <li className="footer-link-item"><Link to="/services">Services</Link></li>
            <li className="footer-link-item"><Link to="/services">Industries</Link></li>
            <li className="footer-link-item"><Link to="/careers">Careers</Link></li>
            <li className="footer-link-item"><Link to="/blog">Blog Insights</Link></li>
            <li className="footer-link-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Our Services</h4>
          <ul className="footer-links-list">
            <li className="footer-link-item"><Link to="/services/ai-consulting-strategy">AI Consulting</Link></li>
            <li className="footer-link-item"><Link to="/services/machine-learning-solutions">Machine Learning</Link></li>
            <li className="footer-link-item"><Link to="/services/computer-vision-nlp">Computer Vision</Link></li>
            <li className="footer-link-item"><Link to="/services/generative-ai-llm">Generative AI</Link></li>
            <li className="footer-link-item"><Link to="/services/software-development">Custom Software</Link></li>
            <li className="footer-link-item"><Link to="/services/app-development">Mobile Apps</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Get in touch</h4>
          <div className="footer-contact-details">
            <div className="footer-contact-item">
              <MapPinIcon size={14} className="footer-contact-icon" />
              <span>820, Sreen building, Phase II, Hinjawadi, Pune - 411057</span>
            </div>
            <div className="footer-contact-item">
              <MailIcon size={14} className="footer-contact-icon" />
              <div className="footer-emails">
                <span>sales@payivva.com</span>
                <span>support@payivva.com</span>
              </div>
            </div>
          </div>
          <div className="footer-accreditation-badges">
            <div className="footer-badge-item">
              <span className="badge-text-top">ISO 27001</span>
              <span className="badge-text-bottom">SECURE SYSTEM</span>
            </div>
            <div className="footer-badge-item">
              <span className="badge-text-top">ISO 9001:2015</span>
              <span className="badge-text-bottom">CERTIFIED</span>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Reach us</h4>
          <div className="footer-map-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5649980649755!2d73.72791487501579!3d18.593641282513998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc14c0a5a31%3A0x6001db16315bd6a0!2sGera%20Imperium%20Rise!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="220" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PAYIVVA Technologies Headquarters"
            />
          </div>
        </div>
        <div className="footer-bottom-row">
          <span>© Copyright {new Date().getFullYear()} PAYIVVA. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
