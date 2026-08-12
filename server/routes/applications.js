import { Router } from 'express';
import { query } from '../db.js';
import { requireAdmin } from '../auth.js';
import { sendMail, sendAdminNotification } from '../mailer.js';
import { getCareerConfirmationEmail, getApplicationStatusEmail } from '../emailTemplates.js';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

const serializeApp = (row) => ({
  id: row.id,
  job_id: row.job_id,
  job_title: row.job_title,
  name: row.name,
  email: row.email,
  phone: row.phone || '',
  cover_note: row.cover_note || '',
  resume_name: row.resume_name || '',
  resume_data: row.resume_data || '',
  status: row.status,
  created_at: row.created_at,
});

const STATUSES = ['new', 'reviewing', 'shortlisted', 'rejected', 'hired'];

// Public: submit a job application
router.post('/', async (req, res) => {
  const { job_id, name, email, phone, cover_note, resume_name, resume_data } = req.body || {};
  if (!job_id || !name || !email) {
    return res.status(400).json({ error: 'job_id, name and email are required' });
  }

  try {
    const [job] = await query('SELECT * FROM it_jobs WHERE id = ? AND is_active = 1', [job_id]);
    if (!job) {
      return res.status(404).json({ error: 'Job posting not found or closed' });
    }

    const result = await query(
      `INSERT INTO it_applications
        (job_id, job_title, name, email, phone, cover_note, resume_name, resume_data, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')`,
      [job_id, job.title, name, email, phone || '', cover_note || '', resume_name || '', resume_data || '']
    );

    const [created] = await query('SELECT * FROM it_applications WHERE id = ?', [result.insertId]);
    const refId = `PAY-APP-${String(result.insertId).padStart(4, '0')}`;

    // Email: notification to admin
    sendAdminNotification({
      subject: `[PAYIVVA] New application for ${job.title} (${refId})`,
      html: `
        <h2>New Job Application Received [${refId}]</h2>
        <p><strong>Role:</strong> ${job.title}</p>
        <p><strong>Candidate:</strong> ${name} (${email})</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${cover_note ? `<p><strong>Cover Note:</strong><br/>${cover_note}</p>` : ''}
        ${resume_name ? `<p><strong>Resume:</strong> ${resume_name}</p>` : ''}
        <p>Review it in the admin console: ${process.env.VERCEL_URL || ''}/admin</p>
      `,
    }).catch((err) => console.error('[mailer] admin notification failed:', err.message));

    // Email: acknowledgement to candidate
    sendMail({
      to: email,
      subject: `Application Confirmation [${refId}] — ${job.title} | PAYIVVA Technologies`,
      html: getCareerConfirmationEmail({ name, email, jobTitle: job.title, referenceId: refId }),
    }).catch((err) => console.error('[mailer] candidate acknowledgement failed:', err.message));

    return res.status(201).json(serializeApp(created));
  } catch (err) {
    console.error('[it_applications] POST failed:', err.message);
    return res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Admin: list all it_applications
router.get('/', requireAdmin, async (req, res) => {
  try {
    const rows = await query('SELECT * FROM it_applications ORDER BY created_at DESC');
    return res.json(rows.map(serializeApp));
  } catch (err) {
    console.error('[it_applications] GET failed:', err.message);
    return res.status(500).json({ error: 'Failed to load it_applications' });
  }
});

// Admin: update application status
router.patch('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body || {};
  if (!STATUSES.includes(status)) {
    return res.status(400).json({ error: `status must be one of: ${STATUSES.join(', ')}` });
  }
  try {
    await query('UPDATE it_applications SET status = ? WHERE id = ?', [status, id]);
    const [updated] = await query('SELECT * FROM it_applications WHERE id = ?', [id]);
    if (!updated) return res.status(404).json({ error: 'Application not found' });

    // Send automated status update email to candidate
    if (['reviewing', 'shortlisted', 'hired', 'rejected'].includes(status)) {
      const refId = `PAY-APP-${String(updated.id).padStart(4, '0')}`;
      const subjectMap = {
        reviewing: `Application Under Review [${refId}] — ${updated.job_title} | PAYIVVA Technologies`,
        shortlisted: `Congratulations! Application Shortlisted [${refId}] — ${updated.job_title} | PAYIVVA Technologies`,
        hired: `Offer Extended & Welcome to PAYIVVA Technologies! [${refId}] — ${updated.job_title}`,
        rejected: `Application Status Update [${refId}] — ${updated.job_title} | PAYIVVA Technologies`,
      };

      sendMail({
        to: updated.email,
        subject: subjectMap[status] || `Application Status Update [${refId}] | PAYIVVA Technologies`,
        html: getApplicationStatusEmail({
          name: updated.name,
          email: updated.email,
          jobTitle: updated.job_title,
          status,
          appId: refId,
        }),
      }).catch((err) => console.error('[mailer] candidate status email failed:', err.message));
    }

    return res.json(serializeApp(updated));
  } catch (err) {
    console.error('[it_applications] PATCH failed:', err.message);
    return res.status(500).json({ error: 'Failed to update application' });
  }
});

// Admin: delete application
router.delete('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await query('DELETE FROM it_applications WHERE id = ?', [id]);
    return res.json({ ok: true });
  } catch (err) {
    console.error('[it_applications] DELETE failed:', err.message);
    return res.status(500).json({ error: 'Failed to delete application' });
  }
});

export default router;
