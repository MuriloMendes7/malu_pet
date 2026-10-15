/** Título de seção com ornamento dourado. */
export default function SectionTitle({ kicker, title, subtitle, light = false }) {
  return (
    <header className={`section-title ${light ? 'section-title--light' : ''}`} data-reveal>
      <span className="section-title__kicker">{kicker}</span>
      <h2>{title}</h2>
      <div className="ornament" aria-hidden="true">
        <span />
        <svg viewBox="0 0 40 20" width="40" height="20">
          <path d="M20 2l3 8-3 8-3-8 3-8Z" fill="currentColor" />
          <circle cx="8" cy="10" r="1.6" fill="currentColor" />
          <circle cx="32" cy="10" r="1.6" fill="currentColor" />
        </svg>
        <span />
      </div>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </header>
  )
}
