import './styles/Legal.css';

const Security = () => {
  return (
    <div className="animate-fade-in legal-container">
      <div className="legal-header">
        <span className="section-tag">DATA ASSURANCE</span>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>Security Standards</h1>
        <span className="legal-meta">Last Updated: May 2026 | ISO 27001 Engineering Protocols</span>
      </div>

      <div className="legal-content-wrapper">
        <p>
          At PAYIVVA Technologies, we recognize that data security is paramount for enterprise brands. We implement sophisticated operational, structural, and network shields to ensure client properties, analytics keys, and databases are protected at all times.
        </p>

        <div className="legal-callout-box">
          <p>
            All custom React-Vite codes, database integrations, and client lead lists are stored and processed on secure cloud systems that meet strict industry data protection policies.
          </p>
        </div>

        <h2>1. Encryption & Connection Shields</h2>
        <p>
          We employ strict transport layer protection and database encryption methods to prevent information interception.
        </p>
        <ul>
          <li><strong>Data in Transit:</strong> All browser connections and API operations utilize TLS 1.3 protocols, enforcing HTTPS across all public routes.</li>
          <li><strong>Data at Rest:</strong> Internal databases and server logs utilize AES-256 standard encryption keys to block raw storage compromises.</li>
          <li><strong>Token Protections:</strong> Access to tracking systems and search analytics consoles is strictly governed by multi-factor API credentials.</li>
        </ul>

        <h2>2. System Infrastructure Integrity</h2>
        <p>
          Our custom React single-page frameworks are compiled using isolated Vite workflows that eliminate standard client-side vulnerability vectors.
        </p>
        <ul>
          <li><strong>Zero bloated packages:</strong> We audite all package managers during production to exclude malicious dependencies.</li>
          <li><strong>Threat monitoring:</strong> Active server structures undergo automated penetration tests to isolate potential configuration vulnerabilities.</li>
          <li><strong>Isolated hosting environments:</strong> Clients' databases are partitioned in secure VPC modules, blocking horizontal database escalation threats.</li>
        </ul>

        <h2>3. Physical Operations Integrity</h2>
        <p>
          Operating directly from Gera Imperium Hinjawadi, our physical core systems comply with strict accessibility standards.
        </p>
        <ul>
          <li><strong>Physical Access Control:</strong> Entry to our central operations hub requires secure corporate biometrics.</li>
          <li><strong>Workstation Audits:</strong> Engineers operate on centrally monitored devices containing automated malware protection shields.</li>
          <li><strong>Continuous Backups:</strong> System databases undergo automatic daily backup loops, stored across separate geographically partitioned regions.</li>
        </ul>

        <h2>4. Reporting Vulnerabilities</h2>
        <p>
          We encourage independent security researchers to inspect our public systems. If you isolate any vulnerability, please report it immediately to our security response core at <strong>security@payivva.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default Security;
