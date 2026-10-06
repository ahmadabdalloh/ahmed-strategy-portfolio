// Describe the evidence shown, rather than imply every strategy was implemented.
export const projectContext = {
  'cloud9-nursery': {title: 'Organic content, Reel production, and parent enquiries', status: 'Executed content · Results available', period: '2026 · July–October materials', role: 'Research, content planning, bilingual scripts, on-site capture, Reel editing, reporting, and tour-site build.', evidence: 'Platform results and tracker snapshots are dated separately. Messages are not confirmed enrolments.'},
  'genio-academy': {title: 'Content strategy and AI Camp lead generation', status: 'Strategy + paid campaign evidence', period: '2026 · Paid snapshot: 21 July', role: 'Research, positioning, content planning, video creative, and Meta lead generation.', evidence: 'The campaign shows 45 Meta leads, not verified student registrations. Strategy forecasts are separate from actual results.'},
  'kavun-cafe': {title: 'Café content strategy and a live bilingual menu', status: 'Strategy deliverables + live menu', period: '2026 · August–September materials', role: 'Growth planning, content briefs, creative direction, and an AI-assisted React/Vite menu build.', evidence: 'The strategy and menu are shown as deliverables. Branch visits, sales, and campaign revenue are not measured here.'},
  'juan-valdez-egypt': {title: 'Brand research and an Instagram content plan', role: 'Brand research, audience analysis, content planning, and creative briefs.'},
  'velora-fit': {title: 'Activewear launch strategy and creative planning', status: 'Founder project · Launch planning', role: 'Positioning, audience profiles, launch planning, and AI-assisted visual direction.'},
  'myo-recovery': {title: 'Clinic content planning and short-form video', status: 'Strategy deliverables + video sample', role: 'Media planning, bilingual content briefs, and short-form production.'},
  'elrehab-hospital': {title: 'Arabic clinic content and booking-funnel planning', role: 'Arabic content strategy, a 90-day calendar, and booking-funnel planning.'},
  'swimegypt': {title: 'Parent-focused swimming academy content', role: 'Audience research, parent-focused messaging, bilingual briefs, and enquiry-funnel planning.'},
  'citrine-store': {title: 'Jewelry brand strategy and social content', role: 'Brand research, positioning, audience analysis, and bilingual content planning.'},
  'besttrade-b2b': {title: 'B2B content, project storytelling, and Reels', status: 'Content deliverables + video sample', role: 'B2B content planning, creative direction, project storytelling, and Reel capture and editing.'},
}

export function contextFor(slug) {
  return {
    status: 'Strategy and content deliverables',
    period: '2026 project materials',
    evidence: 'This case shows the work prepared. Forecasts and proposed targets are not achieved results; business outcomes are not reported here.',
    ...projectContext[slug],
  }
}
