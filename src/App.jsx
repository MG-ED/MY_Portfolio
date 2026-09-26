import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Certificate from './components/Certificate'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <About />
        <Services />
        <Portfolio />
        <Certificate />
      </main>
    </>
  )
}

export default App
