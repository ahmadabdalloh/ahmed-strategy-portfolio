// ============================================================
// SITE-WIDE SETTINGS — edit these freely, no layout code here.
// ============================================================
export const site = {
  name: 'Ahmed Abdallah',
  role: 'Content & Growth Strategist',
  positioning: 'Marketing Strategy · Content Systems · Media Planning',
  valueProp:
    'I turn research into clear strategy, content systems, and media plans that help brands earn attention and convert it into real business.',
  logo: '/logo.svg',
  credibility:
    '13 client brands across legal, coffee, healthcare, education, fitness, jewelry & B2B · full-funnel work in Arabic and English',
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
  { value: '13', label: 'client brands taken from research through execution' },
  { value: '300+', label: 'post briefs written & art-directed' },
  { value: 'EGP 115K+', label: 'monthly media budgets modeled' },
  { value: '11', label: 'industries across strategy, paid work and production: legal, coffee, healthcare, physio, swim, early education, ed-tech, activewear, jewelry, B2B fit-out, automotive' },
  { value: '90-day', label: 'roadmaps from research to scaling' },
  { value: 'AR + EN', label: 'bilingual strategy & copywriting' },
]

// Homepage hierarchy: these three lead the work section as large cards.
export const featuredSlugs = ['kavun-cafe', 'genio-academy', 'cloud9-nursery']

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
    'I’m Ahmed Abdallah, a content and growth strategist working with brands in Egypt and the Gulf. I stay involved from research to execution. I build the market analysis, positioning, 30–90 day content calendar, media plan, and the measurement system behind it.',
    'I work from one belief: attention is cheap, but trust takes work. Whether I’m helping a hospital fill clinic slots, launching an activewear brand, or qualifying B2B leads, I build the system to earn trust first and turn it into a clear next action.',
  ],
  process: [
    {
      step: 'Research',
      text: 'Market sizing, competitor gaps, audience segments, and the one human truth behind the buying decision.',
    },
    {
      step: 'Strategy',
      text: 'Positioning, messaging rules, channel roles, budget allocation, and the KPI that actually matters.',
    },
    {
      step: 'Content system',
      text: 'A complete calendar where every post has a hook, caption, visual direction, tone of voice, objective, and CTA.',
    },
    {
      step: 'Test & scale',
      text: 'Pilot budgets, decision rules, weekly reporting, and scaling only what proves qualified demand.',
    },
  ],
  skills: {
    Strategy: [
      'Market & competitor research',
      'Positioning & messaging systems',
      'Funnel design (awareness → booking)',
      'Offer laddering & pricing communication',
      '90-day growth roadmaps',
    ],
    Content: [
      'Content calendars (30–90 days)',
      'Creative briefs & art direction',
      'Bilingual copywriting (AR/EN)',
      'Short-form video systems (Reels/TikTok)',
      'UGC & community engines',
    ],
    'Media & Data': [
      'Meta, TikTok, Google, YouTube planning',
      'Budget modeling & KPI forecasting',
      'A/B testing frameworks',
      'CPM/CPC/CPL/CPR optimization',
      'Lead qualification systems (WhatsApp)',
    ],
    Tools: [
      'Meta Ads Manager',
      'Google Ads',
      'Excel / spreadsheet systems',
      'PowerPoint / deck design',
      'CapCut / video editing',
      'Higgsfield / AI video production',
    ],
  },
}
