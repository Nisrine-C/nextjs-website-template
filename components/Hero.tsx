import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-stone-700 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="dancing text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-wide">
          Cozy Coffee. Curious Cats.
        </h1>
        <div className="group">
          <p className="text-lg md:text-xl mb-10 ">
            Welcome to{" "}
            <span className="font-bold group-hover:text-[var(--highlight)] transition-colors duration-300">
              Cat’s Paw
            </span>
            , a warm little corner where coffee lovers and feline friends meet.
          </p>
        </div>
        <Link href="#menu">
          <button className="border-2 rounded-sm border-white text-white bg-transparent hover:bg-[var(--highlight)] transition-all duration-300 px-8 py-4 text-lg tracking-widest uppercase font-medium">
            View Our Menu
          </button>
        </Link>
      </div>
    </section>
  );
}
