import { SERVICES, whatsappLink } from '../data/site'
import Icon, { WhatsAppIcon } from './Icon'
import SectionTitle from './SectionTitle'

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <SectionTitle
          kicker="Nossos serviços"
          title="Cuidado sob medida para cada pet"
          subtitle="Escolha o tratamento ideal e agende em poucos segundos pelo WhatsApp."
        />

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className={`service-card ${s.featured ? 'service-card--featured' : ''}`}
              data-reveal
              style={{ '--delay': `${i * 120}ms` }}
            >
              {s.featured && <span className="service-card__badge">Experiência Premium</span>}
              <div className="service-card__icon">
                <Icon name={s.icon} size={30} />
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
                <WhatsAppIcon size={18} /> Agendar {s.title}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
