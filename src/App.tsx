import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Payments } from "./components/Payments";
import { Gallery } from "./components/Gallery";
import { Identity } from "./components/Identity";
import { Order } from "./components/Order";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Payments />
        <Gallery />
        <Identity />
        <Order />
      </main>
      <Footer />
    </>
  );
}
