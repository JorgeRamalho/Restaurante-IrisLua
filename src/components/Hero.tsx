import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { brand } from "../data/brand";
import "./Hero.css";

export function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt=""
        />
        <div className="hero__overlay" />
        <div className="hero__glow" />
      </div>

      <div className="hero__content container">
        <motion.p
          className="t-label text-gold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Restaurante · Delivery · Takeaway
        </motion.p>

        <motion.h1
          className="t-brand hero__brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {brand.name}
        </motion.h1>

        <motion.p
          className="hero__slogan font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {brand.slogan}
        </motion.p>

        <motion.p
          className="t-lead text-muted-dark hero__lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          Pratos assinados, retirada rápida e delivery nos apps que você já conhece.
          Aceitamos todas as formas de pagamento e todos os tickets de refeição.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#cardapio" className="btn btn-primary">
            <Sparkles size={18} />
            Ver cardápio
          </a>
          <a href="#pedir" className="btn btn-ghost">
            Pedir no delivery
          </a>
        </motion.div>
      </div>

      <a href="#sobre" className="hero__scroll t-caption" aria-label="Rolar para baixo">
        Explorar
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
