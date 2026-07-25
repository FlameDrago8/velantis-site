import About from "@/components/About";
import Contact from "@/components/Contact";
import DriveSection from "@/components/DriveSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import TripRail from "@/components/TripRail";
import WhatsNext from "@/components/WhatsNext";

export default function Home() {
  return (
    <>
      <Nav />
      <TripRail />
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
