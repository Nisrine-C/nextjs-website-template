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
    <div className="text-center group">
      <div className="mb-8">
        <div className="h-20 w-20 bg-[var(--section-mid)] rounded-sm mx-auto mb-6 border border-stone-400 flex items-center justify-center group-hover:border-stone-900 transition-colors duration-300">
          <Icon className="h-8 w-8  text-stone-600" />
        </div>
        <h3
          className="dancing font-semibold text-3xl font-light text-[var(--higlight)] mb-4 tracking-wide"
          style={{ color: "var(--highlight)" }}
        >
          {title}
        </h3>
        <p className="text-stone-600 leading-relaxed mb-6">{description}</p>
        <ul className="text-sm text-stone-500 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
