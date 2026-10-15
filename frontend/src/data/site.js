// Dados centrais do negócio — altere aqui e a página inteira se atualiza.

export const BUSINESS = {
  name: "Malu Pet's",
  tagline: 'Estética Animal',
  whatsapp: '5511947862205',
  whatsappDisplay: '(11) 94786-2205',
  address: 'Av. Alziro Zarur, 3001B',
  city: 'São Paulo — SP',
  hours: [
    { days: 'Terça a Sábado', time: '09h às 18h' },
    { days: 'Domingo e Segunda', time: 'Fechado' },
  ],
  instagram: 'malu.pets',
}

export const whatsappLink = (message = "Olá! Gostaria de agendar um horário na Malu Pet's 🐾") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

export const instagramLink = `https://instagram.com/${BUSINESS.instagram}`

const mapQuery = encodeURIComponent(`${BUSINESS.address}, São Paulo - SP`)
export const mapEmbed = `https://www.google.com/maps?q=${mapQuery}&output=embed`
export const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

export const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#espaco', label: 'Nosso Espaço' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#visite', label: 'Visite' },
]

export const SERVICES = [
  {
    id: 'banho',
    icon: 'drop',
    title: 'Banho',
    description:
      'Banho completo com água filtrada e aquecida na medida certa, produtos adequados ao tipo de pelagem e secagem cuidadosa.',
    items: ['Água filtrada e aquecida', 'Secagem e escovação', 'Perfume e finalização'],
    message: 'Olá! Gostaria de agendar um Banho 🛁',
  },
  {
    id: 'luxo',
    icon: 'crown',
    title: 'Banho Luxo',
    featured: true,
    description:
      'A experiência completa de spa: cuidado extra com a pelagem, produtos premium e acabamento digno de realeza.',
    items: ['Tudo do banho tradicional', 'Hidratação e produtos premium', 'Acabamento especial'],
    message: 'Olá! Gostaria de agendar um Banho Luxo 👑',
  },
  {
    id: 'tosa',
    icon: 'scissors',
    title: 'Tosa',
    description:
      'Tosa feita em sala exclusiva e silenciosa, com equipamentos de primeira linha — para um resultado lindo e sem estresse.',
    items: ['Sala separada e tranquila', 'Equipamentos profissionais', 'Tosa no estilo do seu pet'],
    message: 'Olá! Gostaria de agendar uma Tosa ✂️',
  },
]

export const SPACES = [
  {
    id: 'banho',
    image: 'banho',
    kicker: 'Área de Banho',
    title: 'Água pura, quentinha e cheia de cuidado',
    items: [
      "Água filtrada direto da caixa d'água",
      'Duchas com esferas minerais que purificam ainda mais a água',
      'Aquecedores individuais em cada ducha, mantendo a água bem quentinha',
      'Ar-condicionado para um ambiente sempre climatizado',
    ],
  },
  {
    id: 'secagem',
    image: 'secagem',
    kicker: 'Área de Secagem',
    title: 'Secagem rápida, com muito menos barulho',
    items: [
      'Sopradores embutidos no teto, para reduzir o ruído',
      'Secadores super turbo para uma secagem rápida',
      'Ambiente climatizado e confortável',
    ],
  },
  {
    id: 'tosa',
    image: 'tosa',
    kicker: 'Sala de Tosa',
    title: 'Um cantinho tranquilo, só para o seu bebê',
    items: [
      'Sala separada das outras áreas, para um procedimento sem estresse',
      'Equipamentos de primeira linha em todas as tosas',
      'Ambiente climatizado',
    ],
  },
]

export const HIGHLIGHTS = [
  { icon: 'drop', title: 'Água filtrada', text: 'Direto da caixa, com duchas de esferas minerais.' },
  { icon: 'flame', title: 'Sempre quentinha', text: 'Aquecedor individual em cada ducha.' },
  { icon: 'snow', title: '100% climatizado', text: 'Ar-condicionado em todos os ambientes.' },
  { icon: 'quiet', title: 'Menos barulho', text: 'Sopradores embutidos no teto.' },
  { icon: 'heart', title: 'Zero estresse', text: 'Sala de tosa separada e tranquila.' },
  { icon: 'sparkle', title: 'Primeira linha', text: 'Equipamentos e produtos profissionais.' },
]
