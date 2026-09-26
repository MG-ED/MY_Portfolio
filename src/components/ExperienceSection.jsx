import { ArrowRight } from 'lucide-react'
import Button from './Button'

function ExperienceSection() {
  return (
    <section className="experience" aria-labelledby="experience-heading">
      <div className="experience__col">
        <h2 id="experience-heading" className="experience__title">
          How we make
          <br />
          digital experiences
        </h2>
      </div>

      <div className="experience__col experience__col--body">
        <p className="experience__text">
          I turn ideas into clean, responsive interfaces — blending 
          thoughtful UI/UX design with solid frontend code, one component at a time.
        </p>

        <Button
          href="#"
          variant="link"
          className="experience__link"
          icon={<ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />}
        >
          Discover more
        </Button>
      </div>
    </section>
  )
}

export default ExperienceSection
