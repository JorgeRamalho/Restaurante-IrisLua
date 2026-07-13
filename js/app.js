/* Íris Lua — app-like UX (Live Server) */

const STORAGE_KEY = "iris-lua-coupons";

const menuCategories = [
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
      },
      {
        id: "file-iris",
        name: "Filé Íris ao Molho de Vinho",
        description: "Filé mignon selado, redução de vinho tinto, batata confitada e rúcula.",
        price: 79.9,
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
        badge: "Mais pedido",
      },
      {
        id: "bowl-estrelas",
        name: "Bowl Estrelas do Oriente",
        description: "Arroz negro, salmão, edamame, abacate e molho de gengibre.",
        price: 52.9,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "picanha-chapa",
        name: "Picanha na Chapa com Polenta Frita",
        description: "Picanha selada na chapa, polenta crocante e chimichurri da casa.",
        price: 74.9,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        badge: "Novo",
      },
      {
        id: "escondidinho-mandioca",
        name: "Escondidinho de Purê de Mandioca",
        description: "Purê cremoso de mandioca, recheio de carne desfiada e queijo gratinado.",
        price: 48.9,
        image:
          "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "lasanha-bolonhesa",
        name: "Lasanha ao Sugo de Bolonhesa",
        description: "Camadas de massa fresca, molho bolonhesa, bechamel e queijo gratinado.",
        price: 56.9,
        image:
          "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
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
      {
        id: "picanha-chapa",
        name: "Picanha na Chapa com Polenta Frita",
        description: "Picanha selada na chapa, polenta crocante e chimichurri da casa.",
        price: 74.9,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        badge: "Novo",
      },
      {
        id: "escondidinho-mandioca",
        name: "Escondidinho de Purê de Mandioca",
        description: "Purê cremoso de mandioca, recheio de carne desfiada e queijo gratinado.",
        price: 48.9,
        image:
          "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "lasanha-bolonhesa",
        name: "Lasanha ao Sugo de Bolonhesa",
        description: "Camadas de massa fresca, molho bolonhesa, bechamel e queijo gratinado.",
        price: 56.9,
        image:
          "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "strogonoff-file",
        name: "Strogonoff de Filé",
        description: "Filé mignon em cubos, creme, champignon, arroz soltinho e batata palha.",
        price: 59.9,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/Beef_Stroganoff-02_cropped.jpg",
        badge: "Novo",
      },
      {
        id: "parmegiana-file",
        name: "Filé à Parmegiana",
        description: "Filé empanado, molho de tomate caseiro, mussarela gratinada e arroz.",
        price: 62.9,
        image:
          "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "moqueca-camarao",
        name: "Moqueca de Camarão",
        description: "Camarões no leite de coco, dendê, pimentões e pirão da casa.",
        price: 78.9,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Moqueca_de_frutos_do_mar_%28seafood_stew%2C_Brazilian_style%29_%2851338403464%29.jpg",
      },
      {
        id: "nhoque-pomodoro",
        name: "Nhoque ao Pomodoro",
        description: "Nhoque artesanal, molho de tomate fresco, manjericão e parmesão.",
        price: 44.9,
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "costela-bbq",
        name: "Costela BBQ Desfiada",
        description: "Costela lenta, molho barbecue defumado, purê rústico e cebola crispy.",
        price: 66.9,
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "bife-acebolado",
        name: "Bife Acebolado do Luar",
        description: "Contrafilé grelhado, cebolas caramelizadas, arroz e feijão tropeiro.",
        price: 54.9,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "camarao-empanado",
        name: "Camarão Empanado (10 un.)",
        description: "Camarões crocantes, molho tártaro cítrico e limão siciliano.",
        price: 58.9,
        image:
          "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "culinaria-japonesa",
    label: "Culinária Japonesa",
    emoji: "🍣",
    items: [
      {
        id: "sushi-combinado",
        name: "Sushi Combinado Íris",
        description: "Seleção de sushis e sashimis do dia, com wasabi, gengibre e shoyu.",
        price: 69.9,
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
        badge: "Novo",
      },
      {
        id: "temaki-salmao",
        name: "Temaki de Salmão",
        description: "Cone de nori com salmão fresco, cream cheese, cebolinha e gergelim.",
        price: 34.9,
        image:
          "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
        badge: "Novo",
      },
      {
        id: "hot-roll",
        name: "Hot Roll Empanado",
        description: "Enrolado de salmão e cream cheese, empanado e frito, com molho tarê.",
        price: 42.9,
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "guioza",
        name: "Guioza de Carne (8 un.)",
        description: "Pastéis japoneses grelhados, recheio de carne e molho ponzu.",
        price: 36.9,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "yakisoba",
        name: "Yakisoba Especial",
        description: "Macarrão oriental, legumes, carne e frango no molho shoyu da casa.",
        price: 48.9,
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
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
      {
        id: "petit-gateau",
        name: "Petit Gâteau da Casa",
        description: "Bolinho de chocolate com centro cremoso e sorvete de creme.",
        price: 32.9,
        image:
          "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
        badge: "Novo",
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
      {
        id: "agua-com-gas",
        name: "Água com Gás",
        description: "Garrafa 500 ml bem gelada.",
        price: 8.9,
        image:
          "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "refrigerante",
        name: "Refrigerante Lata",
        description: "Opções clássicas geladas para acompanhar o pedido.",
        price: 9.9,
        image:
          "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

const defaultCoupons = [
  {
    code: "LUAR10",
    type: "percent",
    value: 10,
    minOrder: 50,
    validUntil: "2026-12-31",
    channel: "todos",
    description: "10% off em pedidos acima de R$ 50",
  },
  {
    code: "BEMVINDO",
    type: "fixed",
    value: 15,
    minOrder: 40,
    validUntil: "2026-12-31",
    channel: "app",
    description: "R$ 15 de desconto no primeiro pedido",
  },
  {
    code: "FRETEGRATIS",
    type: "frete",
    value: 0,
    minOrder: 60,
    validUntil: "2026-12-31",
    channel: "todos",
    description: "Frete grátis a partir de R$ 60",
  },
];

const state = {
  categoryId: "destaques",
  search: "",
  cart: [],
  coupons: loadCoupons(),
  appliedCoupon: null,
  deliveryFee: 8.9,
  mode: "entrega",
  slide: 0,
};

function loadCoupons() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return [...defaultCoupons];
}

function saveCoupons() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.coupons));
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function allItems() {
  return menuCategories.flatMap((c) => c.items.map((item) => ({ ...item, categoryId: c.id })));
}

function getVisibleItems() {
  const q = state.search.trim().toLowerCase();
  if (q) {
    return allItems().filter(
      (item) =>
        item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q),
    );
  }
  const category = menuCategories.find((c) => c.id === state.categoryId) || menuCategories[0];
  return category.items.map((item) => ({ ...item, categoryId: category.id }));
}

function discountLabel(coupon) {
  if (coupon.type === "percent") return `${coupon.value}% OFF`;
  if (coupon.type === "fixed") return `${formatPrice(coupon.value)} OFF`;
  return "Frete grátis";
}

function calcTotals() {
  const subtotal = state.cart.reduce((sum, line) => sum + line.price * line.qty, 0);
  let discount = 0;
  let fee = state.mode === "entrega" ? state.deliveryFee : 0;
  const coupon = state.appliedCoupon;

  if (coupon && subtotal >= (Number(coupon.minOrder) || 0)) {
    if (coupon.type === "percent") discount = subtotal * (Number(coupon.value) / 100);
    if (coupon.type === "fixed") discount = Number(coupon.value);
    if (coupon.type === "frete") fee = 0;
  }

  discount = Math.min(discount, subtotal);
  const total = Math.max(0, subtotal - discount + fee);
  return { subtotal, discount, fee, total };
}

/* ── Nav ── */
function setupNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const drawer = document.getElementById("navDrawer");
  const drawerClose = document.getElementById("navDrawerClose");
  const icon = document.getElementById("navBurgerIcon");

  const onScroll = () => nav.classList.toggle("nav--scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const closeDrawer = () => {
    drawer.classList.remove("nav__drawer--open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menu");
    icon.textContent = "☰";
    document.body.style.overflow = "";
  };

  const openDrawer = () => {
    drawer.classList.add("nav__drawer--open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Fechar menu");
    icon.textContent = "✕";
    document.body.style.overflow = "hidden";
  };

  burger.addEventListener("click", () => {
    if (drawer.classList.contains("nav__drawer--open")) closeDrawer();
    else openDrawer();
  });

  if (drawerClose) {
    drawerClose.addEventListener("click", closeDrawer);
  }

  drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeDrawer));
}

