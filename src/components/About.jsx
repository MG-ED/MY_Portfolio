import Reveal from './Reveal'

const FUNDAMENTALS = ['HTML', 'CSS', 'JavaScript']
const FRAMEWORKS = ['React', 'React Native', 'Next.js']
const LEARNING = ['Mastering JavaScript', 'AI Automation', 'n8n', 'Game Development', 'Godot']

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <Reveal className="section-head">
        <p className="section-eyebrow">About</p>
        <h2 id="about-heading" className="section-title">
          Frontend Developer
          <br />+ UI/UX Designer
        </h2>
        <p className="about__intro">
          Currently focused on developing practical skills in frontend development and
          UI/UX design, while continuously expanding programming and technology knowledge.
        </p>
      </Reveal>

      <div className="about__grid">
        <Reveal as="article" className="about__card">
          <h3 className="about__card-title">Programming Fundamentals</h3>
          <ul className="about__tag-list">
            {FUNDAMENTALS.map((item) => (
              <li key={item} className="about__tag">
                {item}
              </li>
            ))}
          </ul>
          <p className="about__card-text">
            Foundational technologies I understands and continues to improve.
          </p>
        </Reveal>

        <Reveal as="article" className="about__card" style={{ animationDelay: '0.06s' }}>
          <h3 className="about__card-title">Frameworks &amp; Technologies</h3>
          <ul className="about__tag-list">
            {FRAMEWORKS.map((item) => (
              <li key={item} className="about__tag">
                {item}
              </li>
            ))}
          </ul>
          <p className="about__card-text">
            Technologies I am learning and using to expand my frontend
            development capabilities.
          </p>
        </Reveal>

        <Reveal as="article" className="about__card" style={{ animationDelay: '0.12s' }}>
          <h3 className="about__card-title">Fast Development with VS Code</h3>
          <p className="about__card-text">
            Visual Studio Code is my main development environment &mdash;
            focused on workflows, reusable components, extensions, and tools
            that help speed up development.
          </p>
        </Reveal>

        <Reveal as="article" className="about__card" style={{ animationDelay: '0.18s' }}>
          <h3 className="about__card-title">Currently Learning</h3>
          <ul className="about__tag-list">
            {LEARNING.map((item) => (
              <li key={item} className="about__tag about__tag--outline">
                {item}
              </li>
            ))}
          </ul>
          <p className="about__card-text">
            I am continuously learning new technologies and expanding my development skills.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default About
