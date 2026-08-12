import { Router } from 'express';
import { query } from '../db.js';
import { requireAdmin } from '../auth.js';
import { sendMail, sendAdminNotification } from '../mailer.js';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

const serializeMsg = (row) => ({
  id: row.id,
  type: row.type,
  name: row.name,
  email: row.email,
  website: row.website || '',
  service: row.service || '',
  message: row.message,
  is_read: row.is_read === 1 || row.is_read === true,
  created_at: row.created_at,
});

const escapeHtml = (str = '') =>
  String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

// Public: submit contact / quote request
router.post('/', async (req, res) => {
  const { type, name, email, website, service, message } = req.body || {};
  const msgType = type === 'quote' ? 'quote' : 'contact';

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  try {
    const result = await query(
      `INSERT INTO messages (type, name, email, website, service, message, is_read)
       VALUES (?, ?, ?, ?, ?, ?, 0)`,
      [msgType, name, email, website || '', service || '', message]
    );

    const [created] = await query('SELECT * FROM messages WHERE id = ?', [result.insertId]);

    const heading = msgType === 'quote' ? 'New Quote Request' : 'New Contact Message';

    sendAdminNotification({
      subject: `[PAYIVVA] ${heading} from ${name}`,
      html: `
        <h2>${heading}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${website ? `<p><strong>Website:</strong> ${escapeHtml(website)}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        <p>Manage it in the admin panel: ${process.env.VERCEL_URL || ''}/admin</p>
      `,
    }).catch((err) => console.error('[mailer] admin notification failed:', err.message));

    sendMail({
      to: email,
      subject: msgType === 'quote'
        ? 'Quote Request Received | PAYIVVA Technologies'
        : 'Message Received | PAYIVVA Technologies',
      html: `
        <h2>Hello ${escapeHtml(name)},</h2>
        <p>Thank you for reaching out to PAYIVVA Technologies.</p>
        <p>Your ${msgType === 'quote' ? 'quote request' : 'message'} has been received. A strategist will reply within 12 business hours.</p>
        <br/>
        <p>Best regards,<br/><strong>PAYIVVA Technologies — IT Department</strong></p>
      `,
    }).catch((err) => console.error('[mailer] user acknowledgement failed:', err.message));

    return res.status(201).json(serializeMsg(created));
  } catch (err) {
    console.error('[messages] POST failed:', err.message);
    return res.status(500).json({ error: 'Failed to submit message' });
  }
});

// Admin: list all messages
router.get('/', requireAdmin, async (req, res) => {
  try {
    const rows = await query('SELECT * FROM messages ORDER BY created_at DESC');
    return res.json(rows.map(serializeMsg));
  } catch (err) {
    console.error('[messages] GET failed:', err.message);
    return res.status(500).json({ error: 'Failed to load messages' });
  }
});

// Admin: mark as read / unread
router.patch('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { is_read } = req.body || {};
  try {
    await query('UPDATE messages SET is_read = ? WHERE id = ?', [is_read ? 1 : 0, id]);
    const [updated] = await query('SELECT * FROM messages WHERE id = ?', [id]);
    if (!updated) return res.status(404).json({ error: 'Message not found' });
    return res.json(serializeMsg(updated));
  } catch (err) {
    console.error('[messages] PATCH failed:', err.message);
    return res.status(500).json({ error: 'Failed to update message' });
  }
});

// Admin: delete message
router.delete('/:id', requireAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await query('DELETE FROM messages WHERE id = ?', [id]);
    return res.json({ ok: true });
  } catch (err) {
    console.error('[messages] DELETE failed:', err.message);
    return res.status(500).json({ error: 'Failed to delete message' });
  }
});

export default router;
