import { useRef, useState, useEffect } from 'react';
import { Laptop, Heart, BookOpen, Calendar, X, ArrowRight, UploadCloud, CheckCircle, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import './styles/Careers.css';

const formatList = (val) => {
  if (!val) return [];
  const arr = Array.isArray(val) ? val : [String(val)];
  const items = arr
    .flatMap((s) => String(s).split(/\r?\n/))
    .map((s) => s.replace(/^[\s•\-\d.\:]+/, '').trim())
    .filter(Boolean);
  return items;
};

const formatStack = (val) => {
  if (!val) return [];
  const arr = Array.isArray(val) ? val : [String(val)];
  const tags = arr
    .flatMap((s) => String(s).split(/[\r\n,]+/))
    .map((s) => s.replace(/^[\s•\-\d.\:]+/, '').trim())
    .filter(Boolean);
  return tags;
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedJobTitle, setExpandedJobTitle] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [jobsList, setJobsList] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [submitError, setSubmitError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const resumeInputRef = useRef(null);

  const [recruitmentLogs, setRecruitmentLogs] = useState(() => [
    '[BOOT] PAYIVVA Recruiting Terminal v2.4.1',
    '[OK] Secure intake channel established',
    '[SCAN] Indexing open roles...',
    '[OK] Candidate profile cache warmed',
  ]);

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

  useEffect(() => {
    const pool = [
      '[SCAN] Synthesizing candidate profiles...',
      '[ANALYZE] Analyzing stack fit and project depth...',
      '[MATCH] Mapping skills to open roles...',
      '[VERIFY] Reviewing communication signal...',
      '[OK] Pipeline stable, low-latency intake',
      '[QUEUE] Scheduling interviews (batch=4)',
    ];

    const id = window.setInterval(() => {
      setRecruitmentLogs((prev) => {
        const next = [...prev, pool[Math.floor(Math.random() * pool.length)]];
        return next.length > 11 ? next.slice(next.length - 11) : next;
      });
    }, 1050);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/job-postings');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled && Array.isArray(data) && data.length > 0) {
          setJobsList(data);
        }
      } catch (err) {
        console.error('[careers] Failed to load job postings:', err);
      } finally {
        if (!cancelled) setJobsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const selectionRounds = [
    {
      num: '01',
      title: 'Aptitude Round',
      desc: 'Logic, reasoning, and problem-solving basics. We look for clarity and accuracy under time constraints.',
    },
    {
      num: '02',
      title: 'Machine Round',
      desc: 'Hands-on execution on a system. We validate fundamentals, speed, and how you debug.',
    },
    {
      num: '03',
      title: 'Technical Round 1',
      desc: 'Core concepts, projects, and fundamentals. Expect deep follow-ups and real scenarios.',
    },
    {
      num: '04',
      title: 'Technical Round 2',
      desc: 'Advanced depth and design thinking. We check system approach, tradeoffs, and ownership mindset.',
    },
    {
      num: '05',
      title: 'AI/ML Round',
      desc: 'Applied understanding of AI/ML concepts relevant to your role, plus practical evaluation thinking.',
    },
    {
      num: '06',
      title: 'HR Round',
      desc: 'Culture fit, communication, expectations, and alignment with growth. Transparent and direct.',
    },
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
    setFormData({ name: '', email: '', phone: '', message: '' });
    setResumeFile(null);
    setResumeName('');
    setIsDragging(false);
    setSubmitError('');
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setResumeFile(null);
    setResumeName('');
    setIsDragging(false);
    setSubmitError('');
  };

  const handleCloseModal = () => {
    resetModalState();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!formData.name || !formData.email || !resumeName) {
      setSubmitError('Please fill in your name, email and attach a resume.');
      return;
    }

    setSubmitLoading(true);
    try {
      const payload = {
        job_id: selectedJob.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        cover_note: formData.message,
        resume_name: resumeName,
      };

      if (resumeFile) {
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
          reader.onerror = () => reject(new Error('Failed to read resume file'));
          reader.readAsDataURL(resumeFile);
        });
        const sizeKb = Math.round((resumeFile.size || 0) / 1024);
        payload.resume_data = sizeKb > 9000 ? '' : base64;
      }

      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit application');
      }

      setFormSubmitted(true);
      setTimeout(() => {
        resetModalState();
      }, 3500);
    } catch (err) {
      console.error('[careers] Application submit failed:', err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleResumeSelect = (file) => {
    if (!file) return;
    setResumeFile(file);
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
        <div className="careers-ambient" aria-hidden="true">
          <span className="careers-orb orb-cyan" />
          <span className="careers-orb orb-violet" />
          <span className="careers-orb orb-emerald" />
        </div>
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
              <div className="careers-stat-chip"><strong>{String(jobsList.length).padStart(2, '0')}</strong><span>Open Roles</span></div>
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
                <div className="stack-item"><span className="stack-label">Pune HQ</span><strong>Handewadi</strong></div>
              </div>

              <div className="terminal-live" role="log" aria-live="polite" aria-label="Recruitment terminal logs">
                {recruitmentLogs.map((line, idx) => (
                  <div key={`${idx}-${line.slice(0, 10)}`} className="terminal-log-line">
                    <span className="terminal-log-idx">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="terminal-log-text">{line}</span>
                  </div>
                ))}
                <div className="terminal-caret" aria-hidden="true">
                  <span className="caret-block" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="careers-section careers-selection-section">
        <div className="careers-shell">
          <div className="section-head">
            <span className="careers-tag">SELECTION CRITERIA</span>
            <h2 className="section-title">Our 6-round hiring process</h2>
            <p className="section-desc">
              We keep the evaluation structured and transparent. Below are the rounds you can expect during selection.
            </p>
          </div>

          <div className="selection-grid">
            {selectionRounds.map((r) => (
              <article key={r.num} className="round-card glass-card">
                <div className="round-top">
                  <span className="round-num">{r.num}</span>
                  <h3 className="round-title">{r.title}</h3>
                </div>
                <p className="round-desc">{r.desc}</p>
              </article>
            ))}
          </div>
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
            {jobsLoading ? (
              <p className="job-board-empty">Loading open roles...</p>
            ) : jobsList.length === 0 ? (
              <p className="job-board-empty">No open roles right now. Check back soon — we hire in cycles.</p>
            ) : (
            jobsList.map((job) => (
              <article key={job.title} className={`job-card glass-card ${expandedJobTitle === job.title ? 'is-expanded' : ''}`}>
                <div className="job-meta">
                  <h3>{job.title}</h3>
                  <div className="job-tags">
                    <span>{job.department}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>

                  <p className="job-summary">{job.summary}</p>

                  <div className="job-actions-row">
                    <button
                      type="button"
                      className="job-details-toggle"
                      aria-expanded={expandedJobTitle === job.title}
                      onClick={() => setExpandedJobTitle((prev) => (prev === job.title ? null : job.title))}
                    >
                      <span>{expandedJobTitle === job.title ? 'Hide details' : 'View details'}</span>
                      {expandedJobTitle === job.title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>
                <button className="careers-apply-btn btn btn-primary" onClick={() => handleApplyClick(job)}>
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </button>

                {expandedJobTitle === job.title ? (
                  <div className="job-details" aria-label="Role details">
                    <div className="job-details-grid">
                      <div className="job-details-col">
                        <h4>Key Responsibilities</h4>
                        <ul>
                          {formatList(job.responsibilities).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="job-details-col">
                        <h4>Requirements & Qualifications</h4>
                        <ul>
                          {formatList(job.requirements).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="job-stack-section">
                      <h4 className="job-stack-title">Tech Stack & Tools</h4>
                      <div className="job-stack-row" aria-label="Primary stack">
                        {formatStack(job.stack).map((s, idx) => (
                          <span key={idx} className="job-stack-pill">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            ))
            )}
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
                  <label className="form-label-node" htmlFor="applicant-phone">Phone Number</label>
                  <input type="tel" id="applicant-phone" name="phone" className="form-input-node" placeholder="+91 98765 43210" value={formData.phone} onChange={handleInputChange} />
                </div>

                <div className="form-group-block">
                  <label className="form-label-node" htmlFor="applicant-cover">Cover Note / Experience Summary</label>
                  <textarea id="applicant-cover" name="message" className="form-textarea-node" placeholder="Briefly state your expertise..." value={formData.message} onChange={handleInputChange} />
                </div>

                <div className="form-group-block">
                  <label className="form-label-node">Resume Upload</label>
                  <input ref={resumeInputRef} type="file" accept=".pdf,.doc,.docx" className="sr-only-input" onChange={handleResumeChange} />
                  <div
                    className={`resume-dropzone ${isDragging ? 'is-dragging' : ''} ${resumeName ? 'has-file' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => resumeInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') resumeInputRef.current?.click();
                    }}
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

                {submitError && (
                  <div className="form-error-node">
                    <AlertCircle size={15} /> {submitError}
                  </div>
                )}

                <button type="submit" className="btn btn-primary careers-submit-btn" disabled={submitLoading}>
                  {submitLoading ? 'Submitting...' : 'Submit Application'}
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