/* ── Delivery mode ── */
function setupModeToggle() {
  document.querySelectorAll(".app-status__mode").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.mode = btn.dataset.mode;
      document.querySelectorAll(".app-status__mode").forEach((b) => {
        b.classList.toggle("app-status__mode--active", b === btn);
      });
      updateCartUI();
    });
  });
}

/* ── Carousel ── */
function setupCarousel() {
  const track = document.getElementById("momentsTrack");
  const dots = document.getElementById("momentsDots");
  const slides = track.querySelectorAll(".moments__slide");
  const total = slides.length;

  dots.innerHTML = Array.from({ length: total }, (_, i) => {
    return `<button type="button" class="moments__dot ${i === 0 ? "moments__dot--active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`;
  }).join("");

  const goTo = (index) => {
    state.slide = (index + total) % total;
    track.style.transform = `translateX(-${state.slide * 100}%)`;
    dots.querySelectorAll(".moments__dot").forEach((dot, i) => {
      dot.classList.toggle("moments__dot--active", i === state.slide);
    });
  };

  document.getElementById("momentsPrev").addEventListener("click", () => goTo(state.slide - 1));
  document.getElementById("momentsNext").addEventListener("click", () => goTo(state.slide + 1));
  dots.addEventListener("click", (e) => {
    const btn = e.target.closest(".moments__dot");
    if (btn) goTo(Number(btn.dataset.index));
  });

  let timer = setInterval(() => goTo(state.slide + 1), 5000);
  const viewport = track.parentElement;
  viewport.addEventListener("mouseenter", () => clearInterval(timer));
  viewport.addEventListener("mouseleave", () => {
    timer = setInterval(() => goTo(state.slide + 1), 5000);
  });

  let touchX = null;
  viewport.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );
  viewport.addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) goTo(state.slide + (dx < 0 ? 1 : -1));
      touchX = null;
    },
    { passive: true },
  );
}

