import { useEffect, useState } from 'react';
import {
  Briefcase, Users, MessageSquare, LogOut, Plus, Trash2, Eye, EyeOff,
  CheckCircle2, AlertCircle, Loader2, RefreshCw, FileText, Download, X,
  PhoneCall, Globe
} from 'lucide-react';
import './styles/Admin.css';

const TOKEN_KEY = 'payivva_admin_token';
const API = '/api';

const getToken = () => localStorage.getItem(TOKEN_KEY);

const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

const fmtDate = (iso) => {
  if (!iso) return '-';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

const AdminLogin = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Login failed');
      localStorage.setItem(TOKEN_KEY, data.token);
      onSuccess(data.token);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-brand">
          <Briefcase size={26} />
          <h1>PAYIVVA Admin</h1>
          <p>Operations Management Console</p>
        </div>
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div className="form-group-block">
            <label className="form-label-node" htmlFor="admin-email">Admin Email</label>
            <input
              type="email" id="admin-email" className="form-input-node" required
              placeholder="admin@payivva.com" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group-block">
            <label className="form-label-node" htmlFor="admin-pass">Password</label>
            <div className="admin-pass-wrap">
              <input
                type={showPass ? 'text' : 'password'} id="admin-pass" className="form-input-node" required
                placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="admin-pass-toggle" onClick={() => setShowPass((v) => !v)} aria-label="Toggle password visibility">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          {error && (
            <div className="admin-inline-error">
              <AlertCircle size={15} /> {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary admin-login-btn" disabled={loading}>
            {loading ? <Loader2 size={16} className="spin" /> : 'Sign In'} {!loading && '→'}
          </button>
        </form>
      </div>
    </div>
  );
};

const emptyJob = {
  title: '', department: '', location: 'Pune HQ', type: 'Full-time',
  summary: '', stack: [], responsibilities: [], requirements: [], is_active: true,
};

const downloadPromptFile = () => {
  const content = `====================================================================
  PAYIVVA TECHNOLOGIES — CHATGPT JOB DESCRIPTION (JD) PROMPT GUIDE
====================================================================

Instructions:
1. Copy the prompt block below.
2. Paste it into ChatGPT or any AI assistant.
3. Replace [Job Title / Role Name] with your desired role (e.g. Senior React Developer, AI Engineer, SEO Specialist).
4. Copy-paste the generated sections directly into the PAYIVVA Admin Job Posting form fields.

--------------------------------- PROMPT START ---------------------------------

Please write a professional, high-impact Job Description (JD) for the role of "[Job Title / Role Name]". 

Please format the output exactly in the 4 separate sections below so that I can directly copy and paste each section into my Admin Job Portal:

1. ROLE SUMMARY:
(Write a 2-3 sentence high-impact summary paragraph outlining the core mission and scope of this role.)

2. TECH STACK:
(List 6-10 relevant tools, frameworks, and technologies for this role, each on a NEW LINE.)

3. KEY RESPONSIBILITIES:
(List 5-8 clear, action-oriented responsibilities. Write each point on a NEW LINE starting with a bullet • symbol.)

4. REQUIREMENTS & QUALIFICATIONS:
(List 5-8 essential qualifications, experience requirements, and core skills. Write each point on a NEW LINE starting with a bullet • symbol.)

---------------------------------- PROMPT END ----------------------------------`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'PAYIVVA_ChatGPT_JD_Prompt_Template.txt';
  a.click();
  URL.revokeObjectURL(url);
};

const JobFormModal = ({ initial, onClose, onSaved }) => {
  const [job, setJob] = useState(() =>
    initial
      ? {
          ...initial,
          stack: toMultiLine(initial.stack),
          responsibilities: toMultiLine(initial.responsibilities),
          requirements: toMultiLine(initial.requirements),
        }
      : emptyJob
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setJob((prev) => ({ ...prev, [k]: e.target.value }));

  const parseLines = (str) =>
    String(str || '')
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);

  const parseStack = (str) =>
    String(str || '')
      .split(/[\r\n,]+/)
      .map((s) => s.trim())
      .filter(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload = {
      ...job,
      stack: parseStack(job.stack),
      responsibilities: parseLines(job.responsibilities),
      requirements: parseLines(job.requirements),
      is_active: job.is_active,
    };
    try {
      const res = await fetch(`${API}/job-postings${initial ? `/${initial.id}` : ''}`, {
        method: initial ? 'PUT' : 'POST',
        headers: authHeaders(),
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Save failed');
      onSaved();
    } catch (err) {
      setError(err.message || 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal-box admin-job-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-head">
          <div className="admin-modal-head-title">
            <h3>{initial ? 'Edit Job Posting' : 'Create Job Posting'}</h3>
            <p className="admin-modal-subtitle">{initial ? 'Modify role requirements and visibility' : 'Publish a new open role for candidates'}</p>
          </div>
          <div className="admin-head-right-actions">
            <button type="button" className="admin-prompt-download-btn" onClick={downloadPromptFile} title="Download ChatGPT Prompt Format Guide">
              <Download size={14} /> ChatGPT Prompt Guide (.txt)
            </button>
            <button type="button" className="admin-close-btn" onClick={onClose} aria-label="Close"><X size={18} /></button>
          </div>
        </div>
        <form className="admin-job-form" onSubmit={handleSubmit}>
          <div className="admin-form-grid">
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-title">Job Title *</label>
              <input id="job-title" className="form-input-node" required value={job.title} onChange={set('title')} placeholder="e.g. Senior React Developer" />
            </div>
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-dept">Department *</label>
              <input id="job-dept" className="form-input-node" required value={job.department} onChange={set('department')} placeholder="e.g. Engineering" />
            </div>
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-location">Location</label>
              <input id="job-location" className="form-input-node" value={job.location} onChange={set('location')} placeholder="e.g. Pune HQ / Remote" />
            </div>
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-type">Employment Type</label>
              <div className="select-wrapper">
                <select id="job-type" className="form-select-node" value={job.type} onChange={set('type')}>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-summary">Role Summary</label>
              <textarea id="job-summary" className="form-textarea-node" rows="3" value={job.summary} onChange={set('summary')} placeholder="High-impact pitch describing the scope and goal of this role..." />
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-stack">
                Tech Stack <span className="label-hint">(one per line or comma-separated)</span>
              </label>
              <textarea id="job-stack" className="form-textarea-node" rows="3" value={job.stack} onChange={set('stack')} placeholder="React.js&#10;TypeScript&#10;Node.js&#10;Tailwind CSS" />
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-resp">
                Key Responsibilities <span className="label-hint">(paste your full multi-line list — each line becomes a bullet)</span>
              </label>
              <textarea id="job-resp" className="form-textarea-node admin-large-textarea" rows="8" value={job.responsibilities} onChange={set('responsibilities')} placeholder="• Architect scalable frontend applications&#10;• Collaborate with backend and design teams&#10;• Write clean, maintainable unit-tested code" />
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-req">
                Requirements & Qualifications <span className="label-hint">(paste your full multi-line list — each line becomes a bullet)</span>
              </label>
              <textarea id="job-req" className="form-textarea-node admin-large-textarea" rows="8" value={job.requirements} onChange={set('requirements')} placeholder="• 3+ years experience with React & JavaScript&#10;• Strong understanding of REST APIs and state management&#10;• Excellent problem-solving skills" />
            </div>
          </div>

          <div className="admin-toggle-wrapper">
            <label className="admin-toggle-row">
              <input type="checkbox" checked={job.is_active} onChange={(e) => setJob((prev) => ({ ...prev, is_active: e.target.checked }))} />
              <div className="toggle-text-block">
                <span className="toggle-title">Active Job Posting</span>
                <span className="toggle-sub">Visible publicly on the careers page</span>
              </div>
            </label>
          </div>

          {error && <div className="admin-inline-error"><AlertCircle size={15} /> {error}</div>}
          
          <div className="admin-modal-actions">
            <button type="button" className="admin-cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="admin-save-btn" disabled={loading}>
              {loading && <Loader2 size={16} className="spin" />} {initial ? 'Save Changes' : 'Create Posting'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ResumeViewerModal = ({ app, onClose, onDownload }) => {
  const [blobUrl, setBlobUrl] = useState(null);
  const [mimeType, setMimeType] = useState('application/pdf');

  useEffect(() => {
    if (!app?.resume_data) return;
    try {
      const binary = atob(app.resume_data);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const ext = (app.resume_name || '').split('.').pop()?.toLowerCase() || 'pdf';
      let mime = 'application/pdf';
      if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
        mime = `image/${ext === 'jpg' ? 'jpeg' : ext}`;
      } else if (ext === 'docx') {
        mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      } else if (ext === 'doc') {
        mime = 'application/msword';
      }
      setMimeType(mime);
      const blob = new Blob([bytes], { type: mime });
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } catch (err) {
      console.error('[resume] Failed to render resume blob:', err);
    }
  }, [app]);

  const isImage = mimeType.startsWith('image/');
  const isPdf = mimeType === 'application/pdf';

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div className="admin-modal-box admin-resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-modal-head">
          <div>
            <h3>{app.resume_name || 'Candidate Resume'}</h3>
            <p className="admin-modal-subtitle">Candidate: {app.name} ({app.email}) • Role: {app.job_title}</p>
          </div>
          <button type="button" className="admin-close-btn" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>
        <div className="admin-resume-preview">
          {blobUrl ? (
            isImage ? (
              <div className="admin-image-preview-wrap">
                <img src={blobUrl} alt={app.resume_name} className="admin-resume-img" />
              </div>
            ) : isPdf ? (
              <object
                data={blobUrl}
                type="application/pdf"
                className="admin-resume-frame"
              >
                <iframe title={app.resume_name} src={blobUrl} className="admin-resume-frame" />
              </object>
            ) : (
              <div className="admin-docx-preview-card">
                <FileText size={48} className="docx-icon" />
                <h4>{app.resume_name}</h4>
                <p>Word Document file. Click below to download and view candidate resume.</p>
                <button type="button" className="admin-save-btn" onClick={() => onDownload(app)}>
                  <Download size={16} /> Download & Open Resume
                </button>
              </div>
            )
          ) : (
            <p className="admin-empty">Resume content not available.</p>
          )}
        </div>
        <div className="admin-modal-actions">
          {app.resume_data && (
            <button type="button" className="admin-save-btn" onClick={() => onDownload(app)}>
              <Download size={15} /> Download Resume
            </button>
          )}
          <button type="button" className="admin-cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [token, setToken] = useState(() => getToken());
  const [tab, setTab] = useState('applications');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [jobModal, setJobModal] = useState(null); // null | 'new' | job object
  const [viewingApp, setViewingApp] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const flash = (msg) => {
    setNotice(msg);
    window.setTimeout(() => setNotice(''), 3000);
  };

  const loadAll = async () => {
    setLoading(true);
    setError('');
    try {
      const headers = authHeaders();
      const [jobsRes, appsRes, msgsRes] = await Promise.all([
        fetch(`${API}/job-postings/admin`, { headers }),
        fetch(`${API}/applications`, { headers }),
        fetch(`${API}/messages`, { headers }),
      ]);

      if (jobsRes.status === 401 || appsRes.status === 401 || msgsRes.status === 401) {
        setToken(null);
        localStorage.removeItem(TOKEN_KEY);
        return;
      }

      if (jobsRes.ok) {
        const data = await jobsRes.json();
        setJobs(Array.isArray(data) ? data : []);
      }
      if (appsRes.ok) {
        const data = await appsRes.json();
        setApplications(Array.isArray(data) ? data : []);
      }
      if (msgsRes.ok) {
        const data = await msgsRes.json();
        setMessages(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  const handleDelete = async (kind, id) => {
    if (!window.confirm('Delete this record permanently?')) return;
    setDeleting(id);
    try {
      const res = await fetch(`${API}/${kind}/${id}`, { method: 'DELETE', headers: authHeaders() });
      if (!res.ok) throw new Error('Delete failed');
      if (kind === 'job-postings') setJobs((prev) => (Array.isArray(prev) ? prev.filter((j) => j.id !== id) : []));
      if (kind === 'applications') setApplications((prev) => (Array.isArray(prev) ? prev.filter((a) => a.id !== id) : []));
      if (kind === 'messages') setMessages((prev) => (Array.isArray(prev) ? prev.filter((m) => m.id !== id) : []));
      flash('Deleted');
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(null);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/applications/${id}`, {
        method: 'PATCH', headers: authHeaders(),
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Update failed');
      setApplications((prev) => (Array.isArray(prev) ? prev.map((a) => (a.id === id ? { ...a, status } : a)) : []));
      flash(`Status updated to '${status}' — Email sent to candidate!`);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRead = async (id, is_read) => {
    try {
      const res = await fetch(`${API}/messages/${id}`, {
        method: 'PATCH', headers: authHeaders(),
        body: JSON.stringify({ is_read }),
      });
      if (!res.ok) throw new Error('Update failed');
      setMessages((prev) => (Array.isArray(prev) ? prev.map((m) => (m.id === id ? { ...m, is_read } : m)) : []));
    } catch (err) {
      setError(err.message);
    }
  };

  if (!token) return <AdminLogin onSuccess={(t) => setToken(t)} />;

  const jobsList = Array.isArray(jobs) ? jobs : [];
  const appsList = Array.isArray(applications) ? applications : [];
  const msgsList = Array.isArray(messages) ? messages : [];

  const contactRequestsList = msgsList.filter((m) => m.type === 'contact' || m.type === 'call_request');
  const quoteMsgsList = msgsList.filter((m) => m.type === 'quote');

  const newAppsCount = appsList.filter((a) => a.status === 'new').length;
  const activeJobsCount = jobsList.filter((j) => j.is_active).length;
  const contactRequestsUnread = contactRequestsList.filter((m) => !m.is_read).length;
  const messagesUnread = msgsList.filter((m) => !m.is_read).length;

  const resumeDownload = (app) => {
    if (!app.resume_data) return;
    const ext = (app.resume_name || '').split('.').pop()?.toLowerCase() || 'pdf';
    const mime = ext === 'docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      : ext === 'doc' ? 'application/msword' : 'application/pdf';
    const a = document.createElement('a');
    a.href = `data:${mime};base64,${app.resume_data}`;
    a.download = app.resume_name || `resume-${app.id}`;
    a.click();
  };

  return (
    <div className="admin-page">
      <header className="admin-topbar">
        <div className="admin-topbar-brand">
          <Briefcase size={20} />
          <span>PAYIVVA Admin Console</span>
        </div>
        <div className="admin-topbar-actions">
          <span className="admin-account-chip">{token ? 'admin@payivva.com' : ''}</span>
          <button type="button" className="admin-logout-btn" onClick={handleLogout}>
            <LogOut size={15} /> Logout
          </button>
        </div>
      </header>

      <div className="admin-layout">
        <aside className="admin-sidebar">
          <button type="button" className={`admin-nav-item ${tab === 'applications' ? 'active' : ''}`} onClick={() => setTab('applications')}>
            <Users size={17} /> Applications
            {newAppsCount > 0 && <span className="admin-badge">{newAppsCount}</span>}
          </button>
          <button type="button" className={`admin-nav-item ${tab === 'jobs' ? 'active' : ''}`} onClick={() => setTab('jobs')}>
            <Briefcase size={17} /> Job Postings
            <span className="admin-badge muted">{activeJobsCount} active</span>
          </button>
          <button type="button" className={`admin-nav-item ${tab === 'contact_requests' ? 'active' : ''}`} onClick={() => setTab('contact_requests')}>
            <PhoneCall size={17} /> Contact & Call Requests
            {contactRequestsUnread > 0 && <span className="admin-badge">{contactRequestsUnread}</span>}
          </button>
          <button type="button" className={`admin-nav-item ${tab === 'messages' ? 'active' : ''}`} onClick={() => setTab('messages')}>
            <MessageSquare size={17} /> Messages & Quotes
            {messagesUnread > 0 && <span className="admin-badge muted">{messagesUnread}</span>}
          </button>
        </aside>

        <main className="admin-main">
          {notice && <div className="admin-notice"><CheckCircle2 size={16} /> {notice}</div>}
          {error && <div className="admin-inline-error admin-main-error"><AlertCircle size={15} /> {error}</div>}

          {loading && (
            <div className="admin-loading-row"><Loader2 size={18} className="spin" /> Loading data...</div>
          )}

          {tab === 'applications' && (
            <section className="admin-section">
              <div className="admin-section-head">
                <div>
                  <h2>Job Applications</h2>
                  <p className="admin-section-sub">Candidate applications submitted via Careers page</p>
                </div>
                <button type="button" className="admin-refresh-btn" onClick={() => loadAll()}><RefreshCw size={15} /> Refresh</button>
              </div>
              {appsList.length === 0 && !loading ? (
                <p className="admin-empty">No applications received yet.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Candidate</th><th>Role</th><th>Status</th><th>Applied</th><th>Resume</th><th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {appsList.map((app) => (
                        <tr key={app.id}>
                          <td>
                            <strong>{app.name}</strong>
                            <span className="admin-sub">{app.email}</span>
                            {app.phone && <span className="admin-sub">{app.phone}</span>}
                          </td>
                          <td>{app.job_title}</td>
                          <td>
                            <select
                              className={`admin-status-select status-${app.status}`}
                              value={app.status}
                              onChange={(e) => handleStatus(app.id, e.target.value)}
                            >
                              <option value="new">New</option>
                              <option value="reviewing">Reviewing</option>
                              <option value="shortlisted">Shortlisted</option>
                              <option value="rejected">Rejected</option>
                              <option value="hired">Hired</option>
                            </select>
                          </td>
                          <td className="admin-sub">{fmtDate(app.created_at)}</td>
                          <td>
                            <div className="admin-resume-actions">
                              {app.resume_name && (
                                <>
                                  <button type="button" className="admin-icon-btn" onClick={() => setViewingApp(app)} title="View resume" disabled={!app.resume_data}>
                                    <FileText size={15} /> {app.resume_name.slice(0, 22)}{app.resume_name.length > 22 ? '…' : ''}
                                  </button>
                                  {app.resume_data && (
                                    <button type="button" className="admin-icon-btn" onClick={() => resumeDownload(app)} title="Download resume">
                                      <Download size={15} />
                                    </button>
                                  )}
                                </>
                              )}
                              {!app.resume_name && <span className="admin-sub">No resume</span>}
                            </div>
                          </td>
                          <td>
                            <button type="button" className="admin-icon-btn danger" onClick={() => handleDelete('applications', app.id)} disabled={deleting === app.id}>
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {tab === 'jobs' && (
            <section className="admin-section">
              <div className="admin-section-head">
                <div>
                  <h2>Job Postings</h2>
                  <p className="admin-section-sub">Active and archived hiring positions</p>
                </div>
                <div className="admin-head-actions">
                  <button type="button" className="admin-refresh-btn" onClick={downloadPromptFile} title="Download ChatGPT Prompt Format Guide">
                    <Download size={15} /> Prompt Guide (.txt)
                  </button>
                  <button type="button" className="admin-refresh-btn" onClick={() => loadAll()}><RefreshCw size={15} /> Refresh</button>
                  <button type="button" className="btn btn-primary admin-new-btn" onClick={() => setJobModal('new')}>
                    <Plus size={15} /> New Posting
                  </button>
                </div>
              </div>
              {jobsList.length === 0 && !loading ? (
                <p className="admin-empty">No job postings found. Click "New Posting" to create one.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr><th>Title</th><th>Department</th><th>Location</th><th>Type</th><th>Status</th><th>Updated</th><th></th></tr>
                    </thead>
                    <tbody>
                      {jobsList.map((job) => (
                        <tr key={job.id}>
                          <td><strong>{job.title}</strong></td>
                          <td>{job.department}</td>
                          <td>{job.location}</td>
                          <td>{job.type}</td>
                          <td>
                            <span className={`admin-status-pill ${job.is_active ? 'on' : 'off'}`}>
                              {job.is_active ? 'Active' : 'Hidden'}
                            </span>
                          </td>
                          <td className="admin-sub">{fmtDate(job.updated_at || job.created_at)}</td>
                          <td className="admin-row-actions">
                            <button type="button" className="admin-icon-btn" onClick={() => setJobModal(job)} title="Edit"><Eye size={15} /></button>
                            <button type="button" className="admin-icon-btn danger" onClick={() => handleDelete('job-postings', job.id)} disabled={deleting === job.id} title="Delete">
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {tab === 'contact_requests' && (
            <section className="admin-section">
              <div className="admin-section-head">
                <div>
                  <h2>Contact & Call Requests</h2>
                  <p className="admin-section-sub">Corporate inquiries & Request A Call form submissions</p>
                </div>
                <button type="button" className="admin-refresh-btn" onClick={() => loadAll()}><RefreshCw size={15} /> Refresh</button>
              </div>
              {contactRequestsList.length === 0 && !loading ? (
                <p className="admin-empty">No Contact Us or Request A Call submissions yet.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Client & Corporate Email</th>
                        <th>Target Specification</th>
                        <th>Website</th>
                        <th>Project Brief / Request</th>
                        <th>Submitted</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactRequestsList.map((req) => (
                        <tr key={req.id} className={req.is_read ? 'admin-row-read' : 'admin-row-unread'}>
                          <td>
                            <strong style={{ color: '#0f172a' }}>{req.name}</strong>
                            <span className="admin-corporate-chip">{req.email}</span>
                          </td>
                          <td>
                            <span className="admin-spec-pill">{req.service || 'Request a Call'}</span>
                          </td>
                          <td>
                            {req.website ? (
                              <a href={req.website} target="_blank" rel="noreferrer" className="admin-website-link">
                                <Globe size={13} /> {req.website.replace(/^https?:\/\//, '')}
                              </a>
                            ) : (
                              <span className="admin-sub">-</span>
                            )}
                          </td>
                          <td className="admin-brief-cell">
                            <p className="admin-brief-text">{req.message}</p>
                          </td>
                          <td className="admin-sub">{fmtDate(req.created_at)}</td>
                          <td className="admin-row-actions">
                            <button
                              type="button"
                              className={`admin-icon-btn ${req.is_read ? '' : 'accent'}`}
                              onClick={() => handleRead(req.id, !req.is_read)}
                            >
                              {req.is_read ? 'Mark Unread' : 'Mark Read'}
                            </button>
                            <button
                              type="button"
                              className="admin-icon-btn danger"
                              onClick={() => handleDelete('messages', req.id)}
                              disabled={deleting === req.id}
                            >
                              <Trash2 size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {tab === 'messages' && (
            <section className="admin-section">
              <div className="admin-section-head">
                <div>
                  <h2>All Messages & Quotes</h2>
                  <p className="admin-section-sub">Comprehensive inbox for quotes and website messages</p>
                </div>
                <button type="button" className="admin-refresh-btn" onClick={() => loadAll()}><RefreshCw size={15} /> Refresh</button>
              </div>
              {msgsList.length === 0 && !loading ? (
                <p className="admin-empty">No messages received yet.</p>
              ) : (
                <div className="admin-message-list">
                  {msgsList.map((msg) => (
                    <article key={msg.id} className={`admin-message-card ${msg.is_read ? 'read' : 'unread'}`}>
                      <div className="admin-msg-top">
                        <div>
                          <strong>{msg.name}</strong>
                          <span className="admin-sub">{msg.email}</span>
                          {msg.website && <span className="admin-sub">{msg.website}</span>}
                        </div>
                        <span className="admin-msg-meta">
                          <span className={`admin-type-pill ${msg.type}`}>{msg.type === 'quote' ? 'Quote' : 'Contact'}</span>
                          {msg.service && <span className="admin-sub">{msg.service}</span>}
                          <span className="admin-sub">{fmtDate(msg.created_at)}</span>
                        </span>
                      </div>
                      <p className="admin-msg-body">{msg.message}</p>
                      <div className="admin-msg-actions">
                        <button type="button" className="admin-icon-btn" onClick={() => handleRead(msg.id, !msg.is_read)}>
                          {msg.is_read ? 'Mark unread' : 'Mark read'}
                        </button>
                        <button type="button" className="admin-icon-btn danger" onClick={() => handleDelete('messages', msg.id)} disabled={deleting === msg.id}>
                          <Trash2 size={15} /> Delete
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )}
        </main>
      </div>

      {jobModal && (
        <JobFormModal
          initial={jobModal === 'new' ? null : jobModal}
          onClose={() => setJobModal(null)}
          onSaved={() => {
            setJobModal(null);
            loadAll('jobs');
            flash(jobModal === 'new' ? 'Job posting created' : 'Job posting updated');
          }}
        />
      )}

      {viewingApp && (
        <ResumeViewerModal
          app={viewingApp}
          onClose={() => setViewingApp(null)}
          onDownload={resumeDownload}
        />
      )}
    </div>
  );
};

export default Admin;
