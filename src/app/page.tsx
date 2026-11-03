import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Doctrine from "@/components/Doctrine";
import DriveSection from "@/components/drive/DriveSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Doctrine />
        <DriveSection />
        <Programs />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
