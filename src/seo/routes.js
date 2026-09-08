import { absoluteUrl, SITE } from './siteConfig';
import {
  breadcrumbSchema,
  blogSchema,
  collectionPageSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from './schema';
import { getIndustryBySlug } from '../data/industries';
import { SERVICE_FAQS } from './faqContent';

const DEFAULT_KEYWORDS = [
  'Payivva Technologies',
  'AI consulting',
  'AI strategy',
  'machine learning solutions',
  'computer vision',
  'NLP',
  'generative AI',
  'LLM',
  'software development',
  'website development',
  'app development',
  'digital marketing',
  'technical SEO',
  'Pune',
].join(', ');

const INDUSTRY_SEO = {
  'manufacturing-industrial-iot': {
    title: 'Industrial IoT Solutions Company India',
    description: 'Connect factory data, AI, edge computing, and analytics to improve visibility, maintenance, quality, and production decisions.',
  },
  'cybersecurity-cloud-systems': {
    title: 'Enterprise Cybersecurity Solutions India',
    description: 'Strengthen cloud and enterprise environments with security architecture, monitoring, access controls, automation, and governance.',
  },
  'logistics-supply-chain': {
    title: 'AI Solutions for Logistics and Supply Chain',
    description: 'Use AI, software, IoT, and analytics to improve supply chain visibility, forecasting, routing, warehouse, and logistics workflows.',
  },
  'ecommerce-retail': {
    title: 'E-commerce Software Development Company India',
    description: 'Build scalable commerce platforms, integrations, personalization, analytics, and automation for retail and e-commerce teams.',
  },
  'finance-fintech': {
    title: 'FinTech Software Development Company India',
    description: 'PAYIVVA engineers secure fintech platforms, APIs, analytics, and automation for financial products and operational teams.',
  },
  'healthcare-biotech': {
    title: 'Healthcare AI Software Development',
    description: 'Build secure AI and software systems for healthcare and biotech workflows, analytics, research, and operational automation.',
  },
};

const PAGE_KEYWORDS = {
  '/': 'Payivva Technologies, AI and software development company, enterprise AI solutions, custom software engineering, digital transformation',
  '/about': 'Payivva Technologies, AI technology company India, enterprise software engineering team, digital transformation partner',
  '/services': 'AI and software development services, AI consulting, machine learning, generative AI, custom software, cloud solutions',
  '/contact': 'contact AI software development company, technology consulting India, PAYIVVA Technologies',
  '/careers': 'technology careers Pune, AI jobs Pune, software engineering careers India, PAYIVVA careers',
  '/blog': 'enterprise AI insights, software engineering insights, machine learning deployment, cloud-native engineering',
  '/resources/case-studies': 'AI software development case studies, enterprise AI project examples, technology transformation case studies',
  '/resources/documentation': 'enterprise software architecture documentation, AI implementation documentation, cloud architecture guide',
  '/services/ai-consulting-strategy': 'AI consulting company India, AI strategy consulting services, AI readiness assessment, enterprise AI roadmap',
  '/services/machine-learning-solutions': 'machine learning consulting company India, custom machine learning solutions, MLOps consulting, predictive analytics',
  '/services/computer-vision-nlp': 'computer vision development company India, NLP development company India, OCR automation, document intelligence',
  '/services/generative-ai-llm': 'generative AI development company India, enterprise generative AI, custom LLM development, RAG application development',
  '/services/software-development': 'enterprise software development company India, custom software engineering services, API development, product engineering',
  '/services/app-development': 'mobile app development company Pune, enterprise mobile app development India, cross-platform app development',
  '/services/website-development': 'high-performance website development company India, SEO-ready website development, React web platforms',
  '/services/digital-marketing': 'technical SEO and digital marketing company Pune, B2B SEO services India, technical SEO audit, demand generation',
  '/security': 'software security and compliance practices, secure software development, cloud security controls, AI data governance',
  '/privacy': 'PAYIVVA privacy policy, software data privacy India',
  '/terms': 'PAYIVVA terms of service, software services agreement',
  '/legal': 'PAYIVVA legal information, technology company legal terms',
};

const INDUSTRY_KEYWORDS = {
  'manufacturing-industrial-iot': 'industrial IoT solutions company India, Industry 4.0 solutions, predictive maintenance software, AI manufacturing solutions',
  'cybersecurity-cloud-systems': 'enterprise cybersecurity solutions India, cloud security consulting, zero trust architecture, cloud compliance',
  'logistics-supply-chain': 'AI solutions for logistics and supply chain, supply chain analytics, logistics optimization, demand forecasting',
  'ecommerce-retail': 'ecommerce software development company India, retail AI solutions, ecommerce platform engineering, retail analytics',
  'finance-fintech': 'fintech software development company India, financial services AI, fintech API development, risk analytics software',
  'healthcare-biotech': 'healthcare AI software development company, healthcare machine learning, biotech data platforms, secure healthcare software',
};

function baseJsonLd({ breadcrumbs, services, faqs } = {}) {
  const crumbs = breadcrumbs?.map((c) => ({ name: c.name, item: absoluteUrl(c.path) })) || [];
  const serviceNames = (services || []).map((s) => s.name).filter(Boolean);
  const faqItems = (faqs || [])
    .map((f) => ({ question: f.question || f.q, answer: f.answer || f.a }))
    .filter((f) => f.question && f.answer);

  return [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema({
      services: serviceNames,
      // If you have a fixed price range, set it. Otherwise omit.
      priceRange: undefined,
    }),
    crumbs.length ? breadcrumbSchema(crumbs) : null,
    ...(services || []).map((s) => serviceSchema(s)),
    faqItems.length ? faqSchema(faqItems) : null,
  ].filter(Boolean);
}

function resolveSeoForLocation({ pathname }) {
  const path = pathname || '/';

  // Normalize trailing slashes to avoid duplicate canonicals.
  if (path.length > 1 && path.endsWith('/')) {
    const normalized = path.replace(/\/+$/, '');
    return resolveSeoForLocation({ pathname: normalized });
  }

  if (path === '/404') {
    return {
      title: '404',
      description: 'Page not found.',
      canonical: '/404',
      robots: 'noindex,follow',
      og: { url: '/404' },
      jsonLd: baseJsonLd({ breadcrumbs: [{ name: 'Home', path: '/' }] }),
    };
  }

  // Admin panel should never be indexed
  if (path === '/admin' || path.startsWith('/admin/')) {
    return {
      title: 'Admin Console',
      description: 'PAYIVVA Operations Management Console.',
      canonical: '/admin',
      robots: 'noindex,nofollow',
      og: { url: '/admin' },
      jsonLd: [],
    };
  }

  // Core pages
  if (path === '/') {
    const breadcrumbs = [{ name: 'Home', path: '/' }];
    const services = [
      {
        name: 'AI Consulting & Strategy',
        serviceType: 'AI Consulting',
        description: 'AI strategy, architecture planning, and roadmap execution for enterprise teams.',
        urlPath: '/services/ai-consulting-strategy',
      },
      {
        name: 'Machine Learning Solutions',
        serviceType: 'Machine Learning',
        description: 'Custom ML systems, predictive analytics, and production-grade model deployment.',
        urlPath: '/services/machine-learning-solutions',
      },
      {
        name: 'Computer Vision & NLP',
        serviceType: 'Computer Vision & NLP',
        description: 'OCR, vision pipelines, NLP automation, and document intelligence for real workflows.',
        urlPath: '/services/computer-vision-nlp',
      },
      {
        name: 'Generative AI & LLM',
        serviceType: 'Generative AI',
        description: 'Private-tenant LLM systems, RAG, and agentic workflows with security guardrails.',
        urlPath: '/services/generative-ai-llm',
      },
      {
        name: 'Software Development',
        serviceType: 'Software Development',
        description: 'Custom enterprise software systems, APIs, and scalable product engineering.',
        urlPath: '/services/software-development',
      },
      {
        name: 'Website Development',
        serviceType: 'Website Development',
        description: 'High-performance React/Vite websites engineered for SEO, speed, and conversion.',
        urlPath: '/services/website-development',
      },
    ];

    return {
      title: 'AI and Software Development Company',
      description:
        'PAYIVVA is an AI and software development company delivering custom software, machine learning, GenAI, cloud, web, mobile, and digital growth systems for businesses worldwide.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/',
      robots: 'index,follow',
      og: {
        type: 'website',
        url: '/',
        image: SITE.defaultOgImagePath,
      },
      jsonLd: baseJsonLd({ breadcrumbs, services }),
    };
  }

  if (path === '/about') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ];
    return {
      title: 'About PAYIVVA',
      description:
        'Learn about Payivva Technologies, a Pune-based digital engineering company building AI systems, software products, and conversion-led growth infrastructure.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/about',
      robots: 'index,follow',
      og: { url: '/about' },
      jsonLd: [...baseJsonLd({ breadcrumbs }), blogSchema()],
    };
  }

  if (path === '/services') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ];
    const services = [
      {
        name: 'AI Consulting & Strategy',
        serviceType: 'AI Consulting',
        description: 'Enterprise AI strategy, audits, and roadmap execution.',
        urlPath: '/services/ai-consulting-strategy',
      },
      {
        name: 'Machine Learning Solutions',
        serviceType: 'Machine Learning',
        description: 'Custom ML engines, predictive models, and deployment pipelines.',
        urlPath: '/services/machine-learning-solutions',
      },
      {
        name: 'Computer Vision & NLP',
        serviceType: 'Computer Vision & NLP',
        description: 'OCR, vision automation, and NLP systems for operations.',
        urlPath: '/services/computer-vision-nlp',
      },
      {
        name: 'Generative AI & LLM',
        serviceType: 'Generative AI',
        description: 'Private LLMs, RAG, agents, and governance-ready guardrails.',
        urlPath: '/services/generative-ai-llm',
      },
      {
        name: 'Software Development',
        serviceType: 'Software Development',
        description: 'Scalable software systems and API platforms.',
        urlPath: '/services/software-development',
      },
      {
        name: 'App Development',
        serviceType: 'App Development',
        description: 'Mobile app engineering for iOS and Android.',
        urlPath: '/services/app-development',
      },
      {
        name: 'Website Development',
        serviceType: 'Website Development',
        description: 'High-performance websites engineered for SEO and conversion.',
        urlPath: '/services/website-development',
      },
      {
        name: 'Digital Marketing',
        serviceType: 'Digital Marketing',
        description: 'Performance marketing, technical SEO, and lead-gen systems.',
        urlPath: '/services/digital-marketing',
      },
    ];
    return {
      title: 'AI and Software Development Services',
      description:
        'Explore Payivva Technologies services: AI consulting & strategy, machine learning solutions, computer vision & NLP, generative AI/LLM, software development, app development, website development, and digital marketing.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/services',
      robots: 'index,follow',
      og: { url: '/services' },
      jsonLd: baseJsonLd({ breadcrumbs, services }),
    };
  }

  if (path === '/contact') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ];
    return {
      title: 'Contact PAYIVVA Technologies',
      description:
        'Contact Payivva Technologies to discuss AI consulting, machine learning, computer vision & NLP, generative AI/LLM, software development, web/app development, or digital marketing.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/contact',
      robots: 'index,follow',
      og: { url: '/contact' },
      jsonLd: baseJsonLd({ breadcrumbs }),
    };
  }

  if (path === '/careers') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' },
    ];
    return {
      title: 'Technology Careers in Pune',
      description:
        'Join Payivva Technologies. Explore roles across engineering, SEO, growth, and product systems.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/careers',
      robots: 'index,follow',
      og: { url: '/careers' },
      jsonLd: baseJsonLd({ breadcrumbs }),
    };
  }

  if (path === '/blog') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ];
    return {
      title: 'AI, Cloud and Software Engineering Insights',
      description:
        'PAYIVVA Tech Insights: system architectures, machine learning, delivery notes, and engineering learnings for modern teams.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/blog',
      robots: 'index,follow',
      og: { url: '/blog' },
      jsonLd: [...baseJsonLd({ breadcrumbs }), blogSchema()],
    };
  }

  if (path === '/resources/case-studies') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources/case-studies' },
      { name: 'Case Studies', path: '/resources/case-studies' },
    ];
    return {
      title: 'AI and Software Development Case Studies',
      description:
        'Selected delivery stories across AI systems, software engineering, and growth programs with measurable business outcomes.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/resources/case-studies',
      robots: 'index,follow',
      og: { url: '/resources/case-studies' },
      jsonLd: [...baseJsonLd({ breadcrumbs }), collectionPageSchema({
        name: 'AI and Software Development Case Studies',
        description: 'PAYIVVA project stories across AI, software, cloud, and digital growth systems.',
        path: '/resources/case-studies',
      })],
    };
  }

  if (path === '/resources/documentation') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources/documentation' },
      { name: 'Documentation', path: '/resources/documentation' },
    ];
    return {
      title: 'Enterprise Technology Documentation',
      description:
        'A guide to how PAYIVVA structures delivery, environments, handoff, and execution quality.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/resources/documentation',
      robots: 'index,follow',
      og: { url: '/resources/documentation' },
      jsonLd: [...baseJsonLd({ breadcrumbs }), collectionPageSchema({
        name: 'Enterprise Technology Documentation',
        description: 'PAYIVVA guidance on architecture, delivery, environments, security, and technical handoff.',
        path: '/resources/documentation',
      })],
    };
  }

  // Service detail pages
  if (path.startsWith('/services/')) {
    const titleMap = {
      '/services/ai-consulting-strategy': {
        title: 'AI Consulting Company in India',
        description: 'PAYIVVA helps enterprises assess AI readiness, define practical roadmaps, and move from strategy to secure production delivery.',
        service: {
          name: 'AI Consulting & Strategy',
          serviceType: 'AI Consulting',
          description: 'Enterprise AI strategy, audits, and roadmap execution.',
          urlPath: '/services/ai-consulting-strategy',
        },
      },
      '/services/machine-learning-solutions': {
        title: 'Machine Learning Consulting Company India',
        description: 'Build, deploy, and monitor production machine learning systems for forecasting, automation, classification, and business decisions.',
        service: {
          name: 'Machine Learning Solutions',
          serviceType: 'Machine Learning',
          description: 'Custom machine learning models and deployment pipelines.',
          urlPath: '/services/machine-learning-solutions',
        },
      },
      '/services/computer-vision-nlp': {
        title: 'Computer Vision & NLP',
        description: 'OCR, vision pipelines, and NLP systems for document intelligence and workflow automation.',
        service: {
          name: 'Computer Vision & NLP',
          serviceType: 'Computer Vision & NLP',
          description: 'Vision and language systems for extraction, classification, and automation.',
          urlPath: '/services/computer-vision-nlp',
        },
      },
      '/services/generative-ai-llm': {
        title: 'Generative AI Development Company India',
        description: 'PAYIVVA builds secure enterprise GenAI, RAG, LLM, and knowledge automation systems connected to real business workflows.',
        service: {
          name: 'Generative AI & LLM',
          serviceType: 'Generative AI',
          description: 'Private LLMs, RAG, and secure agentic automation.',
          urlPath: '/services/generative-ai-llm',
        },
      },
      '/services/software-development': {
        title: 'Enterprise Software Development Company India',
        description: 'PAYIVVA designs and engineers secure software products, APIs, platforms, and integrations for growing and enterprise businesses.',
        service: {
          name: 'Software Development',
          serviceType: 'Software Development',
          description: 'Custom enterprise software systems and APIs.',
          urlPath: '/services/software-development',
        },
      },
      '/services/app-development': {
        title: 'Mobile App Development Company Pune',
        description: 'Build secure, scalable mobile applications for customers, employees, and field teams with PAYIVVA product engineers.',
        service: {
          name: 'App Development',
          serviceType: 'App Development',
          description: 'Mobile application engineering for iOS and Android.',
          urlPath: '/services/app-development',
        },
      },
      '/services/website-development': {
        title: 'High-Performance Website Development India',
        description: 'PAYIVVA creates fast, accessible, SEO-ready web platforms designed for business growth, content performance, and conversion.',
        service: {
          name: 'Website Development',
          serviceType: 'Website Development',
          description: 'High-performance websites engineered for SEO and conversion.',
          urlPath: '/services/website-development',
        },
      },
      '/services/digital-marketing': {
        title: 'Technical SEO and Digital Marketing Pune',
        description: 'Grow qualified B2B demand through technical SEO, content strategy, analytics, conversion optimization, and performance marketing.',
        service: {
          name: 'Digital Marketing',
          serviceType: 'Digital Marketing',
          description: 'SEO and performance marketing systems for growth.',
          urlPath: '/services/digital-marketing',
        },
      },
    };

    const entry = titleMap[path];
    if (entry) {
      const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: entry.title, path },
      ];
      return {
        title: entry.title,
        description: entry.description,
        keywords: DEFAULT_KEYWORDS,
        canonical: path,
        robots: 'index,follow',
        og: { url: path },
        jsonLd: baseJsonLd({ breadcrumbs, services: [entry.service], faqs: SERVICE_FAQS[path] }),
      };
    }
  }

  // Industry pages (dynamic)
  if (path.startsWith('/industries/')) {
    const slug = path.split('/')[2] || '';
    const industry = getIndustryBySlug(slug);
    if (industry) {
      const breadcrumbs = [
        { name: 'Home', path: '/' },
        { name: 'Industries', path: `/industries/${slug}` },
        { name: industry.tabTitle || industry.title, path: `/industries/${slug}` },
      ];
      const seoEntry = INDUSTRY_SEO[slug];
      const description = seoEntry?.description || industry.heroDesc || industry.overview || `Industry solutions for ${industry.title}.`;
      return {
        title: seoEntry?.title || industry.title,
        description,
        keywords: DEFAULT_KEYWORDS,
        canonical: `/industries/${slug}`,
        robots: 'index,follow',
        og: { url: `/industries/${slug}` },
        jsonLd: baseJsonLd({
          breadcrumbs,
          faqs: industry.faqs,
        }),
      };
    }
  }

  // Legal pages should still be indexable unless you intentionally want them noindex.
  if (path === '/privacy' || path === '/terms' || path === '/security' || path === '/legal') {
    const titleMap = {
      '/privacy': 'Privacy Policy',
      '/terms': 'Terms of Service',
      '/security': 'Software Security and Compliance',
      '/legal': 'Legal',
    };
    const name = titleMap[path] || 'Legal';
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name, path },
    ];
    return {
      title: name,
      description: `${name} for ${SITE.legalName}.`,
      keywords: DEFAULT_KEYWORDS,
      canonical: path,
      robots: 'index,follow',
      og: { url: path },
      jsonLd: baseJsonLd({ breadcrumbs }),
    };
  }

  const breadcrumbs = [{ name: 'Home', path: '/' }];
  return {
    title: SITE.name,
    description:
      'Payivva Technologies builds AI systems, software products, and growth infrastructure for modern teams.',
    keywords: DEFAULT_KEYWORDS,
    canonical: path,
    robots: 'noindex,follow',
    og: { url: path },
    jsonLd: baseJsonLd({ breadcrumbs }),
  };
}

export function getSeoForLocation({ pathname }) {
  const rawPath = pathname || '/';
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
  const seo = resolveSeoForLocation({ pathname: path });
  const industrySlug = path.startsWith('/industries/') ? path.split('/')[2] : null;
  const keywords = industrySlug
    ? INDUSTRY_KEYWORDS[industrySlug]
    : PAGE_KEYWORDS[path];

  return keywords ? { ...seo, keywords } : seo;
}
