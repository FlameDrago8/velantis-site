import About from "@/components/About";
import Contact from "@/components/Contact";
import DriveSection from "@/components/DriveSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import WhatsNext from "@/components/WhatsNext";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DriveSection />
        <WhatsNext />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
