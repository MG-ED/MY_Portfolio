import { PenTool, Code2, LayoutGrid, Gamepad2, Workflow } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: PenTool,
    title: 'UI/UX Design',
    items: [
      'User interface design',
      'Website/app interface design',
      'Wireframes',
      'Visual design',
      'Responsive interface concepts',
      'User experience improvements',
    ],
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    items: [
      'Responsive websites',
      'React development',
      'Modern frontend implementation',
      'HTML/CSS/JavaScript development',
      'UI implementation from designs',
      'Mobile-friendly layouts',
    ],
  },
  {
    icon: LayoutGrid,
    title: 'Frontend Implementation',
    items: [
      'Pixel-conscious implementation',
      'Responsive layouts',
      'Component-based development',
      'Interactive UI',
      'Animation integration',
    ],
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    soon: true,
    items: ['2D game development with Godot', 'Gameplay systems', 'UI implementation', 'Interactive experiences'],
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    soon: true,
    items: [
      'Workflow automation',
      'n8n workflows',
      'AI-powered automation concepts',
      'Connecting services and APIs',
      'Automating repetitive tasks',
    ],
  },
]

function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <Reveal className="section-head">
        <p className="section-eyebrow">Services</p>
        <h2 id="services-heading" className="section-title">
          What I can offer
        </h2>
        <p className="section-text">
          Realistic, current-stage services aligned with where Edison&rsquo;s skills are
          today &mdash; not a claim of mastery over every technology listed.
        </p>
      </Reveal>

      <div className="services__grid">
        {SERVICES.map(({ icon: Icon, title, items, soon }, i) => (
          <Reveal
            as="article"
            className="service-card"
            key={title}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="service-card__icon">
              <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div className="service-card__head">
              <h3 className="service-card__title">{title}</h3>
              {soon && <span className="service-card__badge">Soon</span>}
            </div>
            <ul className="service-card__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Services