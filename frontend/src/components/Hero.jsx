import logo from '../assets/logo.webp'
import { BUSINESS, whatsappLink } from '../data/site'
import GoldDust from './GoldDust'
import Icon, { WhatsAppIcon } from './Icon'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <GoldDust count={80} seed={3} />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <Icon name="crown" size={16} /> {BUSINESS.tagline}
          </p>
          <h1 className="hero__title">
            Seu pet tratado
            <span className="hero__script">como realeza</span>
          </h1>
          <p className="hero__lead">
            Banho, tosa e banho luxo em um espaço pensado nos mínimos detalhes: água filtrada e
            aquecida, ambiente climatizado e muito carinho em cada atendimento.
          </p>
          <div className="hero__actions">
            <a className="btn btn--gold btn--lg" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> Agendar pelo WhatsApp
            </a>
            <a className="btn btn--ghost btn--lg" href="#espaco">
              Conhecer o espaço <Icon name="arrow" size={18} />
            </a>
          </div>
          <ul className="hero__meta">
            <li>
              <Icon name="clock" size={18} /> Ter a Sáb · 09h às 18h
            </li>
            <li>
              <Icon name="pin" size={18} /> {BUSINESS.address}
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__ring hero__ring--inner" aria-hidden="true" />
          <img
            className="hero__logo"
            src={logo}
            alt="Logo Malu Pet's Estética Animal — Shih Tzu com coroa dourada"
            width="460"
            height="460"
          />
        </div>
      </div>

      <a href="#servicos" className="hero__scroll" aria-label="Rolar para serviços">
        <span />
      </a>
    </section>
  )
}
