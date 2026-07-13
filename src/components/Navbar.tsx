import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import "./Navbar.css";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#pagamentos", label: "Pagamentos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#identidade", label: "Marca" },
  { href: "#pedir", label: "Pedir" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <Logo inverted size="md" />

        <nav className="nav__desktop" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav__link t-caption">
              {link.label}
            </a>
          ))}
          <a href="#pedir" className="btn btn-primary nav__cta">
            Pedir agora
          </a>
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? "nav__drawer--open" : ""}`}>
        <nav className="nav__mobile" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__mobile-link t-h3"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#pedir" className="btn btn-primary" onClick={() => setOpen(false)}>
            Pedir agora
          </a>
        </nav>
      </div>
    </header>
  );
}
