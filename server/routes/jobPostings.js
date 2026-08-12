import { Router } from 'express';
import { query } from '../db.js';
import { requireAdmin } from '../auth.js';
import { sendAdminNotification } from '../mailer.js';

const router = Router();

const parseJsonArray = (val) => {
  if (Array.isArray(val)) return val;
  if (!val) return [];
  try {
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed : [String(val)];
  } catch {
    return [String(val)];
  }
};

export const cleanListItems = (val) => {
  if (!val) return [];
  const rawArray = parseJsonArray(val);
  const items = rawArray
    .flatMap((s) => String(s).split(/\r?\n/))
    .map((s) => s.replace(/^[\s•\-\d.\:]+/, '').trim())
    .filter(Boolean);
  return items;
};

export const cleanStackPills = (val) => {
  if (!val) return [];
  const rawArray = parseJsonArray(val);
  const tags = rawArray
    .flatMap((s) => String(s).split(/[\r\n,]+/))
    .map((s) => s.replace(/^[\s•\-\d.\:]+/, '').trim())
    .filter(Boolean);
  return tags;
};

export const serializeJob = (row) => ({
  id: row.id,
  title: row.title,
  department: row.department,
  location: row.location,
  type: row.type,
  summary: row.summary,
  stack: cleanStackPills(row.stack),
  responsibilities: cleanListItems(row.responsibilities),
  requirements: cleanListItems(row.requirements),
  is_active: row.is_active === 1 || row.is_active === true,
  created_at: row.created_at,
  updated_at: row.updated_at,
});

// Public: list active job postings (all details for careers page)
router.get('/', async (req, res) => {
  try {
    const rows = await query(
      'SELECT * FROM it_jobs WHERE is_active = 1 ORDER BY created_at DESC'
    );
    return res.json(rows.map(serializeJob));
  } catch (err) {
    console.error('[jobPostings] GET / failed:', err.message);
    return res.status(500).json({ error: 'Failed to load job postings' });
  }
});

// Admin: list all job postings including inactive
router.get('/admin', requireAdmin, async (req, res) => {
  try {
    const rows = await query('SELECT * FROM it_jobs ORDER BY created_at DESC');
    return res.json(rows.map(serializeJob));
  } catch (err) {
    console.error('[jobPostings] GET /admin failed:', err.message);
    return res.status(500).json({ error: 'Failed to load job postings' });
  }
});

// Admin: create job posting
router.post('/', requireAdmin, async (req, res) => {
  const { title, department, location, type, summary, stack, responsibilities, requirements, is_active } = req.body || {};
  if (!title || !department) {
    return res.status(400).json({ error: 'Title and department are required' });
  }
  try {
    const result = await query(
      `INSERT INTO it_jobs
        (title, department, location, type, summary, stack, responsibilities, requirements, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        department,
        location || 'Pune HQ',
        type || 'Full-time',
        summary || '',
        JSON.stringify(parseJsonArray(stack)),
        JSON.stringify(parseJsonArray(responsibilities)),
        JSON.stringify(parseJsonArray(requirements)),
        is_active ? 1 : 0,
      ]
    );
    const [created] = await query('SELECT * FROM it_jobs WHERE id = ?', [result.insertId]);
    return res.status(201).json(serializeJob(created));
  } catch (err) {
    console.error('[jobPostings] POST failed:', err.message);
    return res.status(500).json({ error: 'Failed to create job posting' });
  }
});

// Admin: update job posting
router.put('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { title, department, location, type, summary, stack, responsibilities, requirements, is_active } = req.body || {};
  try {
    await query(
      `UPDATE it_jobs SET
        title = ?, department = ?, location = ?, type = ?, summary = ?,
        stack = ?, responsibilities = ?, requirements = ?, is_active = ?
       WHERE id = ?`,
      [
        title,
        department,
        location,
        type,
        summary,
        JSON.stringify(parseJsonArray(stack)),
        JSON.stringify(parseJsonArray(responsibilities)),
        JSON.stringify(parseJsonArray(requirements)),
        is_active ? 1 : 0,
        id,
      ]
    );
    const [updated] = await query('SELECT * FROM it_jobs WHERE id = ?', [id]);
    if (!updated) return res.status(404).json({ error: 'Job posting not found' });
    return res.json(serializeJob(updated));
  } catch (err) {
    console.error('[jobPostings] PUT failed:', err.message);
    return res.status(500).json({ error: 'Failed to update job posting' });
  }
});

// Admin: delete job posting
router.delete('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await query('DELETE FROM it_jobs WHERE id = ?', [id]);
    return res.json({ ok: true });
  } catch (err) {
    console.error('[jobPostings] DELETE failed:', err.message);
    return res.status(500).json({ error: 'Failed to delete job posting' });
  }
});

export const notifyNewJob = async (job) => {
  try {
    await sendAdminNotification({
      subject: `[PAYIVVA] New job posting: ${job.title}`,
      html: `
        <h2>New Job Posting</h2>
        <p><strong>Title:</strong> ${job.title}</p>
        <p><strong>Department:</strong> ${job.department}</p>
        <p><strong>Location:</strong> ${job.location} • <strong>Type:</strong> ${job.type}</p>
        <p>Manage it from the admin panel: ${process.env.VERCEL_URL || ''}/admin</p>
      `,
    });
  } catch (err) {
    console.error('[mailer] job notification failed:', err.message);
  }
};

export default router;
