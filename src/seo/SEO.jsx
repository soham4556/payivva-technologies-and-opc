import { Helmet } from 'react-helmet-async';
import { SITE, absoluteUrl } from './siteConfig';

function normalizeCanonical(urlOrPath) {
  if (!urlOrPath) return undefined;
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) return urlOrPath;
  return absoluteUrl(urlOrPath);
}

function toJsonLdScript(schemaObject) {
  if (!schemaObject) return null;
  return (
    <script type="application/ld+json">{JSON.stringify(schemaObject)}</script>
  );
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  robots = 'index,follow',
  og = {},
  twitter = {},
  author = SITE.author,
  themeColor = SITE.themeColor,
  jsonLd,
}) {
  const finalTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const finalDescription = description;
  const canonicalUrl = normalizeCanonical(canonical);

  const ogTitle = og.title || finalTitle;
  const ogDescription = og.description || finalDescription;
  const ogUrl = og.url ? normalizeCanonical(og.url) : canonicalUrl;
  const ogType = og.type || 'website';
  const ogLocale = og.locale || SITE.locale;
  const ogImage = og.image ? normalizeCanonical(og.image) : absoluteUrl(SITE.defaultOgImagePath);

  const twitterCard = twitter.card || 'summary_large_image';
  const twitterTitle = twitter.title || ogTitle;
  const twitterDescription = twitter.description || ogDescription;
  const twitterImage = twitter.image ? normalizeCanonical(twitter.image) : ogImage;

  const jsonLdNodes = Array.isArray(jsonLd)
    ? jsonLd.map((obj, idx) => (
        <script key={idx} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))
    : toJsonLdScript(jsonLd);

  return (
    <Helmet>
      <html lang={SITE.language} />
      <title>{finalTitle}</title>
      {finalDescription ? <meta name="description" content={finalDescription} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {author ? <meta name="author" content={author} /> : null}
      {robots ? <meta name="robots" content={robots} /> : null}
      {themeColor ? <meta name="theme-color" content={themeColor} /> : null}
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
      <meta property="og:title" content={ogTitle} />
      {ogDescription ? <meta property="og:description" content={ogDescription} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      {twitterDescription ? <meta name="twitter:description" content={twitterDescription} /> : null}
      {twitterImage ? <meta name="twitter:image" content={twitterImage} /> : null}

      {/* JSON-LD: allow single object or array */}
      {jsonLdNodes}
    </Helmet>
  );
}
