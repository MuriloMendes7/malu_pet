// Dados centrais do negócio — altere aqui e a página inteira se atualiza.

export const BUSINESS = {
  name: "Malu Pet's",
  tagline: 'Estética Animal',
  specialties: ['Lulu / Spitz Alemão', 'Tosa Bebê'],
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

export const SERVICE_FILTERS = [
  { id: 'todos', label: 'Todos os Serviços' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'banhos', label: 'Banhos' },
  { id: 'tosas', label: 'Tosas & Rostinhos' },
  { id: 'pacotes', label: 'Combos & Pacotes' },
]

export const SERVICES = [
  {
    id: 'catalogo-spitz',
    category: 'especialidades',
    icon: 'crown',
    title: 'Catálogo Spitz',
    badge: 'Especialidade da Casa',
    featured: true,
    description:
      'Somos especialistas em Lulu da Pomerânia e Spitz Alemão. Técnicas exclusivas de escovação, desembaraço e tratamentos específicos para preservar o volume e a saúde da pelagem dupla sem danificar a estrutura dos fios.',
    items: [
      'Cuidados específicos para Spitz / Lulu',
      'Escovação e desembolo sem quebra',
      'Produtos que preservam o subpelo e volume',
    ],
    message: 'Olá! Gostaria de saber mais sobre os cuidados do Catálogo Spitz 🐶👑',
  },
  {
    id: 'tosas',
    category: 'tosas',
    icon: 'scissors',
    title: 'Tosas (Tosa Bebê)',
    badge: 'Referência em Tosa Bebê',
    featured: true,
    description:
      'Especialistas em Tosa Bebê, tosa na tesoura, higiênica e tosa da raça. Realizada em sala exclusiva e climatizada, com tesouras e equipamentos de alta precisão que garantem acabamento macio e sem estresse para o pet.',
    items: [
      'Tosa Bebê fofa e harmonizada',
      'Tosa na tesoura e tosa higiênica',
      'Sala silenciosa e climatizada',
    ],
    message: 'Olá! Gostaria de agendar uma Tosa (tenho interesse na Tosa Bebê) ✂️🐾',
  },
  {
    id: 'tipos-rostinhos',
    category: 'tosas',
    icon: 'smile',
    title: 'Tipos de Rostinhos',
    badge: 'Design & Expressão',
    description:
      'Escultura e acabamento facial personalizado. Moldamos o rostinho do seu pet (estilo ursinho, arredondado ou tradicional) valorizando a beleza e o olhar meigo de cada raça.',
    items: [
      'Rostinho de ursinho ou redondo',
      'Harmonização facial com tesoura fina',
      'Acabamento suave nas bochechas e orelhas',
    ],
    message: 'Olá! Gostaria de escolher um Tipo de Rostinho para a tosa do meu pet 🐻✨',
  },
  {
    id: 'combos-tosas',
    category: 'pacotes',
    icon: 'layers',
    title: 'Combos (Tosas)',
    badge: 'Completo & Econômico',
    description:
      'A solução perfeita para renovação total: reúne banho relaxante com água filtrada e morna, tosa completa ou higiênica, corte de unhas e finalização perfumada.',
    items: [
      'Banho higiênico + Tosa no estilo desejado',
      'Limpeza de ouvidos e corte de unhas',
      'Perfume e acessório exclusivo',
    ],
    message: 'Olá! Gostaria de saber mais sobre os Combos de Tosas ✂️🛁',
  },
  {
    id: 'combos-banhos',
    category: 'pacotes',
    icon: 'layers',
    title: 'Combos (Banhos)',
    badge: 'Mais Vantagens',
    description:
      'Pacotes combinados de higiene que garantem limpeza profunda, secagem cuidadosa e tratamentos complementares com excelente custo-benefício.',
    items: [
      'Banho com água mineral purificada',
      'Secador silencioso com ar fresco ou morno',
      'Procedimentos de asseio completos',
    ],
    message: 'Olá! Gostaria de informações sobre os Combos de Banhos 🛁✨',
  },
  {
    id: 'banhos-premium',
    category: 'banhos',
    icon: 'crown',
    title: 'Banhos Premium',
    badge: 'Linha Luxo',
    description:
      'A verdadeira experiência de spa animal. Produtos nobres de alta performance com fórmulas nutritivas para brilho intenso, sedosidade e toque acetinado.',
    items: [
      'Cosméticos nobres de linha profissional',
      'Nutrição intensa e hidratação profunda',
      'Finalização com fragrância duradoura',
    ],
    message: 'Olá! Gostaria de agendar um Banho Premium para meu pet 👑',
  },
  {
    id: 'banhos-frutados',
    category: 'banhos',
    icon: 'fruit',
    title: 'Banhos Frutados',
    badge: 'Fragrâncias Especiais',
    description:
      'Banhos enriquecidos com extratos botânicos e frutados que revitalizam a pele, acalmam os sentidos e deixam um aroma fresco e encantador.',
    items: [
      'Extratos naturais de frutas selecionadas',
      'Sensação refrescante e perfumação prolongada',
      'Hipoalergênico e suave para a pele',
    ],
    message: 'Olá! Gostaria de conhecer as opções de Banhos Frutados 🍓🍈',
  },
  {
    id: 'banhos',
    category: 'banhos',
    icon: 'drop',
    title: 'Banhos',
    description:
      'Banho tradicional com todo o padrão de excelência da Malu Pet’s: água 100% filtrada direto da caixa, duchas com esferas purificadoras e aquecimento individual.',
    items: [
      'Água filtrada e aquecida na medida ideal',
      'Shampoo e condicionador balanceados',
      'Secagem carinhosa e sem estresse',
    ],
    message: 'Olá! Gostaria de agendar um Banho para o meu pet 🛁',
  },
  {
    id: 'banhos-gigante',
    category: 'banhos',
    icon: 'paw',
    title: 'Banhos Porte Gigante',
    badge: 'Espaço Adaptado',
    description:
      'Estrutura reforçada, banheiras amplas e sopradores turbo dimensionados para acolher cães de grande e gigante porte com conforto, espaço e segurança.',
    items: [
      'Bancadas e banheiras para cães grandes',
      'Secagem turbo rápida e eficiente',
      'Manejo gentil e experiente com grandões',
    ],
    message: 'Olá! Tenho um cão de porte grande/gigante e gostaria de agendar um Banho 🐾',
  },
  {
    id: 'pacotes-dermatologicos',
    category: 'pacotes',
    icon: 'shield',
    title: 'Pacotes Dermatológicos',
    badge: 'Saúde & Tratamento',
    description:
      'Protocolos cuidadosos para pets com pele atópica, alergias ou prescrições veterinárias. Uso de produtos medicinais neutros e água purificada livre de impurezas.',
    items: [
      'Aplicação de shampoos medicamentosos',
      'Água purificada com esferas minerais',
      'Secagem com temperatura e fluxo controlados',
    ],
    message: 'Olá! Gostaria de consultar sobre os Pacotes Dermatológicos para o meu pet 🩺',
  },
  {
    id: 'pacotes-mensais-quinzenais',
    category: 'pacotes',
    icon: 'calendar',
    title: 'Pacotes Mensais & Quinzenais',
    badge: 'Melhor Custo-Benefício',
    description:
      'Garanta a rotina de beleza e higiene com dia e horário fixos garantidos toda semana ou quinzena, com condições especiais e descontos exclusivos.',
    items: [
      'Horário cativo reservado na agenda',
      'Economia expressiva em relação ao avulso',
      'Acompanhamento contínuo da pelagem',
    ],
    message: 'Olá! Gostaria de receber os valores dos Pacotes Mensais e Quinzenais 📅✨',
  },
  {
    id: 'servicos-adicionais',
    category: 'especialidades',
    icon: 'plus',
    title: 'Serviços Adicionais',
    badge: 'Cuidado Sob Demanda',
    description:
      'Tratamentos pontuais para completar o dia de princesa ou príncipe do seu pet: corte e lixamento de unhas, limpeza auricular, escovação dental e desembolo.',
    items: [
      'Corte e lixamento cuidadoso de unhas',
      'Higiene bucal e escovação dental',
      'Remoção de subpelo e desembolo pontual',
    ],
    message: 'Olá! Gostaria de consultar os Serviços Adicionais disponíveis ✨',
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
      'Especialistas em Tosa Bebê e padrão de raças',
      'Equipamentos de primeira linha em todas as tosas',
      'Ambiente 100% climatizado',
    ],
  },
]

export const HIGHLIGHTS = [
  { icon: 'crown', title: 'Especialistas em Spitz', text: 'Manejo e técnicas dedicadas a Lulu da Pomerânia.' },
  { icon: 'scissors', title: 'Tosa Bebê de Excelência', text: 'Acabamento fofo e harmonioso que encanta.' },
  { icon: 'drop', title: 'Água filtrada', text: 'Direto da caixa, com duchas de esferas minerais.' },
  { icon: 'flame', title: 'Sempre quentinha', text: 'Aquecedor individual em cada ducha.' },
  { icon: 'snow', title: '100% climatizado', text: 'Ar-condicionado em todos os ambientes.' },
  { icon: 'quiet', title: 'Menos ruído', text: 'Sopradores embutidos no teto para evitar sustos.' },
]
