import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-12 w-12 border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Crafting exceptional business solutions with precision,
              innovation, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Digital Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Innovation Labs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide">Connect</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Dribbble
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-12 text-center">
          <p className="text-gray-400 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
      <Link
        href="https://wa.me/15551234567?text=Hello%2C%20I%27d%20like%20to%20discuss%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Link>
    </footer>
  );
}
