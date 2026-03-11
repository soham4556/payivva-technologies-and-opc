import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import {
  Mail, Phone, MapPin, MessageCircle, Send,
  CheckCircle2, AlertCircle,
} from 'lucide-react';

/* ─── Responsive hook ─────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

/* ─── Data ────────────────────────────────────────────────────── */
const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@payivva.com',
    href: 'mailto:info@payivva.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    description: 'Mon–Sat, 9 AM – 7 PM IST',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'India',
    href: 'https://maps.google.com/?q=India',
    description: 'Remote-first, serving clients worldwide',
  },
];

const services = [
  'Website Development',
  'SEO Optimization',
  'Social Media Marketing',
  'Google & Facebook Ads',
  'Online Brand Promotion',
  'Lead Generation',
  'Other',
];

/* ─── ContactCard ─────────────────────────────────────────────── */
function ContactCard({ info }) {
  const [hovered, setHovered] = useState(false);
  const Icon = info.icon;
  return (
    <a
      href={info.href}
      target={info.href.startsWith('http') ? '_blank' : undefined}
      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: '16px',
        padding: '18px 20px',
        background: hovered
          ? 'linear-gradient(135deg,rgba(212,175,55,.08),rgba(255,255,255,.03))'
          : 'linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01))',
        border: `1px solid ${hovered ? 'rgba(212,175,55,.35)' : 'rgba(255,255,255,.06)'}`,
        borderRadius: '16px',
        textDecoration: 'none',
        transition: 'all .35s cubic-bezier(.23,1,.32,1)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 40px rgba(212,175,55,.1)' : '0 4px 20px rgba(0,0,0,.25)',
        backdropFilter: 'blur(8px)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* shimmer top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: hovered
          ? 'linear-gradient(90deg,transparent,rgba(212,175,55,.7),transparent)'
          : 'linear-gradient(90deg,transparent,rgba(255,255,255,.04),transparent)',
        transition: 'all .35s ease',
      }} />

      <div style={{
        width: '44px', height: '44px', flexShrink: 0,
        borderRadius: '12px',
        background: hovered ? 'rgba(212,175,55,.15)' : 'rgba(212,175,55,.08)',
        border: '1px solid rgba(212,175,55,.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all .3s ease',
        boxShadow: hovered ? '0 0 16px rgba(212,175,55,.2)' : 'none',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}>
        <Icon color="#D4AF37" size={19} />
      </div>

      <div>
        <p style={{ color: 'rgba(255,255,255,.4)', fontSize: '11px', margin: '0 0 3px 0' }}>{info.label}</p>
        <p style={{
          color: hovered ? '#D4AF37' : '#fff',
          fontWeight: 700, fontSize: '14px', margin: '0 0 3px 0',
          transition: 'color .3s ease',
        }}>{info.value}</p>
        <p style={{ color: 'rgba(255,255,255,.3)', fontSize: '11px', margin: 0 }}>{info.description}</p>
      </div>
    </a>
  );
}

/* ─── WhatsApp Button ─────────────────────────────────────────── */
function WhatsAppBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20PAYIVVA%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        width: '100%', padding: '14px',
        borderRadius: '14px',
        border: `1px solid ${hovered ? 'rgba(37,211,102,.55)' : 'rgba(37,211,102,.25)'}`,
        background: hovered ? 'rgba(37,211,102,.12)' : 'rgba(37,211,102,.05)',
        color: '#25D366', fontWeight: 700, fontSize: '14px',
        textDecoration: 'none',
        transition: 'all .35s cubic-bezier(.23,1,.32,1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 0 20px rgba(37,211,102,.15)' : 'none',
      }}
    >
      <MessageCircle
        size={20}
        style={{ transition: 'transform .3s', transform: hovered ? 'scale(1.15)' : 'scale(1)' }}
      />
      Chat on WhatsApp
    </a>
  );
}

