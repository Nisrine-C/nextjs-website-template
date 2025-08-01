import ServiceCardsWithImages from "./ui/ServiceCardsWithImages";
import ServiceCards from "./ui/ServiceCards";

import { FiUsers, FiCode, FiLayers } from "react-icons/fi";
import { GoZap } from "react-icons/go";
import { IoShieldOutline } from "react-icons/io5";

const servicesImages = [
  {
    imageSrc: "/feature1.jpg",
    title: "Locally Roasted Coffee",
    description:
      "We serve rich, aromatic coffee brewed from beans sourced from nearby artisan roasters. Fresh, flavorful, and purr-fectly satisfying.",
    highlight: "Brewed with Love",
  },
  {
    imageSrc: "/feature2.jpg",
    title: "Whisker-Worthy Treats",
    description:
      "From flaky pastries to savory bites, our menu is handcrafted with care to delight every foodie and feline enthusiast alike.",
    highlight: "Handmade Daily",
  },
  {
    imageSrc: "/feature3.jpg",
    title: "A Cozy Catmosphere",
    description:
      "Sip, snack, and snuggle in our inviting lounge where friendly cats roam free and every corner is designed for comfort and charm.",
    highlight: "Cuddles Included",
  },
];

export default function ServicesWithImages() {
  return (
    <div className="container mt-12 sm:px-6 px-0 md:px-8 sm:mx-auto max-w-6xl mx-0">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide dancing">
          Why You&apos;ll Love It Here
        </h2>
        <div className="w-24 h-px bg-black mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed ">
          More than just coffee. Cat’s Paw is a sanctuary where comfort food,
          cozy vibes, and curious cats come together.
        </p>
      </div>

      <ServiceCardsWithImages services={servicesImages} />
      <div className="py-6"></div>
    </div>
  );
}
