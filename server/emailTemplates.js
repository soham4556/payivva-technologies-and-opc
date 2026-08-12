/**
 * PAYIVVA Technologies — Enterprise Email Templates
 * Generated for IT Operations Desk & Candidate Acknowledgements
 */

const escapeHtml = (str = '') =>
  String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

/**
 * Returns HTML email template for Contact Us / Request a Call clients
 */
export const getContactConfirmationEmail = ({ name, email, website, service, message, referenceId }) => {
  const refId = referenceId || `PAY-CR-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Request Confirmation — PAYIVVA Technologies</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 620px; margin: 25px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.3); }
    .email-header { background: linear-gradient(135deg, #0f172a 0%, #0891b2 100%); padding: 32px 36px; text-align: left; position: relative; }
    .brand-logo { font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; text-transform: uppercase; margin: 0; }
    .brand-sub { font-size: 12px; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin-top: 4px; }
    .ref-badge { display: inline-block; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.4); color: #38bdf8; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 14px; letter-spacing: 0.05em; }
    .email-body { padding: 36px; color: #334155; line-height: 1.65; font-size: 15px; }
    .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 14px; }
    .highlight-box { background: #f8fafc; border-left: 4px solid #06b6d4; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .details-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .details-table td { padding: 8px 0; font-size: 14px; border-bottom: 1px dashed #e2e8f0; }
    .details-table td:last-child { border-bottom: none; }
    .label-col { font-weight: 700; color: #64748b; width: 38%; }
    .val-col { color: #0f172a; font-weight: 600; }
    .notice-card { background: #ecfeff; border: 1px solid #a5f3fc; border-radius: 10px; padding: 16px 20px; color: #0891b2; font-size: 14px; margin-top: 24px; }
    .notice-card strong { color: #0e7490; }
    .email-footer { background: #0f172a; padding: 28px 36px; color: #94a3b8; font-size: 12px; line-height: 1.6; text-align: center; border-top: 1px solid #1e293b; }
    .footer-links { margin-bottom: 12px; color: #cbd5e1; }
    .footer-links a { color: #38bdf8; text-decoration: none; font-weight: 600; margin: 0 8px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1 class="brand-logo">PAYIVVA TECHNOLOGIES</h1>
      <div class="brand-sub">IT Operations & Corporate Solutions Desk</div>
      <div class="ref-badge">Ticket Ref: ${escapeHtml(refId)}</div>
    </div>
    <div class="email-body">
      <div class="greeting">Dear ${escapeHtml(name)},</div>
      <p>Thank you for contacting the <strong>PAYIVVA Technologies IT Operations Desk</strong>. We have successfully logged your inquiry and request for a technical consultation call.</p>
      
      <div class="highlight-box">
        <div style="font-weight: 700; color: #0f172a; font-size: 15px; margin-bottom: 10px;">Request Summary</div>
        <table class="details-table">
          <tr>
            <td class="label-col">Reference ID:</td>
            <td class="val-col">${escapeHtml(refId)}</td>
          </tr>
          <tr>
            <td class="label-col">Corporate Email:</td>
            <td class="val-col">${escapeHtml(email)}</td>
          </tr>
          ${service ? `<tr><td class="label-col">Target Specification:</td><td class="val-col">${escapeHtml(service)}</td></tr>` : ''}
          ${website ? `<tr><td class="label-col">Website URL:</td><td class="val-col">${escapeHtml(website)}</td></tr>` : ''}
          <tr>
            <td class="label-col">Submission Date:</td>
            <td class="val-col">${escapeHtml(dateStr)}</td>
          </tr>
        </table>
      </div>

      ${message ? `<p style="font-size: 13px; color: #64748b; background: #f1f5f9; padding: 12px 16px; border-radius: 8px;"><strong>Project Brief Received:</strong><br/>"${escapeHtml(message)}"</p>` : ''}

      <div class="notice-card">
        ⚡ <strong>What happens next?</strong><br/>
        Our technical engineering and strategy team is currently evaluating your requirements. A dedicated Solutions Lead will review your roadmap and connect with you via corporate email or telephonic desk within <strong>12 business hours</strong>.
      </div>

      <p style="margin-top: 28px;">If you have additional project documents or urgent updates, please reply directly to this email.</p>

      <p style="margin-top: 24px; color: #0f172a;">
        Warm regards,<br/>
        <strong>PAYIVVA IT Operations Team</strong><br/>
        <span style="font-size: 13px; color: #64748b;">Payivva Technologies & OPC Pvt. Ltd.</span>
      </p>
    </div>
    <div class="email-footer">
      <div class="footer-links">
        <a href="https://payivvatechnologies.com">Website</a> |
        <a href="mailto:info@payivvatechnologies.com">Email Support</a> |
        <a href="tel:+918380009994">+91 8380009994</a>
      </div>
      <div>House no. 105, Green Park - Venkatesh Properties, Autadwadi Handewadi, Pune, Maharashtra 411060, India</div>
      <div style="margin-top: 8px; color: #64748b; font-size: 11px;">
        This email was automatically generated by PAYIVVA IT Department system. Confidentiality & Privacy Protected.
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Returns HTML email template for Career Applicants
 */
export const getCareerConfirmationEmail = ({ name, email, jobTitle, referenceId }) => {
  const refId = referenceId || `PAY-APP-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received — PAYIVVA Careers</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 620px; margin: 25px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.3); }
    .email-header { background: linear-gradient(135deg, #0f172a 0%, #10b981 100%); padding: 32px 36px; text-align: left; position: relative; }
    .brand-logo { font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; text-transform: uppercase; margin: 0; }
    .brand-sub { font-size: 12px; color: #a7f3d0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin-top: 4px; }
    .ref-badge { display: inline-block; background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(167, 243, 208, 0.4); color: #a7f3d0; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 14px; letter-spacing: 0.05em; }
    .email-body { padding: 36px; color: #334155; line-height: 1.65; font-size: 15px; }
    .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 14px; }
    .highlight-box { background: #f8fafc; border-left: 4px solid #10b981; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .details-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .details-table td { padding: 8px 0; font-size: 14px; border-bottom: 1px dashed #e2e8f0; }
    .details-table td:last-child { border-bottom: none; }
    .label-col { font-weight: 700; color: #64748b; width: 38%; }
    .val-col { color: #0f172a; font-weight: 600; }
    .notice-card { background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; padding: 16px 20px; color: #047857; font-size: 14px; margin-top: 24px; }
    .notice-card strong { color: #065f46; }
    .email-footer { background: #0f172a; padding: 28px 36px; color: #94a3b8; font-size: 12px; line-height: 1.6; text-align: center; border-top: 1px solid #1e293b; }
    .footer-links { margin-bottom: 12px; color: #cbd5e1; }
    .footer-links a { color: #34d399; text-decoration: none; font-weight: 600; margin: 0 8px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1 class="brand-logo">PAYIVVA TECHNOLOGIES</h1>
      <div class="brand-sub">Talent Acquisition & IT HR Cell</div>
      <div class="ref-badge">Application ID: ${escapeHtml(refId)}</div>
    </div>
    <div class="email-body">
      <div class="greeting">Dear ${escapeHtml(name)},</div>
      <p>Thank you for submitting your job application to <strong>PAYIVVA Technologies</strong>. We are pleased to confirm receipt of your candidate profile.</p>
      
      <div class="highlight-box">
        <div style="font-weight: 700; color: #0f172a; font-size: 15px; margin-bottom: 10px;">Application Summary</div>
        <table class="details-table">
          <tr>
            <td class="label-col">Application ID:</td>
            <td class="val-col">${escapeHtml(refId)}</td>
          </tr>
          <tr>
            <td class="label-col">Position Applied:</td>
            <td class="val-col">${escapeHtml(jobTitle)}</td>
          </tr>
          <tr>
            <td class="label-col">Applicant Email:</td>
            <td class="val-col">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td class="label-col">Received Date:</td>
            <td class="val-col">${escapeHtml(dateStr)}</td>
          </tr>
        </table>
      </div>

      <div class="notice-card">
        🎯 <strong>What is the evaluation process?</strong><br/>
        Our recruitment team and engineering hiring managers are actively reviewing incoming applications. If your experience and skills align with the requirements of <strong>${escapeHtml(jobTitle)}</strong>, our HR team will contact you directly within <strong>48 business hours</strong> for an initial conversation.
      </div>

      <p style="margin-top: 28px;">We appreciate your interest in building high-impact technology solutions with PAYIVVA Technologies.</p>

      <p style="margin-top: 24px; color: #0f172a;">
        Best regards,<br/>
        <strong>PAYIVVA Talent Acquisition Desk</strong><br/>
        <span style="font-size: 13px; color: #64748b;">Payivva Technologies & OPC Pvt. Ltd.</span>
      </p>
    </div>
    <div class="email-footer">
      <div class="footer-links">
        <a href="https://payivvatechnologies.com">Careers Portal</a> |
        <a href="mailto:info@payivvatechnologies.com">HR Desk</a>
      </div>
      <div>House no. 105, Green Park - Venkatesh Properties, Autadwadi Handewadi, Pune, Maharashtra 411060, India</div>
      <div style="margin-top: 8px; color: #64748b; font-size: 11px;">
        Automated message from PAYIVVA HR Department. Equal Opportunity Employer.
      </div>
    </div>
  </div>
</body>
</html>
  `;
};

/**
 * Returns HTML email template for Candidate Application Status Changes (Reviewing, Shortlisted, Hired, Rejected)
 */
export const getApplicationStatusEmail = ({ name, email, jobTitle, status, appId }) => {
  const refId = appId || `PAY-APP-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  const configMap = {
    reviewing: {
      badgeText: 'UNDER TECHNICAL REVIEW',
      headerBg: 'linear-gradient(135deg, #0f172a 0%, #0891b2 100%)',
      accentColor: '#06b6d4',
      badgeBg: 'rgba(6, 182, 212, 0.2)',
      badgeColor: '#38bdf8',
      title: 'Application Under Review ⏳',
      message: `Our Engineering Hiring Panel and Technical Team at PAYIVVA Technologies are currently evaluating your profile, experience, and background for the <strong>${escapeHtml(jobTitle)}</strong> role.`,
      notice: '⚡ <strong>Next Step:</strong> Evaluation is currently in progress. If your profile matches our requisites, our HR team will contact you shortly to arrange a technical discussion.',
    },
    shortlisted: {
      badgeText: 'SHORTLISTED FOR INTERVIEW',
      headerBg: 'linear-gradient(135deg, #0f172a 0%, #10b981 100%)',
      accentColor: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.2)',
      badgeColor: '#34d399',
      title: 'Congratulations! Application Shortlisted 🎉',
      message: `We are pleased to inform you that your application for <strong>${escapeHtml(jobTitle)}</strong> at PAYIVVA Technologies has been <strong>SHORTLISTED</strong> by our technical assessment panel!`,
      notice: '📅 <strong>Next Step:</strong> Our HR scheduling team will reach out to you within 24-48 business hours with your interview slot and discussion agenda.',
    },
    hired: {
      badgeText: 'OFFER EXTENDED / HIRED',
      headerBg: 'linear-gradient(135deg, #0f172a 0%, #0d9488 100%)',
      accentColor: '#0d9488',
      badgeBg: 'rgba(13, 148, 136, 0.2)',
      badgeColor: '#2dd4bf',
      title: 'Congratulations & Welcome to PAYIVVA Technologies! 🚀',
      message: `On behalf of the leadership, engineering, and HR teams at <strong>PAYIVVA Technologies & OPC Pvt. Ltd.</strong>, we are thrilled to extend a formal offer of selection to join our engineering division as <strong>${escapeHtml(jobTitle)}</strong>! Your technical background and problem-solving mindset strongly impressed our hiring evaluation panel.`,
      docSection: `
        <div style="background: #f0fdf4; border: 1.5px solid #6ee7b7; border-radius: 12px; padding: 22px 24px; margin: 24px 0;">
          <div style="font-weight: 700; color: #065f46; font-size: 15px; margin-bottom: 12px;">📄 Mandatory Documents Required for Official Offer Letter & LOI</div>
          <p style="font-size: 14px; color: #047857; margin: 0 0 12px;">To initiate your formal Letter of Intent (LOI), CTC/Stipend Breakdown, and Official Offer Package, please reply to this email or send soft copies of the following documents to <strong>hr@payivvatechnologies.com</strong> within <strong>48 hours</strong>:</p>
          <ul style="margin: 0; padding-left: 20px; font-size: 13.5px; color: #064e3b; line-height: 1.7;">
            <li><strong>1. Government Photo Identity:</strong> Aadhaar Card (Front & Back) and PAN Card.</li>
            <li><strong>2. Educational Credentials:</strong> Graduation Degree / Provisional Certificate and Semester Marksheets.</li>
            <li><strong>3. Employment / Academic Proof:</strong> Relieving Letter & Last 3 Months Payslips (for Experienced) OR College Bonafide/NOC (for Freshers/Interns).</li>
            <li><strong>4. Contact & Address Verification:</strong> Permanent Address Proof & Emergency Contact Details.</li>
            <li><strong>5. Photograph:</strong> Recent Passport-size Digital Photograph.</li>
          </ul>
        </div>
      `,
      notice: '⚡ <strong>Onboarding Timeline:</strong> Upon document verification by our HR Desk within 24 business hours, your official Offer Letter containing your Joining Date, Role Band, and Onboarding Schedule will be issued.',
    },
    rejected: {
      badgeText: 'APPLICATION DECISION',
      headerBg: 'linear-gradient(135deg, #0f172a 0%, #475569 100%)',
      accentColor: '#64748b',
      badgeBg: 'rgba(100, 116, 139, 0.2)',
      badgeColor: '#94a3b8',
      title: 'Application Status Update & Selection Decision',
      message: `Thank you for taking the time to apply and participate in the recruitment process for the <strong>${escapeHtml(jobTitle)}</strong> position at PAYIVVA Technologies. We sincerely appreciate the time, effort, and interest you invested in sharing your profile with us.`,
      docSection: `
        <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 20px 24px; margin: 24px 0;">
          <div style="font-weight: 700; color: #1e293b; font-size: 14.5px; margin-bottom: 8px;">Evaluation Summary</div>
          <p style="font-size: 14px; color: #475569; margin: 0; line-height: 1.65;">
            While your background and qualifications are commendable, after thorough evaluation of all candidates by our engineering hiring board, we have selected an applicant whose current technical stack alignment and immediate project experience match our active requisites more closely at this moment.
          </p>
        </div>
      `,
      notice: '📂 <strong>PAYIVVA Talent Repository:</strong> Your resume and profile have been indexed in our active Talent Bank. As our engineering team expands across AI, Cloud, and Web divisions, our Talent Acquisition team will reach out to you directly when matching positions open.',
    },
  };

  const st = configMap[status] || configMap.reviewing;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(st.title)} — PAYIVVA Careers</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0f172a; font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; }
    .email-container { max-width: 620px; margin: 25px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.3); }
    .email-header { background: ${st.headerBg}; padding: 32px 36px; text-align: left; position: relative; }
    .brand-logo { font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 0.05em; text-transform: uppercase; margin: 0; }
    .brand-sub { font-size: 12px; color: ${st.badgeColor}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin-top: 4px; }
    .ref-badge { display: inline-block; background: ${st.badgeBg}; border: 1px solid ${st.badgeColor}; color: ${st.badgeColor}; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 14px; letter-spacing: 0.05em; }
    .email-body { padding: 36px; color: #334155; line-height: 1.65; font-size: 15px; }
    .greeting { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 14px; }
    .status-title { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
    .highlight-box { background: #f8fafc; border-left: 4px solid ${st.accentColor}; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .details-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .details-table td { padding: 8px 0; font-size: 14px; border-bottom: 1px dashed #e2e8f0; }
    .details-table td:last-child { border-bottom: none; }
    .label-col { font-weight: 700; color: #64748b; width: 38%; }
    .val-col { color: #0f172a; font-weight: 600; }
    .notice-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; color: #334155; font-size: 14px; margin-top: 24px; }
    .email-footer { background: #0f172a; padding: 28px 36px; color: #94a3b8; font-size: 12px; line-height: 1.6; text-align: center; border-top: 1px solid #1e293b; }
    .footer-links { margin-bottom: 12px; color: #cbd5e1; }
    .footer-links a { color: #38bdf8; text-decoration: none; font-weight: 600; margin: 0 8px; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1 class="brand-logo">PAYIVVA TECHNOLOGIES</h1>
      <div class="brand-sub">Talent Acquisition & Technical Assessment Cell</div>
      <div class="ref-badge">${escapeHtml(st.badgeText)} — ${escapeHtml(refId)}</div>
    </div>
    <div class="email-body">
      <div class="greeting">Dear ${escapeHtml(name)},</div>
      <div class="status-title">${st.title}</div>
      <p>${st.message}</p>

      ${st.docSection || ''}
      
      <div class="highlight-box">
        <div style="font-weight: 700; color: #0f172a; font-size: 15px; margin-bottom: 10px;">Application Overview</div>
        <table class="details-table">
          <tr>
            <td class="label-col">Application ID:</td>
            <td class="val-col">${escapeHtml(refId)}</td>
          </tr>
          <tr>
            <td class="label-col">Position Title:</td>
            <td class="val-col">${escapeHtml(jobTitle)}</td>
          </tr>
          <tr>
            <td class="label-col">Current Status:</td>
            <td class="val-col"><span style="color: ${st.accentColor}; font-weight: 700;">${escapeHtml(st.badgeText)}</span></td>
          </tr>
          <tr>
            <td class="label-col">Updated Date:</td>
            <td class="val-col">${escapeHtml(dateStr)}</td>
          </tr>
        </table>
      </div>

      <div class="notice-card">
        ${st.notice}
      </div>

      <p style="margin-top: 28px;">If you have any questions regarding your application status, please reply to this email.</p>

      <p style="margin-top: 24px; color: #0f172a;">
        Best regards,<br/>
        <strong>PAYIVVA Talent Acquisition Desk</strong><br/>
        <span style="font-size: 13px; color: #64748b;">Payivva Technologies & OPC Pvt. Ltd.</span>
      </p>
    </div>
    <div class="email-footer">
      <div class="footer-links">
        <a href="https://payivvatechnologies.com">PAYIVVA Portal</a> |
        <a href="mailto:info@payivvatechnologies.com">Talent Helpdesk</a>
      </div>
      <div>House no. 105, Green Park - Venkatesh Properties, Autadwadi Handewadi, Pune, Maharashtra 411060, India</div>
      <div style="margin-top: 8px; color: #64748b; font-size: 11px;">
        Automated message from PAYIVVA HR Department.
      </div>
    </div>
  </div>
</body>
</html>
  `;
};
