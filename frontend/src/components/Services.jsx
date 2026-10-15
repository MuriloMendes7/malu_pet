import { useState } from 'react'
import { SERVICES, SERVICE_FILTERS, whatsappLink } from '../data/site'
import Icon, { WhatsAppIcon } from './Icon'
import SectionTitle from './SectionTitle'

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filteredServices =
    activeFilter === 'todos'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeFilter)

  return (
    <section id="servicos" className="section services">
      <div className="container">
        <SectionTitle
          kicker="Nossos Serviços & Cuidados"
          title="Estética animal de alto padrão com carinho de verdade"
          subtitle="Especialistas em Spitz Alemão / Lulu da Pomerânia e Tosa Bebê. Escolha o serviço desejado e agende diretamente pelo WhatsApp."
        />

        {/* Banner de Especialidade */}
        <div className="specialty-banner" data-reveal>
          <div className="specialty-banner__content">
            <span className="specialty-banner__tag">
              <Icon name="crown" size={16} /> Destaque Malu Pet’s
            </span>
            <h3>Especialistas em Lulu / Spitz Alemão &amp; Tosa Bebê</h3>
            <p>
              Técnicas dedicadas à preservação do subpelo, densidade e saúde da pelagem dupla dos Spitz, além do corte e harmonização facial artística da Tosa Bebê.
            </p>
          </div>
          <div className="specialty-banner__actions">
            <a
              className="btn btn--gold"
              href={whatsappLink('Olá! Gostaria de agendar um horário com a especialista em Spitz / Tosa Bebê 👑🐾')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} /> Agendar com Especialista
            </a>
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="services__filters" data-reveal>
          {SERVICE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`filter-btn ${activeFilter === f.id ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid de Serviços */}
        <div className="services__grid" data-reveal>
          {filteredServices.map((s) => (
            <article
              key={s.id}
              className={`service-card ${s.featured ? 'service-card--featured' : ''}`}
            >
              {s.badge && <span className="service-card__badge">{s.badge}</span>}
              <div className="service-card__icon">
                <Icon name={s.icon} size={28} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} strokeWidth={2} /> {item}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${s.featured ? 'btn--gold' : 'btn--outline'} service-card__cta`}
                href={whatsappLink(s.message)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={18} /> Agendar no WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
