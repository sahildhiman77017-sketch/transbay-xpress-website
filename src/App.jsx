import About from "./components/About";
import Authority from "./components/Authority";
import Cargo from "./components/Cargo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Authority />
        <Cargo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
