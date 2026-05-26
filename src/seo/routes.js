import { absoluteUrl, SITE } from './siteConfig';
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from './schema';
import { getIndustryBySlug } from '../data/industries';

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

export function getSeoForLocation({ pathname }) {
  const path = pathname || '/';

  // Normalize trailing slashes to avoid duplicate canonicals.
  if (path.length > 1 && path.endsWith('/')) {
    const normalized = path.replace(/\/+$/, '');
    return getSeoForLocation({ pathname: normalized });
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
      title: 'AI, Software & Growth Systems',
      description:
        'Payivva Technologies is a Pune-based digital engineering partner delivering AI consulting, machine learning, computer vision & NLP, generative AI/LLM systems, software development, web/app development, and digital marketing.',
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
      title: 'About',
      description:
        'Learn about Payivva Technologies, a Pune-based digital engineering company building AI systems, software products, and conversion-led growth infrastructure.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/about',
      robots: 'index,follow',
      og: { url: '/about' },
      jsonLd: baseJsonLd({ breadcrumbs }),
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
      title: 'Services',
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
      title: 'Contact',
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
      title: 'Careers',
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
      title: 'Tech Insights',
      description:
        'PAYIVVA Tech Insights: system architectures, machine learning, delivery notes, and engineering learnings for modern teams.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/blog',
      robots: 'index,follow',
      og: { url: '/blog' },
      jsonLd: baseJsonLd({ breadcrumbs }),
    };
  }

  if (path === '/resources/case-studies') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources/case-studies' },
      { name: 'Case Studies', path: '/resources/case-studies' },
    ];
    return {
      title: 'Case Studies',
      description:
        'Selected delivery stories across AI systems, software engineering, and growth programs with measurable business outcomes.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/resources/case-studies',
      robots: 'index,follow',
      og: { url: '/resources/case-studies' },
      jsonLd: baseJsonLd({ breadcrumbs }),
    };
  }

  if (path === '/resources/documentation') {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources/documentation' },
      { name: 'Documentation', path: '/resources/documentation' },
    ];
    return {
      title: 'Documentation',
      description:
        'A guide to how PAYIVVA structures delivery, environments, handoff, and execution quality.',
      keywords: DEFAULT_KEYWORDS,
      canonical: '/resources/documentation',
      robots: 'index,follow',
      og: { url: '/resources/documentation' },
      jsonLd: baseJsonLd({ breadcrumbs }),
    };
  }

  // Service detail pages
  if (path.startsWith('/services/')) {
    const titleMap = {
      '/services/ai-consulting-strategy': {
        title: 'AI Consulting & Strategy',
        description: 'Enterprise AI strategy, maturity audits, compliance-first roadmaps, and ROI-aligned execution.',
        service: {
          name: 'AI Consulting & Strategy',
          serviceType: 'AI Consulting',
          description: 'Enterprise AI strategy, audits, and roadmap execution.',
          urlPath: '/services/ai-consulting-strategy',
        },
      },
      '/services/machine-learning-solutions': {
        title: 'Machine Learning Solutions',
        description: 'Deploy production-grade machine learning models for forecasting, automation, and decision systems.',
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
        title: 'Generative AI & LLM',
        description: 'Private LLM systems, RAG, and agentic workflows built with governance and security guardrails.',
        service: {
          name: 'Generative AI & LLM',
          serviceType: 'Generative AI',
          description: 'Private LLMs, RAG, and secure agentic automation.',
          urlPath: '/services/generative-ai-llm',
        },
      },
      '/services/software-development': {
        title: 'Software Development',
        description: 'Bespoke enterprise software development: scalable systems, APIs, security, and reliability.',
        service: {
          name: 'Software Development',
          serviceType: 'Software Development',
          description: 'Custom enterprise software systems and APIs.',
          urlPath: '/services/software-development',
        },
      },
      '/services/app-development': {
        title: 'App Development',
        description: 'Mobile app development for iOS and Android with premium UX and performance discipline.',
        service: {
          name: 'App Development',
          serviceType: 'App Development',
          description: 'Mobile application engineering for iOS and Android.',
          urlPath: '/services/app-development',
        },
      },
      '/services/website-development': {
        title: 'Website Development',
        description: 'High-performance website development engineered for speed, SEO, accessibility, and conversion.',
        service: {
          name: 'Website Development',
          serviceType: 'Website Development',
          description: 'High-performance websites engineered for SEO and conversion.',
          urlPath: '/services/website-development',
        },
      },
      '/services/digital-marketing': {
        title: 'Digital Marketing',
        description: 'Performance marketing, technical SEO, and growth systems engineered for measurable pipeline.',
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
        jsonLd: baseJsonLd({ breadcrumbs, services: [entry.service] }),
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
      const description = industry.heroDesc || industry.overview || `Industry solutions for ${industry.title}.`;
      return {
        title: industry.title,
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
      '/security': 'Security Standards',
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
    robots: 'index,follow',
    og: { url: path },
    jsonLd: baseJsonLd({ breadcrumbs }),
  };
}
