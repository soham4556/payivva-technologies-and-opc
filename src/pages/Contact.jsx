import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import './styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    service: 'Web Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      website: '',
      service: 'Web Development',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page animate-fade-in">
      <section className="contact-hero">
        <div className="contact-shell contact-hero-grid">
          <div className="contact-hero-copy glass-card">
            <span className="contact-tag">CONNECT WITH US</span>
            <h1 className="contact-title">Let's Engineer Your Scale</h1>
            <p className="contact-copy">
              Bring us your roadmap, acquisition targets, or operational bottlenecks. We will shape a premium execution plan for your next growth phase.
            </p>
            <div className="contact-hero-pills">
              <span>Response in 12h</span>
              <span>Pune HQ</span>
              <span>Enterprise Ready</span>
            </div>
          </div>

          <div className="contact-radar-card glass-card">
            <div className="radar-header">
              <span className="radar-chip">HQ Operations Radar</span>
              <strong>Handewadi Operations Hub</strong>
            </div>
            <div className="radar-canvas">
              <span className="radar-pin"></span>
              <span className="radar-ring ring-1"></span>
              <span className="radar-ring ring-2"></span>
              <span className="radar-ring ring-3"></span>
              <span className="radar-grid-line line-a"></span>
              <span className="radar-grid-line line-b"></span>
            </div>
            <div className="radar-footer">House no. 105, Green Park - Venkatesh Properties, Autadwadi Handewadi, Pune</div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-shell contact-details-grid">
          <div className="glass-card hq-panel">
            <span className="contact-tag">HQ OPERATIONS PANEL</span>
            <h2 className="section-title">Direct contact channels</h2>

            <div className="contact-info-list">
              <div className="contact-info-row">
                <div className="contact-icon-box"><MapPin size={18} /></div>
                <div>
                  <h3>HQ Location</h3>
                  <p>House no. 105, Green Park - Venkatesh Properties, Autadwadi Handewadi, Pune, Maharashtra, 411060, India</p>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-icon-box accent-emerald"><Mail size={18} /></div>
                <div>
                  <h3>Email Hub</h3>
                  <p>info@payivva.com</p>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-icon-box accent-purple"><Phone size={18} /></div>
                <div>
                  <h3>Telephonic Hub</h3>
                  <p>+91 20 6712 8900</p>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-icon-box"><Clock size={18} /></div>
                <div>
                  <h3>Active Hours</h3>
                  <p>Monday - Friday, 09:00 - 18:00 IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card form-panel">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <span className="contact-tag">REQUEST A CALL</span>
                <h2 className="section-title">Start the conversation</h2>

                <div className="form-row-two">
                  <div className="form-group-block">
                    <label className="form-label-node" htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" name="name" className="form-input-node" placeholder="Alexander Vance" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group-block">
                    <label className="form-label-node" htmlFor="contact-email">Corporate Email</label>
                    <input type="email" id="contact-email" name="email" className="form-input-node" placeholder="alex@enterprise.com" value={formData.email} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className="form-row-two">
                  <div className="form-group-block">
                    <label className="form-label-node" htmlFor="contact-website">Website URL</label>
                    <input type="url" id="contact-website" name="website" className="form-input-node" placeholder="https://company.com" value={formData.website} onChange={handleInputChange} />
                  </div>
                  <div className="form-group-block">
                    <label className="form-label-node" htmlFor="contact-service">Target Specification</label>
                    <select id="contact-service" name="service" className="form-select-node" value={formData.service} onChange={handleInputChange}>
                      <option value="Web Development">Custom Web Development</option>
                      <option value="SEO Dominance">SEO Dominance</option>
                      <option value="Enterprise Lead Generation">Enterprise Lead Generation</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-block">
                  <label className="form-label-node" htmlFor="contact-brief">Project brief</label>
                  <textarea id="contact-brief" name="message" className="form-textarea-node" rows="5" placeholder="Describe your requirements, timeline, and outcome goals..." value={formData.message} onChange={handleInputChange} required />
                </div>

                <button type="submit" className="btn btn-primary contact-submit-btn">
                  Deploy Message <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="form-success-wrapper">
                <CheckCircle size={56} className="contact-success-icon" />
                <h2 className="section-title">Message delivered</h2>
                <p>Your request has been routed to the PAYIVVA operations desk. A strategist will reply within 12 business hours.</p>
                <button className="btn btn-secondary" onClick={resetForm}>Send Another Message</button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
