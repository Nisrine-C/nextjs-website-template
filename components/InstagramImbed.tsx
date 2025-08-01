import { Instagram } from "lucide-react";

export default function InstagramImbed() {
  return (
    <div className="container px-6 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="dancing text-4xl md:text-6xl font-light text-stone-900 mb-6 tracking-wide">
          Whiskers & Wonders
        </h2>
        <div className="w-24 h-px bg-stone-900 mx-auto mb-8"></div>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          A peek into the cozy corners of Cat’s Paw Café — where purrs meet
          pastries.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="aspect-square bg-[var(--section-light)] flex items-center justify-center border border-1 border-[var(--section-dark)]">
          <div className="text-center space-y-6">
            <Instagram className="h-16 w-16 text-stone-400 mx-auto" />
            <div>
              <p className="text-2xl font-light text-stone-900 mb-2 tracking-wide">
                @cats.paw.cafe
              </p>
              <p className="text-stone-600 mb-8">
                Follow us for daily doses of fluff and froth
              </p>
              <button className="rounded-md border-2 border-black text-stone-900 hover:bg-[var(--section-mid)]  px-8 py-3 tracking-widest uppercase font-light bg-transparent">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
