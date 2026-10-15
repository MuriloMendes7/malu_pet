import banho from '../assets/banho.jpg'
import secagem from '../assets/secagem.jpg'
import tosa from '../assets/tosa.jpg'
import { SPACES } from '../data/site'
import Icon from './Icon'
import SectionTitle from './SectionTitle'

const images = { banho, secagem, tosa }

export default function Space() {
  return (
    <section id="espaco" className="section space">
      <div className="container">
        <SectionTitle
          kicker="Nosso espaço"
          title="Um spa completo, pensado para o bem-estar"
          subtitle="Cada ambiente foi planejado para que o seu pet se sinta seguro, confortável e tranquilo."
          light
        />

        <div className="space__list">
          {SPACES.map((s, i) => (
            <article key={s.id} className={`space-item ${i % 2 ? 'space-item--reverse' : ''}`}>
              <figure className="space-item__media" data-reveal>
                <div className="space-item__frame">
                  <img src={images[s.image]} alt={`${s.kicker} da Malu Pet's`} loading="lazy" />
                </div>
                <span className="space-item__number">0{i + 1}</span>
              </figure>
              <div className="space-item__body" data-reveal style={{ '--delay': '150ms' }}>
                <span className="space-item__kicker">{s.kicker}</span>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>
                      <span className="space-item__check">
                        <Icon name="check" size={14} strokeWidth={2.4} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
