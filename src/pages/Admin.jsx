import { useEffect, useState } from 'react';
import {
  Briefcase, Users, MessageSquare, LogOut, Plus, Trash2, Eye, EyeOff,
  CheckCircle2, AlertCircle, Loader2, RefreshCw, FileText, Download, X
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

const JobFormModal = ({ initial, onClose, onSaved }) => {
  const [job, setJob] = useState(() =>
    initial ? { ...initial, stack: initial.stack.join(', '), responsibilities: initial.responsibilities.join('\n'), requirements: initial.requirements.join('\n') } : emptyJob
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setJob((prev) => ({ ...prev, [k]: e.target.value }));

  const parseLines = (str) =>
    String(str || '').split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const payload = {
      ...job,
      stack: parseLines(job.stack),
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
          <h3>{initial ? 'Edit Job Posting' : 'Create Job Posting'}</h3>
          <button type="button" className="admin-close-btn" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>
        <form className="admin-job-form" onSubmit={handleSubmit}>
          <div className="admin-form-grid">
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-title">Title *</label>
              <input id="job-title" className="form-input-node" required value={job.title} onChange={set('title')} placeholder="Senior React Developer" />
            </div>
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-dept">Department *</label>
              <input id="job-dept" className="form-input-node" required value={job.department} onChange={set('department')} placeholder="Engineering" />
            </div>
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-location">Location</label>
              <input id="job-location" className="form-input-node" value={job.location} onChange={set('location')} />
            </div>
            <div className="form-group-block">
              <label className="form-label-node" htmlFor="job-type">Type</label>
              <select id="job-type" className="form-select-node" value={job.type} onChange={set('type')}>
                <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option>
              </select>
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-summary">Summary</label>
              <textarea id="job-summary" className="form-textarea-node" rows="2" value={job.summary} onChange={set('summary')} placeholder="One-line pitch for the role" />
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-stack">Stack (comma separated)</label>
              <input id="job-stack" className="form-input-node" value={job.stack} onChange={set('stack')} placeholder="React, Vite, TypeScript" />
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-resp">Responsibilities (one per line)</label>
              <textarea id="job-resp" className="form-textarea-node" rows="4" value={job.responsibilities} onChange={set('responsibilities')} />
            </div>
            <div className="form-group-block admin-span-2">
              <label className="form-label-node" htmlFor="job-req">Requirements (one per line)</label>
              <textarea id="job-req" className="form-textarea-node" rows="4" value={job.requirements} onChange={set('requirements')} />
            </div>
          </div>
          <label className="admin-toggle-row">
            <input type="checkbox" checked={job.is_active} onChange={(e) => setJob((prev) => ({ ...prev, is_active: e.target.checked }))} />
            <span>Active (visible on careers page)</span>
          </label>
          {error && <div className="admin-inline-error"><AlertCircle size={15} /> {error}</div>}
          <div className="admin-modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading && <Loader2 size={16} className="spin" />} {initial ? 'Save Changes' : 'Create Posting'}
            </button>
          </div>
        </form>
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

  const loadAll = async (activeTab = tab) => {
    setLoading(true);
    setError('');
    try {
      const jobsRes = await fetch(`${API}/job-postings/admin`, { headers: authHeaders() });
      if (jobsRes.status === 401) { setToken(null); localStorage.removeItem(TOKEN_KEY); return; }
      if (!jobsRes.ok) throw new Error('Failed to load job postings');
      setJobs(await jobsRes.json());

      if (activeTab === 'applications' || activeTab === 'messages') {
        const endpoint = activeTab === 'applications' ? 'applications' : 'messages';
        const res = await fetch(`${API}/${endpoint}`, { headers: authHeaders() });
        if (!res.ok) throw new Error(`Failed to load ${endpoint}`);
        const data = await res.json();
        if (activeTab === 'applications') setApplications(data);
        else setMessages(data);
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
  }, [token, tab]);

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
      if (kind === 'job-postings') setJobs((prev) => prev.filter((j) => j.id !== id));
      if (kind === 'applications') setApplications((prev) => prev.filter((a) => a.id !== id));
      if (kind === 'messages') setMessages((prev) => prev.filter((m) => m.id !== id));
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
      setApplications((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
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
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, is_read } : m)));
    } catch (err) {
      setError(err.message);
    }
  };

  if (!token) return <AdminLogin onSuccess={(t) => setToken(t)} />;

  const unreadCount = messages.filter((m) => !m.is_read).length;
  const newAppsCount = applications.filter((a) => a.status === 'new').length;
  const activeJobsCount = jobs.filter((j) => j.is_active).length;

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
          <button type="button" className={`admin-nav-item ${tab === 'messages' ? 'active' : ''}`} onClick={() => setTab('messages')}>
            <MessageSquare size={17} /> Messages
            {unreadCount > 0 && <span className="admin-badge">{unreadCount}</span>}
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
                <h2>Job Applications</h2>
                <button type="button" className="admin-refresh-btn" onClick={() => loadAll('applications')}><RefreshCw size={15} /> Refresh</button>
              </div>
              {applications.length === 0 && !loading ? (
                <p className="admin-empty">No applications yet.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Candidate</th><th>Role</th><th>Status</th><th>Applied</th><th>Resume</th><th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app) => (
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
                <h2>Job Postings</h2>
                <div className="admin-head-actions">
                  <button type="button" className="admin-refresh-btn" onClick={() => loadAll('jobs')}><RefreshCw size={15} /> Refresh</button>
                  <button type="button" className="btn btn-primary admin-new-btn" onClick={() => setJobModal('new')}>
                    <Plus size={15} /> New Posting
                  </button>
                </div>
              </div>
              {jobs.length === 0 && !loading ? (
                <p className="admin-empty">No job postings. Create one.</p>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr><th>Title</th><th>Department</th><th>Location</th><th>Type</th><th>Status</th><th>Updated</th><th></th></tr>
                    </thead>
                    <tbody>
                      {jobs.map((job) => (
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

          {tab === 'messages' && (
            <section className="admin-section">
              <div className="admin-section-head">
                <h2>Contact & Quote Messages</h2>
                <button type="button" className="admin-refresh-btn" onClick={() => loadAll('messages')}><RefreshCw size={15} /> Refresh</button>
              </div>
              {messages.length === 0 && !loading ? (
                <p className="admin-empty">No messages yet.</p>
              ) : (
                <div className="admin-message-list">
                  {messages.map((msg) => (
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
        <div className="admin-modal-overlay" onClick={() => setViewingApp(null)}>
          <div className="admin-modal-box admin-resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-head">
              <h3>{viewingApp.resume_name}</h3>
              <button type="button" className="admin-close-btn" onClick={() => setViewingApp(null)} aria-label="Close"><X size={18} /></button>
            </div>
            <div className="admin-resume-preview">
              {viewingApp.resume_data ? (
                <iframe
                  title={viewingApp.resume_name}
                  src={`data:application/pdf;base64,${viewingApp.resume_data}`}
                  className="admin-resume-frame"
                />
              ) : (
                <p className="admin-empty">Resume content not available.</p>
              )}
            </div>
            <div className="admin-modal-actions">
              <button type="button" className="btn btn-primary" onClick={() => { resumeDownload(viewingApp); }}>
                <Download size={15} /> Download Resume
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setViewingApp(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
