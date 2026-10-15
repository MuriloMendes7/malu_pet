import { whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Icon'

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="wa-float__label">Agende agora</span>
    </a>
  )
}
