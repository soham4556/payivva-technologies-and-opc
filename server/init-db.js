import dotenv from 'dotenv';
import { pool } from './db.js';

dotenv.config();

const tables = [
  `CREATE TABLE IF NOT EXISTS it_jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    location VARCHAR(255) DEFAULT 'Pune HQ',
    type VARCHAR(100) DEFAULT 'Full-time',
    summary TEXT,
    stack LONGTEXT,
    responsibilities LONGTEXT,
    requirements LONGTEXT,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,

  `CREATE TABLE IF NOT EXISTS it_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) DEFAULT '',
    cover_note TEXT,
    resume_name VARCHAR(255) DEFAULT '',
    resume_data LONGTEXT,
    status ENUM('new','reviewing','shortlisted','rejected','hired') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_it_applications_job (job_id),
    INDEX idx_it_applications_status (status)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,

  `CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('contact','quote') DEFAULT 'contact',
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    website VARCHAR(255) DEFAULT '',
    service VARCHAR(255) DEFAULT '',
    message TEXT NOT NULL,
    is_read TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_messages_type (type),
    INDEX idx_messages_read (is_read)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
];

const seedJobs = [
  {
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Pune HQ',
    type: 'Full-time',
    summary: 'Own premium UI systems, performance budgets, and frontend architecture for AI-first products.',
    stack: ['React', 'Vite', 'TypeScript', 'CSS Systems'],
    responsibilities: [
      'Ship high-quality product surfaces with strong UX and accessibility',
      'Own performance profiling (LCP/INP), bundle discipline, and runtime stability',
      'Collaborate with backend teams to define API contracts and telemetry',
    ],
    requirements: [
      'Strong React fundamentals and component architecture experience',
      'Proficiency in modern CSS layout and design systems',
      'Experience debugging production issues with logs and metrics',
    ],
  },
  {
    title: 'Technical SEO Architect',
    department: 'Marketing Science',
    location: 'Hybrid',
    type: 'Full-time',
    summary: 'Engineer technical SEO foundations, structured data, and performance strategy for organic growth.',
    stack: ['Analytics', 'Schema', 'Core Web Vitals', 'Automation'],
    responsibilities: [
      'Audit and improve crawlability, site architecture, and internal linking',
      'Define Core Web Vitals targets and coordinate fixes with engineering',
      'Develop scalable content + technical playbooks',
    ],
    requirements: [
      'Hands-on technical SEO experience (indexing, CWV, schema)',
      'Comfort working with dev teams and shipping measurable improvements',
      'Strong analytical thinking and reporting hygiene',
    ],
  },
  {
    title: 'Performance Media Manager',
    department: 'Paid Growth',
    location: 'Remote',
    type: 'Full-time',
    summary: 'Run high-velocity experiments across paid channels and optimize CAC, ROAS, and funnel conversion.',
    stack: ['Meta', 'Google Ads', 'Tracking', 'Creative Ops'],
    responsibilities: [
      'Plan and execute campaign structure with clean measurement',
      'Iterate creative and landing pages with tight feedback loops',
      'Report weekly performance with actionable insights',
    ],
    requirements: [
      'Strong campaign management fundamentals and budget ownership',
      'Ability to set up and validate tracking (events, UTMs, pixels)',
      'Comfort with experimentation and rapid iteration',
    ],
  },
  {
    title: 'UI Systems Designer',
    department: 'Product Design',
    location: 'Pune HQ',
    type: 'Contract',
    summary: 'Design premium bento layouts, component specs, and interaction systems that feel world-class.',
    stack: ['Figma', 'Design Systems', 'Motion'],
    responsibilities: [
      'Define reusable UI components and tokenized styles',
      'Partner with frontend to ensure pixel-tight implementation',
      'Create motion and interaction specs for key flows',
    ],
    requirements: [
      'Strong portfolio demonstrating systems thinking',
      'Excellent typography, layout, and interaction design taste',
      'Ability to create implementation-ready specs',
    ],
  },
];

const run = async () => {
  try {
    for (const sql of tables) {
      await pool.query(sql);
    }
    console.log('[init-db] Tables ensured: it_jobs, it_applications, messages');

    const [rows] = await pool.query('SELECT COUNT(*) AS count FROM it_jobs');
    if (rows[0].count === 0) {
      for (const job of seedJobs) {
        await pool.query(
          `INSERT INTO it_jobs
            (title, department, location, type, summary, stack, responsibilities, requirements, is_active)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)`,
          [
            job.title,
            job.department,
            job.location,
            job.type,
            job.summary,
            JSON.stringify(job.stack),
            JSON.stringify(job.responsibilities),
            JSON.stringify(job.requirements),
          ]
        );
      }
      console.log('[init-db] Seeded 4 default job postings');
    } else {
      console.log('[init-db] Job postings already exist, skipping seed');
    }

    console.log('[init-db] Done. Admin login:', process.env.ADMIN_EMAIL);
  } catch (err) {
    console.error('[init-db] Failed:', err.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

run();
