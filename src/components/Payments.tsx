import { motion } from "framer-motion";
import { CheckCircle2, Wallet } from "lucide-react";
import { payments } from "../data/brand";
import "./Payments.css";

export function Payments() {
  return (
    <section id="pagamentos" className="section block-moon payments">
      <div className="container">
        <div className="section-head payments__head">
          <span className="t-label" style={{ color: "var(--sage-500)" }}>
            Formas de pagamento
          </span>
          <h2 className="t-h2">Aceitamos tudo — dinheiro, cartão e todos os tickets</h2>
          <p className="t-lead text-muted-light">
            No salão, na retirada ou no delivery: Pix, crédito, débito e{" "}
            <strong>todos os tipos de ticket de refeição e alimentação</strong>. Sem surpresa na
            hora de pagar.
          </p>
        </div>

        <div className="payments__banner">
          <Wallet size={28} />
          <div>
            <p className="t-h3">Garantia Íris Lua</p>
            <p className="t-caption">
              VR · Alelo · Pluxee · Ticket · Ben · Flash · Caju · iFood Benefícios e demais
              bandeiras de vale-refeição e vale-alimentação.
            </p>
          </div>
        </div>

        <div className="payments__grid">
          <div>
            <h3 className="t-label payments__sub">Pagamentos</h3>
            <ul className="payments__methods">
              {payments.methods.map((method, i) => (
                <motion.li
                  key={method.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="payments__emoji" aria-hidden="true">
                    {method.emoji}
                  </span>
                  <span>{method.label}</span>
                  <CheckCircle2 size={18} className="payments__check" aria-hidden="true" />
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="t-label payments__sub">Tickets de refeição & alimentação</h3>
            <ul className="payments__tickets">
              {payments.tickets.map((ticket, i) => (
                <motion.li
                  key={ticket.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span className="payments__ticket-name">{ticket.label}</span>
                  <span className="t-caption payments__ticket-type">{ticket.type}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
