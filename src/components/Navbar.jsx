import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Certificate', href: '#certificate' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close the mobile menu on Escape, and whenever the viewport grows
  // back to desktop width so it never gets stuck open.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    function handleResize() {
      if (window.innerWidth > 900) setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo">
          Welcome<span className="navbar__logo-dot">.</span>
        </a>

        <nav
          id="navbar-menu"
          className={`navbar__nav${isOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="navbar__link"
                  aria-current={label === 'Home' ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#" variant="solid" className="navbar__cta navbar__cta--mobile">
            Contact me
          </Button>
        </nav>

        <Button href="#" variant="solid" className="navbar__cta navbar__cta--desktop">
          Contact me
        </Button>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Navbar