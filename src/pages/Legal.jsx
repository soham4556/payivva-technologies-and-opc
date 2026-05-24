import './styles/Legal.css';

const Legal = () => {
  return (
    <div className="animate-fade-in legal-container">
      <div className="legal-header">
        <span className="section-tag">COMPLIANCE</span>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>Corporate Legal</h1>
        <span className="legal-meta">Last Updated: May 2026 | PAYIVVA Corporate Relations Office</span>
      </div>

      <div className="legal-content-wrapper">
        <p>
          This section contains official legal identity details, regulatory registrations, and compliance parameters for PAYIVVA Technologies.
        </p>

        <div className="legal-callout-box">
          <p>
            PAYIVVA Technologies is the trading and commercial brand of PAYIVVA Technologies (OPC) Private Limited, registered and governed in the state of Maharashtra under the Ministry of Corporate Affairs, India.
          </p>
        </div>

        <h2>1. Corporate Identity Records</h2>
        <p>
          Our official registration indices under Indian Corporate Law are as follows:
        </p>
        <ul>
          <li><strong>Corporate Name:</strong> PAYIVVA Technologies (OPC) Private Limited</li>
          <li><strong>Company Type:</strong> One Person Company (OPC)</li>
          <li><strong>Registration Authority:</strong> Registrar of Companies (ROC), Pune, India</li>
          <li><strong>Registered State:</strong> Maharashtra, India</li>
          <li><strong>Operating Headquarters:</strong> 922, Gera Imperium Rise, Phase II, Hinjawadi, Pune, Maharashtra, 411057, India</li>
        </ul>

        <h2>2. Professional Licensing & Tax Compliance</h2>
        <p>
          We maintain strict tax adherence and professional registration parameters required under national and local statutes.
        </p>
        <ul>
          <li><strong>GST Compliance:</strong> Fully compliant with national Goods and Services Tax protocols, providing structured corporate invoices with input tax credits.</li>
          <li><strong>Business Licensing:</strong> Licensed under standard Pune Municipal Corporation shop act licenses and Hinjawadi industrial zone permissions.</li>
        </ul>

        <h2>3. Trademarks & Creative Proprietary</h2>
        <p>
          The name "PAYIVVA", "PAYIVVA Technologies", our corporate brand slogan "Inspiring Innovations", and our official visual logo copied from trademark registries represent proprietary commercial assets. Unilateral reproduction, extraction, or copy of these assets is strictly protected under domestic trademark legislation.
        </p>

        <h2>4. Communication Legal Standards</h2>
        <p>
          All direct electronic communications (emails originating from the `@payivva.com` domain) are subject to standard corporate confidentiality conditions. If you receive any corporate communication in error, please notify our legal systems director at <strong>legal@payivva.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default Legal;
