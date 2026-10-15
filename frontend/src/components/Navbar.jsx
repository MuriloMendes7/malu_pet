import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import { NAV, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Icon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__brand" onClick={close} aria-label="Malu Pet's — início">
          <img src={logo} alt="" width="48" height="48" />
          <span>
            <strong>Malu Pet's</strong>
            <small>Estética Animal</small>
          </span>
        </a>

        {/* Backdrop para fechar ao tocar fora no mobile */}
        <div
          className={`nav__overlay ${open ? 'nav__overlay--open' : ''}`}
          onClick={close}
          aria-hidden="true"
        />

        <nav className="nav__links" aria-label="Principal">
          <div className="nav__links-header">
            <span className="nav__links-title">Navegação</span>
          </div>

          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}

          <a
            className="btn btn--gold nav__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <WhatsAppIcon size={18} /> Agendar
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
