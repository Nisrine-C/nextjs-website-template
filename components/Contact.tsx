import { MapPin, Phone, Mail } from "lucide-react";
import ClientOnlyMap from "./ClientOnlyMap";
import "@/styles/shadow-effect.css";
import { TbBackground } from "react-icons/tb";
import FadeInOnScroll from "./ui/FadeInOnScroll";

export default function Contact() {
  return (
    <div className="container  sm:px-6 md:px-8 max-w-6xl sm:mx-auto mx-0 px-0 sm:pb-8">
      <FadeInOnScroll delay={0.3}>
        <div className="text-center mb-10">
          <h2 className="dancing text-4xl md:text-6xl font-light text-stone-900 mb-6 tracking-wide">
            Find Us Here
          </h2>
          <div
            className="w-24 h-[1.5px] mx-auto mb-8"
            style={{
              background: "var(--highlight)",
            }}
          ></div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Come and enjoy a delightful dining experience
          </p>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <div className="md:shadow-md md:grid md:grid-cols-2 grid md:bg-[var(--section-light)] ">
          <div className="flex flex-col space-y-12 bg p-4 justify-center md:mb-0 mb-4">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <MapPin className="h-6 w-6 text-stone-700 mt-2" />
                <div>
                  <h3 className="text-xl font-light text-stone-900 mb-px tracking-wide">
                    Address
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    123 Business Street, Suite 100 New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start  space-x-6">
                <Phone className="h-6 w-6 text-stone-700 mt-2" />
                <div>
                  <h3 className="text-xl font-light text-stone-900 mb-px tracking-wide">
                    Phone
                  </h3>
                  <p className="text-stone-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <Mail className="h-6 w-6 text-stone-700 mt-2" />
                <div>
                  <h3 className="text-xl font-light text-stone-900 mb-px tracking-wide">
                    Email
                  </h3>
                  <p className="text-stone-600">hello@acmecorp.com</p>
                </div>
              </div>
            </div>
          </div>
          <ClientOnlyMap />
        </div>
      </FadeInOnScroll>
    </div>
  );
}
