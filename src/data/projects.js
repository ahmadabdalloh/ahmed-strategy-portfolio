// ============================================================
// CASE STUDIES — one object per project.
// Edit text/images here; layout lives in src/pages/CaseStudy.jsx.
// Image paths point to /public/work/<slug>/.
// ============================================================

const p = (slug, file) => `/work/${slug}/${file}.webp`

export const projects = [
  // ----------------------------------------------------------
  // 1. KAVUN
  // ----------------------------------------------------------
  {
    slug: 'kavun-cafe',
    client: 'KAVUN',
    industry: 'Specialty coffee · Local café growth',
    category: 'Growth Strategy + Content Systems + Digital Product',
    year: '2026',
    lang: 'English + Arabic',
    title: 'Two neighborhoods. One measurable growth system.',
    summary:
      'A 90-day café growth system connecting two-branch strategy, production-ready content, a 30-day surreal campaign, and a bilingual digital menu I vibe-coded and deployed.',
    cover: '/covers/kavun-cafe-cover.webp',
    coverAlt:
      'KAVUN case study cover with the KAVUN monogram, a teal latte cup, and the headline Two neighborhoods, one measurable growth system',
    objective:
      'Connect KAVUN’s premium identity to branch-level action: make Zamalek and Korba easier to discover, choose, visit, revisit, and recommend. Then reduce menu friction with a responsive bilingual digital experience.',
    deliverables: [
      '15-page marketing strategy and 90-day growth roadmap',
      'August Instagram operating workbook: 13 feed posts, 7 Reel scripts, 6 carousel briefs, and 24 Story sequences',
      '18-task production tracker and formula-driven KPI reporting system',
      '43-page Impossible Coffee Worlds deck with 30 finished creative routes',
      'Responsive bilingual digital menu built with React/Vite and deployed on Vercel',
    ],
    tools: ['Instagram', 'Meta Ads planning', 'Excel', 'React', 'Vite', 'Vercel', 'Google Maps'],
    stats: [
      { value: '90 days', label: 'foundation, launch, demand proof, and scale with a decision gate after every phase' },
      { value: '13 + 24', label: 'planned August feed posts and Story sequences, supported by executable production briefs' },
      { value: '10 / 30', label: 'Impossible Coffee Worlds and finished September creative routes' },
      { value: '68', label: 'menu items made searchable, filterable, bilingual, and mobile-ready in the live digital menu' },
    ],
    sections: [
      {
        heading: 'The brand already looked premium. The growth system did not.',
        body: 'KAVUN already had a strong teal identity, minimal visual language, and architectural presence. The problem was activation: attractive content was not connected to a clear next action, while output and follower targets appeared before first-party baselines. I reframed the objective from follower volume to profitable local preference and built one measurable movement: discover → decide → visit → return → advocate. Occasions, rather than demographics, organize the plan around the morning reset, workday pause, social catch-up, and weekend discovery.',
        quote: {
          text: 'The strategy starts with tracking, profile architecture, and branch conversion before adding more posts.',
          source: 'Starting-point diagnosis, KAVUN marketing strategy',
        },
        images: [
          {
            src: p('kavun-cafe', 'challenge'),
            alt: 'KAVUN strategy slide showing the missing link from attractive content through profile, destination, branch demand, and return behavior',
            caption: 'The missing link: attention was not connected to a branch-level action.',
          },
          {
            src: p('kavun-cafe', 'preference-loop'),
            alt: 'Five-stage KAVUN customer loop from discover and decide through visit, return, and advocate',
            caption: 'The strategic reframe: profitable local preference instead of follower volume.',
          },
          {
            src: p('kavun-cafe', 'audience-occasions'),
            alt: 'KAVUN audience strategy organized around morning reset, workday pause, social catch-up, and weekend discovery occasions',
            caption: 'The same customer can choose KAVUN for four different jobs across the week.',
          },
        ],
      },
      {
        heading: 'Quiet precision. Warm neighborhood energy.',
        body: 'The position is deliberately local and specific: for Cairo residents who care about where they spend time and what they drink, KAVUN pairs exacting craft with calm, design-led spaces in Zamalek and Korba. “Two Neighborhoods. One Standard.” gives the system one unifying promise while leaving room for endless branch-level stories. Each channel then receives one job and one measurable event, while four content pillars balance product choice, approachable expertise, neighborhood relevance, and human proof.',
        quote: {
          text: 'Different streets. Different rhythm. The same KAVUN standard.',
          source: 'Campaign platform, KAVUN marketing strategy',
        },
        images: [
          {
            src: p('kavun-cafe', 'campaign-platform'),
            alt: 'KAVUN campaign platform slide stating Two Neighborhoods, One Standard',
            caption: 'One unifying promise with enough range for two distinct neighborhood rhythms.',
          },
          {
            src: p('kavun-cafe', 'channel-roles'),
            alt: 'KAVUN channel strategy mapping discover, decide, visit, return, and advocate stages to measurable events',
            caption: 'Every channel has one job in the customer journey and one event worth measuring.',
          },
          {
            src: p('kavun-cafe', 'content-system'),
            alt: 'KAVUN four-pillar content system with percentage allocations for Choose Your Cup, Craft Without Snobbery, Two Neighborhoods, and People and Proof',
            caption: 'Four pillars turn the positioning into a repeatable weekly engine.',
          },
          {
            src: p('kavun-cafe', 'memory-series'),
            alt: 'KAVUN recurring content series including Dial-In Notes, Two Neighborhoods, and The Regular Order',
            caption: 'Recurring series build memory faster than isolated posts.',
          },
        ],
      },
      {
        heading: 'An operating plan, not a posting list',
        body: 'The August workbook turns the strategy into a controlled production system: 13 feed posts, seven executable Reel scripts, six saveable carousel briefs, 24 Story sequences, 18 production tasks, and a KPI tracker with 91 formulas. The month moves through introduce → prove → humanize → convert → learn. Every post carries one CTA. Real menu and branch details must be verified before design, customer and UGC permissions are explicit, and the weekly review compares KAVUN against its own baseline rather than generic benchmarks. The wider 90-day roadmap moves from foundation to launch, demand proof, and scale. Spend follows proof.',
        quote: {
          text: 'Business metrics lead; platform metrics diagnose.',
          source: 'Measurement model, KAVUN marketing strategy',
        },
        images: [
          {
            src: p('kavun-cafe', 'roadmap-90'),
            alt: 'KAVUN 90-day roadmap split into foundation, launch, demand proof, and scale phases',
            caption: 'Each phase ends with a decision gate, not just a content checklist.',
          },
          {
            src: p('kavun-cafe', 'activation-calendar'),
            alt: 'Twelve-week KAVUN activation calendar moving from baseline and tracking through launch, proof, and scale',
            caption: 'Data → destinations → production → campaign → proof → media.',
          },
          {
            src: p('kavun-cafe', 'investment-model'),
            alt: 'KAVUN investment model allocating budget to production, paid distribution, creators, conversion infrastructure, contingency, and research',
            caption: 'Investment expands only when the operating system produces credible proof.',
          },
          {
            src: p('kavun-cafe', 'measurement-stack'),
            alt: 'KAVUN measurement stack prioritizing business outcomes, high-intent actions, profile behavior, content diagnostics, and community signals',
            caption: 'Commercial evidence sits above platform diagnostics in the reporting hierarchy.',
          },
        ],
      },
      {
        heading: 'Impossible Coffee Worlds: 10 worlds, 30 finished creatives',
        body: 'A separate September creative campaign gives KAVUN a culturally shareable visual platform without abandoning real café moments. Coffee becomes architecture, weather, landscape, and gravity, but every surreal device is anchored by a believable customer action and KAVUN’s dark-teal world. Each visual world runs for three days: spectacle earns the stop, participation earns the action, and motion or a saveable payoff rewards attention. The system spans single images, Stories, Reels, and carousels while protecting one campaign memory.',
        quote: {
          text: 'The month needs one idea, not 30 disconnected posts.',
          source: 'Impossible Coffee Worlds campaign platform',
        },
        images: [
          {
            src: p('kavun-cafe', 'creative-architecture'),
            alt: 'Creative architecture overview showing ten Impossible Coffee Worlds for KAVUN',
            caption: 'Ten visual worlds keep the month fresh while still feeling unmistakably KAVUN.',
          },
          {
            src: p('kavun-cafe', 'publishing-rhythm'),
            alt: 'KAVUN publishing rhythm alternating spectacle, participation, and payoff',
            caption: 'The pattern stays learnable while the creative world changes every three days.',
          },
          {
            src: p('kavun-cafe', 'coffee-eclipse'),
            alt: 'KAVUN finished creative showing a giant espresso eclipse with the line When the day needs a reset',
            caption: 'Coffee Eclipse: the daily reset turned into a cinematic KAVUN moment.',
          },
          {
            src: p('kavun-cafe', 'espresso-portal'),
            alt: 'KAVUN finished creative showing a liquid espresso portal with the line Better coffee is this way',
            caption: 'Espresso Portal: a direct traffic message made visually ownable.',
          },
          {
            src: p('kavun-cafe', 'coffee-wave'),
            alt: 'KAVUN finished creative showing an iced-coffee wave with the line Ride the afternoon right',
            caption: 'The Coffee Wave gives the afternoon reset fashion-campaign energy.',
          },
          {
            src: p('kavun-cafe', 'pastry-orbit'),
            alt: 'KAVUN finished creative showing pastries orbiting a coffee cup with the line Good things find each other',
            caption: 'Pastry Orbit makes product pairing immediate and memorable.',
          },
          {
            src: p('kavun-cafe', 'tabletop-zamalek'),
            alt: 'KAVUN finished creative showing a miniature coffee-built Zamalek with the line A whole corner in one cup',
            caption: 'Tabletop Zamalek turns the neighborhood itself into part of the product story.',
          },
          {
            src: p('kavun-cafe', 'pocket-kavun'),
            alt: 'KAVUN finished creative showing a miniature café glowing inside a bag with the line Take the corner with you',
            caption: 'Pocket KAVUN makes the brand emotionally portable.',
          },
          {
            src: p('kavun-cafe', 'last-drop'),
            alt: 'KAVUN finished creative showing a suspended espresso drop with the line Make the day count',
            caption: 'The Last Drop closes the month on precision and watch-until-the-end tension.',
          },
          {
            src: p('kavun-cafe', 'creative-scorecard'),
            alt: 'KAVUN creative scorecard for judging stop, participation, memory, and action',
            caption: 'The campaign is judged by memory and intent, not likes alone.',
          },
        ],
      },
      {
        heading: 'The strategy became a product: a bilingual digital menu',
        body: 'I vibe-coded and deployed a responsive React/Vite menu that turns the content promise into a practical customer tool. The live experience makes 68 items searchable and filterable by category, switches fully between English and Arabic, supports favorites and dark mode, features best sellers and a seasonal pour, and gives customers direct exits to Google Maps and Instagram. On mobile, the interface becomes a compact bottom-navigation experience designed for a customer standing at the counter. It is not a desktop page squeezed onto a phone.',
        quote: {
          text: 'Think out of the cup.',
          source: 'KAVUN digital menu experience',
        },
        link: {
          href: 'https://kavun-menu.vercel.app',
          label: 'Open the live KAVUN digital menu',
        },
        images: [
          {
            src: p('kavun-cafe', 'menu-desktop'),
            alt: 'Desktop view of the KAVUN bilingual digital menu with the Think out of the cup hero, search, and category filters',
            caption: 'Desktop: a branded discovery experience with search and category-level navigation.',
          },
          {
            src: p('kavun-cafe', 'menu-mobile'),
            alt: 'Mobile view of the KAVUN digital menu with bilingual controls, search, filters, and bottom navigation',
            caption: 'Mobile: a fast counter-side experience with persistent menu, favorites, and feedback navigation.',
          },
        ],
      },
    ],
    outcome:
      'I built KAVUN a complete strategy-to-interface system: a clear local position, a measurable 90-day growth loop, an August Instagram workbook, a separate 30-day creative campaign, and a live bilingual menu that makes products easier to choose. The reporting system is ready to track visits, high-intent actions, content quality, and repeat behavior. I am not claiming live campaign results before those baselines exist.',
  },

  // ----------------------------------------------------------
  // 2. JUAN VALDEZ EGYPT
  // ----------------------------------------------------------
  {
    slug: 'juan-valdez-egypt',
    client: 'Juan Valdez Egypt',
    industry: 'Specialty coffee · Café & retail growth',
    category: 'Brand Growth Strategy + Content System',
    year: '2026',
    lang: 'English',
    title: 'From Colombia, made relevant in Egypt',
    summary:
      'A research-led brand growth strategy and 30-day Instagram-first content system that turns Colombian origin into an Egyptian coffee story people can understand, join, and act on.',
    cover: '/covers/juan-valdez-egypt-cover.webp',
    coverAlt:
      'Juan Valdez Egypt case study cover with Colombian coffee farmland, the brand mark, and the headline From Colombia, made relevant in Egypt',
    objective:
      'Balance discovery, brand belief, community engagement, and action without relying on unconfirmed offers, invented claims, or generic premium-coffee language.',
    deliverables: [
      '17-page brand and growth strategy',
      '37-page creative studio with 30 client-review routes',
      '50-reference research library and scored idea longlist',
      '30-day August calendar with captions, CTAs, owners, and KPIs',
      'Creative briefs and KPI/production tracker',
    ],
    tools: ['Instagram', 'TikTok', 'Meta Reels', 'Excel', 'Creative research', 'Presentation design'],
    stats: [
      { value: '50', label: 'traceable references across brand, category, creators, and platform guidance' },
      { value: '30', label: 'selected creative routes connected to production IDs and workbook rows' },
      { value: '14 / 10 / 6', label: 'Reels, statics, and carousels across the 30-day mix' },
      { value: '4', label: 'content territories spanning trust, expertise, relevance, and participation' },
    ],
    sections: [
      {
        heading: 'The strategic shift: give premium coffee a human reason to matter',
        body: 'The problem was not brand credibility. It was local expression. A strong origin story was being presented like a product catalogue, with too much product, too little person, and no clear path from attention to action. The strategy shifts the brand from “premium coffee” to a story people can join. The position is deliberately simple: Colombian origin, Egyptian relevance. It gives home baristas, café explorers, and thoughtful gifters a clear reason to care without making the brand distant or corporate.',
        quote: {
          text: 'People do not need another coffee brand telling them it is premium. They need a reason to care.',
          source: 'Human truth, Juan Valdez Egypt brand and growth strategy',
        },
        images: [
          {
            src: p('juan-valdez-egypt', 'human-truth'),
            alt: 'Strategy slide explaining the shift from premium coffee language to a human story people can join',
            caption: 'The human truth: premium is not the reason to care. The journey behind the cup is.',
          },
          {
            src: p('juan-valdez-egypt', 'market-opportunity'),
            alt: 'Market opportunity slide with specialty coffee growth, Instagram audience, and coffee-growing family figures',
            caption: 'The opportunity is to own the origin story before the category starts narrowing it.',
          },
          {
            src: p('juan-valdez-egypt', 'diagnosis'),
            alt: 'Brand diagnosis slide showing the gaps in local expression, publishing rhythm, short-form video, and conversion path',
            caption: 'The diagnosis: strong brand truth, weak local expression and an unclear path to action.',
          },
          {
            src: p('juan-valdez-egypt', 'positioning'),
            alt: 'Positioning slide stating Colombian origin, Egyptian relevance with premium but accessible brand principles',
            caption: 'The position: Colombian origin. Egyptian relevance. Premium, never distant.',
          },
        ],
      },
      {
        heading: 'A growth loop from attention to natural action',
        body: 'The system gives every format a job. Original Reels earn attention with something human, unexpected, or useful. Origin, process, and product truth build belief. Clear visit, shop, save, DM, or join actions then make the next step feel natural and specific. Four content territories keep the work distinctive without becoming repetitive, while the conversion path moves from watch to save to visit to shop. Paid activity starts only after tracking, claims discipline, and organic signals are in place.',
        quote: {
          text: 'Attention without belief is forgettable. Belief without action is expensive.',
          source: 'Growth system, Juan Valdez Egypt brand and growth strategy',
        },
        images: [
          {
            src: p('juan-valdez-egypt', 'growth-loop'),
            alt: 'Three-stage growth loop moving from earn attention to build belief to invite action',
            caption: 'One loop connects brand truth to business movement: attention → belief → action.',
          },
          {
            src: p('juan-valdez-egypt', 'content-architecture'),
            alt: 'Four content territories covering people, origin and taste, Cairo coffee moments, and participation',
            caption: 'Four territories: People Behind the Cup, From Place to Taste, Cairo Coffee Moments, and Make It Yours.',
          },
          {
            src: p('juan-valdez-egypt', 'conversion-by-design'),
            alt: 'Conversion pathway showing discover, believe, consider, and act with watch, save, visit, and shop actions',
            caption: 'Every piece earns one next action instead of carrying the whole sales pitch.',
          },
          {
            src: p('juan-valdez-egypt', 'roadmap-90'),
            alt: 'Ninety-day roadmap split into foundation, momentum, and scale phases',
            caption: 'The first 90 days build proof before buying scale.',
          },
          {
            src: p('juan-valdez-egypt', 'scorecard'),
            alt: 'Scorecard measuring attention, belief, action, and loyalty metrics',
            caption: 'The scorecard measures movement, not applause. Baselines come before targets.',
          },
        ],
      },
      {
        heading: 'Research first. Ideas second. Design only after the system works.',
        body: 'The month started with 50 traceable references across official brand sources, Egyptian coffee competitors, global coffee creators, TikTok Creative Center, and Meta guidance. Those references were synthesized into 12 repeatable pattern families, expanded into 60 raw ideas, scored for originality, brand fit, audience relevance, performance mechanism, and feasibility, then narrowed to 30 production routes. The final mix is balanced by format, funnel role, and content territory rather than by aesthetic preference alone.',
        images: [
          {
            src: p('juan-valdez-egypt', 'research-method'),
            alt: 'Research workflow slide showing 50 references, 12 pattern families, 60 raw ideas, and 30 selected routes',
            caption: 'The evidence chain: 50 references → 12 patterns → 60 ideas → 30 selected routes.',
          },
          {
            src: p('juan-valdez-egypt', 'attention-patterns'),
            alt: 'Twelve coffee content pattern families including human provenance, sensory macro, ritual point of view, and Cairo identity',
            caption: 'Twelve patterns explain what repeatedly earns attention without copying individual posts.',
          },
          {
            src: p('juan-valdez-egypt', 'month-mix'),
            alt: 'Balanced content month split by format, funnel role, and four content pillars',
            caption: 'A deliberate mix: 14 Reels, 10 statics, 6 carousels across discovery, belief, engagement, and action.',
          },
          {
            src: p('juan-valdez-egypt', 'calendar-wall'),
            alt: 'Thirty-day visual content wall showing all Juan Valdez Egypt creative routes from JV-D01 to JV-D30',
            caption: 'The full 30-day wall. Every tile has a stable ID connected to the workbook and production files.',
          },
        ],
      },
      {
        heading: 'Thirty distinct routes, held together by one red thread',
        body: 'Each route is more than a mockup. The creative studio connects the visual sequence to a hook, client-readable caption, CTA, tone of voice, research signal, TikTok adaptation, and production note. The month alternates human provenance, sensory craft, Cairo rituals, useful education, and participation so the feed feels like one story rather than thirty isolated posts. Brand rules stay protected throughout: no invented prices, offers, locations, testimonials, or product claims.',
        quote: {
          text: 'A week should feel like a story, not a content calendar.',
          source: 'Publishing rhythm, Juan Valdez Egypt brand and growth strategy',
        },
        images: [
          {
            src: p('juan-valdez-egypt', 'card-hands'),
            alt: 'Creative route The Hands Before the Cup linking coffee growers to barista hands through matched cuts',
            caption: 'Day 1: human provenance gives the brand a truth competitors cannot manufacture.',
          },
          {
            src: p('juan-valdez-egypt', 'card-two-places'),
            alt: 'Creative route Two Places One Cup connecting Colombian mountains and Cairo through a red visual bridge',
            caption: 'Day 2: Colombia grows the story. Cairo gives it a moment.',
          },
          {
            src: p('juan-valdez-egypt', 'card-extraction'),
            alt: 'Seven-second extraction Reel route with espresso macro shots and a concise production sequence',
            caption: 'Day 4: show the craft instead of overexplaining it.',
          },
          {
            src: p('juan-valdez-egypt', 'card-people-before-product'),
            alt: 'People Before Product static route featuring an approved grower portrait and restrained editorial copy',
            caption: 'Day 5: the person gets the first sentence. The product earns the second.',
          },
          {
            src: p('juan-valdez-egypt', 'card-colombia-frames'),
            alt: 'Five-panel carousel route explaining Colombian origin through landscape, hands, roast, and cup details',
            caption: 'Day 13: origin becomes a swipeable object rather than a lecture.',
          },
          {
            src: p('juan-valdez-egypt', 'card-origin-no-lecture'),
            alt: 'Origin Without the Lecture carousel explaining altitude, climate, and care in plain language',
            caption: 'Day 17: useful coffee education written like a good friend would explain it.',
          },
        ],
      },
    ],
    outcome:
      'I built Juan Valdez Egypt a growth system the team can put into action: a clear local position, a three-stage path from attention to action, four repeatable content territories, 30 production-ready creative routes, and a workbook connecting research, captions, owners, production status, KPIs, and next actions. I am not claiming live performance yet. The tracker establishes the baseline first, then compares targets with actual results after publishing.',
  },

  // ----------------------------------------------------------
  // 3. CLOUD9 NURSERY
  // ----------------------------------------------------------
  {
    slug: 'cloud9-nursery',
    client: 'Cloud9 Nursery',
    industry: 'Early-years education · Nursery growth',
    category: 'Social Media Audit + Growth Strategy + Content Operations',
    year: '2026',
    lang: 'English + Arabic',
    title: 'Turning years of posting into a parent-growth system',
    summary:
      'A research-led strategy, production system, organic content programme, and bilingual tour funnel that moved Cloud9 from consistent posting to measurable parent reach and enquiry generation.',
    cover: '/covers/cloud9-nursery-cover.webp',
    coverAlt:
      'Cloud9 Nursery strategy cover with the Cloud9 logo and the headline Social media is not the problem. Distribution is.',
    objective:
      'Turn a large but quiet social audience and years of publishing discipline into measurable non-follower reach, parent trust, and qualified enrolment enquiries, without compromising child dignity or accuracy.',
    deliverables: [
      '48-page social media audit and competitor review',
      '16-slide 90-day social media growth strategy',
      '30 daily production briefs across six content pillars, five weeks, and three accounts',
      '26-page creative playbook for designers and editors',
      '85-script bank, publishing calendar, KPI framework, final social covers, and three reusable motion assets',
      'Monthly organic-performance reporting, September and October production trackers, captured Reels, and a bilingual nursery tour funnel',
    ],
    tools: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Meta Business Suite', 'Excel', 'Creative direction', 'Video editing', 'React', 'Microsoft Forms'],
    stats: [
      { value: '146,883', label: 'Instagram views in the 60-day reporting window ending 5 Oct 2026' },
      { value: '+238', label: 'net followers added from 3–22 Aug with EGP 0 spent on ads' },
      { value: '208', label: 'first-time parent messages in the August reporting window' },
      { value: '56', label: 'September assets tracked: 39 videos and 17 feed or carousel designs' },
      { value: '35', label: 'October video briefs planned across 11 content categories' },
    ],
    sections: [
      {
        heading: 'The problem was not consistency. It was distribution.',
        body: 'Cloud9 had already done the hard part. The team had published 1,783 Instagram posts and built 6,745 Instagram followers plus 8,679 Facebook likes. But only 78 people had interacted with the Facebook page in the measured week. I treated that as an exchange-rate problem, not a discipline problem. The feed documented nursery life for parents who had already chosen Cloud9, but it rarely gave a new parent something useful enough to save, share, or talk about.',
        quote: {
          text: 'Social media is not the problem. Distribution is.',
          source: 'Core diagnosis, Cloud9 social media strategy',
        },
        images: [
          {
            src: p('cloud9', 'starting-point'),
            alt: 'Cloud9 starting-point dashboard showing Instagram followers, published posts, Facebook likes, and weekly Facebook interactions',
            caption: 'The starting point used public July 2026 profile data. Nothing on this slide was estimated.',
          },
          {
            src: p('cloud9', 'programme-advantage'),
            alt: 'Cloud9 strategy slide identifying the nursery programme as a defensible advantage',
            caption: 'The strongest advantage was already inside the programme. It simply needed to be explained.',
          },
        ],
      },
      {
        heading: 'The strategy: teach, prove, and make the founder visible',
        body: "The programme was Cloud9's strongest advantage: Mandarin, German, camera craft, geometry, swimming, and more. My strategy made that value visible through five moves. TikTok becomes the reach engine. The content shifts from documenting events to teaching parents. Founder Yara appears on camera twice a week. Enrichment becomes proof instead of a list of activities. Measurement moves from likes to non-follower reach, saves, shares, profile actions, and qualified enquiries. The monthly mix keeps the system balanced: 40% education, 30% proof, 20% culture, and 10% conversion.",
        quote: {
          text: 'The programme is the one thing nobody can copy.',
          source: 'Strategic advantage, Cloud9 social media strategy',
        },
        images: [
          {
            src: p('cloud9', 'five-moves'),
            alt: 'Cloud9 strategy slide listing five moves for TikTok, educational content, founder visibility, programme proof, and measurement',
            caption: 'Five moves connect attention, authority, proof, and conversion.',
          },
          {
            src: p('cloud9', 'content-mix'),
            alt: 'Cloud9 monthly content mix divided into education, proof, culture, and conversion',
            caption: 'The content mix protects usefulness while still leaving room for enrolment.',
          },
          {
            src: p('cloud9', 'ninety-day-roadmap'),
            alt: 'Cloud9 90-day roadmap moving from foundation to acceleration and conversion',
            caption: 'The roadmap gives the team a clear sequence instead of asking every channel to do everything at once.',
          },
        ],
      },
      {
        heading: 'One month became a working content system',
        body: 'I turned the strategy into 30 daily production briefs across six pillars, five weeks, and three accounts. The brand account makes the experience visible. Yara makes the thinking meaningful. LinkedIn makes the practice transferable. Every brief includes the bilingual hook, shot or layout, design treatment, edit direction, CTA, KPI, export format, and safeguarding note. The wider production rhythm keeps the team one week ahead, with 14 weekly posts made in two focused sessions.',
        quote: {
          text: 'Specific ideas. Human proof. Safe execution.',
          source: '30-day visual reference system',
        },
        images: [
          {
            src: p('cloud9', 'thirty-day-system'),
            alt: 'Cloud9 30-day system overview showing daily briefs, content pillars, weeks, and accounts',
            caption: 'Thirty daily briefs create one trust-building system rather than 30 disconnected posts.',
          },
          {
            src: p('cloud9', 'account-roles'),
            alt: 'Cloud9 account-role framework for the brand, founder Yara, and LinkedIn',
            caption: 'Each account has a clear role, audience, and reason to exist.',
          },
          {
            src: p('cloud9', 'content-architecture'),
            alt: 'Cloud9 content architecture showing six pillars and their planned monthly share',
            caption: 'Six pillars balance child development, parent education, founder authority, proof, access, and enrolment.',
          },
          {
            src: p('cloud9', 'production-rhythm'),
            alt: 'Cloud9 weekly production rhythm showing two shoot sessions and a one-week-ahead workflow',
            caption: 'Fourteen posts a week are produced in two sessions, then planned, edited, reviewed, and scheduled ahead.',
          },
        ],
      },
      {
        id: 'organic-results',
        heading: 'The organic system produced measurable growth',
        body: 'I separated every result by reporting window so the case study stays honest. From 3–22 August, Cloud9 reached about 15,700 people, added 238 net followers, earned 1,354 interactions, and generated 208 first-time parent messages with no ad spend. The 60-day Instagram view ending 5 October recorded 146,883 views, +200 net followers, and 1,786 interactions. The screenshots below remain available as the original proof, while the August report turns the numbers into decisions rather than decoration.',
        quote: {
          text: 'The content has done its job. If we fix the inbox, those conversations can turn into visits.',
          source: 'August 2026 performance report and recommendation',
        },
        metrics: [
          { value: '15.7K', label: 'people reached', note: '3–22 Aug · Meta Business Suite' },
          { value: '+238', label: 'net followers', note: '269 joined · 31 left' },
          { value: '1,354', label: 'interactions', note: 'likes, comments, and shares' },
          { value: '208', label: 'first-time messages', note: '168 Facebook · 40 Instagram' },
          { value: 'EGP 0', label: 'ad spend', note: 'organic result' },
        ],
        images: [
          { src: '/work/cloud9/organic/report-cover.webp', alt: 'Cloud9 August 2026 organic social report cover showing total followers, follower growth, reach, messages, and zero ad spend', caption: 'August report cover: every headline number is tied to a named Meta reporting window.' },
          { src: '/work/cloud9/organic/instagram-60-day-results.webp', alt: 'Instagram Insights showing 146,883 views, 200 net followers, and 1,786 interactions over 60 days', caption: '60-day Instagram view ending 5 October: 146,883 views, +200 net followers, and 1,786 interactions.' },
          { src: '/work/cloud9/organic/facebook-august-results.webp', alt: 'Meta Business Suite Facebook content overview showing 85,740 views and 83,034 organic views during August', caption: 'Facebook, 4–31 August: 85.7K views, 83,034 of them organic, with interactions up 180.2%.' },
          { src: '/work/cloud9/organic/instagram-august-results.webp', alt: 'Meta Business Suite Instagram content overview showing growth in views, reach, and content interactions during August', caption: 'Instagram, 4–31 August: 42,840 organic platform views, with reach and interactions sharply higher than the previous period.' },
          { src: '/work/cloud9/organic/weekly-output-results.webp', alt: 'Meta weekly review showing 43 pieces of content published, 3,000 Facebook reach, 1,300 Instagram reach, and 69 new contacts', caption: 'A sampled week, 9–15 August: 43 content pieces and 69 new contacts across the two platforms.' },
          { src: '/work/cloud9/organic/recommendations.webp', alt: 'Cloud9 August report page listing five prioritised recommendations for September', caption: 'Reporting closes with priorities: inbox ownership, Instagram-first creative, a distinct role for Facebook, one application route, and fewer stronger pieces.' },
        ],
      },
      {
        id: 'production-operations',
        heading: 'Planning continued all the way through filming, editing, approval, and publication',
        body: 'The calendar is not a list of post ideas. Each asset has a category, title, brief, owner, filming state, edit state, approval state, publication state, blocker, result field, and live link. September tracked 39 videos and 17 feed or carousel designs; 25 videos had been filmed and 19 published at the snapshot used here. October opened with 35 video briefs across emotional storytelling, activities, child psychology, team content, social proof, education, transformation stories, and conversion. Sensitive child content carries a consent or specialist-review note before production.',
        metrics: [
          { value: '39', label: 'September video briefs', note: '11 content categories' },
          { value: '25', label: 'videos filmed', note: 'September tracker snapshot' },
          { value: '19', label: 'videos published', note: 'each linked back to the live Reel' },
          { value: '17', label: 'design briefs', note: 'carousels and feed posts' },
          { value: '35', label: 'October video briefs', note: 'planned before production began' },
        ],
        workflow: [
          { title: 'Plan the angle', body: 'Choose the pillar, audience problem, hook, proof, CTA, and required consent.' },
          { title: 'Capture in batches', body: 'Film educator-led explanations, activities, emotional moments, and social proof against the tracker.' },
          { title: 'Edit for mobile', body: 'Use the Cloud9 motion kit, sound-off subtitles, clear opening frames, and one visual idea per scene.' },
          { title: 'Review and publish', body: 'Secure approval, record blockers, publish, add the live link, and return performance to the tracker.' },
        ],
        tracker: {
          title: 'September content production system',
          note: 'Sanitised portfolio excerpt · live workbook contains owners and operational notes',
          columns: ['Asset', 'Category', 'Filming', 'Editing', 'Approval', 'Publication'],
          rows: [
            ['Why We Do Not Teach Letters in Alphabetical Order', 'Opinion', 'Filmed', 'Edited', 'Approved', 'Published'],
            ['Why Cloud9 Does Not Use Screens', 'Educational', 'Filmed', 'In progress', 'Approved', 'Published'],
            ['Graduation Behind the Scenes', 'BTS', 'Filmed', 'Edited', 'Approved', 'Published'],
            ['Why Does My Child Lie?', 'Child psychology', 'Filmed', 'In progress', 'Approved', 'Published'],
            ['Cloud9 Nursery', 'Conversion', 'Filmed', 'Edited', 'Approved', 'Published'],
          ],
        },
        links: [
          { label: 'View the scripting document', href: 'https://buc1-my.sharepoint.com/:w:/g/personal/gana_2024000179_buc_edu_eg/IQCiBooSIRxaSJg2cnxFcIcPAd-ETmndb5ykpTXIFNZsx6E?e=IO9fPN' },
          { label: 'View the working content calendar', href: 'https://buc1-my.sharepoint.com/:x:/g/personal/gana_2024000179_buc_edu_eg/IQC_9T_cdkALRqgTCdqSO7QKAbrshzLPPe_6eUYJ7VnEIiE?e=Zhpoc5' },
        ],
        images: [],
      },
      {
        id: 'captured-reels',
        heading: 'I also captured and shaped the short-form content',
        body: 'These are representative pieces from the published production folder: educator-led insight, behind-the-scenes footage, classroom and learning moments, rehearsals, and graduation storytelling. The work spans planning, on-site capture, direction, edit structure, and social delivery—not only the written calendar. Click any card to play the original Drive preview.',
        link: {
          label: 'Open the complete published Reel folder',
          href: 'https://drive.google.com/drive/folders/1GAta4iDrXUNaGw0UxjrrtP8qpdX5Q16c?usp=drive_link',
        },
        images: [],
        embeds: [
          { id: '1Mqhe_Q_jIwWdnvA4XaXByzSbO6nNEnQx', title: 'Behind the scenes', caption: 'A process-led Reel from the published content folder.' },
          { id: '1TCXqjJsMpuZrfGYm6L1DckNWjfBx7kHv', title: 'Educator-led insight', caption: 'Direct-to-camera expertise captured inside the nursery environment.' },
          { id: '1gfJ24fRRUEt7dqAFcN6sQ6M7k1VCGCrj', title: 'Learning moment', caption: 'A focused classroom story edited for vertical social viewing.' },
          { id: '1irhcPTFQqBRyjYmZuO2Hka_IHTPRCqEa', title: 'Graduation rehearsal', caption: 'Behind-the-scenes preparation turned into an emotional story.' },
          { id: '1kRTZcSiuZgayuPJre8UOcKQ-wra0cidX', title: 'Activity-led learning', caption: 'A real child-led activity shaped into a concise social format.' },
          { id: '1rwEWrtrsTwNw1jcG6NEGTkORxqk17HCB', title: 'Graduation highlight', caption: 'A celebration moment captured and packaged for the feed.' },
        ],
      },
      {
        heading: 'A creative playbook the production team can actually use',
        body: 'The playbook gives designers and editors the rules behind the look, not just a mood board. It covers colour, type, logo placement, brand charms, ten design treatments, eight edit styles, subtitle behaviour, file naming, delivery specs, and the path from brief to publish. Two safeguards sit above the craft: written parental consent before filming and educator review for development claims. References guide composition, but they never become fake proof.',
        quote: {
          text: 'Before you deliver anything, ask: would a tired mother in Nasr City stop scrolling for this, and would she send it to another mother?',
          source: 'Final quality check, Cloud9 creative playbook',
        },
        images: [
          { src: p('cloud9', 'brand-palette'), alt: 'Cloud9 creative playbook page showing the approved cyan, yellow, teal, sky, pale blue, and sand colour palette', caption: 'The palette moves from brand colours into repeatable production rules.' },
          { src: p('cloud9', 'design-treatments'), alt: 'Cloud9 playbook overview showing ten approved design treatments', caption: 'Ten design treatments give the team variety without losing recognition.' },
          { src: p('cloud9', 'sound-off-editing'), alt: 'Cloud9 editing rule showing burned-in subtitle treatment for sound-off social viewing', caption: 'Sound-off viewing is treated as the default, so subtitles are part of the design system.' },
          { src: p('cloud9', 'creative-workflow'), alt: 'Cloud9 workflow from content brief through design, edit, review, and publishing handoff', caption: 'A defined workflow keeps strategy intact through production and approval.' },
          { src: p('cloud9', 'consent-accuracy'), alt: 'Cloud9 non-negotiables covering parental consent and educator review', caption: 'Consent and accuracy are release gates, not optional production notes.' },
          { src: p('cloud9', 'four-gate-handoff'), alt: 'Cloud9 four-gate publishing handoff covering strategy, brand, production, and safeguarding checks', caption: 'Nothing publishes until the strategy, brand, production, and safeguarding gates are green.' },
        ],
      },
      {
        heading: 'The identity moved from guidelines into finished social assets',
        body: 'I carried the system into finished Facebook and Reel covers plus a set of parent-facing graphics. The visual language stays bright and child-friendly, while the message remains useful to the adult making the decision. I am only showing completed assets here. Draft layouts that still contain image placeholders are deliberately left out.',
        images: [
          { src: p('cloud9', 'facebook-cover'), alt: 'Finished Cloud9 Facebook cover with the nursery logo, rainbow, and Learn Play Grow message', caption: 'Facebook cover: a clear brand promise and an immediate contact route.' },
          { src: p('cloud9', 'reel-cover'), alt: 'Finished vertical Cloud9 Reel cover with the nursery logo, rainbow, balloons, and learning blocks', caption: 'Reel cover: a recognisable vertical frame for short-form content.' },
          { src: p('cloud9', 'welcome-carousel'), alt: 'Cloud9 carousel opener welcoming parents to the nursery beneath a rainbow', caption: 'A welcoming carousel opener designed to introduce the nursery quickly.' },
          { src: p('cloud9', 'why-parents-love-us'), alt: 'Cloud9 parent-benefit graphic highlighting caring teachers, safe spaces, play-based learning, and daily updates', caption: 'Parent proof is translated into four plain, easy-to-scan reasons.' },
          { src: p('cloud9', 'programmes'), alt: 'Cloud9 programmes graphic for early learning, preschool, and kindergarten preparation', caption: 'The programme offer is made simple enough to understand in one glance.' },
          { src: p('cloud9', 'enrolment-cta'), alt: 'Cloud9 enrolment graphic with the Learn Play Grow message and booking call to action', caption: 'The enrolment asset closes the visual sequence with one clear action.' },
        ],
      },
      {
        heading: 'A small motion kit keeps every Reel recognisable',
        body: 'The motion package gives editors reusable vertical and widescreen building blocks: a nursery intro, cloud wipes and swipes for scene changes, and branded end cards. Together they create a consistent opening, transition, and close without making every Reel or presentation feel identical.',
        images: [],
        videos: [
          { src: '/work/cloud9/nursery-intro.mp4', poster: '/work/cloud9/nursery-intro-poster.webp', alt: 'Cloud9 nursery intro animation with clouds, balloons, learning blocks, rainbow, and the nursery logo', caption: 'Nursery intro: an eight-second branded opening built for vertical Reels.' },
          { src: '/work/cloud9/cloud-wipe-transition.mp4', poster: '/work/cloud9/cloud-wipe-poster.webp', alt: 'Cloud9 cloud-shaped chroma-key wipe transition for video editors', caption: 'Cloud wipe: a short chroma-key transition designed to sit over live footage.' },
          { src: '/work/cloud9/ending-video.mp4', poster: '/work/cloud9/ending-video-poster.webp', alt: 'Cloud9 branded end-card animation with the logo, rainbow, contact details, and Learn Play Grow message', caption: 'End card: a consistent branded close with the account and contact route.' },
          { src: '/work/cloud9/cloud-wipe-16x9.mp4', poster: '/work/cloud9/cloud-wipe-16x9-poster.webp', alt: 'Widescreen Cloud9 cloud wipe transition', caption: '16:9 cloud wipe: a presentation and landscape-video transition.' },
          { src: '/work/cloud9/cloud-swipe-16x9.mp4', poster: '/work/cloud9/cloud-swipe-16x9-poster.webp', alt: 'Widescreen Cloud9 cloud swipe transition', caption: '16:9 cloud swipe: a second transition route for visual variety.' },
          { src: '/work/cloud9/graduation-outro-16x9.mp4', poster: '/work/cloud9/graduation-outro-16x9-poster.webp', alt: 'Widescreen Cloud9 graduation outro animation', caption: 'Graduation outro: a widescreen branded close for event footage.' },
        ],
      },
      {
        id: 'tour-funnel',
        heading: 'The content now has a clear next step: book a nursery tour',
        body: 'The bilingual tour site closes the gap identified in the August report. Parents see a simple three-step journey, choose English or Arabic, and complete a secure Microsoft form without leaving the branded experience. Responses move into an Excel tracker for tour status and client conversion, while branch phone numbers remain visible for families who prefer to call. Personal response data is deliberately excluded from this public portfolio.',
        metrics: [
          { value: 'AR + EN', label: 'bilingual experience', note: 'one interface for both audiences' },
          { value: '3 steps', label: 'clear parent journey', note: 'request · call · visit' },
          { value: '1 form', label: 'structured lead capture', note: 'secure Microsoft Forms handoff' },
        ],
        link: {
          label: 'Open the live Cloud9 tour booking site',
          href: 'https://cloud9-tour-booking.vercel.app/',
        },
        images: [
          { src: '/work/digital-products/cloud9-tour-booking.webp', alt: 'Cloud9 bilingual nursery tour booking website with parent-focused hero and three-step journey', caption: 'A parent-facing booking experience that connects organic content to a measurable tour-request workflow.' },
        ],
      },
    ],
    outcome:
      'Cloud9 now has a connected growth system: research and positioning, a 30-day content architecture, an 85-script bank, production trackers, on-site Reel capture, repeatable motion assets, monthly organic reporting, and a live bilingual tour funnel. The work generated verified organic reach, follower growth, interactions, and parent conversations with zero August ad spend, while the booking product gives that attention a measurable next action.',
  },

  // ----------------------------------------------------------
  // 4. VELORA FIT
  // ----------------------------------------------------------
  {
    slug: 'velora-fit',
    client: 'Velora Fit',
    industry: 'Premium activewear · D2C launch',
    category: 'Media Strategy + Content System',
    year: '2026',
    lang: 'English',
    title: 'Launching a premium activewear brand from zero',
    summary:
      'A first-drop launch plan built around premium activewear, short-form product proof, creator-led demand, and conversion-focused media buying, plus a 31-post launch calendar designed card by card.',
    cover: '/covers/velora-fit-cover.webp',
    coverAlt:
      'Velora Fit case study cover with the brand logo, an athlete in a premium dark gym, and the headline Launching a premium activewear brand from zero',
    objective:
      'Make Velora visible, trusted, and shoppable before scaling the budget, with a 90-day plan built around selling the first drop.',
    deliverables: [
      '17-slide launch media strategy',
      '31-post July launch calendar (XLSX + 35-page creative deck)',
      'EGP 25,000 full-launch media plan with KPI forecasts',
      'Short-form creative system & UGC engine',
      '90-day activation roadmap',
    ],
    tools: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'YouTube Shorts', 'Excel', 'PowerPoint'],
    stats: [
      { value: '31', label: 'launch-month posts, each fully art-directed' },
      { value: '21', label: 'motion-led assets in the calendar' },
      { value: 'EGP 25K', label: 'full launch budget modeled across 5 channels' },
      { value: '30%', label: 'of budget reserved for A/B testing before scale' },
    ],
    sections: [
      {
        heading: 'The strategy: prove the product before pushing the budget',
        body: 'Velora Fit had no audience, no reviews, and one shot at a first impression. I split the launch into testing, optimization, and scaling phases. Between 15% and 25% of the budget tests audiences, hooks, creators, and placements before anything scales. The decision rule I set for the brand was simple: scale creative only after it proves either low cost per engaged visitor, strong add-to-cart behavior, or high watch-through rate.',
        images: [
          {
            src: p('velora-fit', 'strategy-cover'),
            alt: 'Velora Fit media strategy cover slide with premium activewear product photography',
            caption: 'The launch strategy: performance, lifestyle, minimal, premium.',
          },
          {
            src: p('velora-fit', 'budget-model'),
            alt: 'Full launch media budget model allocating EGP 25,000 across Meta, TikTok, Facebook retargeting, YouTube Shorts and Google',
            caption:
              'EGP 25,000 launch budget: Meta for reach and conversion, TikTok for discovery, Google for high-intent demand capture.',
          },
          {
            src: p('velora-fit', 'ab-testing'),
            alt: 'A/B testing phase slide reserving 30 percent of launch budget for a 10–14 day pilot',
            caption:
              '30% of the budget runs a 10–14 day pilot across audience, hook, video length, product angle, CTA, landing page, and offer framing.',
          },
        ],
      },
      {
        heading: 'A creative system, not one-off ads',
        body: 'Every short-form asset follows the same under-15-second structure: hook in the first 2 seconds, product proof by second 7, offer by second 12, and CTA at the end. The UGC plan sends products to 10–30 creators and local athletes, captures fit checks and honest reactions, promotes the strongest assets as paid creative, then retains buyers through challenges and ambassador access.',
        quote: {
          text: 'A strong creative hook lowers CPM/CPV, improves engagement, produces stronger retargeting pools, and gives the media plan permission to scale.',
          source: 'Metric correlation model, Velora media strategy',
        },
        images: [
          {
            src: p('velora-fit', 'video-system'),
            alt: 'Short-form creative system slide: hook 0–2s, proof 3–7s, offer 8–12s, CTA 13–15s',
            caption: 'The <15-second creative skeleton every launch video follows.',
          },
          {
            src: p('velora-fit', 'ugc-engine'),
            alt: 'UGC and community engine slide: seed, capture, amplify, retain',
            caption: 'The UGC engine: seed → capture → amplify → retain.',
          },
          {
            src: p('velora-fit', 'metric-correlation'),
            alt: 'Diagram connecting creative hook to watch time, engagement, traffic, conversion, retargeting, lookalikes and scaled budget',
            caption: 'How optimization decisions connect, from hook quality to scaled budget.',
          },
        ],
      },
      {
        heading: '31 days of content, designed card by card',
        body: 'The launch calendar is not a spreadsheet of vague ideas. Each of the 31 posts is a finished creative brief with a visual mockup, caption, tone of voice, objective, platform mix, and production reference. The month follows a clear arc: brand reveal and positioning in week 1, product proof and founder story in week 2, conversion setup in week 3, launch pressure in week 4, then the Foundation Drop goes live.',
        images: [
          {
            src: p('velora-fit', 'weekly-rhythm'),
            alt: 'Weekly rhythm slide showing the five-phase launch month arc from reveal to launch day',
            caption: 'The launch arc: reveal → proof → conversion setup → launch pressure → sell with confidence.',
          },
          {
            src: p('velora-fit', 'card-reveal'),
            alt: 'Day-1 brand reveal content card: dark gym hero video with logo reveal and fabric close-up',
            caption: 'Day 1, brand reveal: “A new standard for disciplined training.”',
          },
          {
            src: p('velora-fit', 'card-ugc'),
            alt: 'UGC call content card inviting followers to tag Velora Fit for a community spotlight',
            caption: 'Day 19: building the UGC pipeline before launch.',
          },
          {
            src: p('velora-fit', 'card-poll'),
            alt: 'Interactive color poll content card offering black, charcoal or neutral colorways',
            caption: 'Day 23: a poll that doubles as product-direction research.',
          },
          {
            src: p('velora-fit', 'card-countdown'),
            alt: '24-hours-to-launch countdown content card with product cuts and timer',
            caption: 'Day 30: “24 hours to the first drop.”',
          },
          {
            src: p('velora-fit', 'card-launch'),
            alt: 'Launch day content card announcing the Velora Fit Foundation Drop is live',
            caption: 'Day 31: the Foundation Drop goes live across all channels.',
          },
          {
            src: p('velora-fit', 'reference-board'),
            alt: 'Reference ideas board with six repeatable visual systems for producing Velora content',
            caption: 'Six repeatable visual systems so the brand can keep producing content after handoff.',
          },
        ],
      },
    ],
    outcome:
      'I built Velora an execution-ready launch system: a media plan with forecast KPI ranges per channel (2.4M–4.2M Meta impressions and 620K–1.1M TikTok views at full budget), a 31-post creative calendar, and clear rules for when to scale. These forecasts are planning ranges that need to be checked against live campaign data.',
  },

  // ----------------------------------------------------------
  // 5. MYO RECOVERY
  // ----------------------------------------------------------
  {
    slug: 'myo-recovery',
    client: 'MYO Recovery · by E-Sports Med',
    industry: 'Sports physiotherapy & athletic recovery clinic',
    category: 'Media Strategy + Content System',
    year: '2026',
    lang: 'English + Arabic',
    title: 'Turning pain-point education into booked assessments',
    summary:
      'A full-funnel paid media system and a bilingual July content calendar for a sports physiotherapy clinic, built on one rule: the month should feel helpful before it feels promotional.',
    cover: '/covers/myo-recovery-cover.webp',
    coverAlt:
      'MYO Recovery case study cover with the clinic logo, a sports rehabilitation session, and the headline From pain education to booked assessments',
    objective:
      'Capture WhatsApp inquiries and first-assessment bookings from athletes dealing with pain without fear-selling, diagnosing from posts, or promising recovery outcomes.',
    deliverables: [
      '19-page paid media strategy (EGP 50K/month plan)',
      'EGP 15,000 pilot testing plan with KPI forecasts',
      'July content calendar with bilingual EN/AR creative cards',
      'Lead-quality and metric-relationship framework',
      'Ethical claims guidance sourced from Mayo Clinic, AAOS & Physiopedia',
    ],
    tools: ['Meta Ads', 'Google Search', 'TikTok', 'YouTube/Reels', 'WhatsApp Business', 'Excel'],
    stats: [
      { value: 'EGP 50K', label: 'monthly media plan across 5 platforms' },
      { value: '3', label: 'audience segments: gym athletes, team-sport players, active recovery clients' },
      { value: '95–170', label: 'forecast qualified leads/month at full budget' },
      { value: '2', label: 'languages, with every caption written in English and Egyptian Arabic' },
    ],
    sections: [
      {
        heading: 'Strategy: buy attention, convert trust',
        body: 'I built the paid system around four objectives: awareness, traffic, engagement, and leads. The budget goes toward what produces qualified WhatsApp inquiries, not cheap clicks. The pilot spends EGP 15,000 over 10–14 days testing pain-point messages, recovery visuals, and booking CTAs. The full EGP 50,000 plan then protects lead quality by giving the largest share to Meta leads and Google Search intent.',
        quote: {
          text: 'The best campaign is not only the cheapest. It is the one that produces qualified assessments at a cost the clinic can scale.',
          source: 'MYO Recovery media strategy',
        },
        images: [
          {
            src: p('myo-recovery', 'strategy-cover'),
            alt: 'MYO Recovery media strategy cover slide',
            caption: 'The media strategy: sports physiotherapy, athletic recovery, injury rehabilitation.',
          },
          {
            src: p('myo-recovery', 'platform-mix'),
            alt: 'Recommended platform mix allocating EGP 50,000 across Facebook, Instagram, TikTok, Google Search and YouTube',
            caption: 'EGP 50K/month: Meta for leads, Google for intent, TikTok and YouTube for demand creation.',
          },
          {
            src: p('myo-recovery', 'pilot-plan'),
            alt: 'A/B pilot plan slide with EGP 15,000 testing budget over 10 to 14 days',
            caption: 'The pilot: EGP 15K to find which pain point, audience, and hook produces qualified inquiries.',
          },
          {
            src: p('myo-recovery', 'kpi-forecast'),
            alt: 'Testing forecast table with projected KPI ranges and cost ranges per platform',
            caption: 'Honest forecasting: every KPI is a range, flagged to shift ±20–25% with auction conditions.',
          },
          {
            src: p('myo-recovery', 'segments'),
            alt: 'Three audience segments: gym athletes, team-sport players, and active recovery clients',
            caption: 'Three segments, each with its own pain pattern and message.',
          },
        ],
      },
      {
        heading: 'Content that lowers fear before it asks for a booking',
        body: 'Every post follows a fixed formula: pain point → movement check → recovery action → book an assessment. I balanced five content roles: pain education, movement confidence, return-to-sport, human reassurance, and booking action. The calendar only asks for the booking after the reader recognizes the problem. Each card was delivered in both languages, with Arabic written around how athletes in Egypt actually talk about pain.',
        quote: {
          text: 'The best recovery content does not shout. It makes someone feel understood enough to ask for help.',
          source: 'Creative rule, MYO content system',
        },
        images: [
          {
            src: p('myo-recovery', 'content-pillars'),
            alt: 'Slide showing the five content roles: pain education, movement confidence, return-to-sport, human reassurance, booking action',
            caption: '“The month should feel helpful before it feels promotional.”',
          },
          {
            src: p('myo-recovery', 'card-pain-pattern'),
            alt: 'Bilingual content card: pain that keeps coming back is usually asking for a better plan',
            caption: 'Awareness card: naming the pattern athletes ignore.',
          },
          {
            src: p('myo-recovery', 'card-knee'),
            alt: 'Engagement content card asking whether knee pain shows up only during squats',
            caption: 'Engagement card: specific enough to invite real answers, careful enough not to diagnose.',
          },
          {
            src: p('myo-recovery', 'card-whisper'),
            alt: 'Story poll card: your body usually whispers before it screams',
            caption: 'Story poll: the most common answer becomes next week’s content.',
          },
          {
            src: p('myo-recovery', 'card-trust'),
            alt: 'Content card about trusting your body again after injury',
            caption: 'Return-to-sport card: the emotional half of rehab marketing.',
          },
        ],
      },
      {
        heading: 'Claims kept practical, sourced, and safe',
        body: 'Healthcare marketing fails legally and ethically before it fails commercially. The system bans miracle language, diagnosis-from-comments, and promised outcomes; educational claims are anchored to Mayo Clinic, AAOS OrthoInfo, and Physiopedia sources, and any patient footage requires written consent. This is what makes the calendar deployable by a real clinic, not just pretty.',
        images: [
          {
            src: p('myo-recovery', 'video-formats'),
            alt: 'Short video format guidance for 15, 30, and 60 second clinic videos',
            caption: '15s for pain hooks, 30s for treatment explanation, 60s for deeper trust-building.',
          },
          {
            src: p('myo-recovery', 'reference-ideas'),
            alt: 'Reference ideas board for producing more clinic posts: movement screens, rehab progressions, story polls, myth corrections',
            caption: 'The repeatable frame: one honest problem, one clean visual, one helpful next step.',
          },
        ],
      },
    ],
    outcome:
      'I built MYO Recovery a demand system the team can use: a five-platform media plan forecasting 95–170 qualified leads per month at full budget, a bilingual content calendar the clinic can shoot with its own therapists, and claim-safety rules that keep the marketing within medical ethics. The KPI ranges are planning forecasts that need to be recalibrated after the pilot.',
  },

  // ----------------------------------------------------------
  // 6. ELREHAB HOSPITAL
  // ----------------------------------------------------------
  {
    slug: 'elrehab-hospital',
    client: 'ElRehab Specialized Hospital',
    industry: 'Multi-specialty hospital · Ain Shams, Cairo',
    category: 'Strategy + 90-Day Content System',
    year: '2026',
    lang: 'Arabic',
    title: 'A Facebook system that books clinic visits, not likes',
    summary:
      'A 90-day Arabic Facebook strategy for a neighborhood hospital, built to convert messages into confirmed clinic bookings. It includes a 90-post calendar and a weekly report that ties spend to actual visits.',
    cover: '/covers/elrehab-hospital-cover.webp',
    coverAlt:
      'ElRehab Specialized Hospital case study cover with the hospital logo, a patient at reception, and the headline A Facebook system that books clinic visits',
    objective:
      'Turn the hospital’s Facebook page into a clear, fast booking channel for its clinics and position the hospital as “قريبة وسريعة للبيت كله” (close and fast care for the whole household).',
    deliverables: [
      '12-page Arabic Facebook strategy for clinic bookings',
      '90-day Arabic calendar with every day designed as a finished Facebook visual and Story variants',
      'Message-to-booking patient journey script',
      'Local targeting plan for Ain Shams & El-Marg districts',
      'Weekly reporting framework: spend → messages → bookings → visits',
    ],
    tools: ['Facebook / Meta Ads', 'Messenger', 'Excel', 'Arabic copywriting'],
    stats: [
      { value: '1.4M+', label: 'residents in the two target districts (Ain Shams 614K, El-Marg 799K)' },
      { value: '90', label: 'Arabic post briefs, one per day for the full quarter' },
      { value: '70%', label: 'of ad budget on message-to-booking campaigns' },
      { value: '1', label: 'KPI that matters: confirmed bookings from Facebook per week' },
    ],
    sections: [
      {
        heading: 'The insight: the medical decision starts with a simple question',
        body: 'People in the neighborhood ask before they move: what’s the price, what’s the schedule, which doctor, and is it near home? They prefer asking by message because it is faster, more private, and avoids waiting on hold. I repositioned the page from a broadcast channel into a clear and respectful booking channel with clinic schedules, fast replies, and real photos of the hospital. The positioning line is رعاية قريبة وسريعة للبيت كله. We are not selling luxury. We are selling clarity, respect, and care close to home.',
        images: [
          {
            src: p('elrehab-hospital', 'strategy-cover'),
            alt: 'Arabic strategy cover: a 90-day plan to build local trust and convert messages into real bookings',
            caption: 'The 90-day plan: build local trust, convert messages into real bookings.',
          },
          {
            src: p('elrehab-hospital', 'market-density'),
            alt: 'Local market slide showing Ain Shams 614K and El-Marg 799K population and target age 24–60',
            caption: 'The opportunity is local and dense. The hospital needs depth in its catchment area, not all of Cairo.',
          },
          {
            src: p('elrehab-hospital', 'patient-journey'),
            alt: 'Patient journey diagram from first message through guidance, clarity, confirmation, to visit',
            caption: 'The journey: message → guidance → price clarity → confirmation → visit. Every step reduces anxiety.',
          },
        ],
      },
      {
        heading: 'A content mix engineered for booking and trust together',
        body: 'Every post must prove one clear promise. The mix is 35% clinic schedules and doctors, 25% simple health awareness, 20% reassurance and real photos of the place, 15% clear offers and services, and 5% local content. I kept the weekly rhythm realistic for a hospital team: 5 posts, 2 short videos, and 7 daily Stories. Each weekday has a fixed role, such as clinic schedules on Saturday, direct booking on Monday, and reassurance on Wednesday.',
        images: [
          {
            src: p('elrehab-hospital', 'content-mix'),
            alt: 'Arabic content mix chart: 35% clinic schedules, 25% health awareness, 20% reassurance, 15% offers, 5% local content',
            caption: 'Content serves booking and trust at the same time.',
          },
          {
            src: p('elrehab-hospital', 'weekly-rhythm'),
            alt: 'Weekly posting rhythm in Arabic: 5 posts, 2 videos, 7 stories with a fixed role per day',
            caption: '“Success here comes from consistency, not from one strong post every while.”',
          },
          {
            src: p('elrehab-hospital', 'designed-overview'),
            alt: 'Designed overview dashboard of the 90-day ElRehab Facebook plan with goals and content distribution',
            caption: 'The 90-day plan at a glance: goals, mix, and delivery format.',
          },
        ],
      },
      {
        heading: 'The designed calendar: 90 days, ready to publish',
        body: 'I did not deliver the calendar as a spreadsheet of ideas. Every one of the 90 days became a finished Facebook visual using the hospital’s navy identity, real clinical photography, an Egyptian Arabic hook, a day and date badge, and the same booking CTA. I produced both feed posts and Story variants so the hospital team can publish on schedule instead of improvising.',
        images: [
          {
            src: p('elrehab-hospital', 'designed-cover'),
            alt: 'Designed cover of the ElRehab 90-day Facebook content calendar in the hospital’s navy identity',
            caption: 'The designed 90-day calendar, with one finished visual per day.',
          },
          {
            src: p('elrehab-hospital', 'designed-card-price'),
            alt: 'Designed Arabic post card: know the price and appointment before you leave home',
            caption: '“Know the price and the slot before you move,” the core promise as a daily card.',
          },
          {
            src: p('elrehab-hospital', 'designed-card-fever'),
            alt: 'Designed Arabic post card about a child’s fever and when to worry, with a doctor photo',
            caption: 'Health-awareness card: pediatric fever, answered calmly, ending in a booking CTA.',
          },
          {
            src: p('elrehab-hospital', 'designed-card-parents'),
            alt: 'Designed Arabic post card about checking on elderly parents at a clinic close to home',
            caption: 'The elder-care segment: “check on your parents, close to home.”',
          },
          {
            src: p('elrehab-hospital', 'designed-story'),
            alt: 'Story-format variant of a designed ElRehab calendar visual',
            caption: 'Story variants ship alongside feed posts for the daily 7-story rhythm.',
          },
        ],
      },
      {
        heading: 'Ads that track bookings, and a report that can’t lie',
        body: 'The budget follows one rule: the successful ad is the one that lowers cost per booking, not the one that collects decorative engagement. I assigned 70% to message campaigns for booking, 20% to trust videos, and 10% to testing offers and specialties. The weekly report ties spend to messages, confirmed bookings, actual visits, cost per booking, and reply speed. If we do not measure bookings, we are measuring the wrong thing.',
        quote: {
          text: 'المؤشر الرئيسي: عدد الحجوزات المؤكدة من فيسبوك أسبوعيًا',
          source: 'ElRehab strategy: confirmed weekly bookings from Facebook',
          rtl: true,
        },
        images: [
          {
            src: p('elrehab-hospital', 'budget-split'),
            alt: 'Arabic ad budget split: 70% booking message campaigns, 20% trust videos, 10% offer testing',
            caption: 'Ads follow bookings, not likes.',
          },
          {
            src: p('elrehab-hospital', 'sprint-30'),
            alt: 'First 30 days plan in Arabic: setup, testing, then optimization week by week',
            caption: 'The first 30 days: setup → first message ad → trust video test → double down on what books.',
          },
        ],
      },
    ],
    outcome:
      'I built the hospital a complete Arabic operating system for Facebook: a positioning it can own in its district, 90 days of daily content, a patient journey script for the reply team, and a reporting loop focused on confirmed bookings per week. I designed it around the capacity of a real hospital team.',
  },

  // ----------------------------------------------------------
  // 7. SWIMEGYPT
  // ----------------------------------------------------------
  {
    slug: 'swimegypt',
    client: 'SwimEgypt Academy',
    industry: 'Kids swimming academy · ages 3–12',
    category: 'Strategy + Content System',
    year: '2026',
    lang: 'English + Arabic',
    title: 'Selling relief, not swimming lessons',
    summary:
      'A parent-first, low-budget growth plan for a kids’ swimming academy. It includes 31 bilingual content briefs and a WhatsApp lead funnel built on one insight: parents are not buying lessons, they are buying relief.',
    cover: '/covers/swimegypt-cover.webp',
    coverAlt:
      'SwimEgypt case study cover with the academy logo, a coach helping a child in the pool, and the headline Selling relief, not swimming lessons',
    objective:
      'Generate qualified WhatsApp conversations from parents of children ages 3–12. Organic content earns trust first, and paid boosting starts only after a post proves parent interest.',
    deliverables: [
      '10-page marketing strategy (30-day plan)',
      'August content calendar with 31 bilingual post briefs',
      'Water Confidence Week launch sequence',
      '6-step DM/WhatsApp lead funnel with reply scripts',
      'Referral & local partnership program',
    ],
    tools: ['Instagram', 'WhatsApp Business', 'Facebook', 'Meta Boost', 'Excel'],
    stats: [
      { value: '31', label: 'bilingual post briefs with visual direction' },
      { value: '5', label: 'content pillars: safety, progress, trust, joy, community' },
      { value: '48h', label: 'organic proof window before any post gets boosted' },
      { value: '6', label: 'steps from Reel to booked trial class' },
    ],
    sections: [
      {
        heading: 'The parent insight',
        body: 'The strongest message in this market is emotional and practical at the same time. A parent wants to feel that their child is safe and supervised, becoming braver without pressure, and seen by the coach as an individual. I wrote the brand voice to sound like the calm coach parents hope to meet. It uses phrases such as “first win,” “small brave moments,” and “calm confidence,” while avoiding pressure, fear-based selling, and promises that lessons make children drown-proof.',
        quote: {
          text: 'Parents are not buying lessons. They are buying relief.',
          source: 'SwimEgypt marketing strategy',
        },
        images: [
          {
            src: p('swimegypt', 'strategy-cover'),
            alt: 'SwimEgypt marketing strategy cover: a 30-day parent-first growth plan',
            caption: 'A 30-day parent-first growth plan for safer, calmer, happier swimming starts.',
          },
          {
            src: p('swimegypt', 'parent-insight'),
            alt: 'Parent insight slide explaining the emotional promise behind swimming lessons',
            caption: 'The core emotional promise: we help children love water safely, step by step.',
          },
          {
            src: p('swimegypt', 'content-pillars'),
            alt: 'Five content pillars slide: safety, progress, trust, joy, community',
            caption: 'Five pillars that make the academy feel trusted before parents ask for price.',
          },
        ],
      },
      {
        heading: 'Water Confidence Week and the 31-day system',
        body: 'The first seven days build trust before asking for a sale. Each Reel shows one small, believable step in a child’s confidence, from “the first step” to “why parents choose SwimEgypt.” The full August calendar keeps a manageable rhythm: 2 Reels, 1 carousel, 1 testimonial, and 1 offer per week, plus daily Stories ending with one simple evening CTA: send your child’s age and level. I delivered all 31 briefs ready for production, with a bilingual caption, visual reference, format, platform, content pillar, and posting time.',
        quote: {
          text: 'The first win is not perfect swimming. The first win is feeling safe enough to start.',
          source: 'Hero line, Water Confidence Week',
        },
        images: [
          {
            src: p('swimegypt', 'confidence-week'),
            alt: 'Water Confidence Week plan with seven daily reel themes',
            caption: 'Seven days of small, believable steps. Boost only the best Reel after 48 hours.',
          },
          {
            src: p('swimegypt', 'card-first-win'),
            alt: 'August content card: the first win is entering the water calmly',
            caption: 'Day 1 of the calendar: warm, reassuring, and patient. Every card is bilingual.',
          },
          {
            src: p('swimegypt', 'card-progress'),
            alt: 'Content card: small progress is still progress, with three quick clips of tiny wins',
            caption: 'Progress pillar: one kick, one float, one brave try.',
          },
          {
            src: p('swimegypt', 'card-milestone'),
            alt: 'Content card about the moment children realize they can do it, with a coach celebrating with a child in the pool',
            caption: 'Day 24: the milestone parents are actually paying for.',
          },
          {
            src: p('swimegypt', 'card-comeback'),
            alt: 'Trust-pillar content card: he used to cry before pool time, today he asked to come back',
            caption: 'Day 28: “He used to cry before pool time. Today he asked to come back.” The trust pillar in one line.',
          },
        ],
      },
      {
        heading: 'A funnel where a parent always knows the next small step',
        body: 'A Reel or Story creates trust → the parent sends a DM or WhatsApp message → we ask about age and comfort level → recommend the right class → book a trial or assessment → follow up gently after 24 hours. Paid spend only starts after organic proof. I would post organically, wait 48 hours, then boost the winner based on saves, parent comments, and WhatsApp messages rather than likes. The best ad is the one that creates qualified WhatsApp conversations, not cheap likes.',
        images: [
          {
            src: p('swimegypt', 'lead-funnel'),
            alt: 'Six-step lead funnel from Reel to booked trial with gentle follow-up',
            caption: 'The 6-step funnel, including the exact first reply scripted for the academy.',
          },
          {
            src: p('swimegypt', 'boosting-rules'),
            alt: 'Low-budget boosting rules: do not boost everything, choose by intent, optimize for messages',
            caption: 'Low-budget discipline: spend only after organic content shows parent interest.',
          },
        ],
      },
    ],
    outcome:
      'I built SwimEgypt a first-month growth system that a small academy can actually run: 31 ready-to-shoot briefs, scripted WhatsApp replies, a referral offer, and boost rules that protect a low budget. I measure success through parent conversations, WhatsApp leads, trial bookings, and cost per lead, not vanity reach.',
  },

  // ----------------------------------------------------------
  // 8. GENIO ACADEMY
  // ----------------------------------------------------------
  {
    slug: 'genio-academy',
    client: 'Genio Academy',
    industry: 'Digital skills academy · Cairo',
    category: 'Market Research + Growth Strategy + Content System',
    year: '2026',
    lang: 'English + Arabic',
    title: 'Positioning an academy around proof, not promises',
    summary:
      'Market research, competitor intelligence, brand strategy, paid media, CRO, and a 90-day growth roadmap for a Cairo digital-skills academy. The project also includes a 30-post visual playbook designed in the brand’s identity.',
    cover: '/covers/genio-academy-cover.webp',
    coverAlt:
      'Genio Academy case study cover with the academy logo, students reviewing creative work, and the headline Portfolio proof, not course promises',
    objective:
      'Build Genio’s first repeatable lead and conversion engine, targeting 600–1,200 qualified WhatsApp leads in 90 days by making practical career proof the center of the brand story.',
    deliverables: [
      '25-page marketing strategy: research → positioning → funnel → budget',
      'Competitor gap analysis & 4-segment audience model',
      'Offer ladder (EGP 500 workshop → EGP 45K+ pathway)',
      'EGP 40,000/month paid media plan with 4-week optimization cycle',
      '30-post July visual playbook, fully designed in brand identity',
      'AI Camp lead campaign: vertical video creative, published Reel, and Meta results evidence',
    ],
    tools: ['Meta Ads', 'TikTok Ads', 'Google Search', 'YouTube', 'WhatsApp Business', 'LinkedIn'],
    stats: [
      { value: '600–1,200', label: 'qualified WhatsApp leads targeted in 90 days' },
      { value: 'EGP 40K', label: 'monthly paid media plan across 5 channels' },
      { value: '30', label: 'post briefs designed pixel-by-pixel in the Genio identity' },
      { value: '5 min', label: 'WhatsApp response-time target built into the sales system' },
      { value: '45', label: 'Meta leads in the supplied AI Camp campaign snapshot at EGP 8.56 per lead' },
    ],
    sections: [
      {
        heading: 'Research first: the gap is proof, not course supply',
        body: 'My research mapped what learners in Cairo actually buy on: employability, portfolio outcomes, price clarity, and installments. Most competitors sell courses, but very few show student work or explain the path clearly. That led to the positioning “Cairo’s practical, portfolio-led academy” and the line “Learn it. Prove it. Use it.” Every campaign must answer five learner questions: What will I learn? What will I build? How will it help? Who guides me? What does it cost?',
        quote: {
          text: 'The gap is not course supply. It is trusted, visible career proof.',
          source: 'Market opportunity analysis, Genio strategy',
        },
        images: [
          {
            src: p('genio-academy', 'strategy-cover'),
            alt: 'Genio Academy media strategy cover with the Learn it, Prove it, Use it tagline',
            caption: 'Market research, competitor intelligence, brand strategy, paid media, and CRO in one document.',
          },
          {
            src: p('genio-academy', 'market-opportunity'),
            alt: 'Market opportunity slide: learner need, buying criteria, competitor gap',
            caption: 'Learner need, buying criteria, and the competitor gap Genio can own.',
          },
          {
            src: p('genio-academy', 'objectives-90'),
            alt: '90-day objectives: 600–1,200 qualified WhatsApp leads, 3–5 tracks tested, 30+ proof assets, 5 minute response target',
            caption: 'The 90-day scoreboard: validation before scale.',
          },
        ],
      },
      {
        heading: 'An offer ladder and a funnel built for WhatsApp',
        body: 'Instead of selling one expensive course cold, the strategy moves learners up a ladder: free path-finder quiz → 1-day workshop (EGP 500–1,500) → 2–4 week sprint → 6–10 week course → 3–6 month pathway (EGP 12,000–45,000+). The funnel’s job is to create warmer, better-informed WhatsApp conversations, backed by an EGP 40K/month media plan: Meta as the main engine (45%), TikTok for low-cost discovery (20%), Google for high-intent searches (15%), YouTube retargeting (10%), and a testing reserve (10%).',
        images: [
          {
            src: p('genio-academy', 'offer-ladder'),
            alt: 'Offer ladder from free quiz to 3–6 month pathway with EGP price ranges',
            caption: 'Trial → skill confidence → portfolio proof → career pathway.',
          },
          {
            src: p('genio-academy', 'funnel'),
            alt: 'Funnel strategy slide: awareness, engagement, traffic, lead capture, conversion, referral',
            caption: 'The growth engine simplified around six stages.',
          },
          {
            src: p('genio-academy', 'media-budget'),
            alt: 'Paid media budget slide allocating EGP 40,000 monthly across Meta, TikTok, Google, YouTube and testing reserve',
            caption: 'EGP 40K/month with a 4-week test-cut-scale-retarget cycle.',
          },
          {
            src: p('genio-academy', 'action-plan'),
            alt: '90-day action plan: build funnel foundation, launch content, start paid acquisition, scale what converts',
            caption: 'Days 1–90: build → launch → acquire → scale what converts.',
          },
        ],
      },
      {
        heading: 'A 30-post playbook, designed to the pixel',
        body: 'The July playbook turns the strategy into 30 finished creative briefs. Each one includes the date, objective, visual concept, tone of voice, caption, and a designed mockup in Genio’s identity: navy for authority, purple for energy, and magenta for CTAs. The hooks speak to a real market anxiety: “Your degree is not the proof employers ask for.” “Media buying is not boosting posts.” “Clients do not buy your intention. They buy proof.” Every post gives the audience a reason to believe Genio’s promise.',
        images: [
          {
            src: p('genio-academy', 'identity-rules'),
            alt: 'Visual identity rules slide with the Genio color system: navy, purple, magenta, lavender',
            caption: 'The visual system that keeps 30 posts feeling like one brand.',
          },
          {
            src: p('genio-academy', 'content-mix'),
            alt: 'July content mix: 9 awareness, 9 engagement, 12 traffic posts across carousels, reels, images and video',
            caption: 'The month’s mix: 30 posts balanced across awareness, engagement, and traffic.',
          },
          {
            src: p('genio-academy', 'card-post01'),
            alt: 'Designed post mockup: your degree is NOT the proof employers ask for',
            caption: 'Post 01: the positioning in one hook.',
          },
          {
            src: p('genio-academy', 'card-projects'),
            alt: 'Designed post mockup: build 2–3 portfolio projects in 4 weeks',
            caption: 'The Portfolio Sprint: the signature offer as a post.',
          },
          {
            src: p('genio-academy', 'card-pricing'),
            alt: 'Designed post mockup about transparent pricing with no hidden surprises',
            caption: 'Price transparency builds trust because most competitors hide theirs.',
          },
          {
            src: p('genio-academy', 'card-proof'),
            alt: 'Designed post mockup: clients do not buy your intention, they buy proof',
            caption: 'The freelancer-segment message.',
          },
          {
            src: p('genio-academy', 'card-progress'),
            alt: 'Designed post mockup: this month was about visible progress, with student project thumbnails',
            caption: 'Post 29: closing the month by showing the work, not claiming it.',
          },
        ],
      },
      {
        id: 'paid-ads-evidence',
        heading: 'Paid media proof: creative connected to lead results',
        body: 'The AI Camp campaign shows how I put the strategy into practice. I produced a 27.9-second vertical video and used it in a Meta lead campaign. The supplied Ads Manager snapshot records 45 Meta leads from EGP 385.34 in spend, at EGP 8.56 per lead. This is one verified result, not a promise that every campaign will perform the same way.',
        quote: {
          text: '45 Meta leads · EGP 8.56 cost per lead · EGP 385.34 spent',
          source: 'Supplied Meta Ads Manager campaign snapshot, 21 July 2026',
        },
        images: [
          {
            src: '/work/genio-academy/paid-ads-results.webp',
            alt: 'Meta Ads Manager screenshot for the Genio Academy AI Camp campaign showing 45 Meta leads, EGP 8.56 cost per lead, and EGP 385.34 spent',
            caption: 'The supplied Meta result snapshot: 45 leads at EGP 8.56 CPL from EGP 385.34 spend.',
          },
        ],
        videos: [
          {
            src: '/work/genio-academy/ai-campaign-video.mp4',
            poster: '/work/genio-academy/ai-campaign-poster.webp',
            alt: 'Genio Academy AI Camp vertical campaign video featuring an instructor explaining AI content creation in Arabic',
            caption: 'The 27.9-second vertical AI Camp campaign creative, shown in its native 9:16 format.',
            href: 'https://web.facebook.com/share/r/18rYrUEfjC/?mibextid=wwXIfr',
          },
        ],
      },
    ],
    outcome:
      'I built Genio an end-to-end growth system: positioning grounded in competitor research, an offer ladder that lowers entry risk, a media plan with weekly optimization, a WhatsApp sales process with a 5-minute response rule, and a month of content ready to publish. The work also includes a published AI Camp video and a supplied Meta snapshot recording 45 leads at EGP 8.56 CPL. The wider 90-day target of 600–1,200 qualified leads remains a target to validate, not a guarantee.',
  },

  // ----------------------------------------------------------
  // 9. CITRINE STORE
  // ----------------------------------------------------------
  {
    slug: 'citrine-store',
    client: 'Citrine Store',
    industry: 'Affordable-luxury fashion jewelry · Cairo',
    category: 'Market Research + Brand Strategy + Content System',
    year: '2026',
    lang: 'English + Arabic',
    title: 'Formalizing the way Egypt already shops for jewelry',
    summary:
      'Marketing research, brand strategy, and a 30-day content system for an affordable-luxury jewelry brand. The goal was to move Citrine from a personal-page seller into a structured brand with a traceable path from DM to order.',
    cover: '/covers/citrine-store-cover.webp',
    coverAlt:
      'Citrine Store case study cover with the store wordmark, editorial jewelry styling, and the headline Affordable luxury, made personal',
    objective:
      'Move Citrine from a high-volume personal-page feel into a structured affordable-luxury brand: clearer proof, stronger styling utility, and an easier DM/WhatsApp path to order.',
    deliverables: [
      '14-slide marketing research & brand strategy',
      'Competitive positioning: the “open middle” between fine jewelry and generic resellers',
      'Claims guardrails: what to say, prove, and never publish',
      '30-day calendar: 22 feed posts + 30 daily Story plans, Egyptian Arabic captions',
      '16-slide visual production deck with per-week templates',
      'Phased paid-media budget (EGP 3K → 18K) gated on traceable orders',
    ],
    tools: ['Instagram', 'TikTok', 'WhatsApp Business', 'Facebook', 'Meta Ads', 'Excel'],
    stats: [
      { value: '~40%', label: 'of Egypt’s online sales already happen through social channels, so the strategy formalizes existing behavior' },
      { value: '22 + 30', label: 'feed posts and daily Story plans, every caption written in Egyptian Arabic' },
      { value: '5', label: 'content jobs tied to a business result: styling 35%, craft 20%, proof 20%, education 15%, offers 10%' },
      { value: '100%', label: 'of posts carry a source-tagged WhatsApp CTA so every order is traceable' },
    ],
    sections: [
      {
        heading: 'Research: the opportunity is the open middle',
        body: 'Egyptian social commerce already fits Citrine’s model. Roughly 40% of online sales happen through social channels, and 80% of those purchases are on mobile. My audit found a real foundation, including 556 posts and a committed founder, but no conversion system. DM-only discovery kept price, range, and proof hidden. I positioned Citrine between fine-jewelry houses and generic marketplaces: priced like an accessory brand, but photographed, packaged, and written with a fine-jewelry feel.',
        quote: {
          text: 'Citrine does not need a new sales behavior. It needs to formalize what customers already do: discover on social, build trust through content, and close through DM or WhatsApp.',
          source: 'Strategic implication, Citrine market analysis',
        },
        images: [
          {
            src: p('citrine-store', 'strategy-cover'),
            alt: 'Citrine Store marketing research and brand strategy cover in dark chocolate and gold',
            caption: 'The strategy: a focused growth plan for affordable-luxury jewelry in Egypt.',
          },
          {
            src: p('citrine-store', 'market-stats'),
            alt: 'Market opportunity slide: 40% of Egypt online sales via social, 80% mobile, 8.4% category growth, 24M Instagram users',
            caption: 'The market case: social commerce is already the store.',
          },
          {
            src: p('citrine-store', 'brand-audit'),
            alt: 'Brand audit table mapping signals like 556 posts and DM-only discovery to strategic responses',
            caption: 'The audit: the foundation is real; the conversion system is not.',
          },
          {
            src: p('citrine-store', 'open-middle'),
            alt: 'Competitive positioning table showing Citrine’s white space between fine jewelry houses and generic marketplaces',
            caption: 'The open middle: premium presentation and trust at accessory pricing.',
          },
        ],
      },
      {
        heading: 'A premium promise only works when every claim is provable',
        body: 'One exaggerated claim can damage trust in fashion jewelry, so I set clear guardrails. The brand can say “gold-inspired elegance,” but never “real gold.” It can say “handcrafted, designed in Cairo” only when the maker story proves it. There are no non-tarnish guarantees without supplier specifications and no delivery dates before courier confirmation. Three audiences receive the same affordable-luxury promise: the Everyday Elevator (18–24 self-purchase), the Special-Occasion Gifter (25–35), and the Bridal & Trousseau Shopper (22–30).',
        images: [
          {
            src: p('citrine-store', 'audiences'),
            alt: 'Audience strategy slide: the Everyday Elevator, the Special-Occasion Gifter, and the Bridal and Trousseau Shopper',
            caption: 'Three audiences, one promise, and a validation step to turn personas into evidence.',
          },
          {
            src: p('citrine-store', 'content-jobs'),
            alt: 'Growth system slide: five content jobs with percentage weights tied to business results',
            caption: 'Five content jobs, each tied to a business result.',
          },
          {
            src: p('citrine-store', 'execution-90'),
            alt: '90-day execution roadmap with build, launch and decision gate columns per phase',
            caption: 'The 90-day operating system. Every phase ends in a decision gate.',
          },
          {
            src: p('citrine-store', 'paid-growth'),
            alt: 'Paid growth slide with funnel structure and phased test budget from EGP 3,000 to 18,000',
            caption: '“Do not buy reach until every order can be traced.”',
          },
        ],
      },
      {
        heading: '30 days of quiet shine, ready to shoot',
        body: 'I delivered 22 feed posts and 30 daily Story plans across five weeks: Honest Luxury → Everyday Elevated → Summer Bridal Finale → Everyday Shine → Proof & Gifting. Every post includes an Egyptian Arabic caption written in the founder’s voice, creative direction, a proof and approval gate, and a unique source tag (WA-CIT-…) in its WhatsApp CTA. The Sunday KPI review can then trace each order back to the post that created it. The creative idea stays simple: quiet shine, real moments, useful styling.',
        quote: {
          text: 'الفخامة مش لازم تبدأ بسعر عالي',
          source: 'Reel CIT-01 opening hook: “Luxury doesn’t have to start with a high price”',
          rtl: true,
        },
        images: [
          {
            src: p('citrine-store', 'visuals-cover'),
            alt: 'Content visuals deck cover: 22 feed posts and 30 story plans, affordable luxury made personal',
            caption: 'The production deck: affordable luxury, made personal.',
          },
          {
            src: p('citrine-store', 'creative-thesis'),
            alt: 'Creative idea slide: quiet shine, real moments, useful styling; every asset must show, prove, guide, or convert',
            caption: 'Every asset does one job: show, prove, guide, or convert.',
          },
          {
            src: p('citrine-store', 'visual-system'),
            alt: 'Visual system slide with soft editorial palette: ink, lavender, mint, muted gold, warm ivory',
            caption: 'A soft editorial palette that keeps the jewelry warm without making it look yellow.',
          },
          {
            src: p('citrine-store', 'month-arc'),
            alt: '30-day arc slide showing five weekly themes from honest luxury to proof and gifting',
            caption: 'The month moves from trust to styling, then into bridal and proof.',
          },
          {
            src: p('citrine-store', 'week1-templates'),
            alt: 'Week 1 template designs with Arabic hooks for reel cover, carousel cover and social proof',
            caption: 'Three templates that establish the new page immediately, with hooks written in Egyptian Arabic.',
          },
          {
            src: p('citrine-store', 'bridal-week'),
            alt: 'Summer bridal week slide: help her choose without the pressure, five bridal posts',
            caption: 'Bridal content as calm guidance, not a wedding catalogue.',
          },
        ],
      },
    ],
    outcome:
      'I built Citrine a complete brand system: positioning grounded in research, claim rules that protect trust, a 30-day calendar with every Arabic caption ready to publish, weekly visual templates, and a paid-media plan that does not scale until orders can be traced. The page should feel premium before the customer even sees a price.',
  },

  // ----------------------------------------------------------
  // 10. BEST TRADE (B2B)
  // ----------------------------------------------------------
  {
    slug: 'besttrade-b2b',
    client: 'Best Trade',
    industry: 'Commercial fit-out, signage & branded environments · Egypt',
    category: 'B2B Content System',
    year: '2026',
    lang: 'Arabic',
    title: 'A content system for a 6-figure buying decision',
    summary:
      'A complete B2B content operating system for a commercial fit-out and panels supplier: 24 supplied designs translated into a repeatable social-media system, backed by a 30-day Arabic calendar where every piece maps a real decision-maker fear to one qualified next step.',
    cover: '/covers/besttrade-b2b-cover.webp',
    coverAlt:
      'Best Trade case study cover with the company logo, a commercial materials consultation, and the headline A content system for a six-figure buying decision',
    objective:
      'Move commercial interest into qualified conversations. By the end of the content journey, a contractor, showroom, designer, or business owner should know what Best Trade supplies, where it can be used, and what information to send next.',
    deliverables: [
      '33-page content system deck covering all 24 supplied designs',
      'Four recurring content series mapped to the funnel',
      'Per-product creative cards: hook, caption, audience, CTA, verification note',
      '30-day Arabic content calendar with lead-qualifying CTAs',
      'Publishing standard: real project vs AI concept vs verified spec',
    ],
    tools: ['LinkedIn', 'Instagram', 'Facebook', 'TikTok', 'WhatsApp Business', 'Excel'],
    stats: [
      { value: '24', label: 'supplied designs turned into ready-to-publish content cards' },
      { value: '4', label: 'recurring series: product intelligence, applications, project proof, procurement' },
      { value: '30', label: 'calendar days, with qualification questions in every Arabic CTA' },
      { value: '1', label: 'CTA per post, so each piece earns one next step instead of carrying the whole pitch' },
    ],
    sections: [
      {
        heading: 'The communication job: from scroll to specification',
        body: 'Fit-out and panel supply is a six-figure, low-frequency purchase decided by committees under deadline pressure. Nobody impulse-buys a branch rollout. I gave the content one clear job: move a trade buyer through understand → trust → specify → inquire. Four recurring series create recognition without making every post look identical. Each post earns one next step, such as requesting a catalog, sample kit, material list, or quotation, instead of carrying the entire sales pitch.',
        quote: {
          text: 'Every post should earn one next step, not carry the entire sales pitch.',
          source: 'Funnel role, Best Trade content system',
        },
        images: [
          {
            src: p('besttrade-b2b', 'system-cover'),
            alt: 'Content system cover page with Best Trade material sample kits: feel it before you spec it',
            caption: 'The system: 24 supplied designs, one repeatable B2B publishing machine.',
          },
          {
            src: p('besttrade-b2b', 'communication-job'),
            alt: 'Communication job slide showing the four content journey steps: understand, trust, specify, and inquire',
            caption: 'The buyer journey the content is built to move: understand → trust → specify → inquire.',
          },
          {
            src: p('besttrade-b2b', 'content-architecture'),
            alt: 'Content architecture slide with four recurring series: product intelligence, commercial applications, project proof, procurement',
            caption: 'Four recurring series create recognition without repetition.',
          },
          {
            src: p('besttrade-b2b', 'funnel-role'),
            alt: 'Funnel role slide mapping awareness, consideration and conversion to specific content types and CTAs',
            caption: 'Each funnel stage gets its own content types and its own single CTA.',
          },
        ],
      },
      {
        heading: '24 designs, each delivered as a ready creative card',
        body: 'I turned every supplied design into a finished creative card, including fluted, 3D, acoustic, wood-look, concrete-look, marble-look, WPC, MDF, ceiling panels, screens, and bundles. Each card includes the hook, caption, target audience, funnel stage, one CTA, and a “confirm before publishing” note that flags any claim needing verification. The CTAs qualify the lead before sales touches it by asking for wall dimensions, space type, and approximate area. The WhatsApp conversation starts with enough information to quote properly.',
        images: [
          {
            src: p('besttrade-b2b', 'card-fluted'),
            alt: 'Fluted panels creative card: vertical rhythm that gives flat walls more presence, with hook, caption, audience and CTA',
            caption: '“Vertical rhythm that gives flat walls more presence,” one of 24 product cards.',
          },
          {
            src: p('besttrade-b2b', 'card-acoustic'),
            alt: 'Acoustic panels creative card: a quieter-looking wall system, with a note to confirm tested acoustic ratings before publishing',
            caption: 'Acoustic panels: performance claims stay unpublished until test data is verified.',
          },
          {
            src: p('besttrade-b2b', 'card-sample-kits'),
            alt: 'Sample kits creative card: feel it before you spec it, targeted at architects and specifiers',
            caption: 'The procurement series: “Feel it before you spec it.”',
          },
          {
            src: p('besttrade-b2b', 'how-to-specify'),
            alt: 'How to specify it card showing four details that improve the quotation: profile, finish, application, and quantity',
            caption: 'Teaching buyers to send a better brief with the profile, finish, application, and quantity.',
          },
        ],
      },
      {
        heading: 'Project proof: the before/after engine',
        body: 'I turn completed work into a challenge-and-solution story instead of a photo dump. The story opens with the commercial change, shows what the original space was missing, explains the work through physical details buyers can understand, and closes with the business value and a relevant next step. The Beano’s storefront transformation, which I also shot and edited as the Reel on this site, is the template case.',
        images: [
          {
            src: p('besttrade-b2b', 'beanos-story'),
            alt: 'Case story framework using the Beano’s storefront before and after transformation',
            caption: 'Open with the transformation, not a list of services.',
          },
          {
            src: p('besttrade-b2b', 'before-after-evidence'),
            alt: 'Before-and-after evidence slide: keep camera angles comparable so the project feels immediate and credible',
            caption: 'Comparable angles make before/after evidence credible instead of decorative.',
          },
          {
            src: p('besttrade-b2b', 'one-order'),
            alt: 'One order, one environment concept: wall, ceiling, surface and trim selections planned together',
            caption: '“One Order. One Environment.” The bundle story for multi-surface projects.',
          },
          {
            src: p('besttrade-b2b', 'specifier-table'),
            alt: 'The specifier’s sample table visual: comparing finishes in hand before the project is specified',
            caption: 'One of six new visual systems that extend the brand without repeating it.',
          },
        ],
      },
      {
        heading: 'The publishing standard: evidence before claims',
        body: 'I protect credibility by separating what is visible, what is confirmed, and what still needs proof. Real projects appear as evidence only with confirmed usage rights. AI concepts are labeled as visual direction and never presented as completed work. Specifications come only from approved supplier sheets or test reports. The 30-day Arabic calendar follows the same gate: approved copy + approved CTA + ready asset + safe or documented claim = ready to publish. In B2B marketing, one inflated claim can undo months of trust.',
        quote: {
          text: 'أقوى شهادة مش «الشغل ممتاز»… أقواها تحكي إيه كان مقلق العميل.',
          source: '“The strongest testimonial isn’t ‘great work.’ It’s the one that tells what worried the client.” Day 21 brief, Best Trade calendar',
          rtl: true,
        },
        images: [
          {
            src: p('besttrade-b2b', 'publishing-standard'),
            alt: 'Publishing standard slide separating real project, AI concept, verified spec, descriptive copy and one CTA',
            caption: 'The five-line publishing standard that protects the brand’s credibility.',
          },
        ],
      },
    ],
    outcome:
      'I built Best Trade a complete content system: 24 product designs delivered as ready creative cards, four recurring series that keep the feed recognizable, a before-and-after story format, a five-rule publishing standard, and a 30-day Arabic calendar where every piece has a defined audience, fear, hook, CTA, and evidence status. The goal is fewer, more useful conversations and RFQ-ready briefs instead of anonymous likes.',
  },
]

export const getProject = (slug) => projects.find((x) => x.slug === slug)
