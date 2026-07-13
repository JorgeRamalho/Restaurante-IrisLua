import { motion } from "framer-motion";
import { Moon, UtensilsCrossed, Bike } from "lucide-react";
import { brand } from "../data/brand";
import "./About.css";

const pillars = [
  {
    icon: Moon,
    title: "Identidade lunar",
    text: "Ambiente acolhedor, luz baixa e pratos pensados para o jantar — e para o delivery com o mesmo cuidado.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cozinha viva",
    text: "Cardápio no ritmo dos apps: categorias claras, fotos reais e pratos que viajam bem até a sua mesa.",
  },
  {
    icon: Bike,
    title: "Na sua porta",
    text: "Peça pelo iFood, 99Food ou Uber Eats. Retirada no balcão também, sem complicação.",
  },
];

export function About() {
  return (
    <section id="sobre" className="section block-moon about">
      <div className="container about__grid">
        <div className="section-head">
          <span className="t-label" style={{ color: "var(--sage-500)" }}>
            Nossa história
          </span>
          <h2 className="t-h2">Uma marca feita para o luar e para o delivery</h2>
          <p className="t-lead text-muted-light">{brand.tagline}</p>
        </div>

        <div className="about__visual" aria-hidden="true">
          <div className="about__frame">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
              alt=""
            />
          </div>
          <div className="about__badge">
            <span className="t-label text-gold">Logomarca</span>
            <p className="font-display about__badge-title">Lua + Íris</p>
            <p className="t-caption text-muted-dark">
              Crescente lunar e olho-íris em ouro — o símbolo da casa.
            </p>
          </div>
        </div>
      </div>

      <div className="container about__pillars">
        {pillars.map((item, i) => (
          <motion.article
            key={item.title}
            className="about__pillar"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about__icon">
              <item.icon size={22} />
            </span>
            <h3 className="t-h3">{item.title}</h3>
            <p className="t-body text-muted-light">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
