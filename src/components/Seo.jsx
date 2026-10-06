import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { metaForPath } from '../seo.js'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, val] = selector.match(/\[(\w+)="([^"]+)"\]/) || []
    if (key && val) el.setAttribute(key, val)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

/**
 * Keeps title, description, canonical and social tags in sync with the
 * current route. The build step writes the same values into static HTML,
 * so crawlers get them without running JS.
 */
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaForPath(pathname)
    const absoluteImage = meta.image?.startsWith('http') ? meta.image : site.url + meta.image

    document.title = meta.title
    setMeta('meta[name="description"]', 'content', meta.description)
    setMeta('meta[property="og:title"]', 'content', meta.title)
    setMeta('meta[property="og:description"]', 'content', meta.description)
    setMeta('meta[property="og:image"]', 'content', absoluteImage)
    setMeta('meta[property="og:url"]', 'content', meta.canonical)
    setMeta('meta[property="og:type"]', 'content', meta.type)
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', meta.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.description)
    setMeta('meta[name="twitter:image"]', 'content', absoluteImage)
    setMeta('meta[name="robots"]', 'content', meta.noindex ? 'noindex, follow' : 'index, follow')

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', meta.canonical)
  }, [pathname])

  return null
}
