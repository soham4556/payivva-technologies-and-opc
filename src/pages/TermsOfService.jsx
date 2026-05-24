import './styles/Legal.css';

const TermsOfService = () => {
  return (
    <div className="animate-fade-in legal-container">
      <div className="legal-header">
        <span className="section-tag">AGREEMENT</span>
        <h1 className="hero-title" style={{ fontSize: '2.5rem', textAlign: 'left' }}>Terms of Service</h1>
        <span className="legal-meta">Last Updated: May 2026 | PAYIVVA Legal Framework</span>
      </div>

      <div className="legal-content-wrapper">
        <p>
          Welcome to PAYIVVA Technologies! These Terms of Service outline the rules and regulations for the use of PAYIVVA Technologies (OPC) Private Limited's Website, located at payivva.com.
        </p>

        <div className="legal-callout-box">
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use PAYIVVA Technologies' services if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>

        <h2>1. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, PAYIVVA Technologies and/or its licensors own the intellectual property rights for all material on PAYIVVA Technologies. All intellectual property rights are reserved. You may access this from PAYIVVA Technologies for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <h3>You must not:</h3>
        <ul>
          <li>Republish software blueprints, design assets, or layout components from our digital systems.</li>
          <li>Sell, rent, or sub-license technical code or custom software frameworks.</li>
          <li>Reproduce, duplicate, or copy design systems or content from payivva.com.</li>
          <li>Redistribute content from PAYIVVA Technologies (unless content is specifically made for redistribution).</li>
        </ul>

        <h2>2. Service Level Agreements (SLAs)</h2>
        <p>
          For corporate engagements, including Web Development, SEO Dominance, and Paid Campaigns, specific Service Level Agreements are executed independently in separate master service agreements. The features detailed on this public website represent capabilities and targets, not unilateral legal guarantees of search indices or lead volumes.
        </p>

        <h2>3. Reservation of Rights</h2>
        <p>
          We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
        </p>

        <h2>4. Disclaimer of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul>
          <li>Limit or exclude our or your liability for death or personal injury resulting from negligence.</li>
          <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation.</li>
          <li>Limit any of our or your liabilities in any way that is not permitted under applicable Indian law.</li>
        </ul>
        <p>
          The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
        </p>

        <h2>5. Corporate Jurisdiction</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any litigation arising from public digital interactions shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
