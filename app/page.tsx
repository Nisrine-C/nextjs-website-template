import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ServicesWithImages from "@/components/ServicesWithImages";
import ServicesWithIcons from "@/components/ServicesWithIcons";
import InstagramImbed from "@/components/InstagramImbed";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <section
          className="w-full bg-[var(--section-mid)] flex justify-center items-center pb-24  "
          id="services"
        >
          <ServicesWithImages />
        </section>
        <section
          className="w-full bg-[var(--section-light)] flex justify-center items-center pt-8 pb-24 "
          id="menu"
        >
          <Menu />
        </section>
        <section
          className="relative w-full bg-[var(--section-mid)] flex justify-center items-center pb-24  "
          id="services"
        >
          <div className="bg-pawprints absolute inset-0 z-0 pointer-events-none md:visible collapse" />
          <ServicesWithIcons />
        </section>
        <section
          className="w-full flex bg-[var(--section-light)] justify-center items-center pb-24 pt-20"
          id="instagram-imbed"
        >
          <InstagramImbed />
        </section>
        <section
          className="w-full flex bg-[var(--section-mid)] justify-center items-center md:pb-24 pb-0 pt-20 "
          id="contact"
        >
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
