import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import InstagramImbed from "@/components/InstagramImbed";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <section
          className="w-full bg-gray-100 flex justify-center items-center pb-24 mb-10 "
          id="services"
        >
          <Services />
        </section>
        <section
          className="w-full flex justify-center items-center pb-24 mb-10 "
          id="menu"
        >
          <Menu />
        </section>
        <section
          className="w-full flex bg-gray-100 justify-center items-center md:pb-24 pb-0 pt-20 "
          id="contact"
        >
          <Contact />
        </section>
        <section
          className="w-full flex justify-center items-center pb-24 pt-20"
          id="instagram-imbed"
        >
          <InstagramImbed />
        </section>
        <Footer />
      </main>
    </div>
  );
}
