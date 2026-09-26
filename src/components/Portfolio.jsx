import { Image as ImageIcon } from 'lucide-react'
import Reveal from './Reveal'

const CATEGORIES = ['UI/UX Design', 'Frontend Implementation', 'Game Development']

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" aria-labelledby="portfolio-heading">
      <Reveal className="section-head">
        <p className="section-eyebrow">Portfolio</p>
        <h2 id="portfolio-heading" className="section-title">
          Selected work
        </h2>
        <p className="section-text">
          Project showcases are being organized by category and will be added here soon.
        </p>
      </Reveal>

      <div className="portfolio__grid">
        {CATEGORIES.map((title, i) => (
          <Reveal
            as="article"
            className="portfolio-card"
            key={title}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <h3 className="portfolio-card__title">{title}</h3>
            <div className="portfolio-card__placeholder">
              <ImageIcon size={26} strokeWidth={1.5} aria-hidden="true" />
              <span>Soon to Upload</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
