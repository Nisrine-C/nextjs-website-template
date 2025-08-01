// components/ui/ServiceCardWithIcon.tsx
import { IconType } from "react-icons";

interface ServiceCard {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
}: ServiceCard) {
  return (
    <div className="text-center px-3 group">
      <div className="mb-8">
        <div className="h-20 w-20 mx-auto mb-6 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
          <Icon className="h-8 w-8 text-gray-700" />
        </div>
        <h3
          className="text-2xl font-light text-gray-900 mb-4 tracking-wide"
          style={{ color: "var(--highlight)" }}
        >
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <ul className="text-sm text-gray-500 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
