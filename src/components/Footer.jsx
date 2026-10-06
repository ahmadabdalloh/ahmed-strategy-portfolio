import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {site.name} · {site.role}</p>
        <div className="links">
          <a href={site.cv} download>CV</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
