// ============================================================
// One source of truth for per-route metadata.
// Used by <Seo> at runtime AND by scripts/prerender.mjs at build
// time, so the HTML a crawler or a WhatsApp preview sees always
// matches what the app renders.
// ============================================================
import { site } from './data/site.js'
import { projects } from './data/projects.js'
import { contextFor } from './data/projectContext.js'

export const routes = [
  '/',
  '/paid-ads',
  '/ai-videos',
  '/ai-designs',
  '/digital-products',
  ...projects.map((p) => `/work/${p.slug}`),
]

const HOME = {
  title: `${site.name} — ${site.role}`,
  description:
    'Social media and content specialist in Cairo: bilingual scripts, on-site filming, Reel editing, organic reporting, Meta campaigns, and AI-assisted creative work.',
  image: site.ogImage,
  type: 'website',
}

const PAID = {
  title: `Paid ads results — ${site.name}`,
  description:
    'Meta Ads campaign results with the original Ads Manager screenshots: lead generation, conversations, page growth and video views across education, recruitment and retail accounts in Egypt.',
  image: '/work/genio-academy/paid-ads-results.webp',
  type: 'article',
}

const AI_VIDEOS = {
  title: `AI Video Showcase — ${site.name}`,
  description:
    'Five social-first legal explainer videos created with Higgsfield for Al Mahy Legal Consultancy, covering Arabic and English 9:16 production.',
  image: '/work/ai-videos/ai-video-showcase-og.webp',
  type: 'website',
}

const DIGITAL_PRODUCTS = {
  title: `Digital products — ${site.name}`,
  description:
    'Three live web products built for real workflows: a bilingual nursery tour funnel, a bilingual freight website, and a QR-first hospital attendance system.',
  image: '/work/digital-products/cloud9-tour-booking.webp',
  type: 'website',
}

const NOT_FOUND = {
  title: `Page not found — ${site.name}`,
  description: 'That page does not exist. Browse the case studies instead.',
  image: site.ogImage,
  type: 'website',
  noindex: true,
}

export function metaForPath(pathname = '/') {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/') return { ...HOME, canonical: site.url + '/' }
  if (path === '/paid-ads') return { ...PAID, canonical: `${site.url}/paid-ads` }
  if (path === '/ai-videos') return { ...AI_VIDEOS, canonical: `${site.url}/ai-videos` }
  if (path === '/ai-designs') return { title: `AI Design Showcase — ${site.name}`, description: '57 AI-assisted social designs for Al Mahy and Al Fateh, grouped by legal, corporate, debt collection, notary, and accounting services.', image: '/work/ai-designs/fateh/fateh-poster-1.webp', type: 'website', canonical: `${site.url}/ai-designs` }
  if (path === '/digital-products') return { ...DIGITAL_PRODUCTS, canonical: `${site.url}/digital-products` }

  const match = path.match(/^\/work\/([^/]+)$/)
  if (match) {
    const pr = projects.find((p) => p.slug === match[1])
    if (pr) {
      return {
        title: `${pr.client}: ${contextFor(pr.slug).title} — ${site.name}`,
        description: pr.summary,
        image: pr.cover,
        type: 'article',
        canonical: `${site.url}/work/${pr.slug}`,
      }
    }
  }

  return { ...NOT_FOUND, canonical: site.url + path }
}

/** Person schema so search engines can connect the name to the work. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ahmed Abdallah Mohamed',
    alternateName: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    telephone: `+${site.whatsapp}`,
    url: site.url,
    image: site.url + site.ogImage,
    sameAs: [site.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cairo',
      addressCountry: 'EG',
    },
    knowsLanguage: ['ar', 'en'],
    knowsAbout: [
      'Marketing strategy',
      'Content strategy',
      'Social media strategy',
      'Meta Ads',
      'Media planning',
      'Bilingual copywriting',
    ],
  }
}
