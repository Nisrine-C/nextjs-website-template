import { Instagram } from "lucide-react";

export default function InstagramImbed() {
  return (
    <div className="container px-6 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
          Behind the Scenes
        </h2>
        <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Follow our journey and get inspired by our latest work and insights
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="aspect-square bg-gray-100 flex items-center justify-center border">
          <div className="text-center space-y-6">
            <Instagram className="h-16 w-16 text-gray-400 mx-auto" />
            <div>
              <p className="text-2xl font-light text-gray-900 mb-2 tracking-wide">
                @acmecorp
              </p>
              <p className="text-gray-600 mb-8">
                Follow us for daily inspiration
              </p>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 tracking-widest uppercase font-light bg-transparent">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
