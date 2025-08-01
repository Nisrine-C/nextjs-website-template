"use client";

import MenuItem from "@/components/ui/MenuItem";
import FadeInOnScroll from "./ui/FadeInOnScroll";

const menuItems = [
  {
    imageSrc: "/menu/croissant.jpg",
    title: "Butter Croissant",
    description: "Flaky, golden croissant baked fresh every morning.",
    price: "$4",
    unit: "per croissant",
  },
  {
    imageSrc: "/menu/blueberry-muffin.jpg",
    title: "Blueberry Muffin",
    description: "Soft and fluffy muffin bursting with sweet blueberries.",
    price: "$4.50",
    unit: "per muffin",
  },
  {
    imageSrc: "/menu/espresso.jpg",
    title: "Cappuccino",
    description: "Rich espresso topped with velvety steamed milk and foam.",
    price: "$5",
    unit: "per cup",
  },
  {
    imageSrc: "/menu/cookie.jpg",
    title: "Cat Paw Shortbread",
    description: "Buttery paw-shaped cookies, sweet and irresistible.",
    price: "$3.50",
    unit: "per paw",
  },
  {
    imageSrc: "/menu/chocolate-cake.jpg",
    title: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
    price: "$6.50",
    unit: "per cake",
  },
  {
    imageSrc: "/menu/catpuccino.jpg",
    title: "The Catpuccino",
    description: "Our signature cappuccino with a chocolate cat on top.",
    price: "$5.75",
    unit: "per delight",
  },
];

export default function Menu() {
  return (
    <div className="container px-6 md:px-8 max-w-4xl mx-auto">
      <FadeInOnScroll delay={0.2}>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide dancing">
            What’s on the Meow-nu?
          </h2>
          <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From comforting soups to sweet treats and cozy drinks, every dish is
            made to warm your heart, and maybe attract a whiskered friend or
            two.
          </p>
        </div>
      </FadeInOnScroll>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col divide-y divide-[var(--highlight)] divide-rounded-xs">
          {menuItems.map((item, index) => (
            <div key={index} className="py-6">
              <FadeInOnScroll delay={index * 0.1}>
                <MenuItem {...item} />
              </FadeInOnScroll>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
