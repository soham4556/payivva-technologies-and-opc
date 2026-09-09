import { useState } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'payivva-cookie-consent-at';
const CONSENT_WINDOW_MS = 24 * 60 * 60 * 1000;

function hasRecentConsent() {
  const savedAt = Number(window.localStorage.getItem(COOKIE_CONSENT_KEY));
  return Number.isFinite(savedAt) && Date.now() - savedAt < CONSENT_WINDOW_MS;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !hasRecentConsent());
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    performance: false,
    functional: false,
    targeting: false,
  });

  const saveConsent = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, String(Date.now()));
    setSettingsOpen(false);
    setVisible(false);
  };

  const togglePreference = (key) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  if (!visible) return null;

  return (
    <>
      <aside className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
        <p>
          By clicking &ldquo;Accept All Cookies&rdquo;, you agree to the storing of cookies on your device to enhance site navigation,
          analyze site usage, and assist in our marketing efforts.{' '}
          <Link to="/privacy">Cookie Policy</Link>
        </p>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-settings-button" onClick={() => setSettingsOpen(true)}>
            Cookies Settings
          </button>
          <button type="button" className="cookie-reject-button" onClick={saveConsent}>
            Reject All
          </button>
          <button type="button" className="cookie-accept-button" onClick={saveConsent}>
            Accept All Cookies
          </button>
        </div>
      </aside>

      {settingsOpen && (
        <div className="cookie-settings-backdrop" role="presentation" onClick={() => setSettingsOpen(false)}>
          <section className="cookie-settings-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title" onClick={(event) => event.stopPropagation()}>
            <div className="cookie-settings-brand">
              <img src="/logo.png" alt="PAYIVVA Technologies" width="150" height="48" />
              <button type="button" className="cookie-settings-close" aria-label="Close cookie settings" onClick={() => setSettingsOpen(false)}>×</button>
            </div>
            <div className="cookie-settings-content">
              <h2 id="cookie-settings-title">Privacy Preference Center</h2>
              <p>
                When you visit our website, we may store or retrieve information on your browser, mostly in the form of cookies.
                You can choose which optional cookie categories you allow.{' '}
                <Link to="/privacy" onClick={() => setSettingsOpen(false)}>Cookie Policy</Link>
              </p>
              <button type="button" className="cookie-allow-button" onClick={saveConsent}>Allow All</button>

              <h3>Manage Consent Preferences</h3>
              <div className="cookie-preference-list">
                <div className="cookie-preference-row">
                  <span className="cookie-preference-plus">+</span>
                  <span className="cookie-preference-label">Strictly Necessary Cookies</span>
                  <span className="cookie-always-active">Always Active</span>
                </div>
                {[
                  ['performance', 'Performance Cookies'],
                  ['functional', 'Functional Cookies'],
                  ['targeting', 'Targeting Cookies'],
                ].map(([key, label]) => (
                  <div className="cookie-preference-row" key={key}>
                    <span className="cookie-preference-plus">+</span>
                    <span className="cookie-preference-label">{label}</span>
                    <button
                      type="button"
                      className={`cookie-toggle ${preferences[key] ? 'is-on' : ''}`}
                      aria-label={`Toggle ${label}`}
                      aria-pressed={preferences[key]}
                      onClick={() => togglePreference(key)}
                    >
                      <span />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="cookie-settings-footer">
              <button type="button" className="cookie-modal-reject" onClick={saveConsent}>Reject All</button>
              <button type="button" className="cookie-modal-confirm" onClick={saveConsent}>Confirm My Choices</button>
            </div>
            <div className="cookie-powered-by">Powered by <strong>PAYIVVA IT Department</strong></div>
          </section>
        </div>
      )}
    </>
  );
}
