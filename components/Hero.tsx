export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-wide">
          Welcome to Excellence
        </h1>
        <button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg tracking-widest uppercase font-medium">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
