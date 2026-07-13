export const brand = {
  name: "Íris Lua",
  fullName: "Restaurante Íris Lua",
  slogan: "Sabores sob o luar",
  tagline: "Cozinha contemporânea com alma de delivery — do fogão à sua mesa, sob o mesmo luar.",
  phone: "(11) 98888-2200",
  whatsapp: "5511988882200",
  email: "ola@iris.lua",
  address: "Rua das Estrelas, 188 — Vila Madalena, São Paulo",
  hours: "Seg–Qui 11h–23h · Sex–Sáb 11h–00h · Dom 12h–22h",
  ifood: "#",
  uberEats: "#",
  food99: "#",
} as const;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "destaques",
    label: "Destaques",
    emoji: "✨",
    items: [
      {
        id: "risoto-lua",
        name: "Risoto Luar de Camarão",
        description: "Arbório cremoso, camarões grelhados, limão-siciliano e azeite de ervas.",
        price: 68.9,
        image:
          "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
        badge: "Chef",
        popular: true,
      },
      {
        id: "file-iris",
        name: "Filé Íris ao Molho de Vinho",
        description: "Filé mignon selado, redução de vinho tinto, batata confitada e rúcula.",
        price: 79.9,
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
        badge: "Mais pedido",
        popular: true,
      },
      {
        id: "bowl-estrelas",
        name: "Bowl Estrelas do Oriente",
        description: "Arroz negro, salmão, edamame, abacate e molho de gengibre.",
        price: 52.9,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        popular: true,
      },
    ],
  },
  {
    id: "entradas",
    label: "Entradas",
    emoji: "🥗",
    items: [
      {
        id: "bruschetta",
        name: "Bruschetta da Casa",
        description: "Pão de fermentação, tomate confit, burrata e manjericão fresco.",
        price: 32.9,
        image:
          "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "carpaccio",
        name: "Carpaccio Lua Nova",
        description: "Lâminas de carne, rúcula, parmesão e azeite trufado.",
        price: 39.9,
        image:
          "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "principais",
    label: "Pratos",
    emoji: "🍽️",
    items: [
      {
        id: "massa-saffron",
        name: "Fettuccine Açafrão & Cogumelos",
        description: "Massa fresca, mix de funghi, creme leve e toque de açafrão.",
        price: 54.9,
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "frango-crocante",
        name: "Frango Crocante Íris",
        description: "Empanado artesanal, molho de mostarda e mel, salada cítrica.",
        price: 46.9,
        image:
          "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "peixe-brasa",
        name: "Peixe na Brasa do Luar",
        description: "Robalo grelhado, legumes assados e beurre blanc de limão.",
        price: 72.9,
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
        badge: "Novo",
      },
    ],
  },
  {
    id: "doces",
    label: "Doces",
    emoji: "🍮",
    items: [
      {
        id: "mousse-chocolate",
        name: "Mousse Eclipse",
        description: "Chocolate 70%, crocante de cacau e flor de sal.",
        price: 28.9,
        image:
          "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "torta-limao",
        name: "Torta Lua de Limão",
        description: "Base amanteigada, curd de limão e merengue tostado.",
        price: 26.9,
        image:
          "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    emoji: "🥂",
    items: [
      {
        id: "suco-detox",
        name: "Suco Aurora",
        description: "Laranja, gengibre, hortelã e um toque de mel.",
        price: 14.9,
        image:
          "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "drink-lua",
        name: "Drink Íris Spritz",
        description: "Espumante, bitter cítrico e espuma de hibisco.",
        price: 29.9,
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export const payments = {
  methods: [
    { id: "pix", label: "Pix", emoji: "⚡" },
    { id: "credito", label: "Cartão de crédito", emoji: "💳" },
    { id: "debito", label: "Cartão de débito", emoji: "💳" },
    { id: "dinheiro", label: "Dinheiro", emoji: "💵" },
    { id: "online", label: "Pagamento no app", emoji: "📱" },
  ],
  tickets: [
    { id: "vr", label: "VR Refeição", type: "Refeição" },
    { id: "va", label: "VR Alimentação", type: "Alimentação" },
    { id: "alelo-r", label: "Alelo Refeição", type: "Refeição" },
    { id: "alelo-a", label: "Alelo Alimentação", type: "Alimentação" },
    { id: "sodexo", label: "Pluxee (Sodexo)", type: "Refeição" },
    { id: "ticket", label: "Ticket Restaurant", type: "Refeição" },
    { id: "ben", label: "Ben Visa Vale", type: "Refeição" },
    { id: "flash", label: "Flash Benefícios", type: "Alimentação" },
    { id: "caju", label: "Caju", type: "Refeição" },
    { id: "ifood-beneficios", label: "iFood Benefícios", type: "Refeição" },
  ],
} as const;

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Prato assinado no salão",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Ambiente Íris Lua à noite",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Detalhe gastronômico",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    alt: "Mesa preparada para jantar",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80",
    alt: "Cozinha em movimento",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Sobremesa da casa",
  },
] as const;

export const platforms = [
  { id: "ifood", name: "iFood", hint: "Peça agora", href: brand.ifood },
  { id: "99", name: "99Food", hint: "Delivery rápido", href: brand.food99 },
  { id: "uber", name: "Uber Eats", hint: "Na sua porta", href: brand.uberEats },
] as const;
