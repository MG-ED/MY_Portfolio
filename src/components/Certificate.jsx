import { Award } from 'lucide-react'
import Reveal from './Reveal'

const CATEGORIES = ['Frontend Development', 'AI Automation', 'Game Development']

function Certificate() {
  return (
    <section id="certificate" className="certificate" aria-labelledby="certificate-heading">
      <Reveal className="section-head">
        <p className="section-eyebrow">Certificate</p>
        <h2 id="certificate-heading" className="section-title">
          Certifications
        </h2>
        <p className="section-text">
          Certificates aren&rsquo;t available yet &mdash; this space is reserved for them
          as they&rsquo;re earned.
        </p>
      </Reveal>

      <div className="certificate__grid">
        {CATEGORIES.map((title, i) => (
          <Reveal
            as="article"
            className="certificate-card"
            key={title}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="certificate-card__icon">
              <Award size={20} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="certificate-card__title">{title}</h3>
            <div className="certificate-card__placeholder">
              <span>Soon to Upload</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Certificate
