import { HIGHLIGHTS, whatsappLink } from '../data/site'
import Icon, { WhatsAppIcon } from './Icon'
import SectionTitle from './SectionTitle'

export default function Highlights() {
  return (
    <section id="diferenciais" className="section highlights">
      <div className="container">
        <SectionTitle
          kicker="Por que a Malu Pet's"
          title="Detalhes que fazem toda a diferença"
        />

        <div className="highlights__grid">
          {HIGHLIGHTS.map((h, i) => (
            <div key={h.title} className="highlight" data-reveal style={{ '--delay': `${i * 80}ms` }}>
              <div className="highlight__icon">
                <Icon name={h.icon} size={26} />
              </div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>

        <div className="cta-banner" data-reveal>
          <div>
            <h3>Pronto para mimar o seu pet?</h3>
            <p>Fale com a gente e reserve o melhor horário para o seu bebê.</p>
          </div>
          <a className="btn btn--gold btn--lg" href={whatsappLink()} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={20} /> Agendar agora
          </a>
        </div>
      </div>
    </section>
  )
}
