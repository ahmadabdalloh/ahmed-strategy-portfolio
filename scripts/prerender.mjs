// ============================================================
// Writes a real HTML file for every route so crawlers and link
// previews get content and correct metadata without running JS.
// Run after `vite build` and `vite build --ssr`.
// ============================================================
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = process.env.DIST_DIR || join(root, 'dist')
const ssrDir = process.env.SSR_DIR || join(root, '.ssr')

const { renderRoute, routes, metaForPath, personJsonLd, site } =
  await import(pathToFileURL(join(ssrDir, 'entry-static.js')))

const template = await readFile(join(dist, 'index.html'), 'utf8')
const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const absolute = (path) => (path?.startsWith('http') ? path : site.url + path)

function headFor(meta) {
  return [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<link rel="canonical" href="${escape(meta.canonical)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="${escape(site.name)}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${escape(meta.canonical)}" />`,
    `<meta property="og:image" content="${escape(absolute(meta.image))}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${escape(absolute(meta.image))}" />`,
    `<script type="application/ld+json">${JSON.stringify(personJsonLd())}</script>`,
  ].join('\n    ')
}

// Strip every managed head tag from the template — including any this
// script wrote on a previous run — so re-running never duplicates them.
const stripped = template
  .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
  .replace(/<meta\s+name="(description|robots|twitter:[^"]*)"[^>]*>\s*/gi, '')
  .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
  .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
  .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '')
  .replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script)/i, '<div id="root"></div>\n    ')

async function writeRoute(path, { filename } = {}) {
  const meta = metaForPath(path)
  let appHtml = ''
  try {
    appHtml = renderRoute(path)
  } catch (err) {
    console.warn(`  ! render failed for ${path}: ${err.message}`)
  }

  const html = stripped
    .replace('</head>', `  ${headFor(meta)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const out = filename
    ? join(dist, filename)
    : join(dist, path === '/' ? 'index.html' : `${path.replace(/^\//, '')}/index.html`)
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, html)
  return { path, bytes: html.length }
}

const results = []
for (const path of routes) results.push(await writeRoute(path))
results.push(await writeRoute('/404', { filename: '404.html' }))

// sitemap
const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map(
    (p) => `  <url>
    <loc>${site.url}${p === '/' ? '/' : p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p === '/' ? '1.0' : p === '/paid-ads' ? '0.9' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`prerendered ${results.length} routes`)
for (const r of results) console.log(`  ${r.path.padEnd(28)} ${(r.bytes / 1024).toFixed(1)} kB`)
console.log('  sitemap.xml')
