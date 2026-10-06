import Reveal from '../components/Reveal.jsx'

const products = [
  {
    number: '01',
    eyebrow: 'Education · Lead capture',
    title: 'Cloud9 nursery tour booking',
    summary:
      'A warm, bilingual booking journey that turns social interest into a structured tour request and gives the admissions team a clear operational handoff.',
    image: '/work/digital-products/cloud9-tour-booking.webp',
    imageAlt: 'Cloud9 nursery tour booking website showing the bilingual hero and three-step visit journey',
    role: 'Product strategy · UX writing · bilingual experience · front-end build',
    features: [
      'English and Arabic interface',
      'Three-step parent journey',
      'Secure Microsoft Forms embed',
      'Excel-backed tour tracking workflow',
    ],
    links: [
      { label: 'Open the live booking site', href: 'https://cloud9-tour-booking.vercel.app/' },
    ],
  },
  {
    number: '02',
    eyebrow: 'Logistics · Corporate website',
    title: 'Inter Freight Cargo',
    summary:
      'A bilingual freight website that turns a complex service portfolio into a clear route from discovery to quote request or shipment update.',
    image: '/work/digital-products/inter-freight-cargo.webp',
    imageAlt: 'Inter Freight Cargo website hero showing a container port and the message Clarity in motion',
    role: 'Information architecture · UX writing · bilingual content · front-end build',
    features: [
      'Arabic and English experience',
      'Five connected service pages',
      'Quote-request and contact journeys',
      'Dedicated shipment-status route',
    ],
    links: [
      { label: 'Open the live freight site', href: 'https://inter-freight-cargo.vercel.app/' },
    ],
  },
  {
    number: '03',
    eyebrow: 'Healthcare · Internal operations',
    title: 'ElRehab attendance system',
    summary:
      'A mobile-first attendance entry point for hospital staff, paired with a protected HR area and clear Arabic instructions for day-to-day adoption.',
    images: [
      {
        src: '/work/digital-products/elrehab-attendance-qr.webp',
        alt: 'ElRehab hospital attendance QR poster with Arabic instructions',
      },
      {
        src: '/work/digital-products/elrehab-attendance-hr.webp',
        alt: 'Protected ElRehab HR attendance login screen in Arabic',
      },
    ],
    role: 'Workflow design · Arabic UX · mobile interface · front-end build',
    features: [
      'Printable QR onboarding poster',
      'Mobile punch-in entry route',
      'Step-by-step Arabic guidance',
      'Protected HR and manager access',
    ],
    links: [
      { label: 'View the QR entry point', href: 'https://elrehab-attendance.vercel.app/qr' },
      { label: 'View the HR portal', href: 'https://elrehab-attendance.vercel.app/hr' },
    ],
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="M6 14 14 6M8 6h6v6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function DigitalProducts() {
  return (
    <article className="digital-products-page">
      <header className="digital-hero">
        <div className="wrap digital-hero-grid">
          <Reveal>
            <div>
              <p className="eyebrow">Selected digital products</p>
              <h1>Web products built around <em>real workflows.</em></h1>
              <p className="lede">
                Three live products across education, logistics, and healthcare—each designed
                to make the next action clearer for the person using it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="digital-hero-proof" aria-label="Digital product overview">
              <div><strong>3</strong><span>live products</span></div>
              <div><strong>2</strong><span>bilingual experiences</span></div>
              <div><strong>3</strong><span>sectors served</span></div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section digital-product-list" aria-labelledby="digital-products-title">
        <div className="wrap">
          <Reveal>
            <div className="digital-section-head">
              <p className="eyebrow">Strategy → interface → handoff</p>
              <h2 id="digital-products-title">The product is the whole journey.</h2>
              <p>
                I connect the public-facing experience with the operational step behind it:
                a tour request, a freight enquiry, or an attendance action.
              </p>
            </div>
          </Reveal>

          <div className="digital-product-stack">
            {products.map((product, index) => (
              <Reveal key={product.title}>
                <article className={`digital-product${index % 2 ? ' digital-product-reverse' : ''}`}>
                  <div className="digital-product-media">
                    {product.image ? (
                      <img src={product.image} alt={product.imageAlt} width="1440" height="1000" loading="lazy" />
                    ) : (
                      <div className="digital-device-pair">
                        {product.images.map((image) => (
                          <img key={image.src} src={image.src} alt={image.alt} width="520" height="920" loading="lazy" />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="digital-product-copy">
                    <span className="digital-product-number">{product.number}</span>
                    <p className="eyebrow">{product.eyebrow}</p>
                    <h2>{product.title}</h2>
                    <p className="digital-product-summary">{product.summary}</p>
                    <p className="digital-product-role"><strong>My role</strong>{product.role}</p>
                    <ul>
                      {product.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div className="digital-product-links">
                      {product.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}<ArrowIcon />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
