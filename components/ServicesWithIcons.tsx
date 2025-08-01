import ServiceCards from "./ui/ServiceCards";

//import { FaUtensils, FaSmile, FaChair } from "react-icons/fa"; // Font Awesome
// OR alternative sets:
import { GiWoodenChair } from "react-icons/gi"; // Game Icons
import { MdEmojiPeople } from "react-icons/md";
import { TbChefHat } from "react-icons/tb";
import {
  FaMugHot,
  FaPaw,
  FaBed,
  FaFish,
  FaFeatherAlt,
  FaLeaf,
} from "react-icons/fa";

const services = [
  {
    icon: FaMugHot,
    title: "Catpuccino Bar",
    description:
      "Purr-fectly brewed beverages for hoomans and their feline companions.",
    features: [
      "Whisker-warming lattes",
      "Catnip-infused herbal teas",
      "Lapside service included",
    ],
  },
  {
    icon: FaPaw,
    title: "Pawdicure Lounge",
    description: "Grooming done with gentle paws and calming purrs.",
    features: [
      "Soft paw buff & trim",
      "Ear scratch spa add-on",
      "Purr therapy included",
    ],
  },
  {
    icon: FaBed,
    title: "Nap Nooks",
    description: "Luxurious snuggle spots for midday catnaps.",
    features: ["Heated window beds", "Cuddle cubbies", "Hammocks with views"],
  },
  {
    icon: FaFish,
    title: "Tuna Treats",
    description: "Scrumptious snacks to please the pickiest purr-buddies.",
    features: [
      "Grilled salmon bites",
      "Tuna tartare cones",
      "Creamy whipped anchovies",
    ],
  },
  {
    icon: FaFeatherAlt,
    title: "Play Arena",
    description: "Whisker-tingling fun in a safe, enriched space.",
    features: [
      "Feather chase circuit",
      "Laser pointer theater",
      "Ball pit with treats",
    ],
  },
];
export default function ServicesWithIcons() {
  return (
    <div className="container z-1 mt-12 sm:px-6 px-0 md:px-8 sm:mx-auto max-w-6xl mx-0">
      <div className="text-center mb-20">
        <h2 className="dancing text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
          Paws & Perks
        </h2>
        <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From cozy cuddle corners to freshly brewed catpuccinos, we offer
          purr-fect moments for humans and their feline friends alike.
        </p>
      </div>
      <ServiceCards services={services} />
    </div>
  );
}
