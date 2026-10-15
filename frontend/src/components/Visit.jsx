import { BUSINESS, instagramLink, mapEmbed, mapLink, whatsappLink } from '../data/site'
import Icon, { WhatsAppIcon } from './Icon'
import SectionTitle from './SectionTitle'

export default function Visit() {
  return (
    <section id="visite" className="section visit">
      <div className="container">
        <SectionTitle
          kicker="Visite a gente"
          title="Estamos esperando por vocês"
          light
        />

        <div className="visit__grid">
          <div className="visit__info" data-reveal>
            <div className="info-card">
              <div className="info-card__icon">
                <Icon name="pin" />
              </div>
              <div>
                <h3>Endereço</h3>
                <p>
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.city}
                </p>
                <a href={mapLink} target="_blank" rel="noreferrer" className="link">
                  Como chegar <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__icon">
                <Icon name="clock" />
              </div>
              <div>
                <h3>Horário de funcionamento</h3>
                <dl className="hours">
                  {BUSINESS.hours.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd className={h.time === 'Fechado' ? 'is-closed' : ''}>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__icon">
                <WhatsAppIcon />
              </div>
              <div>
                <h3>WhatsApp</h3>
                <p>{BUSINESS.whatsappDisplay}</p>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="link">
                  Enviar mensagem <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card__icon">
                <Icon name="instagram" />
              </div>
              <div>
                <h3>Instagram</h3>
                <p>@{BUSINESS.instagram}</p>
                <a href={instagramLink} target="_blank" rel="noreferrer" className="link">
                  Seguir no Instagram <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="visit__map" data-reveal style={{ '--delay': '150ms' }}>
            <iframe
              title="Mapa — localização da Malu Pet's"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
