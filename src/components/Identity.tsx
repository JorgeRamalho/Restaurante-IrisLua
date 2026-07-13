import "./Identity.css";

const typeScale = [
  {
    className: "t-brand",
    label: "Brand / Hero",
    sample: "Íris Lua",
    meta: "Cormorant Garamond · 600 · tracking -0.02em",
  },
  {
    className: "t-h1",
    label: "Título H1",
    sample: "Sabores sob o luar",
    meta: "Cormorant Garamond · 600",
  },
  {
    className: "t-h2",
    label: "Título H2",
    sample: "Cardápio digital",
    meta: "Cormorant Garamond · 600",
  },
  {
    className: "t-h3",
    label: "Título H3",
    sample: "Risoto Luar de Camarão",
    meta: "Cormorant Garamond · 600",
  },
  {
    className: "t-lead",
    label: "Lead / apoio",
    sample: "Cozinha contemporânea com alma de delivery.",
    meta: "Figtree · 400 · ~1.1–1.2rem",
  },
  {
    className: "t-body",
    label: "Corpo",
    sample: "Pratos assinados, retirada rápida e delivery nos apps que você já conhece.",
    meta: "Figtree · 400 · line-height 1.65",
  },
  {
    className: "t-caption",
    label: "Legenda",
    sample: "Arbório cremoso, camarões grelhados e azeite de ervas.",
    meta: "Figtree · 500 · 0.8125rem",
  },
  {
    className: "t-label",
    label: "Label / eyebrow",
    sample: "Formas de pagamento",
    meta: "Figtree · 600 · uppercase · tracking 0.14em",
  },
];

const swatches = [
  { name: "Night 950", varName: "--night-950", hex: "#070E18" },
  { name: "Night 900", varName: "--night-900", hex: "#0A1628" },
  { name: "Night 700", varName: "--night-700", hex: "#1A3A5C" },
  { name: "Moon 50", varName: "--moon-50", hex: "#F7F9FC" },
  { name: "Gold 500", varName: "--gold-500", hex: "#E8B84A" },
  { name: "Sage 500", varName: "--sage-500", hex: "#2A6B5A" },
];

export function Identity() {
  return (
    <section id="identidade" className="section block-night identity">
      <div className="container">
        <div className="section-head">
          <span className="t-label text-gold">Identidade visual</span>
          <h2 className="t-h2">Tipografia, cores e marca</h2>
          <p className="t-lead text-muted-dark">
            Sistema visual do Íris Lua: tipografia expressiva, gradiente noite→ouro e blocos de
            fundo que alternam luar e noite.
          </p>
        </div>

        <div className="identity__brand-row">
          <div className="identity__logo-panel">
            <svg viewBox="0 0 64 64" className="identity__logo-lg" aria-hidden="true">
              <defs>
                <linearGradient id="idGrad" x1="8" y1="4" x2="56" y2="60">
                  <stop stopColor="#0A1628" />
                  <stop offset="0.55" stopColor="#1A3A5C" />
                  <stop offset="1" stopColor="#E8B84A" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#idGrad)" />
              <path
                d="M38 14c-10 2-17 11-17 22 0 8 4 15 11 19-12-2-20-13-20-25C12 17 22 8 34 8c1.4 0 2.7.1 4 .3z"
                fill="#F2F5F8"
                opacity="0.95"
              />
              <ellipse cx="40" cy="34" rx="7" ry="11" fill="#E8B84A" opacity="0.92" />
              <ellipse cx="40" cy="34" rx="3" ry="5" fill="#0A1628" />
            </svg>
            <div>
              <p className="t-h2">Íris Lua</p>
              <p className="font-display identity__slogan-italic">Sabores sob o luar</p>
              <p className="t-caption text-muted-dark">
                Símbolo: crescente lunar + íris dourada. Gradiente de marca do azul-noite ao ouro
                mel.
              </p>
            </div>
          </div>

          <div className="identity__grad-demo" aria-hidden="true">
            <span className="t-label">Gradiente de perfil</span>
            <div className="identity__grad-bar" />
            <p className="t-caption text-muted-dark">#0A1628 → #1A3A5C → #E8B84A</p>
          </div>
        </div>

        <h3 className="t-label text-gold identity__block-title">Paleta</h3>
        <div className="identity__swatches">
          {swatches.map((s) => (
            <div key={s.name} className="identity__swatch">
              <span className="identity__chip" style={{ background: `var(${s.varName})` }} />
              <p className="t-caption">{s.name}</p>
              <p className="t-label identity__hex">{s.hex}</p>
            </div>
          ))}
        </div>

        <h3 className="t-label text-gold identity__block-title">Escala tipográfica</h3>
        <div className="identity__type">
          {typeScale.map((row) => (
            <div key={row.label} className="identity__type-row">
              <div className="identity__type-meta">
                <p className="t-label text-gold">{row.label}</p>
                <p className="t-caption text-muted-dark">{row.meta}</p>
              </div>
              <p className={`${row.className} identity__type-sample`}>{row.sample}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
