"use client";
import { Users, Zap, Shield, MessageCircle, Calendar } from "lucide-react";
import MenuItem from "@/components/ui/MenuItem";

const menuItems = [
  {
    icon: Users,
    title: "Strategic Consulting",
    description:
      "Comprehensive business analysis with strategic recommendations",
    price: "$299",
    unit: "per session",
  },
  {
    imageSrc: "https://picsum.photos/600",
    title: "Digital Transformation",
    description:
      "Complete digital strategy with technology roadmap. What if I wrote a lot of words here. lots and lots and lots and lots.Complete digital strategy with technology roadmap. What if I wrote a lot of words here. lots and lots and lots and lots.",
    price: "$199",
    unit: "per project",
  },
  {
    icon: Shield,
    title: "Innovation Labs",
    description: "Explore emerging technologies and innovative solutions",
    price: "$149",
    unit: "per workshop",
  },
  {
    imageSrc: "https://picsum.photos/601",
    title: "Team Development",
    description: "Build high-performing teams through training programs",
    price: "$179",
    unit: "per program",
  },
];

export default function Menu() {
  return (
    <div className="container px-6 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
          Menu
        </h2>
        <div className="w-24 h-px bg-gray-900 mx-auto "></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Menu Items with respective prices.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-0">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