/* ─── Input style helper ──────────────────────────────────────── */
function inputStyle(hasError) {
  return {
    width: '100%',
    background: 'rgba(255,255,255,.03)',
    border: `1px solid ${hasError ? 'rgba(239,68,68,.5)' : 'rgba(212,175,55,.15)'}`,
    borderRadius: '10px',
    padding: '11px 14px',
    color: '#fff',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color .2s ease, box-shadow .2s ease',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };
}

/* ─── Main Component ──────────────────────────────────────────── */
export default function Contact() {
  const w        = useWindowWidth();
  const isMobile = w < 480;
  const isTablet = w >= 480 && w < 1024;
  const isDesktop= w >= 1024;

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '',
  });
  const [status, setStatus]   = useState('idle');
  const [errors, setErrors]   = useState({});
  const [focused, setFocused] = useState('');
  const [submitHov, setSubmitHov] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Name is required';
    if (!formData.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  e.email   = 'Please enter a valid email';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setStatus('submitting');
    try {
      await new Promise(r => setTimeout(r, 1500));
      setStatus('success');
      setFormData({ name:'', email:'', phone:'', company:'', service:'', budget:'', message:'' });
    } catch { setStatus('error'); }
  };

  const fieldStyle = (name) => ({
    ...inputStyle(!!errors[name]),
    borderColor: focused === name && !errors[name]
      ? 'rgba(212,175,55,.5)' : errors[name]
      ? 'rgba(239,68,68,.5)' : 'rgba(212,175,55,.15)',
    boxShadow: focused === name ? '0 0 0 3px rgba(212,175,55,.08)' : 'none',
  });

  const focusProps = (name) => ({
    onFocus: () => setFocused(name),
    onBlur:  () => setFocused(''),
  });

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        background: '#0a0a0a',
        padding: isMobile ? '40px 0' : isTablet ? '80px 0' : '100px 0',
        fontFamily: "'Outfit',sans-serif",
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.6}}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes spin{to{transform:rotate(360deg)}}
        input::placeholder,textarea::placeholder,select option{color:rgba(255,255,255,.25)}
        select option{background:#111}
      `}</style>

      {/* centre glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: isMobile ? '320px' : '600px',
        height: isMobile ? '320px' : '600px',
        background: 'radial-gradient(circle,rgba(212,175,55,.04) 0%,transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        animation: 'pulse 10s ease-in-out infinite',
      }} />

      {/* corner orb */}
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: isMobile ? '200px' : '400px', height: isMobile ? '200px' : '400px',
        background: 'radial-gradient(circle,rgba(212,175,55,.03) 0%,transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* top / bottom gold lines */}
      {['top','bottom'].map(pos => (
        <div key={pos} style={{
          position: 'absolute', [pos]: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg,transparent,rgba(212,175,55,.45),transparent)',
        }} />
      ))}

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: isMobile ? '0 16px' : isTablet ? '0 24px' : '0 32px',
      }}>

        {/* ── HEADER ── */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '40px' : isTablet ? '52px' : '68px',
          animation: 'fadeSlideUp .8s ease both',
        }}>
          <span style={{
            display: 'inline-block', padding: '6px 16px', borderRadius: '30px',
            border: '1px solid rgba(212,175,55,.35)', background: 'rgba(212,175,55,.07)',
            color: '#D4AF37', fontSize: '10px', fontWeight: 800,
            letterSpacing: '3px', textTransform: 'uppercase',
            marginBottom: '20px', boxShadow: '0 0 18px rgba(212,175,55,.1)',
          }}>✦ Get In Touch ✦</span>

          <h2 style={{
            fontSize: isMobile ? '32px' : isTablet ? '38px' : '52px',
            fontWeight: 900, color: '#fff',
            margin: '0 0 16px 0', lineHeight: 1.15, letterSpacing: '-1.2px',
          }}>
            Let's Grow Your Business{' '}
            <span style={{
              background: 'linear-gradient(135deg,#D4AF37 0%,#F0D060 40%,#D4AF37 70%,#BF9520 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', animation: 'shimmer 4s linear infinite',
              display: 'inline-block',
            }}>Together</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,.45)',
            fontSize: isMobile ? '13px' : '15px', lineHeight: 1.75,
            maxWidth: '520px', margin: '0 auto',
          }}>
            Ready to take the next step? Fill out the form and our team will reach
            out within 24 hours with a tailored proposal.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1.8fr 3fr' : '1fr',
          gap: isMobile ? '24px' : isTablet ? '36px' : '56px',
          animation: 'fadeSlideUp .8s .2s ease both',
        }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

            {contactInfo.map((info, i) => <ContactCard key={i} info={info} />)}

            <WhatsAppBtn />

            {/* Map */}
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid rgba(212,175,55,.15)',
              height: isMobile ? '180px' : '210px',
              boxShadow: '0 8px 30px rgba(0,0,0,.3)',
            }}>
              <iframe
                title="PAYIVVA Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN (FORM) ── */}
          <div style={{
            background: 'linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01))',
            border: '1px solid rgba(255,255,255,.06)',
            borderRadius: '24px',
            padding: isMobile ? '28px 18px' : isTablet ? '32px 28px' : '40px 40px',
            backdropFilter: 'blur(12px)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* card shimmer top */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg,transparent,rgba(212,175,55,.4),transparent)',
            }} />

            {status === 'success' ? (
              <SuccessState onReset={() => setStatus('idle')} isMobile={isMobile} />
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ margin: 0 }}>
                <h3 style={{
                  color: '#fff', fontWeight: 800,
                  fontSize: isMobile ? '18px' : '20px',
                  margin: '0 0 24px 0', letterSpacing: '-.4px',
                }}>Send Us a Message</h3>

                {/* 2-col grid for fields */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)',
                  gap: '14px',
                  marginBottom: '14px',
                }}>
                  <FieldGroup label="Full Name" required error={errors.name}>
                    <input
                      id="name" type="text" name="name"
                      value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      style={fieldStyle('name')} {...focusProps('name')}
                      autoComplete="name"
                    />
                  </FieldGroup>

                  <FieldGroup label="Email Address" required error={errors.email}>
                    <input
                      id="email" type="email" name="email"
                      value={formData.email} onChange={handleChange}
                      placeholder="your@email.com"
                      style={fieldStyle('email')} {...focusProps('email')}
                      autoComplete="email"
                    />
                  </FieldGroup>

                  <FieldGroup label="Phone Number">
                    <input
                      id="phone" type="tel" name="phone"
                      value={formData.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      style={fieldStyle('phone')} {...focusProps('phone')}
                      autoComplete="tel"
                    />
                  </FieldGroup>

                  <FieldGroup label="Company / Brand Name">
                    <input
                      id="company" type="text" name="company"
                      value={formData.company} onChange={handleChange}
                      placeholder="Your company"
                      style={fieldStyle('company')} {...focusProps('company')}
                      autoComplete="organization"
                    />
                  </FieldGroup>

                  <FieldGroup label="Service Interested In">
                    <select
                      id="service" name="service"
                      value={formData.service} onChange={handleChange}
                      style={{ ...fieldStyle('service'), cursor: 'pointer' }}
                      {...focusProps('service')}
                    >
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </FieldGroup>

                  <FieldGroup label="Monthly Budget">
                    <select
                      id="budget" name="budget"
                      value={formData.budget} onChange={handleChange}
                      style={{ ...fieldStyle('budget'), cursor: 'pointer' }}
                      {...focusProps('budget')}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-25k">₹10,000 – ₹25,000</option>
                      <option value="25k-50k">₹25,000 – ₹50,000</option>
                      <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                      <option value="above-1l">Above ₹1,00,000</option>
                    </select>
                  </FieldGroup>
                </div>

                {/* Message */}
                <FieldGroup label="Project Brief" required error={errors.message}>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={isMobile ? 4 : 5}
                    style={{ ...fieldStyle('message'), resize: 'none', fontFamily: 'inherit' }}
                    {...focusProps('message')}
                  />
                </FieldGroup>

                {/* Error alert */}
                {status === 'error' && (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 14px', borderRadius: '10px',
                    background: 'rgba(239,68,68,.08)', border: '1px solid rgba(239,68,68,.3)',
                    color: 'rgba(248,113,113,1)', fontSize: '13px',
                    marginBottom: '16px',
                  }}>
                    <AlertCircle size={15} />
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  onMouseEnter={() => setSubmitHov(true)}
                  onMouseLeave={() => setSubmitHov(false)}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    padding: isMobile ? '14px' : '16px',
                    background: status === 'submitting' || !submitHov
                      ? 'linear-gradient(135deg,#D4AF37,#BF9520)'
                      : 'linear-gradient(135deg,#F0D060,#D4AF37)',
                    color: '#000', fontWeight: 900,
                    fontSize: isMobile ? '13px' : '14px',
                    borderRadius: '12px', border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    transition: 'all .35s cubic-bezier(.23,1,.32,1)',
                    boxShadow: submitHov && status !== 'submitting'
                      ? '0 0 32px rgba(212,175,55,.6),0 12px 32px rgba(0,0,0,.4)'
                      : '0 6px 20px rgba(0,0,0,.3)',
                    transform: submitHov && status !== 'submitting' ? 'translateY(-2px)' : 'translateY(0)',
                    opacity: status === 'submitting' ? .7 : 1,
                    letterSpacing: '.4px', textTransform: 'uppercase',
                    marginTop: '6px',
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        style={{ animation: 'spin 1s linear infinite', flexShrink: 0 }}
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity=".25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} style={{
                        transition: 'transform .3s',
                        transform: submitHov ? 'translateX(3px)' : 'translateX(0)',
                      }} />
                    </>
                  )}
                </button>

                <p style={{
                  color: 'rgba(255,255,255,.22)', fontSize: '11px',
                  textAlign: 'center', margin: '14px 0 0 0',
                }}>
                  By submitting, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FieldGroup ──────────────────────────────────────────────── */
function FieldGroup({ label, required, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        color: 'rgba(255,255,255,.55)', fontSize: '11px', fontWeight: 600,
        letterSpacing: '.3px',
      }}>
        {label}{' '}
        {required && <span style={{ color: '#D4AF37' }}>*</span>}
      </label>
      {children}
      {error && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '5px',
          color: 'rgba(248,113,113,1)', fontSize: '11px',
        }} role="alert">
          <AlertCircle size={11} /> {error}
        </div>
      )}
    </div>
  );
}

/* ─── SuccessState ────────────────────────────────────────────── */
function SuccessState({ onReset, isMobile }) {
  const [btnHov, setBtnHov] = useState(false);
  return (
    <div style={{
      textAlign: 'center',
      padding: isMobile ? '40px 16px' : '60px 24px',
    }}>
      <div style={{
        width: '70px', height: '70px',
        background: 'rgba(212,175,55,.1)',
        border: '1px solid rgba(212,175,55,.3)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 20px',
        boxShadow: '0 0 30px rgba(212,175,55,.15)',
      }}>
        <CheckCircle2 color="#D4AF37" size={32} />
      </div>

      <h3 style={{
        color: '#fff', fontWeight: 900,
        fontSize: isMobile ? '22px' : '26px',
        margin: '0 0 12px 0', letterSpacing: '-.5px',
      }}>Message Sent! 🎉</h3>

      <p style={{
        color: 'rgba(255,255,255,.45)', fontSize: '14px',
        lineHeight: 1.7, maxWidth: '340px', margin: '0 auto 28px',
      }}>
        Thank you for reaching out. Our team will contact you within 24 hours
        with a personalised response.
      </p>

      <button
        onMouseEnter={() => setBtnHov(true)}
        onMouseLeave={() => setBtnHov(false)}
        onClick={onReset}
        style={{
          padding: '12px 24px',
          border: `1px solid ${btnHov ? 'rgba(212,175,55,.6)' : 'rgba(212,175,55,.35)'}`,
          background: btnHov ? 'rgba(212,175,55,.1)' : 'transparent',
          color: '#D4AF37', borderRadius: '10px', cursor: 'pointer',
          fontSize: '13px', fontWeight: 700,
          transition: 'all .3s ease',
          letterSpacing: '.3px',
        }}
      >
        Send Another Message
      </button>
    </div>
  );
}