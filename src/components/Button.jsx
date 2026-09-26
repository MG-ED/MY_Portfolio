/**
 * Reusable CTA / link button.
 *
 * variant="solid" -> filled red CTA (nav CTA, hero CTA)
 * variant="link"   -> text link with a trailing icon (e.g. "Discover more")
 *
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
function Button({
  children,
  href,
  onClick,
  variant = 'solid',
  icon = null,
  className = '',
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        <span>{children}</span>
        {icon}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      <span>{children}</span>
      {icon}
    </button>
  )
}

export default Button
