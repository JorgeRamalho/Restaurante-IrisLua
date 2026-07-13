import { Logo } from "./Logo";
import { brand } from "../data/brand";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer block-night">
      <div className="container footer__inner">
        <Logo inverted size="lg" />

        <div className="footer__cols">
          <div>
            <p className="t-label text-gold">Navegação</p>
            <ul className="footer__links">
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#cardapio">Cardápio</a>
              </li>
              <li>
                <a href="#pagamentos">Pagamentos</a>
              </li>
              <li>
                <a href="#identidade">Identidade</a>
              </li>
              <li>
                <a href="#pedir">Pedir</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="t-label text-gold">Contato</p>
            <ul className="footer__links">
              <li>{brand.address}</li>
              <li>
                <a href={`tel:${brand.phone.replace(/\D/g, "")}`}>{brand.phone}</a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="t-label text-gold">Pagamentos</p>
            <p className="t-caption text-muted-dark footer__note">
              Pix, cartões e todos os tickets de refeição e alimentação.
            </p>
          </div>
        </div>

        <p className="t-caption text-muted-dark footer__copy">
          © {new Date().getFullYear()} {brand.fullName}. {brand.slogan}.
        </p>
      </div>
    </footer>
  );
}
