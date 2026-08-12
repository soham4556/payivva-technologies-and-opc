import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import jobPostingsRoutes from './routes/jobPostings.js';
import applicationsRoutes from './routes/applications.js';
import messagesRoutes from './routes/messages.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/job-postings', jobPostingsRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/messages', messagesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error('[api] Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
