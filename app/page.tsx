import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <CTA />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}