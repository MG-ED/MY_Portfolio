import Button from './Button'
import photographerImg from '../assets/photographer.png'

function Hero() {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__content">
        <h1 className="hero__title">
          Make your 
          <br />
          <span className="hero__title--highlight">Real Website</span>
          <br />
          Ideas into
        </h1>

        <Button href="#" variant="solid" className="hero__cta">
          More portfolio
        </Button>
      </div>

      <div className="hero__visual">
        {/*
          Abstract geometric backdrop — a large dark parallelogram that
          sits behind the portrait, ~30% of the hero's total width.
        */}
        <div className="hero__bg-shape" aria-hidden="true" />

        <div className="hero__portrait">
          <img
            src={photographerImg}
            alt="Portrait of Edison Estrabela, photographer, set against a dark studio background"
            className="hero__image"
          />
          <div className="hero__portrait-overlay" aria-hidden="true" />
          <p className="hero__portrait-name">
            Edison
            <br />
            Estrabela
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero