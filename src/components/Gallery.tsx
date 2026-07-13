import { motion } from "framer-motion";
import { gallery } from "../data/brand";
import "./Gallery.css";

export function Gallery() {
  return (
    <section id="galeria" className="section block-night gallery">
      <div className="container">
        <div className="section-head">
          <span className="t-label text-gold">Galeria</span>
          <h2 className="t-h2">O luar, a mesa, o prato</h2>
          <p className="t-lead text-muted-dark">
            Atmosfera do salão e detalhes da cozinha — imagens reais do ritmo Íris Lua.
          </p>
        </div>

        <div className="gallery__mosaic">
          {gallery.map((shot, i) => (
            <motion.figure
              key={shot.src}
              className={`gallery__shot gallery__shot--${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
