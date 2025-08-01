import { ComponentType } from "react";

interface MenuItemProps {
  icon?: ComponentType<{ className?: string }>;
  imageSrc?: string;
  title: string;
  description: string;
  price: string;
  unit?: string;
}

export default function MenuItem({
  icon: Icon,
  imageSrc,
  title,
  description,
  price,
  unit,
}: MenuItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between py-4 sm:px-2 px-0 transition-all duration-300 group border-b border-gray-100 last:border-b-0">
      {/* Left side - stacked content */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
        {/* Image/Icon */}
        <div
          className={`flex items-start justify-center flex-shrink-0 shadow-md ${
            imageSrc
              ? "w-24 h-24 rounded-md overflow-hidden"
              : "h-18 w-18 bg-gray-100 rounded-full"
          }`}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover "
            />
          ) : Icon ? (
            <Icon className="h-6 w-6 text-[var(--section-dark)]" />
          ) : (
            <div className="h-6 w-6 bg-gray-300" />
          )}
        </div>

        {/* Text content - stacked below image on all screens */}
        <div className="flex-1 h-full">
          <h3 className="text-xl font-light text-[var(--section-dark)] mb-2 tracking-wide group-hover:text-[var(--highlight)] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Right side - price aligned with image */}
      <div className="mt-4 md:mt-0 md:ml-6 flex-auto  flex flex-col justify-start items-start md:items-end  w-full">
        <span
          className="text-2xl font-light text-[var(--section-dark)] tracking-wide"
          style={{ color: "var(--highlight)" }}
        >
          {price}
        </span>
        <p className="dancing text-md text-[var(--section-dark)] tracking-widest">
          {unit}
        </p>
      </div>
    </div>
  );
}
