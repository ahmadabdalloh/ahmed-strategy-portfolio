// ============================================================
// SITE-WIDE SETTINGS — edit these freely, no layout code here.
// ============================================================
export const site = {
  name: 'Ahmed Abdallah',
  role: 'Social Media & Content Specialist',
  positioning: 'Content Strategy · Reel Production · Paid Social',
  valueProp:
    'I plan content, write bilingual scripts, capture and edit Reels, and support Meta campaigns—with results and creative work you can review.',
  logo: '/logo.svg',
  credibility:
    'Based in Cairo · Arabic + English · Experience across education, healthcare, coffee, legal services, retail, and B2B',
  email: 'Ahmed.Abdallah.BU@gmail.com',
  phone: '01118871492',
  whatsapp: '201118871492', // international format for wa.me links
  linkedin: 'https://www.linkedin.com/in/ahmedd-abdallah01',
  reelsFolder:
    'https://drive.google.com/drive/folders/1aH3I4ghfN1_E14jKSgXVIwz74h6jCwCJ',
  cv: '/Ahmed-Abdallah-CV.pdf',
  location: 'Heliopolis, Cairo, Egypt',
  // Used for canonical URLs, sitemap.xml and absolute OG image paths.
  // Change this one line if the domain changes.
  url: 'https://ahmed-strategy-portfolio.vercel.app',
  ogImage: '/og-cover.png',
}

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Hello Ahmed, I saw your marketing portfolio and would like to discuss a project.'
)}`

// Stat strip on the home page. These are scope-of-work facts pulled
// from the actual deliverables (not performance claims).
export const proofStats = [
  { value: '146,883', label: 'Cloud9 content views · Instagram Insights · 60-day snapshot ending 5 Oct 2026' },
  { value: '208', label: 'Cloud9 first-time messages · Facebook + Instagram · 3–22 Aug 2026' },
  { value: '45', label: 'Genio Meta leads · EGP 8.56 per lead · 21 Jul 2026 snapshot' },
  { value: '25', label: 'Cloud9 videos filmed · September production tracker snapshot' },
]

// Homepage hierarchy: these three lead the work section as large cards.
export const featuredSlugs = ['cloud9-nursery', 'genio-academy', 'kavun-cafe']

// Short-form video work embedded from Google Drive.
export const reels = [
  {
    id: '1j27NTJoHqxaJynE-xaeeNG7XGae_r5ZM',
    title: 'Best Trade: Beano’s before/after reel',
    note: '30s vertical reel: branded-environment transformation with a signature copper-wipe transition. Shot, edited, and delivered for social.',
  },
  {
    id: '1N9-81vS-mrALRK6-raHTMZ00hkMg2lGI',
    title: 'MYO Recovery: clinic reel',
    note: 'Short-form clinic video produced to support the MYO Recovery content calendar.',
  },
]

export const about = {
  bio: [
    'I’m Ahmed Abdallah, a Cairo-based social media and content specialist. My work covers research, calendars, bilingual scripts, on-site filming, Reel editing, and performance reporting.',
    'I combine hands-on production with marketing planning. The portfolio distinguishes published content and platform results from strategy deliverables, proposed budgets, and creative samples.',
  ],
  process: [
    {
      step: 'Research & plan',
      text: 'Identify the audience problem, review competitors, and build a calendar with a clear objective for each asset.',
    },
    {
      step: 'Script & capture',
      text: 'Write the hook, script, shot list, and CTA; capture footage in focused production sessions.',
    },
    {
      step: 'Edit & coordinate',
      text: 'Shape the edit, captions, sound, and format, then track review, approval, and publication.',
    },
    {
      step: 'Report & improve',
      text: 'Review content and campaign results, document limitations, and use the findings in the next brief.',
    },
  ],
  skills: {
    Strategy: [
      'Market & competitor research',
      'Positioning & messaging systems',
      'Funnel design (awareness → booking)',
      'Offer and CTA planning',
      '90-day growth roadmaps',
    ],
    Content: [
      'Content calendars (30–90 days)',
      'Creative briefs & art direction',
      'Bilingual copywriting (AR/EN)',
      'Short-form video systems (Reels/TikTok)',
      'On-site filming & batch production',
    ],
    'Media & Data': [
      'Meta campaign setup & monitoring',
      'Proposed budgets & KPI forecasts—not spend managed',
      'A/B testing frameworks',
      'CPM/CPC/CPL/CPR optimization',
      'WhatsApp enquiry-funnel planning',
    ],
    Tools: [
      'Meta Ads Manager',
      'Meta Business Suite',
      'Excel / spreadsheet systems',
      'PowerPoint / deck design',
      'CapCut / video editing',
      'Higgsfield / AI video production',
    ],
  },
}
