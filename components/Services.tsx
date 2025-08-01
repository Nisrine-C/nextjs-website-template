import ServiceCardsWithImages from "./ui/ServiceCardsWithImages";
import ServiceCards from "./ui/ServiceCards";

import { FiUsers, FiCode, FiLayers } from "react-icons/fi";
import { GoZap } from "react-icons/go";
import { IoShieldOutline } from "react-icons/io5";

const servicesImages = [
  {
    imageSrc: "https://picsum.photos/401",
    title: "Strategic Consulting",
    description: "Transform your business with data-driven strategies.",
    highlight: "Expertise",
  },
  {
    imageSrc: "https://picsum.photos/403",
    title: "Innovation Labs",
    description: "Explore emerging technologies and R&D.",
    highlight: "Innovation",
  },
  {
    imageSrc: "https://picsum.photos/402",
    title: "Digital Transformation",
    description: "Modernize operations with cutting-edge tech.",
    highlight: "Digital",
  },
];
const services = [
  {
    icon: GoZap,
    title: "Innovation Labs",
    description: "Explore emerging technologies and innovative solutions.",
    features: ["Prototype Development", "Technology Research"],
  },
  {
    icon: FiUsers,
    title: "Team Development",
    description: "Build high-performing teams through comprehensive training.",
    features: ["Leadership Training", "Skill Development"],
  },
  {
    icon: IoShieldOutline,
    title: "Risk Management",
    description: "Protect your business with comprehensive risk assessment.",
    features: ["Security Audits", "Compliance Management"],
  },
];

export default function Services() {
  return (
    <div className="container mt-12 sm:px-6 px-0 md:px-8 sm:mx-auto max-w-6xl mx-0">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-wide">
          Our Expertise
        </h2>
        <div className="w-24 h-px bg-gray-900 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional solutions with precision and care
        </p>
      </div>

      {/*
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
        <div className="md:col-start-1 md:col-span-2 grid col-span-1 grid-rows-2 gap-4 md:gap-0">
          <div className=" h-[250px] md:h-full ">
            <ServiceCard
              imageSrc="https://picsum.photos/401"
              highlight="example"
              title="Strategic Consulting"
              description="Transform your business with data-driven strategies."
              orientation="horizontal"
              direction={0}
            />
          </div>
          <div className=" h-[250px] md:h-full">
            <ServiceCard
              imageSrc="https://picsum.photos/403"
              highlight="example"
              title="Innovation Labs"
              description="Explore emerging technologies and R&D."
              orientation="horizontal"
              direction={1}
            />
          </div>
        </div>
        <div className="md:col-start-3 h-full md:row-start-1 md:row-span-2  ">
          <div className="h-[250px] md:h-full">
            <ServiceCard
              imageSrc="https://picsum.photos/402"
              highlight="example"
              title="Digital Transformation"
              description="Modernize operations with cutting-edge tech."
              orientation="vertical"
              direction={0}
            />
          </div>
        </div>
      </div>*/}
      <ServiceCardsWithImages services={servicesImages} />
      <div className="py-6"></div>
      <ServiceCards services={services} />
    </div>
  );
}
