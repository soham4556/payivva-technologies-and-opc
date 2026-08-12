import { Router } from 'express';
import dotenv from 'dotenv';
import { signToken } from '../auth.js';

dotenv.config();

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPass = process.env.ADMIN_PASS;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const emailOk = String(email).toLowerCase() === String(adminEmail).toLowerCase();
  const passOk = String(password) === String(adminPass);
  if (!emailOk || !passOk) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = signToken({ role: 'admin', email: adminEmail });
  return res.json({ token, admin: { email: adminEmail } });
});

export default router;
