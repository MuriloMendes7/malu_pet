import logo from '../assets/logo.webp'
import { BUSINESS, NAV, instagramLink, whatsappLink } from '../data/site'
import Icon, { WhatsAppIcon } from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="" width="72" height="72" loading="lazy" />
          <div>
            <strong>Malu Pet's</strong>
            <span>Estética Animal</span>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Icon name="instagram" size={20} />
          </a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon size={20} />
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} Malu Pet's Estética Animal · {BUSINESS.address} · {BUSINESS.city}
        </p>
        <p className="footer__love">
          Feito com <Icon name="paw" size={14} /> para quem ama pets
        </p>
      </div>
    </footer>
  )
}
