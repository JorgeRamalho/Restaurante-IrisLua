import { ExternalLink, MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { brand, platforms } from "../data/brand";
import "./Order.css";

export function Order() {
  return (
    <section id="pedir" className="section block-moon order">
      <div className="container order__layout">
        <div className="section-head">
          <span className="t-label" style={{ color: "var(--sage-500)" }}>
            Peça agora
          </span>
          <h2 className="t-h2">Nos apps que você já usa</h2>
          <p className="t-lead text-muted-light">
            Abra o iFood, 99Food ou Uber Eats, busque <strong>Íris Lua</strong> e finalize com a
            forma de pagamento ou ticket que preferir.
          </p>
        </div>

        <div className="order__platforms">
          {platforms.map((p) => (
            <a key={p.id} href={p.href} className="order__platform" target="_blank" rel="noreferrer">
              <div>
                <p className="t-h3">{p.name}</p>
                <p className="t-caption text-muted-light">{p.hint}</p>
              </div>
              <ExternalLink size={18} />
            </a>
          ))}
        </div>

        <div className="order__info">
          <div className="order__info-item">
            <MapPin size={20} />
            <div>
              <p className="t-label">Endereço</p>
              <p>{brand.address}</p>
            </div>
          </div>
          <div className="order__info-item">
            <Clock size={20} />
            <div>
              <p className="t-label">Horários</p>
              <p>{brand.hours}</p>
            </div>
          </div>
          <div className="order__info-item">
            <Phone size={20} />
            <div>
              <p className="t-label">Telefone</p>
              <p>{brand.phone}</p>
            </div>
          </div>
          <a
            className="btn btn-primary order__whats"
            href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent("Olá! Quero pedir no Íris Lua.")}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
