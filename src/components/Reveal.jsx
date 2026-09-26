import { useEffect, useRef, useState } from 'react'

/**
 * Small scroll-reveal wrapper. Fades its children up into place the
 * first time they enter the viewport, reusing the existing fade-up
 * keyframe (see .reveal / .reveal.is-visible in index.css) so it reads
 * as part of the same animation system as the hero/nav entrance.
 *
 * Respects prefers-reduced-motion automatically via the global rule
 * in index.css that neutralizes all animation durations.
 */
function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal
