import Image from "next/image";
export default function ServiceCardWithImage({
  imageSrc,
  title,
  description,
  orientation,
  direction,
  highlight,
}: {
  imageSrc: string;
  title: string;
  description: string;
  orientation: string;
  direction: number;
  highlight?: string;
}) {
  const isHorizontal = orientation === "horizontal";

  const ImageBox = (
    <div
      className={`relative overflow-hidden bg-gray-100 md:visible collapse ${
        isHorizontal
          ? "md:w-1/2 md:aspect-square "
          : "md:h-1/2 md:aspect-square"
      }`}
    >
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      tsx
      <div
        className={`absolute w-0 h-0 border-transparent ${
          isHorizontal
            ? direction === 0
              ? "right-0 top-12 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-white" // Right-pointing (wide but short)
              : "left-0 bottom-12 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-l-white" // Left-pointing (wide but short)
            : direction === 0
            ? "left-1/2 -translate-x-1/2 bottom-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-white" // Down-pointing (wide but short)
            : "left-1/2 -translate-x-1/2 top-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white" // Up-pointing (wide but short)
        }`}
      ></div>
    </div>
  );

  const TextBox = (
    <div
      className={`flex flex-col justify-center items-center text-center p-6 ${
        isHorizontal
          ? "md:w-1/2  md:aspect-square md:h-full h-fit "
          : "md:aspect-square md:h-1/2 h-fit"
      }`}
      style={{ color: "var(--highlight)" }}
    >
      {highlight && <h2 className="text-xl font-semibold mb-2">{highlight}</h2>}
      <h3 className="text-2xl font-light text-gray-900 tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div
      className={`flex flex-around group bg-white h-full ${
        isHorizontal ? "md:flex-row flex-col" : "flex-col"
      }`}
    >
      {direction === 0 ? (
        <>
          {ImageBox}
          {TextBox}
        </>
      ) : (
        <>
          {TextBox}
          {ImageBox}
        </>
      )}
    </div>
  );
}
