import { ArrowRight } from 'lucide-react'
import Button from './Button'

function ExperienceSection() {
  return (
    <section className="experience" aria-labelledby="experience-heading">
      <div className="experience__col">
        <h2 id="experience-heading" className="experience__title">
          How we make
          <br />
          user experiences
        </h2>
      </div>

      <div className="experience__col experience__col--body">
        <p className="experience__text">
          We turn fleeting moments into lasting visual stories, shaped by
          composition, natural light, and an honest eye behind the lens.
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
