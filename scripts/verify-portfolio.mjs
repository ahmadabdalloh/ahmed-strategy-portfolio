import assert from 'node:assert/strict'
import fs from 'node:fs'
import { renderRoute, routes, metaForPath } from '../.ssr/entry-static.js'
import designs from '../src/data/aiDesigns.json' with { type: 'json' }
import { projects } from '../src/data/projects.js'
import { contextFor } from '../src/data/projectContext.js'
import { paidAccounts } from '../src/data/paidAccounts.js'

assert.equal(designs.length, 57)
assert.equal(new Set(designs.map((d) => d.id)).size, 57)
assert.equal(designs.filter((d) => d.featured).length, 6)
assert.equal(new Set(designs.map((d) => d.group)).size, 5)
for (const design of designs) {
  for (const path of [design.src, design.thumb]) assert.ok(fs.existsSync(`public${path}`), path)
}
for (const project of projects) assert.ok(contextFor(project.slug).title, project.slug)
for (const route of routes) {
  const html = renderRoute(route)
  assert.match(html, /<h1[ >]/, route)
  assert.doesNotMatch(html, /That page does not exist/, route)
  assert.ok(metaForPath(route).canonical.endsWith(route === '/' ? '/' : route), route)
}
const gallery = renderRoute('/ai-designs')
assert.match(gallery, /57 supplied designs/)
assert.match(gallery, /<dialog/)
const home = renderRoute('/')
assert.ok(home.indexOf('/work/cloud9-nursery') < home.indexOf('/work/genio-academy'))
assert.ok(home.indexOf('id="reels"') < home.indexOf('id="ai-home-title"'))
assert.match(home, /PDF · two pages/)
assert.match(home, /https:\/\/wa.me\/201118871492\?text=/)
const cloud9 = renderRoute('/work/cloud9-nursery')
assert.ok(cloud9.indexOf('id="organic-results"') < cloud9.indexOf('id="production-operations"'))
assert.doesNotMatch(cloud9, /sharepoint\.com/)
assert.equal(paidAccounts.reduce((count, account) => count + account.campaigns.filter((c) => account.slug === 'greener' ? c.result === 342 || c.title === 'Hiring campaign' : c.result === 419).length, 0), 3)
console.log(`Verified ${routes.length} routes, 57 designs, project context, evidence order, and WhatsApp destination.`)
