// Vercel Serverless Function: dynamic sitemap.xml
// URL: /sitemap.xml (via vercel.json rewrite)

const SITE_URL = 'https://payivva-technologiess.vercel.app';

// Keep this list in sync with src/data/industries.js slugs.
const INDUSTRY_SLUGS = [
  'manufacturing-industrial-iot',
  'cybersecurity-cloud-systems',
  'logistics-supply-chain',
  'ecommerce-retail',
  'finance-fintech',
  'healthcare-biotech',
];

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlNode({ loc, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    changefreq ? `    <changefreq>${xmlEscape(changefreq)}</changefreq>` : null,
    typeof priority === 'number' ? `    <priority>${priority.toFixed(1)}</priority>` : null,
    '  </url>',
  ].filter(Boolean).join('\n');
}

module.exports = function handler(req, res) {
  const staticRoutes = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/about', changefreq: 'monthly', priority: 0.7 },
    { path: '/services', changefreq: 'weekly', priority: 0.9 },
    { path: '/services/ai-consulting-strategy', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/machine-learning-solutions', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/computer-vision-nlp', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/generative-ai-llm', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/software-development', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/app-development', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/website-development', changefreq: 'monthly', priority: 0.7 },
    { path: '/services/digital-marketing', changefreq: 'monthly', priority: 0.7 },
    { path: '/contact', changefreq: 'monthly', priority: 0.8 },
    { path: '/careers', changefreq: 'monthly', priority: 0.5 },
    { path: '/blog', changefreq: 'weekly', priority: 0.6 },
    { path: '/resources/case-studies', changefreq: 'monthly', priority: 0.5 },
    { path: '/resources/documentation', changefreq: 'monthly', priority: 0.5 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.2 },
    { path: '/terms', changefreq: 'yearly', priority: 0.2 },
    { path: '/security', changefreq: 'yearly', priority: 0.2 },
    { path: '/legal', changefreq: 'yearly', priority: 0.2 },
  ];

  const industryRoutes = INDUSTRY_SLUGS.map((slug) => ({
    path: `/industries/${slug}`,
    changefreq: 'monthly',
    priority: 0.6,
  }));

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...staticRoutes, ...industryRoutes].map((r) => urlNode({
      loc: `${SITE_URL}${r.path}`,
      changefreq: r.changefreq,
      priority: r.priority,
    })),
    '</urlset>',
    '',
  ].join('\n');

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');
  res.statusCode = 200;
  res.end(body);
};
