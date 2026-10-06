import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { featuredSlugs } from '../data/site.js'

export default function NotFound() {
  const suggestions = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)

  return (
    <section className="section notfound">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>That page moved, or never existed.</h1>
        <p className="lede">
          Nothing here. The case studies below are the best place to pick the thread back up.
        </p>
        <div className="notfound-actions">
          <Link className="btn btn-primary" to="/">Back to home</Link>
          <Link className="btn btn-dark" to="/paid-ads">Paid ad results</Link>
        </div>
        <ul className="notfound-list">
          {suggestions.map((pr) => (
            <li key={pr.slug}>
              <Link to={`/work/${pr.slug}`}>
                <strong>{pr.client}</strong>
                <span>{pr.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