/* ── Coupons ── */
function renderCouponRail() {
  const track = document.getElementById("couponTrack");
  track.innerHTML = state.coupons
    .map((c) => {
      const applied = state.appliedCoupon && state.appliedCoupon.code === c.code;
      return `
        <article class="coupon-card ${applied ? "coupon-card--applied" : ""}">
          <p class="coupon-card__code">${c.code}</p>
          <p class="t-caption" style="color: var(--gold-400)">${discountLabel(c)}</p>
          <p class="coupon-card__desc">${c.description}</p>
          <button type="button" class="coupon-card__btn" data-apply="${c.code}">
            ${applied ? "Aplicado ✓" : "Aplicar cupom"}
          </button>
        </article>
      `;
    })
    .join("");

  track.querySelectorAll("[data-apply]").forEach((btn) => {
    btn.addEventListener("click", () => applyCouponCode(btn.dataset.apply));
  });
}

function renderCouponList() {
  const list = document.getElementById("couponList");
  if (!state.coupons.length) {
    list.innerHTML = `<p class="t-caption text-muted-light">Nenhum cupom cadastrado ainda.</p>`;
    return;
  }

  list.innerHTML = state.coupons
    .map(
      (c) => `
      <article class="coupon-list__item">
        <div>
          <strong>${c.code}</strong>
          <p class="coupon-list__meta">${c.description} · mín. ${formatPrice(Number(c.minOrder) || 0)} · até ${c.validUntil}</p>
        </div>
        <span class="coupon-list__tag">${discountLabel(c)}</span>
      </article>
    `,
    )
    .join("");
}

function setupCouponForm() {
  const form = document.getElementById("couponForm");
  if (!form) return;

  const msg = document.getElementById("couponFormMsg");
  const valid = document.getElementById("couponValid");
  if (valid && !valid.value) {
    const d = new Date();
    d.setMonth(d.getMonth() + 3);
    valid.value = d.toISOString().slice(0, 10);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.classList.remove("coupon-form__msg--error");

    const data = new FormData(form);
    const code = String(data.get("code") || "")
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "");
    const type = String(data.get("type"));
    const value = Number(data.get("value"));
    const minOrder = Number(data.get("minOrder") || 0);
    const validUntil = String(data.get("validUntil"));
    const channel = String(data.get("channel"));
    const description = String(data.get("description") || "").trim();

    if (!code || code.length < 3) {
      msg.textContent = "Informe um código com pelo menos 3 caracteres.";
      msg.classList.add("coupon-form__msg--error");
      return;
    }
    if (type !== "frete" && !(value > 0)) {
      msg.textContent = "Informe um valor de desconto válido.";
      msg.classList.add("coupon-form__msg--error");
      return;
    }
    if (!description) {
      msg.textContent = "Descreva a promoção.";
      msg.classList.add("coupon-form__msg--error");
      return;
    }
    if (state.coupons.some((c) => c.code === code)) {
      msg.textContent = "Este código já está cadastrado.";
      msg.classList.add("coupon-form__msg--error");
      return;
    }

    state.coupons.unshift({
      code,
      type,
      value: type === "frete" ? 0 : value,
      minOrder,
      validUntil,
      channel,
      description,
    });
    saveCoupons();
    renderCouponRail();
    renderCouponList();
    form.reset();
    if (valid) {
      const d = new Date();
      d.setMonth(d.getMonth() + 3);
      valid.value = d.toISOString().slice(0, 10);
    }
    msg.textContent = `Cupom ${code} cadastrado com sucesso!`;
  });
}

function applyCouponCode(code) {
  const coupon = state.coupons.find((c) => c.code.toUpperCase() === code.toUpperCase());
  const msg = document.getElementById("cartCouponMsg");
  if (!coupon) {
    if (msg) msg.textContent = "Cupom não encontrado.";
    return;
  }

  const { subtotal } = calcTotals();
  if (subtotal > 0 && subtotal < (Number(coupon.minOrder) || 0)) {
    if (msg) {
      msg.textContent = `Pedido mínimo de ${formatPrice(Number(coupon.minOrder))} para este cupom.`;
    }
    state.appliedCoupon = coupon;
    renderCouponRail();
    updateCartUI();
    return;
  }

  state.appliedCoupon = coupon;
  const input = document.getElementById("cartCouponInput");
  if (input) input.value = coupon.code;
  if (msg) msg.textContent = `Cupom ${coupon.code} aplicado.`;
  renderCouponRail();
  updateCartUI();
}

/* ── Menu ── */
function renderMenu() {
  const tabs = document.getElementById("menuTabs");
  const grid = document.getElementById("menuGrid");
  const searching = Boolean(state.search.trim());

  tabs.innerHTML = menuCategories
    .map(
      (cat) => `
      <button
        type="button"
        role="tab"
        class="menu__tab ${!searching && cat.id === state.categoryId ? "menu__tab--active" : ""}"
        data-category="${cat.id}"
        aria-selected="${!searching && cat.id === state.categoryId}"
      >
        <span aria-hidden="true">${cat.emoji}</span>
        ${cat.label}
      </button>
    `,
    )
    .join("");

  const items = getVisibleItems();
  if (!items.length) {
    grid.innerHTML = `<p class="t-caption text-muted-dark">Nenhum item encontrado para “${state.search}”.</p>`;
  } else {
    grid.innerHTML = items
      .map(
        (item) => `
        <article class="menu__item">
          <div class="menu__photo">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            ${item.badge ? `<span class="menu__badge t-label">${item.badge}</span>` : ""}
          </div>
          <div class="menu__body">
            <div class="menu__top">
              <h3 class="t-h3">${item.name}</h3>
              <p class="menu__price font-display">${formatPrice(item.price)}</p>
            </div>
            <p class="t-caption text-muted-dark">${item.description}</p>
            <button type="button" class="menu__add" data-add="${item.id}">+ Adicionar</button>
          </div>
        </article>
      `,
      )
      .join("");
  }

  tabs.querySelectorAll(".menu__tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.categoryId = btn.dataset.category;
      state.search = "";
      const searchInput = document.getElementById("menuSearch");
      if (searchInput) searchInput.value = "";
      renderMenu();
    });
  });

  grid.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.add));
  });
}

