import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import CardSection from "./components/CardSection";

export default function Home() {
  const src =
    "https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png";

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <CardSection />
      <Modal />
      <Footer />
    </main>
  );
}
