import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

const SERVICE_OPTIONS = ['UI/UX Design', 'Front-end Implementation', 'Frontend Development']

const initialFormState = {
  name: '',
  email: '',
  services: [],
}

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')
  const firstFieldRef = useRef(null)

  // Lock page scroll, focus the first field, and let Escape close it
  // while the modal is open.
  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstFieldRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Reset the form shortly after it closes rather than instantly, so it
  // doesn't visibly clear itself while the modal is still fading out.
  useEffect(() => {
    if (isOpen) return
    const timeout = setTimeout(() => {
      setFormData(initialFormState)
      setStatus('idle')
      setErrorMessage('')
    }, 200)
    return () => clearTimeout(timeout)
  }, [isOpen])

  if (!isOpen) return null

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function toggleService(service) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('error')
    setErrorMessage('This is not available due to maintenance.')
  }

  function handleBackdropMouseDown(event) {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="contact-modal" role="presentation" onMouseDown={handleBackdropMouseDown}>
      <div className="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <span className="contact-modal__badge">Soon</span>
        <button type="button" className="contact-modal__close" onClick={onClose} aria-label="Close contact form">
          <X size={20} aria-hidden="true" />
        </button>

        {status === 'success' ? (
          <div className="contact-modal__success">
            <h2 id="contact-modal-title" className="contact-modal__title">
              Message sent
            </h2>
            <p className="contact-modal__success-text">
              Thanks{formData.name ? `, ${formData.name}` : ''} — I&rsquo;ll get back to you soon.
            </p>
            <button type="button" className="btn btn--solid" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="contact-modal__form" onSubmit={handleSubmit} noValidate>
            <h2 id="contact-modal-title" className="contact-modal__title">
              Get in touch
            </h2>
            <p className="contact-modal__subtitle">Tell me a bit about what you need.</p>

            <div className="contact-modal__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                ref={firstFieldRef}
                value={formData.name}
                onChange={(event) => updateField('name', event.target.value)}
                required
              />
            </div>

            <div className="contact-modal__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) => updateField('email', event.target.value)}
                required
              />
            </div>

            <fieldset className="contact-modal__field">
              <legend>Services you&rsquo;re interested in</legend>
              <div className="contact-modal__options">
                {SERVICE_OPTIONS.map((service) => (
                  <label key={service} className="contact-modal__option">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => toggleService(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </fieldset>

            {status === 'error' && (
              <p className="contact-modal__error" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="btn btn--solid contact-modal__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal