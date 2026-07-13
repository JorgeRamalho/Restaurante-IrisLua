import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { menuCategories } from "../data/brand";
import "./Menu.css";

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);

  const category = useMemo(
    () => menuCategories.find((c) => c.id === active) ?? menuCategories[0],
    [active],
  );

  return (
    <section id="cardapio" className="section block-night menu">
      <div className="container">
        <div className="section-head">
          <span className="t-label text-gold">Cardápio digital</span>
          <h2 className="t-h2">Escolha como nos apps de delivery</h2>
          <p className="t-lead text-muted-dark">
            Categorias rápidas, fotos generosas e preços claros — o mesmo fluxo que você já
            conhece no iFood, 99Food e Uber Eats.
          </p>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Categorias do cardápio">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active === cat.id}
              className={`menu__tab ${active === cat.id ? "menu__tab--active" : ""}`}
              onClick={() => setActive(cat.id)}
            >
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            className="menu__grid"
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {category.items.map((item) => (
              <article key={item.id} className="menu__item">
                <div className="menu__photo">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  {item.badge && <span className="menu__badge t-label">{item.badge}</span>}
                </div>
                <div className="menu__body">
                  <div className="menu__top">
                    <h3 className="t-h3">{item.name}</h3>
                    <p className="menu__price font-display">{formatPrice(item.price)}</p>
                  </div>
                  <p className="t-caption text-muted-dark">{item.description}</p>
                  <button type="button" className="menu__add">
                    <Plus size={16} />
                    Adicionar
                  </button>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