function setupSearch() {
  const input = document.getElementById("menuSearch");
  if (!input) return;
  input.addEventListener("input", () => {
    state.search = input.value;
    renderMenu();
  });
}

/* ── Cart ── */
function addToCart(itemId) {
  const item = allItems().find((i) => i.id === itemId);
  if (!item) return;
  const existing = state.cart.find((l) => l.id === item.id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  updateCartUI();
}

function updateCartUI() {
  const { subtotal, discount, fee, total } = calcTotals();
  const count = state.cart.reduce((n, l) => n + l.qty, 0);
  const fab = document.getElementById("cartFab");
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartFabTotal");
  const itemsEl = document.getElementById("cartItems");
  const summaryEl = document.getElementById("cartSummary");

  countEl.textContent = String(count);
  totalEl.textContent = formatPrice(total);
  fab.classList.toggle("is-visible", count > 0);

  if (!state.cart.length) {
    itemsEl.innerHTML = `<p class="cart-empty">Sua sacola está vazia. Adicione itens do cardápio.</p>`;
  } else {
    itemsEl.innerHTML = state.cart
      .map(
        (line) => `
        <div class="cart-item">
          <div>
            <p class="cart-item__name">${line.name}</p>
            <p class="cart-item__qty">${line.qty} × ${formatPrice(line.price)}</p>
          </div>
          <strong>${formatPrice(line.price * line.qty)}</strong>
        </div>
      `,
      )
      .join("");
  }

  summaryEl.innerHTML = `
    <div class="cart-summary__row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
    <div class="cart-summary__row"><span>${state.mode === "entrega" ? "Entrega" : "Retirada"}</span><span>${fee === 0 && state.mode === "entrega" ? "Grátis" : state.mode === "retirada" ? "—" : formatPrice(fee)}</span></div>
    ${
      discount > 0
        ? `<div class="cart-summary__row cart-summary__discount"><span>Cupom ${state.appliedCoupon.code}</span><span>- ${formatPrice(discount)}</span></div>`
        : ""
    }
    <div class="cart-summary__row cart-summary__row--total"><span>Total</span><span>${formatPrice(total)}</span></div>
  `;
}

function setupCart() {
  const drawer = document.getElementById("cartDrawer");
  const open = () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  };
  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  };

  document.getElementById("cartFab").addEventListener("click", open);
  document.getElementById("cartClose").addEventListener("click", close);
  document.getElementById("cartBackdrop").addEventListener("click", close);
  document.getElementById("cartCheckout").addEventListener("click", close);

  document.getElementById("cartCouponApply").addEventListener("click", () => {
    const code = document.getElementById("cartCouponInput").value.trim();
    applyCouponCode(code);
  });
}

/* ── Tab bar active ── */
function setupTabbar() {
  const links = document.querySelectorAll(".app-tabbar a");
  const map = [
    { id: "topo", tab: "home" },
    { id: "cardapio", tab: "menu" },
    { id: "cupons", tab: "coupons" },
    { id: "pedir", tab: "order" },
    { id: "sobre", tab: "profile" },
  ];

  const sync = () => {
    const y = window.scrollY + 140;
    let current = "home";
    map.forEach(({ id, tab }) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = tab;
    });
    links.forEach((a) => a.classList.toggle("is-active", a.dataset.tab === current));
  };

  window.addEventListener("scroll", sync, { passive: true });
  sync();
}

/* ── Boot ── */
document.getElementById("year").textContent = String(new Date().getFullYear());
setupNav();
setupModeToggle();
setupCarousel();
setupCouponForm();
setupSearch();
setupCart();
setupTabbar();
renderMenu();
renderCouponRail();
renderCouponList();
updateCartUI();
