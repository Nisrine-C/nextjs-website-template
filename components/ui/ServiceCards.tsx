import ServiceCard from "./ServiceCard";
import FadeInOnScroll from "./FadeInOnScroll";

import { IconType } from "react-icons";

interface IconService {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCardsWithIconsProps {
  services: IconService[];
}

export default function ServiceCards({ services }: ServiceCardsWithIconsProps) {
  // Group services into rows of 3
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <div className="space-y-16">
      {rows.map((row, rowIndex) => {
        // Determine column layout based on number of items in row
        const colClass =
          row.length === 3
            ? "md:grid-cols-3"
            : row.length === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-1";

        return (
          <div
            key={`row-${rowIndex}`}
            className={`grid grid-cols-1 gap-16 ${colClass}`}
          >
            {row.map((service, index) => (
              <FadeInOnScroll key={`service-${rowIndex}-${index}`} delay={0.2}>
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </FadeInOnScroll>
            ))}
          </div>
        );
      })}
    </div>
  );
}
