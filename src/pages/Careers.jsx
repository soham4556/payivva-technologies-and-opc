import { useRef, useState, useEffect } from 'react';
import { Laptop, Heart, BookOpen, Calendar, X, ArrowRight, UploadCloud, CheckCircle } from 'lucide-react';
import './styles/Careers.css';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [resumeName, setResumeName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const resumeInputRef = useRef(null);

  useEffect(() => {
    const bgGrid = document.querySelector('.bg-grid');
    if (bgGrid) {
      bgGrid.classList.add('hide-brain-bg');
    }
    return () => {
      if (bgGrid) {
        bgGrid.classList.remove('hide-brain-bg');
      }
    };
  }, []);

  const jobsList = [
    { title: 'Senior React Developer', department: 'Engineering', location: 'Pune HQ', type: 'Full-time' },
    { title: 'Technical SEO Architect', department: 'Marketing Science', location: 'Hybrid', type: 'Full-time' },
    { title: 'Performance Media Manager', department: 'Paid Growth', location: 'Remote', type: 'Full-time' },
    { title: 'UI Systems Designer', department: 'Product Design', location: 'Pune HQ', type: 'Contract' }
  ];

  const benefits = [
    {
      title: 'Hybrid / Remote',
      desc: 'Choose the collaboration model that fits the mission.',
      icon: <Laptop size={18} />,
      accent: 'cyan'
    },
    {
      title: 'Full Coverage Health',
      desc: 'Medical assurance for you and your family with wellness support.',
      icon: <Heart size={18} />,
      accent: 'emerald'
    },
    {
      title: 'Annual Education Stipend',
      desc: 'Certifications, conferences, and skill upgrades are funded.',
      icon: <BookOpen size={18} />,
      accent: 'purple'
    },
    {
      title: 'Generous PTO',
      desc: 'A healthy leave policy with room to rest and reset.',
      icon: <Calendar size={18} />,
      accent: 'cyan'
    }
  ];

  const resetModalState = () => {
    setSelectedJob(null);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setResumeName('');
    setIsDragging(false);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
    setResumeName('');
    setIsDragging(false);
  };

  const handleCloseModal = () => {
    resetModalState();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && resumeName) {
      setFormSubmitted(true);
      setTimeout(() => {
        resetModalState();
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleResumeSelect = (file) => {
    if (!file) return;
    setResumeName(file.name);
  };

  const handleResumeChange = (e) => {
    handleResumeSelect(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleResumeSelect(e.dataTransfer.files?.[0]);
  };

  return (
    <div className="careers-page animate-fade-in">
      <section className="careers-hero">
        <div className="careers-shell careers-hero-grid">
          <div className="careers-hero-copy">
            <span className="careers-tag">ACTIVE VACANCIES</span>
            <h1 className="careers-hero-title">
              Build the systems behind <span>modern enterprise growth</span>
            </h1>
            <p className="careers-hero-copy-text">
              PAYIVVA is hiring sharp builders, growth engineers, and product thinkers who want to shape premium AI-first systems for ambitious teams.
            </p>
            <div className="careers-hero-stats">
              <div className="careers-stat-chip"><strong>04</strong><span>Open Roles</span></div>
              <div className="careers-stat-chip"><strong>Hybrid</strong><span>Flexible Flow</span></div>
              <div className="careers-stat-chip"><strong>48h</strong><span>Hiring Reply</span></div>
            </div>
          </div>

          <aside className="careers-terminal-panel">
            <div className="terminal-header">
              <span className="terminal-status-dot"></span>
              SYSTEM ONLINE
              <span className="terminal-badge">Recruitment Terminal</span>
            </div>
            <div className="terminal-pipeline">
              <div className="pipeline-row"><span>Pipeline Health</span><strong>98%</strong></div>
              <div className="pipeline-bar"><span /></div>
              <div className="pipeline-grid">
                <div><span>Engineering</span><strong>2</strong></div>
                <div><span>Growth</span><strong>1</strong></div>
                <div><span>Design</span><strong>1</strong></div>
              </div>
              <div className="terminal-stack">
                <div className="stack-item"><span className="stack-label">Next Review</span><strong>Today, 05:30 PM</strong></div>
                <div className="stack-item"><span className="stack-label">Candidate Flow</span><strong>Open</strong></div>
                <div className="stack-item"><span className="stack-label">Pune HQ</span><strong>Phase II</strong></div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="careers-section">
        <div className="careers-shell">
          <div className="section-head">
            <span className="careers-tag">BENEFITS</span>
            <h2 className="section-title">Why you'll love working here</h2>
          </div>

          <div className="benefits-bento-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className={`benefit-card accent-${benefit.accent}`}>
                <div className="benefit-icon-sphere">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-section careers-openings-section">
        <div className="careers-shell">
          <div className="section-head">
            <span className="careers-tag">OPEN ROLES</span>
            <h2 className="section-title">Interactive job board</h2>
            <p className="section-desc">Select a role and launch the recruitment portal.</p>
          </div>

          <div className="job-board-list">
            {jobsList.map((job) => (
              <article key={job.title} className="job-card glass-card">
                <div className="job-meta">
                  <h3>{job.title}</h3>
                  <div className="job-tags">
                    <span>{job.department}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="careers-apply-btn btn btn-primary" onClick={() => handleApplyClick(job)}>
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <div className="careers-modal-overlay" onClick={handleCloseModal}>
          <div className="careers-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <form className="careers-modal-form" onSubmit={handleSubmit}>
                <div className="modal-heading-block">
                  <span className="careers-tag">APPLICATION PORTAL</span>
                  <h3 className="modal-title">Apply for {selectedJob.title}</h3>
                  <p className="modal-subtitle">{selectedJob.department} • {selectedJob.location} • {selectedJob.type}</p>
                </div>

                <div className="form-group-block">
                  <label className="form-label-node" htmlFor="applicant-name">Full Name</label>
                  <input type="text" id="applicant-name" name="name" className="form-input-node" placeholder="Jane Doe" value={formData.name} onChange={handleInputChange} required />
                </div>

                <div className="form-group-block">
                  <label className="form-label-node" htmlFor="applicant-email">Email Address</label>
                  <input type="email" id="applicant-email" name="email" className="form-input-node" placeholder="jane@company.com" value={formData.email} onChange={handleInputChange} required />
                </div>

                <div className="form-group-block">
                  <label className="form-label-node" htmlFor="applicant-cover">Cover Note / Experience Summary</label>
                  <textarea id="applicant-cover" name="message" className="form-textarea-node" placeholder="Briefly state your expertise..." value={formData.message} onChange={handleInputChange} />
                </div>

                <div className="form-group-block">
                  <label className="form-label-node">Resume Upload</label>
                  <input ref={resumeInputRef} type="file" accept=".pdf,.doc,.docx" className="sr-only-input" onChange={handleResumeChange} />
                  <div
                    className={`resume-dropzone ${isDragging ? 'is-dragging' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => resumeInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                  >
                    <UploadCloud size={28} className="resume-cloud-icon" />
                    <span>Drag & drop or click to upload resume</span>
                    <strong>{resumeName || 'PDF, DOCX up to 10MB'}</strong>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary careers-submit-btn">
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="modal-success-state">
                <CheckCircle size={52} className="success-icon" />
                <h3 className="modal-title">Application Submitted!</h3>
                <p>
                  Thank you for applying to PAYIVVA Technologies. Our systems recruiting core will contact you within 48 business hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
